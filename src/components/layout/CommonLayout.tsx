import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <section className="flex flex-col min-h-screen">
      <div className=" min-h-screen flex flex-col">
        <Navbar />
        <div className="grow-1">{children}</div>
        <Footer />
      </div>
    </section>
  );
}
