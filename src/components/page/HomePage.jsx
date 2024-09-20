import { mockdata } from "@/mock/mockdata";

import { Header } from "../Header";
import { SectionLeft } from "../SectionLeft";

const HomePage = () => {
  return (
    <div className="flex justify-center">
      <Header />
      <div>
        <SectionLeft />
      </div>
    </div>
  );
};
export default HomePage;
