import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            posuere nulla eu augue vehicula scelerisque. Suspendisse tortor
            eros, malesuada et orci in, pellentesque posuere sem. Phasellus nec
            pellentesque risus. Pellentesque luctus ligula elementum,
            consectetur quam id, blandit dolor. Duis elit elit, feugiat nec leo
            sed, lacinia feugiat nunc. Sed nunc nisl, facilisis sed eleifend
            quis, bibendum at ex. Donec at volutpat justo, a posuere erat.
            Curabitur a lorem vel massa dapibus maximus. Sed a consequat lacus,
            in volutpat ipsum. Nullam eu porta sapien. Vestibulum ullamcorper
            pellentesque justo sit amet eleifend. Vestibulum urna diam, luctus
            eget convallis sed, mollis vitae orci. Aliquam a est eu lorem
            ultrices dapibus. Nulla ut elementum massa. Nulla auctor luctus
            risus, quis rutrum arcu convallis non. Phasellus purus eros,
            pulvinar efficitur lorem sed, sollicitudin pretium lacus.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Can Guler</div>
          <div>20th March, 9 pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
