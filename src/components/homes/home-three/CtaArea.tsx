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
								Donate to Make a <span>Positive Impact</span>
							</h2>
							<p>
								Serving youth and families since 1999, in this community and
								beyond. Your Donation Matters and Will Make A Difference.
							</p>
							<Link
								target="_blank"
								rel="noopener noreferrer"
								className="cr-btn mt-30"
								href="/https://www.spotfund.com/story/1500b40e-3470-4057-acee-393f2ab3ab7b?source=s&share_location=c&SFID=dngtg16sc&referral_id=d1cc59dd-1183-49f2-90eb-a7cec9289c99">
								Donate Today
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CtaArea
