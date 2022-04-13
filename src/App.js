import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Experience />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </>
  );
}

export default App;
