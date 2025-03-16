import Image from "next/image"
import Count from "./Count"

import faqThumb from "@/assets/img/about/faq-left.jpg"

const FaqContent = () => {
   return (
			<>
				<Image src={faqThumb} alt="Man" />
				<div className="experiences-years">
					<span className="experiences-years__number">20+</span>
					<span className="experiences-years__text">Years of Experience</span>
				</div>
				<div className="counter-item counter-text-wrap">
					<div className="counter-item__content">
						Over
						<span className="count-text" data-speed="3000" data-stop="12000">
							<Count number={12000} />
						</span>
						<h5 className="counter-title">Youth & Families</h5>
            <span>served</span>
					</div>
				</div>
				<div className="project-complete">
					<div className="project-complete__icon">
						<i className="flaticon-charity"></i>
					</div>
					<div className="project-complete__content">
						<h5>Your help is welcome</h5>
						<span>Donate for charity</span>
					</div>
				</div>
			</>
		);
}

export default FaqContent
