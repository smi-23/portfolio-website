"use client"
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
  {
    title:"Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>Squelize</li>
        <li>Express</li>
      </ul>
    )
  },
  {
    title:"Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SW사관학교 정글</li>
        <li>경상남도 국립대학 경영정보학과 졸업</li>
      </ul>
    )
  },
  {
    title:"Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>공백</li>
        <li>공백</li>
      </ul>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return <section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image
        src="/images/about-image.png"
        width={500}
        height={500}
        alt="about image"/>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl fond-bold text-white mb-4">About Me</h2>
        <p className="text-base md:text-lg ">안녕하세요 저는 블라블라블라블라
          블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
        </p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
            >
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("experience")}
            active={tab === "experience"}
          >
            {" "}
            Experience{" "}
          </TabButton>
        </div>
        <div className="mt-8">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </div>
  </section>;
};

export default AboutSection;