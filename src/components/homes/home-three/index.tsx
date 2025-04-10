"use client";
import { useState } from "react";
import HeaderOne from "@/layout/headers/HeaderOne";
import HeroArea from "./HeroArea";
import Charity from "./Charity";
import CharitySecond from "./CharitySecond";
import About from "./About";
import CtaArea from "./CtaArea";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Features from "./Features";
import FooterThree from "@/layout/footers/FooterThree";
import GrandOpening from "@/components/events/single/GrandOpening";

const HomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
		<>
			<HeaderOne style_1={false} style_2={true} />
			<main>
				<HeroArea />
        <GrandOpening />
				<Charity/>
				<About />
				<CtaArea />
				<FAQ style={false} />
				<Testimonial />
        <CharitySecond />
				<Features />
			</main>
			<FooterThree />
		</>
	);
}

export default HomeThree;
