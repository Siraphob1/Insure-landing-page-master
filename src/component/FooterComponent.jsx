import logo from "../images/logo.svg";
import ifacebook from "../images/icon-facebook.svg";
import itwitter from "../images/icon-twitter.svg";
import ipinterest from "../images/icon-pinterest.svg";
import iinstagram from "../images/icon-instagram.svg";
import bgfooter_desktop from "../images/bg-pattern-footer-desktop.svg";
import bgfooter_mobile from "../images/bg-pattern-footer-mobile.svg";

const FooterComponent = () => {
  return (
    <footer className=" bg-[#fafafa] ">
        <div className=" relative px-[1.5rem] lg:px-[10rem] xl:py-[3.5rem]">
            <img src={bgfooter_desktop} alt="bgfooter_desktop" className=" hidden xl:block z-[1] absolute top-0 left-0"/>
            <img src={bgfooter_mobile} alt="bgfooter_mobile"  className=" z-[1] absolute top-0 left-0 xl:hidden"/>
            <section className="z-[2] relative flex flex-col items-center pt-[5.5rem]
                                xl:flex-row xl:justify-between  pb-[2rem] border-b border-[#95a9c6]">
                <a href="#"><img src={logo} alt="logo" className=""/></a>
                <ul className=" flex ">
                    <li className="li-footer"><a href="#"><img src={ifacebook} alt="ifacebook" className=""/></a></li>
                    <li className="li-footer"><a href="#"><img src={itwitter} alt="itwitter" /></a></li>
                    <li className="li-footer"><a href="#"><img src={ipinterest} alt="ipinterest" /></a></li>
                    <li className="li-footer"><a href="#"><img src={iinstagram} alt="iinstagram" /></a></li>
                </ul>
            </section>
            <section    className=" z-[2] relative flex flex-col items-center text-center pb-[6rem]
                                    xl:flex-row xl:justify-between xl:items-start xl:text-start xl:w-[80%]">
                <section    className="1">
                    <div className="title-footer">Our company</div>
                    <ul>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">How we work</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Why Insure?</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">View plans</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Reviews</a></li>
                    </ul>
                </section>
                <section className="2">
                    <div className="title-footer">Help me</div>
                    <ul>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">FAQ</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Terms of use</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Privacy policy</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Cookies</a></li>
                    </ul>
                </section>
                <section className="3">
                    <div className="title-footer">Contact</div>
                    <ul>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Sales</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Support</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Live chat</a></li>
                    </ul>
                </section>
                <section className="4">
                    <div className="title-footer">Others</div>
                    <ul>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Careers</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Press</a></li>
                        <li className="nav-li-footer"><a href="#" className="nav-link-footer">Licenses</a></li>
                    </ul>
                </section>
            </section>
        </div>
    </footer>
  )
}

export default FooterComponent
