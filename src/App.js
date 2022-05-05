import './App.css';
import Carousel from './components/Carousel/Carousel';
import ExpandableList from './components/ExpandableList/ExpandableList'
import NavbarContainer from './components/Nav/NavbarContainer';

function App() {
  return (
    <div className="App">

      <NavbarContainer></NavbarContainer>

      <Carousel></Carousel>

      <ExpandableList></ExpandableList>

      <br />

    </div>
  );
}

export default App;
