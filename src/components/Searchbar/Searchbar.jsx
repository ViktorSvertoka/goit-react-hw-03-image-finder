import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(event.target.elements.searchName.value);
    event.target.reset();
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button>
            <span>
              <BsSearch />
              Search
            </span>
          </button>
          <input name="searchName" type="text" id="search" />
        </form>
      </header>
    );
  }
}

export default SearchBar;
