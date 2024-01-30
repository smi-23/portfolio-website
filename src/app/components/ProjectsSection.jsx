"use client"
import React, {useState} from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "title 1 name",
    description: "description about project",
    image: "/images/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
    {
      id: 2,
      title: "title 2 name",
      description: "description about project",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
    },
    {
      id: 3,
      title: "title 3 name",
      description: "description about project",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
    },
    {
      id: 4,
      title: "title 4 name",
      description: "description about project",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
    },
    {
      id: 5,
      title: "title 5 name",
      description: "description about project",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
    },
    {
      id: 6,
      title: "title 6 name",
      description: "description about project",
      image: "/images/about-image.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
    }
]
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export  default ProjectsSection;