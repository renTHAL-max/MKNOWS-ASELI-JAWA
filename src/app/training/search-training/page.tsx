import AdvancedSearchMateri from "@/Components/UI/AdvancedSearchMateri";
import { getStaticDataMateri } from "@/Props/searchMateri";
import { redirect } from "next/navigation";

const Page = async () => {
  // Redirect to all-programs page
  redirect("/training/all-programs");
  
  const staticDataMateri = await getStaticDataMateri();
  return (
    <AdvancedSearchMateri
      staticDataMateri={staticDataMateri}
    ></AdvancedSearchMateri>
  );
};

export default Page;
