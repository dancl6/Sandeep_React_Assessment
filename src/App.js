import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import TabPanel from './components/TabPanel'
import Tab2 from './components/Tab2'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <TabPanel></TabPanel>
      {/* <Tab2></Tab2> */}
      <input className='search-width' placeholder="🔎Search for a word"></input>


      
    </div>
  );
}

export default App;
