"use client";
import MarqueeWrapper from "../components/MarqueeWrapper";
import Hero from "../components/Hero/Hero";
import ContactSection from "@/components/contact/ContactSection";
import ProjectSection from "@/components/Projects/ProjectSection";
import projectData from "../../content/projects/project1.json";
const projects = Array.isArray(projectData) ? projectData : [projectData];

 export default function Home() {
	return (
        <div>
		<Hero />
				<MarqueeWrapper />
				<ProjectSection projects={projects} />
				<ContactSection />
			</div>
			);
}