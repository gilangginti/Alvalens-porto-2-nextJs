import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Gin.Tech | Portofolio",
	description:
		"Hello, my name is Muhammad Gilang Fauzi. I am a software engineer with 4 years of experience in the field of software development. I specialize in both backend and frontend development, enabling me to create efficient and high-quality applications from the server to the user interface. I am committed to delivering innovative technology solutions that meet the needs of clients and organizations.",
	author: "Gilang Fauzi",
	siteUrl: "https://www.gin-tech.site",
	applicationName: "Alvalens",
	keywords: [
		"Gilang",
		"Gin.Tech",
		"Muhammad Gilang Fauzi",
		"Fauzi",
		"Gin",
		"Gin Technology",
		"Gin Portofolio",
		"Gilang Portofolio",
		"Gin Porto",
	],
	openGraph: {
		type: "website",
		url: "https://www.gin-tech.site",
		title: "Gilang | Portofolio",
		site_name: "Gilang | Portofolio",
		description: "My name is Gilang, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Gilang Portofolio",
			},
		],
		site_name: "Gilang | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
