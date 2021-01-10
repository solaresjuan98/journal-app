import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.pinimg.com/originals/2f/47/74/2f47742f3e2eb6b62345e4d060f3e19e.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">A new day</p>
        <p className="journal__entry-content">Hola a todos chavales un fuerte abrazo y un feliz año 2021</p>
      </div>

      <div className="journal__entry-date-box">
          <span>Monday</span>
          <h4>28</h4>
      </div>
    </div>
  );
};
