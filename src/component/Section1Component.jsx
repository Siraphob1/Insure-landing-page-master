import isnappy from "../images/icon-snappy-process.svg";
import iaffordable from "../images/icon-affordable-prices.svg";
import ipeople from "../images/icon-people-first.svg";


const Section1Component = () => {
  return (
    <section>
        <h1 className=" h1-section1">We’re different</h1>
        <div className="flex flex-col text-center xl:flex-row xl:text-start ">
            <section className="card-section1">
                <img src={isnappy} alt="isnappy" />
                <h2 className="h2-section1">Snappy Process</h2>
                <p className="p-section1"> 
                    Our application process can be completed in minutes, not hours. Don’t get 
                    stuck filling in tedious forms.
                </p>
            </section>
            <section className="card-section1">
                <img src={iaffordable} alt="iaffordable" />
                <h2 className="h2-section1">Affordable Prices</h2>
                <p className="p-section1"> 
                    We don’t want you worrying about high monthly costs. Our prices may be low, 
                    but we still offer the best coverage possible.
                </p>
            </section>
            <section className="card-section1">
                <img src={ipeople} alt="ipeople" />
                <h2 className="h2-section1">People First</h2>
                <p className="p-section1"> 
                    Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                    sure you’re covered when you need it.
                </p>
            </section>
        </div>
    </section>
  )
}

export default Section1Component
