import Navbar from "./Navbar";
import Footer from "./Footer";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";


const Layout = ({ children, filterToggle }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  const handleToggle = () => {
    setToggleSidebar(!toggleSidebar)
  }

  return (
    <div className="bg-mwhite">
      <Navbar handleToggle={ handleToggle } toggleSidebar= { toggleSidebar } />
      <SidebarMenu toggleSidebar={ toggleSidebar } />
      {!toggleSidebar && 
        <main>{ children }</main>
      }
      <Footer />
    </div>
  );
}
 
export default Layout;