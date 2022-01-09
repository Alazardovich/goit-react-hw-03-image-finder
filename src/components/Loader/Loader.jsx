import { Circles } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div>
      <Circles
        type="Circles"
        color="#00BFFF"
        height={80}
        width={80}
        arialLabel="loading"
      />
      Loading...
    </div>
  );
};
export default Loading;
