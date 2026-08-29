export async function loadAnnonces() {
  const database = supabase.createClient(
  "https://ngbsaqvegvwgqiyslaiz.supabase.co",
  "sb_publishable_rgqf_21dm23108ZfCPMctA_cGqn2JXX"
  );
  const { data, error } = await database
    .from("annonces")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Supabase error:", error);
    return [];
  }
  const annonces = data.map(row => ({
    id: String(row.id),
    mainText: row.main_text,
    image: row.image,
    subText: row.sub_text,
    pressReport: row.press_report
  }));
  return annonces;
}
export async function startWebsite() {
  const annonces = await loadAnnonces();
  console.log(annonces);
}