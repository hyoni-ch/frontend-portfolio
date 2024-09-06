import React from "react";

export default function Skills() {
  const skillsData = [
    {
      category: "Language",
      skills: ["javaScript", "typescript", "python"],
    },
    {
      category: "Framework / Library",
      skills: ["React", "Redux", "Node.js", "Express", "Next.js", "express"],
    },
    {
      category: "MarkUp",
      skills: ["HTML", "CSS"],
    },
    {
      category: "Version Control",
      skills: ["Git", "Github"],
    },
    {
      category: "Deployment",
      skills: ["netlify"],
    },
  ];

  return (
    <>
      <div id="skillsBox" className="h-24" />

      <h2 className="text-3xl border-b border-gray-300 mb-5">SKILLS</h2>

      <div className="flex flex-col gap-5">
        {skillsData.map((skillCategory, index) => (
          <div className="flex items-center" key={index}>
            <div className="min-w-40 text-lg hidden md:min-w-52 sm:block">
              {skillCategory.category}
            </div>
            <div className="flex flex-wrap gap-5 text-sm md:text-base ">
              {skillCategory.skills.map((skill, idx) => (
                <div
                  className="text-purple-800 px-5 py-1 bg-gray-200 rounded-lg"
                  key={idx}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
