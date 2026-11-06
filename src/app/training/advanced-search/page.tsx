import AdvancedSearchMateri from "@/Components/UI/AdvancedSearchMateri";
import { getAdvancedSearchData } from "@/Props/advancedSearchMateri";

const Page = async () => {
  const staticDataMateri = await getAdvancedSearchData();
  return (
    <AdvancedSearchMateri
      staticDataMateri={staticDataMateri}
    ></AdvancedSearchMateri>
  );
};

export default Page;
