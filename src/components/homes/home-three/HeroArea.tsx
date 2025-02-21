import Link from "next/link"

const HeroArea = () => {
   return (
      <div className="hero-area-three bgs-cover overlay pt-250 pb-220 rpy-150" style={{ backgroundImage: `url(/assets/img/hero/hero-1.jpg)` }}>
         <div className="container container-1370">
            <div className="hero-content rmt-50 text-center text-white">
               <h1><span>Loving Arms</span></h1>
               <p>Support with Love and Care</p>
               <div className="hero-btns pt-30 rpt-10">
                  <Link className="cr-btn" href="/donate">Donate Now</Link>
                  <Link className="cr-btn btn--yellow btn--green" href="/about">Learn More</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroArea
