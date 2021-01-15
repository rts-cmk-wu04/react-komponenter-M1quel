import './App.css';
import Travel from './components/Travel/Travel';
import Experience from './components/experience/Experience';
import Collections from './components/collections/Collections';
import Categorys from './components/categorys/Categorys';
import LatestNews from './components/latestNews/LatestNews';

function App() {
  return (
    <Travel/>
    <LatestNews/>
    <Experience/>
    <Collections/>
    <Categorys/>
  );
}

export default App;
