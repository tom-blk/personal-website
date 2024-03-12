import Footer from "./components/footer/Footer.Component";
import ProfileCard from "./components/cards/profile-card/ProfileCard.Component";
import ProjectList from "./components/lists/project-list/ProjectList.Component";
import TechnologiesList from "./components/lists/technologies-list/TechnologiesList.Component";

export default function Home() {
  return (
    <div className={"my-10 grid gap-8 justify-items-center w-full"}>
      <ProfileCard/>
      <TechnologiesList/>
      <ProjectList/>
      <Footer/>
    </div>
  );
}
