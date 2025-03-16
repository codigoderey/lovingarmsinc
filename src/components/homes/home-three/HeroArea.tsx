import Link from "next/link"

const HeroArea = () => {
   return (
			<div
				className="hero-area-three bgs-cover overlay pt-250 pb-220 rpy-150"
				style={{ backgroundImage: `url(/assets/img/hero/hero-1.jpg)` }}>
				<div className="container container-1370">
					<div className="hero-content rmt-50 text-center text-white">
						<h1 className="headline">
							<span>
								Providing Emergency Shelter, Safety, and Hope for Vulnerable
								Youth
							</span>
						</h1>
						<p>
							Loving Arms, Inc. is dedicated to offering immediate care and
							long-term solutions for runaway, homeless, and sexually exploited
							minors.
						</p>
						<div className="hero-btns pt-30 rpt-10">
							<Link target="_blank" rel="noopener noreferrer" className="cr-btn" href="http://spot.fund/dngtg16sc">
								Donate Today
							</Link>
							<Link className="cr-btn btn--yellow btn--green" href="/about">
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
}

export default HeroArea
