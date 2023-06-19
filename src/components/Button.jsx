import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Button.css";

const Button = () => {
  let link, resultado;

  const assignation = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          (link =
            "https://m.me/104091672708227?ref=Facebook%20messenger%20Copy")
        );
      }, 3500);
    });
  };

  const asyncCall = async () => {
    const result = await assignation();
    return result;
  };

  return (
    <>
      <a
        onClick={async () => {
          toast.info("Redirigiendo a nuestro chatbot...");
          const resultado = await asyncCall();
          window.open(resultado, "_blank");
        }}
        className="btn btn-primary"
      >
        Personalizar
      </a>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        toastStyle={{
          backgroundColor: "#fef2f5",
          color: "#9c5549",
        }}
      />
    </>
  );
};

export default Button;
