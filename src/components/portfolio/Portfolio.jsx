import { useState } from "react";
import Project from "../project/Project.jsx";

export default function Portfolio() {
  const [projects] = useState([
    {
      name: "logoCreator",
      description: "SVG Generator",
      link: "https://github.com",
      repo: "https://github.com/acolao/Logo-Creator.git",
    },
    {
      name: "passwordJavaScript",
      description: "JavaScript Password Generator",
      link: "https://acolao.github.io/Password-JavaScript/",
      repo: "https://github.com/acolao/Password-JavaScript.git",
    },
    {
      name: "recipeSearcher",
      description: "API",
      link: "https://epicasino.github.io/Feed-Me/",
      repo: "https://github.com/epicasino/Feed-Me.git",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

