import Image from "next/image"

import aboutAuthor from "@/assets/img/about/author.jpg"
import aboutThumb from "@/assets/img/about/about-three-right.png"

interface ContentType {
   sub_title: string;
   title: JSX.Element;
   desc: JSX.Element;
   list: string[];
   author: string;
   designation: string;
}

const about_content: ContentType = {
   sub_title: "About us",
   title: (<><span>We Make a Difference</span> in people&apos;s lives</>),
   desc: (<>At Loving Arms Inc we believe in the power of compassion and kindness to make a difference in the lives of those in need. We are part of the Family & Youth Services Bureau and serve youth at risk in our community and beyond.</>),
   list: ["Youth at risk", "Homeless", "Runaway", "Mentoring Resources", "Outreach Support", "Referrals to Case Management"],
   author: "Cindy Williams",
   designation: "CEO & Founder, Loving Arms Inc.",
}

const { sub_title, title, desc, list, author, designation } = about_content;

const About = () => {
   return (
      <div className="about-us-three pt-120 pb-55">
         <div className="container">
            <div className="row gap-80 align-items-center">
               <div className="col-xl-6">
                  <div className="about-us-content-three mb-65">
                     <div className="section-title mb-65">
                        <span className="section-title__subtitle mb-10">{sub_title}</span>
                        <h2>{title}</h2>
                     </div>
                     <p>{desc}</p>
                     <ul className="list-style-one pt-15">
                        {list.map((list, index) => (<li key={index}>{list}</li>))}
                     </ul>
                     <hr className="mt-30 mb-5" />
                     <div className="about-author">
                        <div className="about-author--img">
                           <Image src={aboutAuthor} alt="Author" />
                        </div>
                        <div className="about-author--content">
                           <h5>{author}</h5>
                           <span>{designation}</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="about-us-image-three mb-65">
                     <Image src={aboutThumb} alt="About" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
