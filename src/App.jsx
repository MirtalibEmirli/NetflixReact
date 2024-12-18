import React from "react";
import Entry from "./landing/components/Entry";
import { BrowserRouter } from "react-router"; // router üçün düzgün import
import { ToastContainer, Bounce } from "react-toastify"; // Toastify üçün import
import "react-toastify/dist/ReactToastify.css"; // Stil faylı

const App = () => {
  return (
    <>
      {/* Əsas Komponent */}
      <Entry />

      {/* Toast Container */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default App;
