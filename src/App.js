import React from "react";
import { BrowserRouter } from "react-router-dom";
// -----------------------
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RouterPag } from "./components/RouterPag";
// -------------

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterPag />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
