import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/mca_hero.png";

const projects = [
  {
    title: "Tickfest",
    url: "https://tickfest.com/",
    type: "Client Project",
    tech: "Full Stack",
    description:
      "A comprehensive event ticketing platform with real-time booking",
    image: "/Image/tickfest.png",
  },
  {
    title: "AI MindPulse",
    url: " https://ai-mindpulse.web.app/",
    type: "Personal Project",
    tech: "Full Stack",
    description: "AI MindPulse – an AI-driven system designed to deliver smart insights and automated solutions",
    image:
      "/public/Image/ai_mindmosel.png",
  },
  {
    title: "GROKAI",
    url: "https://www.grokaiworld.com/",
    type: "Client Project",
    tech: "Full Stack",
    description: "AI-powered platform for intelligent automation and insights",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Dinar Coin",
    url: "https://www.dinarcoin.xyz/",
    type: "Client Project",
    tech: "Full Stack",
    description: "Cryptocurrency platform with trading and wallet features",
    image: "/Image/dinarcoin.png",
  },
  {
    title: "Heritage-Nest",
    url: "https://heritage-nest.netlify.app/",
    type: "Personal Project",
    tech: "Frontend",
    description:
      "Modern real estate platform with property listings and search",
    image: "/Image/heritagenest.png",
  },
  {
    title: "Travel Vista",
    url: "https://tourism-management-6eed5.web.app/",
    type: "Personal Project",
    tech: "Full Stack with Auth",
    description: "Tourism management system with authentication and booking",
    image: "/Image/travelvista.png",
  },
  {
    title: "BD Shop",
    url: "https://bd-shop-frontend.vercel.app/",
    type: "Personal Project ",
    tech: "Full Stack with Auth",
    description:
      "A complete full-stack e-commerce application built with Next.js (App Router) on the frontend and Express.js + MongoDB on the backend",
    image: "/public/Image/bdshop.png",
  },
];

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "bootstrap 5",
    "JavaScript",
    "React",
    "DaisyUI",
    "Material UI",
  ],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB"],
  design: ["UI/UX Design", "Figma", "Wireframing", "Prototyping"],
};

