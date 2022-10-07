import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Valentine from "./Components/Elements/Valentine";
import Header from "./Components/Layouts/Header";
import Tokenomics from "./Components/Elements/Tokenomics";
import Documents from "./Components/Elements/Documents";
import Faq from "./Components/Utils/Faq";
import Footer from "./Components/Layouts/Footer";
import Roadmap from "./Components/Elements/Roadmap";
import Heropage from "./Components/Elements/Heropage";

function App() {
  return (
    <div>
      <Header />
      <Heropage/>
      <Valentine />
      <Tokenomics />
      <Roadmap />
      <Documents />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
