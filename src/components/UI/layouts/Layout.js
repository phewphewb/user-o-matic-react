import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
