import "./App.css";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
