import Clients from "./Clients";
import Faq from "./Faq";
import Footer from "./Footer";
import Herosection from "./Herosection";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Practices from "./Practices";
import Team from "./Team";

const Landing = () => {
  return (
    <>
      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "0 100px 0 100px",
        }}
      >
        <Navbar />
        <Herosection />
      </div>
      <div
        style={{
          background: "#1d1d1d",
          color: "#fff",
          padding: "0 100px 50px 100px",
        }}
      >
        <Introduction />
        <Practices />
        <Clients />
        <Team />
        <Faq />
      </div>
      <Footer />
    </>
  );
};
export default Landing;
