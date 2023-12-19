import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";

export default function Page() {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
