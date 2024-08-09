import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/services/Services';
// import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
