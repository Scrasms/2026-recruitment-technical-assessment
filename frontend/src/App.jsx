import freeRoomsLogo from './assets/freeRoomsLogo.png';
import search from './assets/search.svg';
import map from './assets/map.svg';
import gridView from './assets/gridView.svg';
import darkMode from './assets/darkMode.svg';
import Header from './components/Header/Header';
import Icon from './components/Icon/Icon';
import './App.css';

function App() {
  const headerLeft = (
    <div className="flex align-centre">
      <img src={freeRoomsLogo} alt="orange door, open" />
      <h1>Freerooms</h1>
    </div>
  );

  const headerRight = (
    <div id="icon-bar" className="flex justify-centre align-centre">
      <Icon image={search} />
      <Icon image={gridView} invert={true}/>
      <Icon image={map} />
      <Icon image={darkMode} />
    </div>
  );

  return (
    <>
      <Header leftChildren={headerLeft} rightChildren={headerRight} />
    </>
  );
}

export default App;
