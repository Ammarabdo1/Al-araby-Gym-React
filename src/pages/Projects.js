import React from "react";
import pigHeaderBgImg from "assets/images/ProjectsPigBgHeader.jpg";
import headerBgImg from "assets/images/ProjectsBgHeader2.jpg";
import HeaderPage from "components/HeaderPage";
import { title } from "utils/titles-text";
import ProjectsInfo from "components/Projects/ProjectsInfo";

const Projects = () => {
  return (
    <div>
      <HeaderPage
        title={title.page.project}
        pigHeaderBgImg={pigHeaderBgImg}
        headerBgImg={headerBgImg}
      />
      <ProjectsInfo />
    </div>
  );
};

export default Projects;
