import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-mwhite">
      <Navbar />
      <main>{ children }</main>
    </div>
  );
}
 
export default Layout;