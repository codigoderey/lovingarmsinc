"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"

import charityImg from "@/assets/img/background/charity-video-bg.jpg";

const Charity = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
			<>
				<div className="charity-video rel pt-115 rpt-120 pb-120">
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
									<h2>
										Listen to this podcast to learn more about us
									</h2>
								</div>
							</div>

							<div className="col-lg-8">
								<div className="charity-video-part overlay mb-25">
									<Image src={charityImg} alt="Video" />
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
			</>
		);
}

export default Charity
