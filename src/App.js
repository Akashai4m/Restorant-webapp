import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Today from './Components/Today';
import Chef from './Components/Chef';
import Find from './Components/Find';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';
import Laurels from './Components/Laurels';
import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
     <br/><br/> <Navbar/><br/><br/>
      <Header/><br/><br/>
      <About/><br/><br/>
      <Today/><br/>
      <Chef/><br/>
      <Laurels/><br/>
      <Gallery/><br/>
      <Find/><br/>
      <NewsLetter/><br/>
      <Footer/><br/>
      {/* <Laurels/><br/> */}
      {/* <Gallery/> */}
    </div>
  );
}

export default App;
