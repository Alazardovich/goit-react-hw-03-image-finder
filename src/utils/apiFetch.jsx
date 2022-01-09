import axios from "axios";

const getFetch = async ({ searchQuery = "", pageCounter = 1 }) => {
  const key = "25086099-6b4cd53466fa2409daa271784";
  const url = `https://pixabay.com/api/?q=${searchQuery}&page=${pageCounter}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return await axios.get(url).then((res) => res.data.hits);
  // this.setState({ images: data.hits });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFetch,
};
