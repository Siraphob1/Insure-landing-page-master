import how_desktop from "../images/bg-pattern-how-we-work-desktop.svg";
import how_mobile from "../images/bg-pattern-how-we-work-mobile.svg";



const Section2Component = () => {
  return (
    <section    className=" bg-[#2d2640] flex flex-col items-center text-white  relative my-[8rem] py-[4rem] px-[1rem]
                            xl:flex-row xl:justify-between  xl:my-[8rem] xl:px-[5rem]">
        <img src={how_desktop} alt="how_desktop" className="hidden z[1] absolute top-0 right-0 xl:block "/>
        <img src={how_mobile} alt="how_mobile" className=" z[1] absolute top-0 right-0 xl:hidden"/>
        
        <h1 className="z-[2] font-fontDM text-[2.5rem] leading-[2.5rem] text-center mb-[3rem]
                        xl:text-[3.6rem]  xl:leading-[4rem] xl:text-start xl:w-[60%] xl:pr-[4rem] xl:mb-0">Find out more about how we work</h1>
        <button className=" z-[2] btn">How we work</button>
    </section>
  )
}

export default Section2Component
