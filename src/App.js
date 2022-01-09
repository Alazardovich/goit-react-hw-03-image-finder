import "./App.css";
import { Component } from "react";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./components/Searchbar/SeachBar";
import Modal from "./components/Modal/Modal";
import ImageGallery from "./components/ImageGallery/ImageGalery";
import LoadButton from "./components/Button/LoadButton";
import Loading from "./components/Loader/Loader";
import imagesFetch from "../src/utils/apiFetch";
import { ReactComponent as IconButton } from "../src/icons/loading-svgrepo-com.svg";

class App extends Component {
  state = {
    images: [],
    searchQuery: null,
    showModal: false,
    selectImage: {},
    isLoading: false,
    error: null,
    pageCounter: 1,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  setSearchQuery = (searchQuery) => {
    this.setState({ searchQuery, pageCounter: 1, images: [], error: null });
    // console.log(this.state.searchQuery);
  };
  fetchImages = () => {
    const { searchQuery, pageCounter } = this.state;
    const options = { searchQuery, pageCounter };
    this.setState({ isLoading: true });
    imagesFetch
      .getFetch(options)
      .then((hits) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          pageCounter: prevState.pageCounter + 1,
        }))
      )
      .catch((error) => {
        this.setState(error);
      })
      .finally(() => this.setState({ isLoading: false }));
    console.log("button:", this.state.images);
  };
  // async componentDidMount() {
  //   const { searchQuery, pageCounter } = this.state;
  //   const options = { searchQuery, pageCounter };
  //   this.setState({ isLoading: true, searchQuery: null });
  //   imagesFetch
  //     .getFetch(options)
  //     .catch((error) => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  //   console.log("this.state.images-componentDidMount");
  // }

  // async componentDidUpdate(_, prevState) {
  //   const { searchQuery, pageCounter } = this.state;
  //   const options = { searchQuery, pageCounter };
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     imagesFetch.getFetch(options);
  //     console.log("this.state.images-componentDidUpdate");
  //   }
  //   // if (this.state.searchQuery) {
  //   //   this.getFetch().then((hits) =>
  //   //     this.setState((prevState) => ({
  //   //       images: [...prevState.images, ...hits],
  //   //       pageCounter: prevState.pageCounter++,
  //   //     }))
  //   //   );

  //   console.log("componentDidUpdate");
  //   // }
  // }

  toggleModal = (url, alt) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      selectImage: { url, alt },
    }));
  };

  render() {
    const {
      showModal,
      images,
      isLoading,
      selectImage: { url, alt },
    } = this.state;
    const shouldRenderLoadButton = images.length > 0 && !isLoading;
    return (
      <>
        <SearchBar onSubmit={this.setSearchQuery} />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={url} alt={alt} width="900" height="600" />
          </Modal>
        )}
        {shouldRenderLoadButton && (
          <LoadButton onClick={this.fetchImages} aria-label="Loading">
            <IconButton width="40" height="40" />
          </LoadButton>
        )}
        {isLoading && <Loading />}
        <ImageGallery images={images} onToggleModal={this.toggleModal} />
        <ToastContainer autoClose={3000} theme="colored" />
      </>
    );
  }
}

export default App;
// getFetch = async () => {
//   const key = "25086099-6b4cd53466fa2409daa271784";
//   const url = `https://pixabay.com/api/?q=${
//     this.state.searchQuery ?? "cat"
//   }&${
//     this.pageCounter
//   }&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
//   const { data } = await axios.get(url);
//   const hits = data.hits;
//   this.setState({ images: hits });
//   console.log("this.state.images = button");
// };
