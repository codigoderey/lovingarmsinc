import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import Features from "@/components/homes/home-one/Features";
import FAQ from "@/components/homes/home-three/FAQ";
import FooterThree from "@/layout/footers/FooterThree";

const ServicesPage = () => {
	return (
		<>
			<HeaderOne style_1={false} style_2={true} />
			<main>
				<Breadcrumb page_title="Services" page_list="Services" style={false} />
				<div className="about-us-three pt-120 pb-55">
					<div className="container">
						<div className="row gap-80 align-items-center">
							<div className="col-xl-6">
								<div className="about-us-content-three mb-65">
									<div className="section-title mb-65">
										<span className="section-title__subtitle mb-10">
											Our services
										</span>
										<h2>So many ways we can help</h2>
									</div>
									<h3>Here are some:</h3>
									<ul style={{ fontSize: "18px" }}>
										<li>
											<strong>Emergency Shelter:</strong> Safe housing for
											minors in immediate need.
										</li>
										<li>
											<strong>Counseling and Support:</strong> Therapeutic
											services to address trauma and help youth heal.
										</li>
										<li>
											<strong>Life Skills Training:</strong> Helping minors gain
											independence and prepare for the future.
										</li>
										<li>
											<strong>Family Reunification & Support:</strong>{" "}
											Assistance for safe reunification with family when
											possible.
										</li>
										<li>
											<strong>24/7 Help:</strong> Our team is available around
											the clock to provide urgent care and intervention.
										</li>
									</ul>
									<hr className="mt-30 mb-4" />
									<h3>Get help now</h3>
									<ul style={{ fontSize: "18px" }}>
										<li>
											<strong>Hotline & Emergency Contact Information:</strong>{" "}
											If you are in immediate need of help,{" "}
											<a style={{ color: "#A6AB6E" }} href="/contact">
												{" "}
												contact us
											</a>
											. Our team is ready to support you.
										</li>
										<li>
											<strong>Referrals:</strong> Please{" "}
											<a style={{ color: "#A6AB6E" }} href="/contact">
												{" "}
												contact us
											</a>{" "}
											for any additional resources or referrals you may need.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Features />
				{/* <Volunteer style={true} /> */}
				{/* <Testimonial style={false} /> */}
				{/* <CtaArea /> */}
				<FAQ style={false} />
			</main>
			<FooterThree />
		</>
	);
};

export default ServicesPage;
