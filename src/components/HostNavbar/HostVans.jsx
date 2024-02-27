import React from "react";
import { NavLink } from "react-router-dom";
import { getHostVans } from "../../apis/api";
import "./../../css/Host/hostlayout.css";

export default function HostVans() {
  const [vans, setVans] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function getInfo() {
      try {
        const data = await getHostVans();
        console.log(data.vans);
        setVans(data.vans);
      } catch (err) {
        console.log("Inside the Error Block");
        setError(`There was an Error: ${err.message}`);
      }
    }
    getInfo();
  }, []);

  const vanElements = vans ? (
    vans.map((van) => {
      return (
        <NavLink to={van.id} className="van--container" key={van.id}>
          <div className="image--container">
            <img src={van.imageUrl} />
          </div>
          <div className="van--information">
            <p className="van--name">{van.name}</p>
            <p className="van--price">
              &#36;{van.price} <span>/day</span>
            </p>
          </div>
        </NavLink>
      );
    })
  ) : (
    <h1>Loading ... </h1>
  );

  return (
    <div className="hostvans--container">
      <p className="hostvans--title">{!error && "Your Listed Vans"}</p>
      <div className="hostvans--container">
        {!error ? vanElements : <h1>{error}</h1>}
      </div>
    </div>
  );
}
