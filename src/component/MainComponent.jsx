import FooterComponent from "./FooterComponent"
import Section1Component from "./Section1Component"
import Section2Component from "./Section2Component"



const MainComponent = () => {
  return (
    <main className="">
        <div className="px-[1.5rem] lg:px-[10rem] xl:py-[2rem]">
          <Section1Component/>
          <Section2Component/>
        </div>
        <FooterComponent/>
    </main>
  )
}

export default MainComponent
