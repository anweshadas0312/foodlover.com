import React from "react";
import "./Team.css";
import { data } from "../../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            At FOODLOVER.COM, our team is the heart of our restaurant. Led by
            renowned Chef Ananya Sen, our skilled chefs bring creativity and
            passion to every dish. Our friendly and attentive staff ensures that
            every guest feels welcome and well taken care of, making your dining
            experience truly exceptional.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
