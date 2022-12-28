import NavBar from './components/NavBar'
import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favorite from './components/Favorite';

function App() {
  return (
    <>
      <NavBar />
      {/* <Banner />
      <Movies /> */}
      <Favorite />
    </>
  );
}

export default App;
