import './App.css';
import Nav from './components/Nav'
import TabPanel from './components/TabPanel'
import Footer from './components/Footer'
// Import Navbars, Forms and Footer 
function App() {
  return (
    <div className="App" key='app-div'>
      <Nav></Nav>
      <TabPanel></TabPanel>
      <Footer></Footer>
    </div>
  );
}

export default App;
