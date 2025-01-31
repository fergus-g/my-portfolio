import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
      </main>
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
