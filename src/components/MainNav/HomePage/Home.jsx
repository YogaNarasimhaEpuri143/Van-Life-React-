import React from "react";

import "./../../../css/MainNav/home.css";

export default function Home() {
  return (
    <div className="home--container">
      <div>
        <p className="home--main--text">
          You got the travel plans, we got the travel vans.
        </p>
        <p className="home--description">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
      </div>
      <button className="home--button">Find Your Van</button>
    </div>
  );
}
