import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PageProps {
  children: ReactNode;
  title?: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  let pageTitle = "Hillcrest";
  if (title) pageTitle += ` | ${title}`;
  document.title = pageTitle;

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
