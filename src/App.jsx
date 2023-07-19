import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projet from "./components/Projets/Projet";
import Resume from "./components/Resume/Resume";
import Services from "./components/Services/Services";
import Techno from "./components/Techno/Techno";

function App() {
 
  return (
    <div className="container">
        <Header/>
        <Banner/>
        <hr className="border-bottom"/>
        <Services/>
        <Techno/>
        <Projet/>
        <hr className="border-bottom"/>
        <Resume/>
        <hr className="border-bottom"/>
        <Footer/>
    </div>
  )
}

export default App
