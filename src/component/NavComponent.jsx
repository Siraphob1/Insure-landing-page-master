import logo from "../images/logo.svg";
import ihambergur from "../images/icon-hamburger.svg";
import iclose from "../images/icon-close.svg";
import { useContext } from "react";
import DataContext from "../DataContext";


const NavComponent = () => {
  const  {clickmenu,setClickmenu}= useContext(DataContext)

  const OnClickmenu=()=>{
        const current = !clickmenu;
        setClickmenu(current)
  }

  return (
    <nav className="flex justify-between items-center p-[1.5rem] xl:px-[8rem] xl:py-[2rem]">
        <a href="#"><img src={logo} alt="logo" /></a>
        <ul className="hidden xl:flex ">
            <li className="nav-link-header"><a href="#">How we work</a></li>
            <li className="nav-link-header"><a href="#">Blog</a></li>
            <li className="nav-link-header"><a href="#">Account</a></li>
            <li className="nav-link-header nav-link-select-header"><a href="#">View plans</a></li>
        </ul>
        <div className=" xl:hidden">
            <img src={clickmenu ?iclose :ihambergur} alt="ihambergur" className=" hover:cursor-pointer" onClick={OnClickmenu}/>
        </div>
    </nav>
  )
}

export default NavComponent
