import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Searchbar";
import { useState } from "react";

const Layout = ({ children, filterToggle }) => {
  const [toggleSearch, setToggleSearch] = useState(false)

  const handleSearch = () => {
    setToggleSearch(!toggleSearch)
  }

  return (
    <div className="bg-mwhite">
      <Navbar handleSearch= { handleSearch } />
      <Search handleSearch= { handleSearch } toggleSearch= { toggleSearch } />
      <main>{ children }</main>
      <Footer />
    </div>
  );
}
 
export default Layout;