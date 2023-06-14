import intro_desktop from "../images/image-intro-desktop.jpg";
import intro_mobile from "../images/image-intro-mobile.jpg";
import intro_right_desktop from "../images/bg-pattern-intro-right-desktop.svg";
import intro_right_mobile from "../images/bg-pattern-intro-right-mobile.svg";
import intro_left_desktop from "../images/bg-pattern-intro-left-desktop.svg";
import intro_left_mobile from "../images/bg-pattern-intro-left-mobile.svg";

const HeaderComponent = () => {
    
  return (
    <header className="">
        <section className="hidden xl:block  relative pb-[20rem]">
            <div className="bg-[#2d2640] w-full px-[10rem] pt-[6.5rem] pb-[11rem] relative overflow-hidden">
                <div className=" w-[48%]">
                    <h1 className=" font-fontDM text-[#fafafa] text-[4rem] leading-[3.5rem] pt-[3rem] pr-[4rem]">
                        <span className=" border-t border-white pt-[2.4rem] ">Hum</span>anizing your insurance.
                    </h1>
                    <p className=" text-[#95a9c6] py-[2rem] lg:pr-[2rem] pr-[1rem]">Get your life insurance coverage easier and faster. We blend our expertise 
                    and technology to help you find the plan that’s right for you. Ensure you 
                    and your loved ones are protected.
                    </p>
                    <button className=" font-fontKarla text-[#fafafa] px-[2rem] py-[0.5rem] border-2 border-white">View plans</button>
                </div>
                <img src={intro_right_desktop} alt="intro_right_desktop" className=" absolute z-[2] -top-[5rem] right-0"/>
            </div>        
            <img src={intro_desktop} alt="intro_desktop" className=" absolute top-[6.5rem] right-[10rem] w-[40%]"/>
            <img src={intro_left_desktop} alt="intro_left_desktop" className=" absolute bottom-0  left-0"/>
        </section>
        <section className="pb-[10rem] relative xl:hidden">
            <img src={intro_mobile} alt="intro_mobile" className=" w-full"/>
            <div className=" bg-[#2d2640] text-center px-[1.5rem] py-[6rem] relative overflow-hidden">
                <img src={intro_left_mobile} alt="intro_left_mobile" className=" absolute z-[1] left-0 top-0"/>
                <div className=" z-[10]">
                    <h1 className=" font-fontDM text-white text-[2.8rem] leading-[2.8rem] ">Humanizing your insurance.</h1>
                    <p className=" text-[#95a9c6] pt-[1rem] pb-[2rem] px-[0.5rem]">Get your life insurance coverage easier and faster. We blend our expertise 
                        and technology to help you find the plan that’s right for you. Ensure you 
                        and your loved ones are protected.
                    </p>
                    <button className=" font-fontKarla text-[#fafafa] px-[2rem] py-[0.5rem] border-2 border-white">View plans</button>
                </div>                
            </div>
            <img src={intro_right_mobile} alt="intro_right_mobile" className=" absolute z-[1]  bottom-0 right-0"/>
        </section>
    </header>
  )
}

export default HeaderComponent
