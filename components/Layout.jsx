import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Searchbar";
import { useState } from "react";


const Layout = ({ children, filterToggle }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)

  const handleToggle = () => {
    setToggleSidebar(!toggleSidebar)
  }

  const handleSearch = () => {
    setToggleSearch(!toggleSearch)
  }

  return (
    <div className="bg-mwhite">
      <Navbar handleToggle={ handleToggle } toggleSidebar= { toggleSidebar } handleSearch= { handleSearch } />
      <Search handleSearch= { handleSearch } toggleSearch= { toggleSearch } />
      {!toggleSidebar && 
        <main>{ children }</main>
      }
      <Footer />
    </div>
  );
}
 
export default Layout;