import "./App.css";
import { Component } from "react";
import axios from "axios";
import SearchBar from "./components/Searchbar/SeachBar";
import Modal from "./components/Modal/Modal";
import ImageGallery from "./components/ImageGallery/ImageGalery";

class App extends Component {
  state = {
    images: [],
    searchQuery: null,
    showModal: false,
    selectImage: {},
  };

  getFetch = async () => {
    const key = "25086099-6b4cd53466fa2409daa271784";
    const url = `https://pixabay.com/api/?q=${
      this.state.searchQuery ?? "cat"
    }&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
    const { data } = await axios.get(url);
    this.setState({ images: data.hits });
    console.log(this.state.images);
  };
  async componentDidMount() {
    this.getFetch();
    console.log(this.state.images);
  }
  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getFetch();
    }
  }

  toggleModal = (url, alt) => {
    this.setState({
      showModal: !this.state.showModal,
      selectImage: { url, alt },
    });
  };

  setSearchQuery = (searchQuery) => {
    this.setState({ searchQuery });
    console.log(this.state.searchQuery);
  };

  render() {
    const {
      showModal,
      images,
      selectImage: { ult, alt },
    } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.setSearchQuery} />
        {showModal && (
          <Modal>
            <img src={ult} alt={alt} />
          </Modal>
        )}
        <ImageGallery images={images} onToggleModal={this.toogleModal} />
      </>
    );
  }
}

export default App;
