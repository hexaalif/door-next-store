import Link from "next/link";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex min-h-screen flex-col justify-between text-center">
        <header className="">
          <Header />
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default Layout;
