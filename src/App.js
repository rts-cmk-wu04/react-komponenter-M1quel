import './App.css';
import Utilities from './components/utility/Utilities/Utilities';
import Travel from './components/Travel/Travel';
import Experience from './components/experience/Experience';
import Collections from './components/collections/Collections';
import Categorys from './components/categorys/Categorys';
import LatestNews from './components/latestNews/LatestNews';

function App() {
  return (

    <section className="mainContainer">
      <Travel/>
      <Experience/>
      <Utilities/>
      <Collections/>
      <Categorys/>
      <LatestNews/>
    </section>
  );
}

export default App;
