"use client";
import MarqueeWrapper from "../components/MarqueeWrapper";
import Hero from "../components/Hero/Hero";
import ContactSection from "@/components/contact/ContactSection";
 export default function Home() {
	return (
        <div>
		<Hero />
				<MarqueeWrapper />
				<ContactSection />
			</div>
			);
}