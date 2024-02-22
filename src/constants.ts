export const frontEndTech = [
	"HTML5",
	"CSS3",
	"Tailwind",
	"Styled Components",
	"JavaScript",
	"jQuery",
	"React",
	"Redux",
	"Next.js",
	"TypeScript",
] as const;

export const backEndTech = [
	"Node/Express.js",
	"Java",
	"Spring Boot",
	"Prisma",
	"MySQL",
	"PostgreSQL",
	"MongoDB",
	"GraphQL/Apollo",
	"Postman",
] as const;

export const otherTech = [
	"Git/Terminal",
	"Agile Development",
	"Algorithms/Data Structures",
	"CI/CD",
	"GitHub Actions",
	"Google Analytics",
	"Contentful",
	"Jest Testing",
	"Docker",
	"AWS",
] as const;

export const education = [
	{
		school: "Graceland University",
		degree: "Bachelor of Science in Nursing",
		graduation: "2014",
	},
	{
		school: "Georgia Institute of Technology",
		degree: "Full-Stack Web Development Certificate",
		graduation: "2021",
	},
] as const;

export const experience = [
	{
		title: "Software Engineer",
		company: "Tide Cleaners",
		date: "Jan 2022 - Present",
		description: [
			"Led the architecture, design, and development of two full-stack applications using NextJS, Nodejs, Typescript, and Tailwind.",
			"Oversaw the health of the system, addressed performance issues, and enhanced application efficiency by employing techniques on both the server and client sides.",
			"Implemented unit and automation tests to ensure high-quality software solutions.",
			"Maintained an ASP.NET core product while debugging and resolving client and server issues.",
		],
	},
	{
		title: "ICU Registered Nurse",
		company: "Wellstar Hospital",
		date: "Aug 2019 - Jan 2022",
		description: [
			"Delivered critical patient care in a dedicated COVID unit.",
			"Collaborated with an interdisciplinary team to ensure the desired patient outcomes.",
		],
	},
	{
		title: "ICU Registered Nurse",
		company: "Northside Hospital",
		date: "Aug 2015 - Mar 2020",
		description: [
			"Effectively supervised a team of 12-16 nursing staff and implemented several performance improvement activities.",
			"Served a leadership role by providing the highest quality of patient care and by precepting new nurses.",
		],
	},
] as const;
