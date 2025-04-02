import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import ErrorArea from "./ErrorArea"
import FooterThree from "@/layout/footers/FooterThree"

const NotFound = () => {
   return (
			<>
				<HeaderOne style_1={false} style_2={true} />
				<main>
					<Breadcrumb page_title="Error Page" page_list="404" style={false} />
					<ErrorArea />
				</main>
				<FooterThree />
			</>
		);
}

export default NotFound;
