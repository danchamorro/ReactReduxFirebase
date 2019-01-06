import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section projects-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque
            distinctio deleniti accusantium aperiam? Reiciendis, adipisci
            deleniti nemo earum maxime ab pariatur et consequuntur ratione
            quaerat sapiente impedit provident voluptatem.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Dan The Man </div>
          <div>2nd September, 2am </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
