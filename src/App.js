import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import TabPanel from './components/TabPanel'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <TabPanel></TabPanel>
      <input className='search-width' placeholder="🔎Search for a word"></input>


      
    </div>
  );
}

export default App;
