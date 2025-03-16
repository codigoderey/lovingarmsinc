import features_data from "@/data/featuresData"
import Link from "next/link"
import Image from "next/image"

import featureImg from "@/assets/img/features/feature-three.jpg"

const Features = () => {
   return (
      <div className="features-area-three pb-55">
         <div className="container">
            <div className="row gap-80 align-items-center">
               <div className="col-xl-5 col-lg-10">
                  <div className="feature-three-content-part pb-35">
                     <div className="section-title mb-50">
                        <span className="section-title__subtitle mb-10">Called to Serve</span>
                        <h2>We make a <span>Difference</span></h2>
                     </div>
                     {features_data.filter((item) => item.page === "home_3").map((item) => (
                        <div key={item.id} className="feature-item--three" style={{ backgroundImage: `url(${item.bg_img?.src || ''})` }}>
                           <div className="feature-item__icon">
                              <i className={item.icon_name}></i>
                           </div>
                           <div className="feature-item__content">
                              <h4>{item.link ? <Link href={item.link}>{item.title}</Link> : item.title}</h4>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="col-xl-7">
                  <div className="feature-three-image-part pb-65">
                     <Image className="object-fit-cover" src={featureImg} alt="Features" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Features
