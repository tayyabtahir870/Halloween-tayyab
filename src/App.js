import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Valentine from './Components/Elements/Valentine';
import Header from './Components/Layouts/Header';
import Tokenomics from './Components/Elements/Tokenomics';
import Documents from './Components/Elements/Documents';
import Faq from './Components/Utils/Faq';
import Footer from './Components/Layouts/Footer';

function App() {
  return (
    <div >
      <Header/>
      <Valentine/>
      <Tokenomics/>
      <Documents/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
