"use client";
import { useState } from "react";
import HeaderOne from "@/layout/headers/HeaderOne";
import HeroArea from "./HeroArea";
import Charity from "./Charity";
import About from "./About";
import OurCause from "./OurCause";
import Volunteer from "./Volunteer";
import BecomeVolunteer from "./BecomeVolunteer";
import CtaArea from "./CtaArea";
import Event from "./Event";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Features from "./Features";
import Blog from "./Blog";
import FooterThree from "@/layout/footers/FooterThree";
import VideoPopup from "@/modals/VideoPopup";
import testimonialBg from "@/assets/img/testimonial.jpg";
import Image from "next/image";

const HomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
		<>
			<HeaderOne style_1={false} style_2={true} />
			<main>
				<HeroArea />
				<Charity />
				<About />
				<CtaArea />
				<FAQ style={false} />
				<Testimonial />
				<div className="charity-video rel pt-115 rpt-120 pb-120 mb-120">
					<div
						className="charity-area-bg"
						style={{
							backgroundImage: `url(/assets/img/background/charity-video-bg.jpg)`,
							backgroundSize: "cover",
							backgroundPosition: "left"
						}}></div>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								<div className="section-title text-center mb-50">
									<h2>Learn more with the following video</h2>
								</div>
							</div>

							<div className="col-lg-8">
								<div className="charity-video-part overlay mb-25">
									<Image src={testimonialBg} alt="Video" />
									<a
										onClick={() => setIsVideoOpen(true)}
										style={{ cursor: "pointer" }}
										className="video-play video-play--two"
										data-effect="mfp-zoom-in">
										<i className="fa fa-play"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* video modal start */}
				<VideoPopup
					isVideoOpen={isVideoOpen}
					setIsVideoOpen={setIsVideoOpen}
					videoId={"en8qdStpd6g"}
				/>
				{/* video modal end */}
				<Features />
			</main>
			<FooterThree />
		</>
	);
}

export default HomeThree;
