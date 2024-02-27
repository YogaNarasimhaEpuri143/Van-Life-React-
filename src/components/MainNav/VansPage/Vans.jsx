import React from "react";

import { NavLink, useSearchParams } from "react-router-dom";

import "./../../../css/MainNav/vans.css";
import { getVans } from "./../../../apis/api";

export default function Vans() {
  const [vans, setVans] = React.useState(null);
  const [error, setErr] = React.useState(null);
  const [loading, setLoadingState] = React.useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    async function getVansInfo() {
      try {
        const data = await getVans();
        setVans(data.vans);
      } catch (err) {
        let errElement = `There was an Error: ${err.message}`;
        setErr(errElement);
      } finally {
        setLoadingState(false);
      }
    }
    getVansInfo();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  // Dynamic style of the button
  const getColor = (type) => {
    return type === "simple"
      ? "button--simple"
      : type === "rugged"
      ? "button--rugged"
      : "button--luxury";
  };

  const simple = {
    color: "red",
  };

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = filteredVans.map((van) => {
    return (
      <NavLink
        to={van.id}
        className="van--container"
        key={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <div className="image--container">
          <img src={`${van.imageUrl}`} />
        </div>
        <div className="van--info">
          <div className="van--details">
            <p style={{ color: "#161616" }}>{van.name}</p>
            <button className={getColor(van.type)}>{van.type}</button>
          </div>
          <div className="van--pricing">
            <p>&#36;{van.price}</p>
            <span>/day</span>
          </div>
        </div>
      </NavLink>
    );
  });

  const getNewSearchParamString = (key, value) => {
    // create a new URLSearchParams Object with old searchparam Object.
    const sp = new URLSearchParams(searchParams);
    console.log(sp.toString());

    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  };

  const handleFilterChange = (key, value) => {
    // It is ok, to modify the prev object directly, no need to clone the object while updating the state (React.useState())
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div className="vans--outer--container">
      <div className="vans--main--title">
        {!error ? <h1>Explore our van options</h1> : <h1>{error}</h1>}
      </div>
      <div className="vans--search--filters">
        {/* <NavLink to="?type=simple">Simple</NavLink>
        <NavLink to="?type=luxury">Luxury</NavLink>
        <NavLink to="?type=rugged">Rugged</NavLink> */}

        <NavLink
          to={getNewSearchParamString("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </NavLink>
        <NavLink
          to={getNewSearchParamString("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </NavLink>
        <NavLink
          to={getNewSearchParamString("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          // className={({ isActive }) =>
          //   isActive ? "my-link" : "van-type rugged"
          // }
        >
          Rugged
        </NavLink>
        {typeFilter ? (
          <div className="clear--filter">
            <NavLink to={getNewSearchParamString("type", null)}>
              Clear Filter
            </NavLink>

            {/* <button onClick={() => setSearchParams({"type": "Jedi"})}>Jedi</button> */}
            {/* <button onClick={() => handleFilterChange("type", "Jedi")}>Jedi</button> */}
          </div>
        ) : null}
      </div>
      <div className="vans--container">{!error && vanElements}</div>
    </div>
  );
}
