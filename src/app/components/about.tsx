"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tab";

type TabData = {
  title: string;
  id: string;
  content: JSX.Element;
};

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>GraphQL</li>
        <li>PostgreSQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.A. Human Resources Management and Education - Tel Hai Collage</li>
        <li>
          Quality Assurance Tester & SQL Course - Technion Israel Institute of
          Technology
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isTransition, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="about" src="/images/hero.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Results-driven Full-stack Developer specializing in React and
            Node.js with proficiency in TypeScript and JavaScript. Enthusiastic
            problem solver who thrives on collaboration and actively seeks
            solutions. Adept at utilizing GraphQL for data querying and
            passionate about creating seamless user experiences. Committed to
            environmental awareness, strong listening skills, and fostering
            diverse perspectives.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {isTransition ? null : TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
