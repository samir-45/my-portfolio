import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Eduverse Landing Page",
    description:
      "Eduverse is an interactive, user-friendly web platform designed to help learners improve their English vocabulary. Built using HTML, CSS, Tailwind CSS, Daisy UI, and JavaScript, the app features a clean UI and intuitive navigation system",
    image: "/projects/project1.png",
    tags: ["React.js", "Vite", "Tailwind CSS", "Daisy UI", "React Router", "Node.js", "Express.js", "MongoDB", "JWT"],
    demoUrl: "https://eduverse-sm.netlify.app/",
    githubUrl: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-samir-45",
  },
  {
    id: 2,
    title: "Plantify — Smart Plant Care Tracker",
    description:
      "Plantify is a modern MERN stack web application designed to help users efficiently track and manage their plants' health and care routines. It’s built using MongoDB, Express.js, React.js, and Node.js, with a focus on user-friendly design and practical functionality.",
    image: "/projects/project2.png",
    tags: ["React.js", "Vite", "Tailwind CSS", "Daisy UI", "React Router", "Node.js", "Express.js", "MongoDB", "JWT"],
    demoUrl: "https://sm-plantify.netlify.app/",
    githubUrl: "https://github.com/samir-45/Plantify-client",
  },
  {
    id: 3,
    title: "CareerCode — Developer Resource & Learning Hub",
    description:
      "CareerCode is a web-based platform designed to empower aspiring developers by providing curated resources, trending tech topics, and a collaborative knowledge-sharing community. The platform is crafted with a modern frontend experience and a scalable backend, making it ideal for learners and professionals alike",
    image: "/projects/project3.png",
    tags: ["React.js", "Vite", "Tailwind CSS", "Daisy UI", "React Router", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://carrer-code.netlify.app/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card flex flex-col md:flex-row rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image */}
              <div className="h-96 lg:h-72 min-w-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col justify-between">

                {/* Title */}
                <div>
                  <h3 className="text-xl text-start font-semibold mb-1"> {project.title}</h3>
                  <p className="text-muted-foreground text-start text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>


                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/samir-45"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
