import Section1Component from "./Section1Component"
import Section2Component from "./Section2Component"



const MainComponent = () => {
  return (
    <main className="px-[1.5rem] lg:px-[8rem] xl:py-[2rem]">
        <Section1Component/>
        <Section2Component/>
    </main>
  )
}

export default MainComponent
