import HeaderOne from "@/layout/headers/HeaderOne";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
export default function Board() {
	return (
		<>
			<HeaderOne style_1={false} style_2={true} />
			<Breadcrumb page_title="Board" page_list="Board" style={false} />
			<div className="about-us-three pt-120 pb-55">
				<div className="container">
					<div className="row gap-80 align-items-center">
						<div className="col-xl-6">
							<div className="about-us-content-three mb-65">
								<div className="section-title mb-65">
									<span className="section-title__subtitle mb-10">
										Our board
									</span>
									<h2>Good people behind Loving Arms</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="row d-flex gap-30 align-items-stretch">
						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Sharana Sloss - Chair</h5>
									<p className="card-text">
										Clinical Social Worker/SC State Director
									</p>
									<p className="card-text"><a href="tel:843-480-5150">Tel. (843)480-5150</a></p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Darroll Cribb – Vice Chair</h5>
									<p className="card-text">Compassionate Care Services, LLC</p>
									<p className="card-text"><a href="tel:410-473-5323">Tel. (410)473-5323</a></p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Denita Bennett, Board Member</h5>
									<p className="card-text">Elder/Retired Finance Adm.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Charles Carter, Board Member</h5>
									<p className="card-text">Business Owner/Social Worker</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Cleveland Smith – Board Member</h5>
									<p className="card-text">Realtor/Business Owner</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">
										Jenice Gonzalez-Green – Secretary
									</h5>
									<p className="card-text">Comm. Activist/Entrepreneur</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Sylvester Shorts, Board Member</h5>
									<p className="card-text">Community Organizer/Homeless Ad.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Wendy Dessausure - Treasurer</h5>
									<p className="card-text">Retired Human Resource Worker</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Precise Coaxum – Board Member</h5>
									<p className="card-text">Community Leader/PHY</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Curtis McNeil, Board Member</h5>
									<p className="card-text">Prog. Director – Family Matters</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div style={{ height: "100%" }} className="card">
								<div className="card-body">
									<h5 className="card-title">Bertha Fordham – Board Member</h5>
									<p className="card-text">Entrepreneur/Business Owner</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FooterThree />
		</>
	);
}