const educationData = [
  {
    id: 1,
    title: "Complete Web Development Course",
    institution: "Programming Hero",
    description: `I completed the Complete Web Development Course from Programming Hero, where I learned both 
    front-end and back-end development. Through this course, I gained hands-on experience with 
    HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. I practiced building responsive 
    websites, dynamic applications, and MERN-stack projects. The course also helped me understand 
    API integration, debugging, and using Git/GitHub for version control. Overall, this training 
    strengthened my web development skills and prepared me to build real-world web applications.`,
    skills: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "API Integration",
      "Git/GitHub",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    highlighted: true,
  },
  {
    id: 2,
    title: "UI/UX Design Course",
    institution: "Great Learning - Beginner Level",
    description: `Completed a comprehensive beginner-level UI/UX course covering the basics of user interface 
    and user experience design. Learned layout structure, color theory, typography, and how to 
    design clean and user-friendly interfaces. Practiced creating wireframes and simple prototypes 
    in Figma and learned how to analyze user needs to improve usability.`,
    skills: [
      "Layout Design",
      "Color Theory",
      "Typography",
      "Figma",
      "User Analysis",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    highlighted: false,
  },
];

const Home = () => {
  const [currentEducation, setCurrentEducation] = useState(0);

  const nextSlide = () => {
    setCurrentEducation((prev) => (prev + 1) % educationData.length);
  };

  const prevSlide = () => {
    setCurrentEducation(
      (prev) => (prev - 1 + educationData.length) % educationData.length
    );
  };

  return (
    <main className="min-h-screen text-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi, I&apos;m Md Musarraf Hosen
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold mt-3 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              MERN Stack Web Developer
            </motion.h2>

            <motion.p
              className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I am a determined MERN Stack Developer who enjoys creating
              attractive and user-friendly web applications. I have strong
              skills in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and
              Angular. I confidently work with Node.js, Express.js, MongoDB, and
              build secure, scalable backend systems. I am good at understanding
              client needs and turning their ideas into effective,
              production-ready solutions.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <a
                href="#projects"
                className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/50"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-block border-2 border-gray-700 hover:border-indigo-500 text-gray-200 font-medium px-6 py-3 rounded-lg transition-all"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>

              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-indigo-500/30 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <img
                  src={heroImage}
                  alt="Md Musarraf Hosen"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 bg-gray-900 text-gray-200 rounded-full border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 bg-gray-900 text-gray-200 rounded-full border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              Database
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 bg-gray-900 text-gray-200 rounded-full border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Design</h3>
            <div className="flex flex-wrap gap-2">
              {skills.design.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 bg-gray-900 text-gray-200 rounded-full border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Education & Training
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentEducation * 100}%)` }}
            >
              {educationData.map((edu) => (
                <div key={edu.id} className="w-full flex-shrink-0">
                  <div
                    className={`${
                      edu.highlighted
                        ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/30 hover:border-indigo-500"
                        : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-indigo-500"
                    } backdrop-blur-sm p-8 rounded-xl transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                          {edu.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`${
                            edu.highlighted ? "text-2xl" : "text-xl"
                          } font-semibold text-indigo-300 mb-1`}
                        >
                          {edu.title}
                        </h3>
                        <p
                          className={`${
                            edu.highlighted
                              ? "text-indigo-400"
                              : "text-gray-400"
                          } font-medium mb-4`}
                        >
                          {edu.institution}
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {edu.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all border border-gray-700 hover:border-indigo-500 shadow-lg"
            aria-label="Previous education"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all border border-gray-700 hover:border-indigo-500 shadow-lg"
            aria-label="Next education"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {educationData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentEducation(idx)}
                className={`${
                  currentEducation === idx
                    ? "w-8 bg-indigo-500"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                } h-2 rounded-full transition-all`}
                aria-label={`Go to education ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Client & Personal Projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="block bg-gray-800/40 backdrop-blur-xl border border-gray-700 rounded-xl overflow-hidden hover:-translate-y-2 hover:border-indigo-500 transition shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-400">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {p.type} • {p.tech}
                </p>
                <p className="text-gray-300 mt-3">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work Experience
        </h2>
        <p className="text-center text-gray-400 mb-10">
          My professional journey
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* BdCalling IT Experience */}
          {/* <div className="relative pl-8 pb-8 border-l-2 border-indigo-500/30">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full ring-4 ring-gray-900"></div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">
                    Junior Web Developer
                  </h3>
                  <p className="text-gray-400 mt-1">BdCalling IT</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block text-sm px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                    3 Months
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                I worked as a Junior Web Developer at bdCalling IT, where I
                helped develop and maintain websites using HTML, CSS,
                JavaScript, and PHP. I supported senior developers by adding new
                features, fixing bugs, and improving website performance. I
                worked with MySQL databases, integrated APIs, and ensured
                responsive design for better user experience. I also used Git
                for version control and collaborated with the team to meet
                project requirements and deliver updates on time.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  HTML/CSS
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  JavaScript
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  PHP
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  MySQL
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  API Integration
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  Git
                </span>
              </div>
            </div>
          </div> */}

          {/* Freelancing Experience */}
          <div className="relative pl-8">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full ring-4 ring-gray-900"></div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">
                    Freelance Web Developer
                  </h3>
                  <p className="text-gray-400 mt-1">Self-Employed</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    Ongoing
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Working as a freelance web developer, delivering MARN-Stack Web
                solutions to local and international clients. Specializing in
                building responsive, user-friendly websites and web applications
                using modern technologies. Successfully completed multiple
                client projects including e-commerce platforms, business
                websites, and custom web applications. Managing projects from
                initial consultation through deployment and maintenance.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  MERN-Stack Development
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  React
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  Node.js
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  MongoDB
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  Client Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-12 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Let&apos;s build something great together
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Email Card */}
            <a
              href="mailto:musarrafhosen52@gmail.com"
              className="group bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-xl border-2 border-indigo-500/30 hover:border-indigo-500 transition-all hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-all">
                  <svg
                    className="w-8 h-8 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  Email
                </h3>
                <p className="text-indigo-400 font-medium group-hover:text-indigo-300 break-all text-sm">
                  musarrafhosen52@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/8801568818480"
              target="_blank"
              rel="noreferrer"
              className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-6 rounded-xl border-2 border-green-500/30 hover:border-green-500 transition-all hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-all">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  WhatsApp
                </h3>
                <p className="text-green-400 font-medium group-hover:text-green-300">
                  +880 1568818480
                </p>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/profile.php?id=100095485868640"
              target="_blank"
              rel="noreferrer"
              className="group bg-gradient-to-br from-blue-600/10 to-blue-800/10 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-600/30 hover:border-blue-600 transition-all hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-all">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  Facebook
                </h3>
                <p className="text-blue-500 font-medium group-hover:text-blue-400">
                  Follow me
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/md-musarraf-hosen/"
              target="_blank"
              rel="noreferrer"
              className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-500/30 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  LinkedIn
                </h3>
                <p className="text-blue-400 font-medium group-hover:text-blue-300">
                  Connect with me
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
