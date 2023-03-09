import React, { Children } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </main>
    </>
  );
}
