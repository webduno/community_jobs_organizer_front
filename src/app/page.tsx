// Components
import Nav from "@/components/organisms/Nav";
import BoardSummary from "@/components/pages/Home/BoardSummary";
import HomeContainer from "@/components/pages/Home/HomeContainer";
import HomeHeroSection from "@/components/pages/Home/HomeHeroSection";

const Home = () => {
  return (
    <HomeContainer>
      <Nav />
      <HomeHeroSection />
      <BoardSummary />
    </HomeContainer>
  );
}

export default Home;