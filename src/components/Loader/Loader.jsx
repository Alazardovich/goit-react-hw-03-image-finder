import { Circles } from "react-loader-spinner";
import { ContainerLoad } from "./CSSContainerLoad";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <ContainerLoad>
      <Circles
        type="Circles"
        color="#0f12c7"
        height={180}
        width={180}
        arialLabel="loading"
      />
      Loading...
    </ContainerLoad>
  );
};
export default Loading;
