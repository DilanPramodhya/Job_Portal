
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <>
      <section
        style={{
          minHeight: "525px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <ClipLoader size={60} color="blue" />
      </section>
    </>
  );
};

export default Spinner;