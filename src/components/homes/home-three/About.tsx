import Image from "next/image"
import aboutAuthor from "@/assets/img/about/author.jpg"
import Link from "next/link"

interface ContentType {
   sub_title: string;
   title: JSX.Element;
   desc: JSX.Element;
   list: string[];
   author: string;
   designation: string;
}

const about_content: ContentType = {
	sub_title: "About us",
	title: (
		<>
			<span>We Make a Difference</span> in people&apos;s lives
		</>
	),
	desc: (
		<>
			Loving Arms, Inc. is dedicated to providing immediate, safe, and
			supportive housing for youth ages 12-18 who are runaway, homeless, or at
			risk of becoming homeless, as well as minors who are victims of domestic
			sex and labor trafficking and their families.{" "}
			<Link style={{ color: "#A6AB6E" }} href="/about">
				Learn more about us
			</Link>
			.
		</>
	),
	list: [
		"Referrals",
		"Counseling",
    "Housing Navigation",
		"Mentoring Resources",
		"Outreach Support",
    "More...",
	],
	author: "Cindy Williams",
	designation: "CEO & Founder, Loving Arms Inc."
};

const { sub_title, title, desc, list, author, designation } = about_content;

const About = () => {
   return (
			<div className="about-us-three pt-120 pb-55">
				<div className="container">
					<div className="row gap-80 align-items-center">
						<div className="col-xl-6">
							<div className="about-us-content-three mb-65">
								<div className="section-title mb-65">
									<span className="section-title__subtitle mb-10">
										{sub_title}
									</span>
									<h2>{title}</h2>
								</div>
								<p>{desc}</p>
								<ul className="list-style-one pt-15">
									{list.map((list, index) => (
										<li style={{fontSize: "18px"}} key={index}>{list}</li>
									))}
								</ul>
								<hr className="mt-30 mb-5" />
								<div className="about-author">
									<div className="about-author--img">
										<Image src={aboutAuthor} alt="Author" />
									</div>
									<div className="about-author--content">
										<h5>{author}</h5>
										<span>{designation}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default About
