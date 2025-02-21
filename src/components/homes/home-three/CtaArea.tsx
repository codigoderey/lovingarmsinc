import Link from "next/link"

const CtaArea = () => {
  return (
		<div
			className="cta-area overlay bgs-cover pt-110 rpt-120 pb-120"
			style={{ backgroundImage: `url(/assets/img/background/cta-three.jpg)` }}>
			<div className="container container-1170">
				<div className="row justify-content-center">
					<div className="col-xl-8 col-lg-10">
						<div className="section-title text-center text-white">
							<h2>
								Welcome to Make a <span>Positive Impact</span>
							</h2>
							<p>
								We are a non-profit organization since 1999 that serves youth at risk in our community and beyond. Learn more about our mission and how you can help.
							</p>
							<Link className="cr-btn mt-30" href="#">
								Donate Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CtaArea
