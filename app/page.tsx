import Footer from "./components/footer/Footer.Component";
import ProfileCard from "./components/profile-card/ProfileCard.Component";
import ProjectList from "./components/project-list/ProjectList.Component";
import TechnologiesList from "./components/technologies-list/TechnologiesList.Component";

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
