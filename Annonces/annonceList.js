export function mapType(x) {
  switch (x) {
    case 'upcoming':
      return 'À venir'
    case 'passed':
      return 'Événement passé'
    case 'competiton':
      return 'Compétition'
    case 'stage':
      return 'Stage de préparation'
    case 'release':
      return 'Nouveau defi'
    case 'test' :
      return 'Test de sélection'
  }
}
/*export async function loadAnnonces() {
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
  }*/
  export async function loadAnnonces() {
  const res = await fetch('https://atsm-backend.onrender.com/api/annonces');
  const annonces = await res.json();
  /*if (error) {console.log(error)}*/
  /*const annonces = data.map(row => ({
    id: String(row.id),
    mainText: row.main_text,
    image: row.image,
    subText: row.sub_text,
    pressReport: row.press_report,
    date: row.real_date,
    type: (row.type)
  }));*/
  return annonces;
}
export async function startWebsite() {
  const annonces = await loadAnnonces();
  console.log(annonces);
}