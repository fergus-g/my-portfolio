import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import About from "./components/About/About.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import BurgerMenu from "./components/Helpers/BurgerMenu.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <BurgerMenu />
      <main className="flex-grow">
        <Hero />
      </main>
      <About />
      <TechStack />
      <Carousel />
    </div>
  );
};

export default App;
