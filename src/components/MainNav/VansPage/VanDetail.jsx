import React from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";

import { getVanDetail } from "../../../apis/api";
import "./../../../css/MainNav/vandetail.css";

export default function VanDetail() {
  const [van, setVan] = React.useState(null);
  const params = useParams();

  const location = useLocation();
  console.log(location);

  React.useEffect(() => {
    async function getInfo(id) {
      const data = await getVanDetail(id);
      setVan(data.vans);
    }
    getInfo(params.id);
  }, [params.id]);

  const getColor = (type) => {
    console.log("click");
    return type === "simple"
      ? "button--simple"
      : type === "rugged"
      ? "button--rugged"
      : "button--luxury";
  };

  const search = location.state?.search || "";
  console.log(search);

  const vanElement = van ? (
    <>
      <NavLink
        to={`..${search}`}
        relative="path"
        className="back--to--host--vans vans--link"
      >
        &larr; <span>Back to {location.state?.type || "all"} vans</span>
      </NavLink>
      <div className="vandetail--outer--container">
        <div className="van--image--container">
          <img src={van.imageUrl} />
        </div>
        <div className="van--information">
          <div className={`van--type ${getColor(van.type)}`}>{van.type}</div>
          <p className="van--name">{van.name}</p>
          <p className="van--price">
            &#36;{van.price}
            <span>/day</span>
          </p>
          <p className="van--description">{van.description}</p>
          <div className="rent--button">
            <div>Rent this van</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading ...</h1>
  );

  return <>{vanElement}</>;
}
