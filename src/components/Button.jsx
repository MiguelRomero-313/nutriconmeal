import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Button.css";

function Button() {
  return (
    <>
      <a
        onClick={() => {
          toast.warn("Funcionalidad en desarrollo");
        }}
        className="btn btn-primary"
      >
        Personalizar
      </a>
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: "#fef2f5",
          color: "#9c5549",
        }}
      />
    </>
  );
}

export default Button;
