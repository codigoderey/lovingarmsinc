import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"
import About from "@/components/homes/home-three/About"
import Features from "@/components/homes/home-one/Features"
import Volunteer from "@/components/homes/home-one/Volunteer"
import Testimonial from "@/components/homes/home-two/Testimonial"
import CtaArea from "@/components/homes/home-three/CtaArea"
import FAQ from "@/components/homes/home-three/FAQ"
import FooterThree from "@/layout/footers/FooterThree"

const InnerAbout = () => {
   return (
			<>
				<HeaderOne style_1={false} style_2={true} />
				<main>
					<Breadcrumb page_title="About Us" page_list="About" style={false} />
					<About />
					<Features />
					<Volunteer style={true} />
					{/* <Testimonial style={false} /> */}
					<CtaArea />
					<FAQ style={false} />
				</main>
				<FooterThree />
			</>
		);
}

export default InnerAbout;
