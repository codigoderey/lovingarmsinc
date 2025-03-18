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
import Image from "next/image"
import aboutAuthor from "@/assets/img/about/author.jpg";

const InnerAbout = () => {
   return (
			<>
				<HeaderOne style_1={false} style_2={true} />
				<main>
					<Breadcrumb page_title="About Us" page_list="About" style={false} />
					<div className="about-us-three pt-120 pb-55">
						<div className="container">
							<div className="row gap-80 align-items-center">
								<div className="col-xl-6">
									<div className="about-us-content-three mb-65">
										<div className="section-title mb-65">
											<span className="section-title__subtitle mb-10">
												About us
											</span>
											<h2>We make a difference in peoples lives</h2>
										</div>
										<h3>Mission Statement</h3>
										<p>
											Loving Arms, Inc. is dedicated to providing immediate,
											safe, and supportive housing for youth ages 12-18 who are
											runaway, homeless, or at risk of becoming homeless, as
											well as minors who are victims of domestic sex and labor
											trafficking. We offer a nurturing, trauma-informed
											environment where children and youth are valued, heard,
											and given the opportunity to heal. Through holistic,
											wrap-around services, family reunification, and community
											collaboration, we empower youth and their families to
											overcome their challenges and build brighter futures, free
											from the threat of abuse, neglect, or exploitation.
										</p>
										<hr className="mt-30 mb-4" />
										<h3>Vision Statement</h3>
										<p>
											We envision a world where every child and youth,
											regardless of their circumstances, has immediate access to
											safe, stable, and supportive housing, ensuring their basic
											needs are always met. In this ideal world, young people
											never have to sacrifice their safety or well-being for a
											place to sleep. We strive for an environment where every
											child is empowered, and every family is supported,
											allowing youth to thrive and break free from the cycles of
											trauma. Our vision is a community where love, safety, and
											opportunity are available to every young person, and where
											every child has the right to live with dignity and hope
											for the future.
										</p>
										<hr className="mt-30 mb-4" />
										<h3>Values Statement</h3>
										<ul style={{ fontSize: "18px" }}>
											<li>
												<strong>Unconditional Love:</strong> We provide genuine,
												unwavering care to every child, valuing them as
												individuals and nurturing them through their unique
												experiences and challenges.
											</li>
											<li>
												<strong>Safety and Security:</strong> We are committed
												to creating a safe haven where youth can find refuge
												from danger, neglect, and abuse, where their physical
												and emotional well-being is protected.
											</li>
											<li>
												<strong>Family Reunification and Stabilization:</strong>{" "}
												We prioritize the healing of families, offering support
												to both youth and their caregivers, and working toward
												reunification and long-term stability.
											</li>
											<li>
												<strong>Collaboration and Community:</strong> We believe
												in the power of working together—youth, families,
												caregivers, and community partners—creating a network of
												support to foster lasting, positive change.
											</li>
											<li>
												<strong>Equity and Access:</strong> We are committed to
												providing equitable access to resources and
												opportunities, ensuring that all children, regardless of
												their background, have the tools they need to succeed.
											</li>
											<li>
												<strong>Hope and Empowerment:</strong> We believe in the
												transformative power of hope. By providing youth with
												the resources and guidance they need, we empower them to
												overcome their past experiences and build brighter
												futures.
											</li>
											<li>
												<strong>Trauma-Informed Care:</strong> We approach every
												individual with understanding and compassion,
												recognizing the profound impact trauma has on their
												lives and providing services designed to help them heal
												and thrive.
											</li>
										</ul>
										<p className="lead">
											These guiding principles shape every aspect of our work
											and ensure that Loving Arms, Inc., remains a beacon of
											hope and a source of healing for youth and families in
											need. Keep reading to learn about he founder and CEO of
											LovingArms Inc., Cindy Williams.
										</p>
										<hr className="mt-30 mb-4" />
										<h3>Our Founder</h3>
										<Image
                      src={aboutAuthor}
											alt="Cindy Williams"
											className="mb-4"
											width={300}
										/>
										<p>
											Cindy R. Williams is a seasoned organizational development
											and housing professional with over 40 years of non-profit
											expertise in working with runaway, homeless and unstably
											housed minors, young adults and their families. Cindy has
											30 years of advanced youth development experience
											particularly in the field of Child Welfare and Juvenile
											Justice, and for more than 20 years, she provided
											emergency shelter to the most vulnerable youth in the
											state of South Carolina and Maryland.{" "}
										</p>
										<p>
											Today, she has combined her expertise into developing and
											leading the operations of a growing multi-state nonprofit
											and two for-profit organization. Through her leadership
											and guidance, the organization in Baltimore City removes
											barriers to housing opportunities for the most
											marginalized youth in our city. This organization, LOVING
											ARMS, INC., was founded in October of 1999. Cindy was
											preparing to become a lawyer at that time but gave up that
											dream to follow what has become her life’s work.
										</p>
										<p>
											Cindy is the wife of Darroll Cribb, owner of Compassionate
											Care Services, LLC., an Outpatient Mental Health Center in
											Baltimore and mother to two children, Joey, a retired
											Captain from the United States Army and master’s Level
											Social Worker, and Sharana, a master’s level Clinical
											Social Worker, State Director and Entrepreneur, both
											living in South Carolina. She is also the proud
											grandmother of three amazing grandchildren, JeQuan,
											Kynnedy and Jediah, who she states keeps her motivated to
											do this work. She has a graduate degree in Social Work
											from the University of South Carolina and is licensed to
											practice in South Carolina and Maryland.{" "}
										</p>
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
}

export default InnerAbout;
