import Footer from "./components/footer/Footer.Component";
import ProfileCard from "./components/cards/profile-card/ProfileCard.Component";
import ProjectList from "./components/lists/project-list/ProjectList.Component";
import TechnologiesList from "./components/lists/technologies-list/TechnologiesList.Component";
import PositionsList from "./components/lists/positions-list/PositionsList.Component";
import ArticlesList from "./components/lists/articles-list/ArticlesList.Component";
import UnderConstructionBanner from "./components/under-construction-banner/UnderConstructionBanner.Component";

export default function Home() {
  return (
    <div className={"w-full py-8 grid gap-8 justify-items-center"}>
      <UnderConstructionBanner/>
      <ProfileCard/>
      <TechnologiesList/>
      <ProjectList/>
      <PositionsList/>
      {/*<ArticlesList />*/}
      <Footer/>
    </div>
  );
}
