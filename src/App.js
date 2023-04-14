
import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Banner />
      <About />
      <Services />
    </div>
  );
}

export default App;
