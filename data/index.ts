export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Finance Tracker",
    des: "FinTrack is a modern personal finance tracker built using Angular 19, Spring Boot and PostgreSQL. The app enables users to manage their income, expenses, and gain insights into their financial habits through dashboards and reports.",
    img: "/fin-track.svg",
    iconLists: [
      "/angular-icon.svg",
      "/bootstrap.svg",
      "/ts.svg",
      "/spring-boot.svg",
      "/aws.svg",
    ],
    link: "https://finance-tracker-angular-app.vercel.app/",
  },
  {
    id: 2,
    title: "CineStream – Explore What the World Is Watching",
    des: "CineStream is your one-stop destination to explore trending movies and TV series from around the world. Watch official trailers, browse by genre, search titles, and discover cast details—all powered by MovieDB.",
    img: "/cineStream.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/material-ui.svg",
      "/redux.svg",
    ],
    link: "https://cine-stream-one.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working alongside Arfath has been incredibly rewarding. His technical expertise and problem-solving abilities consistently impress our team. He approaches challenges with a positive attitude and always delivers high-quality code on time. Arfath's collaborative nature makes him an invaluable asset to any development project.",
    name: "Bhuvneesh Sayal",
    title: "Colleague at BT Group",
  },
  {
    quote:
      "Arfath has consistently demonstrated exceptional skills in both frontend and backend development. His ability to quickly adapt to new technologies and his commitment to best practices have significantly improved our project outcomes. He takes ownership of his work and communicates effectively across teams, making him a standout member of our engineering department.",
    name: "Anil Prasad",
    title: "Software Engineering Manager at BT Group",
  },
  {
    quote:
      "As a designer, I've worked with many developers, but Arfath stands out for his attention to detail and commitment to pixel-perfect implementation. He understands the importance of user experience and always finds elegant solutions to complex UI challenges. His technical skills combined with design sensibility make collaboration seamless and productive.",
    name: "Vinod",
    title: "Functional Designer",
  },
  {
    quote:
      "Arfath's technical proficiency and dedication to quality code have been instrumental to our team's success. He consistently delivers robust solutions while maintaining clean, maintainable codebases. His willingness to mentor junior developers and share knowledge demonstrates his commitment not just to code, but to the growth of the entire team.",
    name: "Prabhat Kumar",
    title: "Team Lead at BT Group",
  },
  {
    quote:
      "I've had the pleasure of mentoring Arfath during his early career, and I've been consistently impressed by his growth mindset and technical aptitude. He approaches each challenge with enthusiasm and never hesitates to dive into new technologies. His ability to quickly master complex concepts and apply them practically makes him an exceptional software engineer with tremendous potential.",
    name: "Krishna Prasad",
    title: "Senior Software Architect",
  },
];

export const companies = [
  {
    id: 1,
    name: "Amazon S3",
    img: "/aws.svg",
    nameImg: "/awsS3.svg",
  },
  {
    id: 2,
    name: "Netlify",
    img: "/netlify.svg",
    nameImg: "/netlifyName.svg",
  },
  {
    id: 3,
    name: "Angular",
    img: "/angular.svg",
    nameImg: "/angularName.svg",
  },
  {
    id: 4,
    name: "Postman",
    img: "/postman.svg",
    nameImg: "/postmanName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Associate - BT Group",
    desc: "Led frontend and backend development for enterprise-grade Angular, Spring Boot apps, optimized network tools, and modernized data systems   from Oracle to PostgreSQL, boosting performance and deployment efficiency.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Intern - Rexroth Bosch",
    desc: "Engineered PLC-based automation solutions, improving Industry 4.0 efficiency through hardware configuration and ladder logic programming.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Intern - NCBS",
    desc: "Enhanced electrical maintenance operations by working on critical lab equipment, wiring, and soldering within a high-stakes research environment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/arfath-abbas",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/arfathabbas07",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/arfath-abbas-2a14851b0",
  },
];
