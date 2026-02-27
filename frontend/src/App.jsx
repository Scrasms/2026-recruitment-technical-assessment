import freeRoomsLogo from './assets/freeRoomsLogo.png';
import search from './assets/search.svg';
import map from './assets/map.svg';
import gridView from './assets/gridView.svg';
import darkMode from './assets/darkMode.svg';
import Header from './components/Header/Header';
import Icon from './components/Icon/Icon';
import SearchBar from './components/SearchBar/SearchBar';
import Room from './components/Room/Room';
import data from './assets/data.json';
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
      <Icon image={gridView} invert={true} />
      <Icon image={map} />
      <Icon image={darkMode} />
    </div>
  );

  return (
    <>
      <Header leftChildren={headerLeft} rightChildren={headerRight} />
      <SearchBar />
      <section className="room-grid flex flex-wrap">
        {data.map((room, index) => (
          <Room
            name={room.name}
            rooms_available={room.rooms_available}
            building_picture={room.building_picture}
            key={index}
          />
        ))}
      </section>
    </>
  );
}

export default App;
