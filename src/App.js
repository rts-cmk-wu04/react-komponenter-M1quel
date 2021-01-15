import './App.css';
import Utilities from './components/utility/Utilities/Utilities';
import Travel from './components/Travel/Travel';
import Experience from './components/experience/Experience';
import Collections from './components/collections/Collections';
import Categorys from './components/categorys/Categorys';
import LatestNews from './components/latestNews/LatestNews';

function App() {
  return (
    <Utilities/>
    <Travel/>
    <LatestNews/>
    <Experience/>
    <Collections/>
    <Categorys/>
  );
}

export default App;
