export function mapType(x) {
  function U(f) {
    return f[0].toUpperCase()+f.slice(1,f.length)
  }
  switch (x) {
    case 'upcoming':
      return U('à venir')
    case 'passed':
      return U('actualités passées')
    case 'competiton':
      return U('compétition')
    case 'stage':
      return U('bfddhytr')
    case 'release':
      return U('nouveau defi')
    case 'test' :
      return U('test de sélection')
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
    type: (row.type)
  }));
  return annonces;
}
export async function startWebsite() {
  const annonces = await loadAnnonces();
  console.log(annonces);
}