# Software Engineer Portfolio

A modern, interactive portfolio website showcasing my skills, projects, and professional experience as a software engineer.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js 14** - React framework with server-side rendering and static site generation
- **Three.js** - JavaScript 3D library for creating interactive 3D graphics
- **Framer Motion** - Animation library for React
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Strongly typed programming language
- **React Three Fiber** - React renderer for Three.js

## <a name="features">🔋 Features</a>

👉 **Hero**: Captivating introduction featuring a spotlight effect and dynamic background.

👉 **Bento Grid**: Modern layout presenting personal information using cutting-edge CSS design techniques.

👉 **3D Elements**: Interactive 3D design elements, such as a GitHub-style globe and card hover effects, adding depth and engagement.

👉 **Testimonials**: Dynamic testimonials area with scrolling or animated content for enhanced engagement.

👉 **Work Experience**: Prominent display of professional background for emphasis and credibility.

👉 **Canvas Effect**: Innovative use of HTML5 canvas to create visually striking effects in the "approaches" section.

👉 **Responsiveness**: Seamless adaptability across all devices, ensuring optimal viewing experience for every user.

👉 **Performance Optimization**: Implemented dynamic imports and code splitting for faster load times.

👉 **Clean Code Architecture**: Organized component structure with separation of concerns for better maintainability.

👉 **Accessibility**: Designed with accessibility in mind, ensuring a great experience for all users.

👉 **Dark Mode**: Elegant dark mode implementation for comfortable viewing in different lighting conditions.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/arfathabbas/portfolio.git
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="contributing">👥 Contributing</a>

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## <a name="deployment">🚀 Deployment</a>

This portfolio is deployed on Vercel. You can view the live site at [your-portfolio-url.com](https://your-portfolio-url.com).

### Deployment Steps

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure build settings (Vercel will automatically detect Next.js)
4. Deploy!

## <a name="project-structure">📁 Project Structure</a>

```
/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── ui/           # UI components
│   ├── Hero.tsx      # Hero section
│   ├── ...
├── data/             # Data files
├── lib/              # Utility functions
├── public/           # Static assets
├── styles/           # Global styles
├── next.config.mjs   # Next.js configuration
├── package.json      # Project dependencies
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json     # TypeScript configuration
```

## <a name="customization">🎨 Customization</a>

To customize this portfolio for your own use:

1. Update the data in `data/index.ts` with your own information
2. Replace images in the `public/` directory
3. Modify color schemes in `tailwind.config.ts`
4. Adjust animations and effects to match your style

## <a name="license">📄 License</a>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## <a name="acknowledgments">🙏 Acknowledgments</a>

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the animation library
- [Three.js](https://threejs.org/) for the 3D graphics
- [Next.js](https://nextjs.org/) for the React framework
- All the amazing open-source contributors who make development easier

## <a name="contact">📬 Contact</a>

Arfath Abbas - [LinkedIn](https://linkedin.com/in/arfath-abbas-2a14851b0) - [GitHub](https://github.com/arfath-abbas) - [Twitter](https://twitter.com/arfathabbas07)

Project Link: [https://github.com/arfathabbas/portfolio](https://github.com/arfathabbas/portfolio)

## <a name="snippets">🕸️ Code Snippets</a>

<details>
<summary><code>data/index.ts</code></summary>

```typescript
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
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```ts
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
```

</details>