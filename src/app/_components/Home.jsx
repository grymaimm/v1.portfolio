import { GITHUB_ACCOUNTS } from "@/commons/constants/Github";
import CodingStatsSection from "@/components/partials/coding-stats/CodingStatsSection";
import ContributionsSection from "@/components/partials/contributions/ContributionsSection";
import SectionAbout from "./sections/SectionAbout";
import SectionEducation from "./sections/SectionEducation";
import SectionIntroduction from "./sections/SectionIntroduction";
import SectionProject from "./sections/SectionProject";
import SectionSkills from "./sections/SectionSkills";

export default function HomeComponents() {
  return (
    <>
      <SectionIntroduction />
      <SectionAbout />
      <SectionProject />
      <SectionSkills />
      <SectionEducation />
      {GITHUB_ACCOUNTS?.filter((account) => account.is_active).map(
        (account, index) => (
          <ContributionsSection
            key={index}
            username={account.username}
            type={account.type}
            endpoint={account.endpoint}
          />
        ),
      )}
      <CodingStatsSection />
      {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <PlayingSection />
        <WeatherSection />
      </div> */}
    </>
  );
}
