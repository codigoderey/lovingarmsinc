import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import DonateArea from "./DonateArea"
import FooterThree from "@/layout/footers/FooterThree"

const Donate = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={true} />
         <main>
            <Breadcrumb page_title="Donate Now" page_list="Donate" style={false} />
            <DonateArea />
         </main>
         <FooterThree />
      </>
   )
}

export default Donate;
