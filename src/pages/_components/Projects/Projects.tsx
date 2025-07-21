import { ArrowRight } from "@/components/icons/ArrowRight";

import ProxyServer from "@/assets/ProxyServer.png";
import TodoList from "@/assets/TodoList.png";
import SectionTransition from "@/components/ui/SectionTransition";

const projects = [
  {
    year: 2025,
    title: "Proxy Server",
    description: "Built with C++ and asio library",
    image: ProxyServer,
    link: "https://github.com/manasamancharla/Proxy-Server",
  },
  {
    year: 2024,
    title: "TodoList App",
    description:
      "A TodoList App built with React Native for seamless task management. Powered by Appwrite for backend services, the app allows users to create, organize, and track their tasks efficiently.",
    image: TodoList,
    link: "https://github.com/manasamancharla/TodoList",
  },
];

const Projects = () => {
  return (
    <>
      <SectionTransition className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-[1040px] flex flex-col gap-6 pb-32 pt-24">
          <h2 className="responsive-h2 max-w-[593px] self-stretch text-text">
            Projects in My Learning Journey.
          </h2>
          <p className="body-bold text-text-neutral max-w-[593px] self-stretch">
            Exploring new technologies through real-world projects. Each project
            marks a step forward in my coding journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {projects.map((project, index) => (
              <a
                key={index}
                className="flex flex-col items-start overflow-hidden gap-2 group"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="self-stretch w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
                />
                <p className="subtitle-bold text-text-neutral">
                  {project.year}
                </p>
                <h4 className="heading-4-bold text-text self-stretch">
                  {project.title}
                </h4>
                <p className="body-regular text-text-neutral self-stretch">
                  {project.description}
                </p>
                <span className="flex items-center gap-2 md:mt-2 md:mb-2 text-text">
                  <p className="link-hover-animation group-hover:link-hovered-animation subtitle-bold text-text">
                    Read more
                  </p>
                  <ArrowRight className="w-4 h-4 text-text transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionTransition>
    </>
  );
};

export default Projects;
