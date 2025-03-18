"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import footer_data from "@/data/footerData";

import footerLogo from "@/assets/img/logos/logo-white.png"

import latestNews_1 from "@/assets/img/footer/latest-news1.jpg";
import latestNews_2 from "@/assets/img/footer/latest-news2.jpg";

interface ContentType {
   footer_about_text: string;
   news_title: string;
   copyright_text: string;
   latest_news: {
      id: number
      img: StaticImageData;
      title: string;
      date: number
   }[];
}

const footer_content: ContentType = {
   footer_about_text: "Thank you for your interest in Loving Arms Inc. Please feel free to contact us with any questions or concerns you may have. We look forward to hearing from you.",
   news_title: "Subscribe Newslatters",
   copyright_text: `Loving Arms Inc. Copyright ${new Date().getFullYear()}. All Right Reserved`,
   latest_news: [
      {
         id: 1,
         img: latestNews_1,
         title: "Children in South Africa",
         date: 12,
      },
      {
         id: 2,
         img: latestNews_2,
         title: "Education for All Poor Child",
         date: 18,
      },
   ]
}

const { footer_about_text, latest_news, news_title, copyright_text } = footer_content

const FooterThree = () => {
   return (
      <footer className="footer-area mt-95 footer-area--three overlay text-white" style={{ backgroundImage: `url(assets/img/footer/footer-three-bg.jpg)` }}>
         <div className="container py-3">
            <div className="row justify-content-between" style={{marginTop:"75px"}}>
               <div className="col-xl-3 col-sm-6">
                  <div className="widget widget_about">
                     <div className="logo_footer mb-25">
                        <Link href="/">
                           <Image width={150} src={footerLogo} alt="Logo" />
                        </Link>
                     </div>
                     <p>{footer_about_text}</p>
                  </div>
               </div>

               {footer_data.filter((item) => item.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xl-2 col-sm-3 col-6">
                     <div className="widget widget_nav_menu">
                        <h5 className="widget-title">{item.widget_title}</h5>
                        <ul>
                           {item.footer_link.map((li, i) => (<li key={i}><Link href={li.link}>{li.link_title}</Link></li>))}
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="footer-bottom mt-30">
            <div className="container">
               <div className="footer-bottom__inner">
                  {/* <Link href="/donate" className="donate-by">
                     <span>Donate by :</span>
                     <Image src={donate} alt="Donate By" />
                  </Link> */}
                  <div className="copyright">
                     <p>{copyright_text}</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterThree
