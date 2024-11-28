import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

// import Me4 from "@/public/img/me4.jpeg";
import me5 from "@/public/img/me5.jpg";

export default function Education() {
	return (
		<section className="grid gap-8 md:gap-12">
			<div className="text-center space-y-2">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
					Education
				</h1>
				<p className="text-muted-foreground max-w-[800px] mx-auto">
					Get to know more about my educational background.
				</p>
			</div>
			<div className="grid gap-8 md:gap-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="px-5">
						<div className="font-medium text-lg">
							2018 - 2022
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								University Adhirajasa Reswara Sanjaya Bandung
							</h2>
							<h3 className="text-md font-normal mb-3">
							Bachelor of Information Engineering
							| Computer Science
							</h3>
							<div className="grid gap-4 mb-4 grayscale hover:grayscale-0 transition-all ease duration-300">
								<Image
									src={me5}
									width={400}
									height={"100%"}
									alt="University"
									className="rounded-lg"
									style={{
										aspectRatio: "3/2",
										objectFit: "cover",
										width: "100%",
										objectPosition: "top"
									}}
								/>
							</div>
							
							{/* add gpa in a style */}
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 3.54 out of 4
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start ">
            <h2 className="font-semibold text-xl mt-7">
              Story
            </h2>
            <p className="text-md font-normal mb-3 md:mb-12">
              My story in education
            </p>
						
			<div>
								<p className="text-justify mb-2">
								My educational journey began in vocational high school, where I majored in Computer and Network Engineering. During this time, I developed a strong interest in technology, particularly the Ubuntu operating system, networking, and programming fundamentals like C++, HTML, CSS, and JavaScript. After graduating, I worked as a smartphone salesperson, but I realized that this profession did not align with my aspirations. Determined to pursue my dreams, I enrolled in the Informatics Engineering program at Universitas Adhirajasa Reswara Sanjaya. While studying, I worked at a minimarket in Bandung for three years to fund my education.
								</p>
								<p className="text-justify">
								In 2020-2021, the COVID-19 pandemic brought unexpected challenges, including job loss due to layoffs. Facing a tough job market, I focused on honing my programming skills and joined the Kampus Merdeka internship program at Hacktiv8 as a Frontend Developer. This marked the beginning of my career as a programmer. In January 2022, I successfully graduated and earned my bachelor&rsquo;s degree in Informatics Engineering, embarking on a new chapter as a professional programmer.
								</p>
							</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function GraduationCapIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
			<path d="M22 10v6" />
			<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
		</svg>
	);
}
