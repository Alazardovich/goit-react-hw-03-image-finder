# Getting Started with Create React App

// getFetch = async () => {
// const key = "25086099-6b4cd53466fa2409daa271784";
// const url = `https://pixabay.com/api/?q=${ // this.state.searchQuery ?? "cat" // }&${ // this.pageCounter // }&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
// const { data } = await axios.get(url);
// const hits = data.hits;
// this.setState({ images: hits });
// console.log("this.state.images = button");
// };
// async componentDidMount() {
// const { searchQuery, pageCounter } = this.state;
// const options = { searchQuery, pageCounter };
// this.setState({ isLoading: true, searchQuery: null });
// imagesFetch
// .getFetch(options)
// .catch((error) => this.setState({ error }))
// .finally(() => this.setState({ isLoading: false }));
// console.log("this.state.images-componentDidMount");
// }

// async componentDidUpdate(\_, prevState) {
// const { searchQuery, pageCounter } = this.state;
// const options = { searchQuery, pageCounter };
// if (prevState.searchQuery !== this.state.searchQuery) {
// imagesFetch.getFetch(options);
// console.log("this.state.images-componentDidUpdate");
// }
// // if (this.state.searchQuery) {
// // this.getFetch().then((hits) =>
// // this.setState((prevState) => ({
// // images: [...prevState.images, ...hits],
// // pageCounter: prevState.pageCounter++,
// // }))
// // );

// console.log("componentDidUpdate");
// // }
// }
