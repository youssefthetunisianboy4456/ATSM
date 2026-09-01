function U(x) {
  return x[0].toUpperCase()+x.slice(1,x.length)
}
function mapType(x) {
  switch (x) {
    case 'upcoming':
      return 'à venir'
    case 'passed':
      return 'actualités passées'
    case 'competiton':
      return 'compétition'
    case 'stage':
      return ''
    case 'release':
      return 'nouveau defi'
    case 'test' :
      return 'test de sélection'
  }
}
export async function loadAnnonces() {
  const database = supabase.createClient(
  "https://ngbsaqvegvwgqiyslaiz.supabase.co",
  "sb_publishable_rgqf_21dm23108ZfCPMctA_cGqn2JXX"
  );
  
  const { data, error } = await database
    .from("annonces")
    .select("*")
    .order("real_date", { ascending: false });
  if (error) {
    console.error("Supabase error:", error);
    return [];
  }
  const annonces = data.map(row => ({
    id: String(row.id),
    mainText: row.main_text,
    image: row.image,
    subText: row.sub_text,
    pressReport: row.press_report,
    date: row.real_date,
    type: U(mapType(row.type))
  }));
  return annonces;
}
export async function startWebsite() {
  const annonces = await loadAnnonces();
  console.log(annonces);
}