import logo from "../images/logo.svg";
import ihambergur from "../images/icon-hamburger.svg";


const NavComponent = () => {
  return (
    <nav className="flex justify-between items-center p-[1.5rem] lg:px-[8rem] lg:py-[2rem]">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul className="hidden lg:flex ">
            <li className="nav-link-header"><a href="#">How we work</a></li>
            <li className="nav-link-header"><a href="#">Blog</a></li>
            <li className="nav-link-header"><a href="#">Account</a></li>
            <li className="nav-link-header"><a href="#">View plans</a></li>
        </ul>
        <div className=" lg:hidden">
            <img src={ihambergur} alt="ihambergur" />
        </div>
    </nav>
  )
}

export default NavComponent
