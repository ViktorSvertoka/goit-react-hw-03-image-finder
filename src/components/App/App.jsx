import { Component } from 'react';
import * as API from '../../services/PixabayApi';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

class App extends Component {
  state = {
    searchName: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      searchName: query,
      images: [],
      currentPage: 1,
    });
  };

  addImages = async () => {
    const { searchName, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await API.getImages(searchName, currentPage);

      if (data.hits.length === 0) {
        alert('sorry image not found');
        return;
      }

      const normalizedImages = API.normalizedImages(data.hits);

      this.setState(state => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'something went wrong' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;

    return (
      <div className="App">
        <SearchBar onSubmit={this.handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p style={{ padding: 10, textAlign: 'center', fontSize: 20 }}>
            Image gallery is empty
          </p>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}

export default App;
