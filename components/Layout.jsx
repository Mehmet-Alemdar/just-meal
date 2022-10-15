import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-mwhite">
      <Navbar />
      <main>{ children }</main>
      <Footer />
    </div>
  );
}
 
export default Layout;