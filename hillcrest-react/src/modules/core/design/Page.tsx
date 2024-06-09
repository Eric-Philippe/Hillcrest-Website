import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
