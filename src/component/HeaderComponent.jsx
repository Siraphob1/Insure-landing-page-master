import intro_desktop from "../images/image-intro-desktop.jpg";
import intro_mobile from "../images/image-intro-mobile.jpg";
import intro_right_desktop from "../images/bg-pattern-intro-right-desktop.svg";
import intro_right_mobile from "../images/bg-pattern-intro-right-mobile.svg";
import intro_left_desktop from "../images/bg-pattern-intro-left-desktop.svg";
import intro_left_mobile from "../images/bg-pattern-intro-left-mobile.svg";

const HeaderComponent = () => {
    
  return (
    <header className="      ">
        <section className="hidden xl:block xl:relative xl:pb-[20rem]">
            <div className="bg-[#2d2640] w-full xl:px-[10rem] xl:pt-[6.5rem] xl:pb-[11rem] xl:relative xl:overflow-hidden">
                <div className=" w-[48%]">
                    <h1 className=" font-fontDM text-[#fafafa] text-[4rem] xl:leading-[3.5rem] xl:pt-[3rem] xl:pr-[4rem]">
                        <span className=" xl:border-t xl:border-white xl:pt-[2.4rem] ">Hum</span>anizing your insurance.
                    </h1>
                    <p className=" text-[#95a9c6] xl:py-[2rem] lg:pr-[2rem] xl:pr-[1rem]">Get your life insurance coverage easier and faster. We blend our expertise 
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
        <section>
            <img src={intro_mobile} alt="intro_mobile" className=" w-full xl:hidden"/>
        </section>


        {/* <img src={intro_right_desktop} alt="intro_right_desktop" className=" absolute z-[2] -top-[8%] right-0"/>
        <div className="flex justify-between lg:relative">
            <div className="w-[50%] lg:pt-[3rem] ">
                <h1 className=" font-fontDM text-[#fafafa] text-[4rem] lg:leading-[4rem] lg:pr-[7rem]">
                    <span className=" lg:border-t lg:border-white lg:pt-[2.4rem] ">Hum</span>anizing your insurance.
                </h1>
                <p className=" text-[#95a9c6] lg:pt-[1rem] lg:pb-[2rem] lg:pr-[4rem]">Get your life insurance coverage easier and faster. We blend our expertise 
                and technology to help you find the plan that’s right for you. Ensure you 
                and your loved ones are protected.
                </p>
                <button className=" font-fontKarla text-[#fafafa] px-[2rem] py-[0.5rem] border-2 border-white">View plans</button>
            </div>            
        </div>
        <img src={intro_desktop} alt="" className="w-[45%]  absolute top-0 right-0" /> */}
    </header>
  )
}

export default HeaderComponent
