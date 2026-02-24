import AnalyticsSection from "../Components/AnalyticsSection"
import HeroSection from '../Components/HeroSection';
import TopProjectsPage from "./Projects/TopProjectsPage";


function MainContent() {
;

  return (
    <>
      
      <HeroSection/>
      <TopProjectsPage top={6} />
      <AnalyticsSection/>
    </>
  );
}

export default MainContent;
