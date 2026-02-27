import search from '../../assets/search.svg';
import filterAlt from '../../assets/filter_alt.svg';
import filterList from '../../assets/filter_list.svg';
import Button from '../Button/Button';
import './SearchBar.css';

function SearchBar() {
  return (
    <>
      <div className="search-container flex justify-between">
        <Button className="search-btn">
          <img src={filterAlt} />
          <p>Filters</p>
        </Button>

        <div className="search-bar flex align-centre">
          <img src={search} />
          <p>Search for a building...</p>
        </div>

        <Button className="search-btn">
          <img src={filterList} />
          <p>Sort</p>
        </Button>
      </div>
    </>
  );
}

export default SearchBar;
