import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
  SearchLogo,
} from './SearchBar.styled';

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
        <SearchForm onSubmit={this.handleSubmit}>
          <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
            <SearchLogo
              src={require('./pixabay-logo.png')}
              alt="logo"
              width="200"
            />
          </a>
          <SearchButton>
            <BsSearch />
            <SearchSpan>Search</SearchSpan>
          </SearchButton>
          <SearchInput name="searchName" type="text" id="search" />
        </SearchForm>
      </header>
    );
  }
}

export default SearchBar;
