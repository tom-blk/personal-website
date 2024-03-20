import Footer from "./components/footer/Footer.Component";
import ProfileCard from "./components/cards/profile-card/ProfileCard.Component";
import ProjectList from "./components/lists/project-list/ProjectList.Component";
import TechnologiesList from "./components/lists/technologies-list/TechnologiesList.Component";
import PositionsList from "./components/lists/positions-list/PositionsList.Component";
import ArticlesList from "./components/lists/articles-list/ArticlesList.Component";

export default function Home() {
  return (
    <div className={"p-10 grid gap-8 justify-items-center w-full"}>
      <ProfileCard/>
      <TechnologiesList/>
      <ProjectList/>
      <PositionsList/>
      <ArticlesList />
      <Footer/>
    </div>
  );
}
