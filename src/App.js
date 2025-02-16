
import './App.css';
import About from './Component/About';
import Skills from './Component/Skills';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Nav from './Component/Nav';
import PortFolio from './Component/Portfolio';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
       <Home/>
       <About/>
       <PortFolio/>
       <Skills/>
       <Contact/>
       <Footer/>
         </div>
  );
}

export default App;
