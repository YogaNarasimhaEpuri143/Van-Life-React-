import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getVanDetail } from "../../../apis/api";
import "./../../../css/Host/hostvaninfo.css";

export default function HostVanInfo() {
  const [van, setVan] = React.useState(null);
  const [loading, setLoadState] = React.useState(true);
  const params = useParams();

  React.useEffect(() => {
    async function getInfo(id) {
      try {
        const data = await getVanDetail(id);
        setVan(data.vans);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadState(false);
      }
    }
    getInfo(params.id);
  }, [params.id]);

  const getColor = (type) => {
    return type === "simple"
      ? "button--simple"
      : type === "rugged"
      ? "button--rugged"
      : "button--luxury";
  };

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  const vanElement = van ? (
    <div className="van--container">
      <div className="image--container">
        <img src={van.imageUrl} />
      </div>
      <div className="van--information">
        <div className={`van--type ${getColor(van.type)}`}>{van.type}</div>
        <p className="van--name">{van.name}</p>
        <p className="van--price">
          &#36;{van.price} <span>/day</span>
        </p>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    <div>
      <NavLink to=".." relative="path" className="back--to--host--vans">
        &larr; <span>Back to all vans</span>
      </NavLink>
      <div className="Hostvan--detail--container">
        {vanElement}
        <div className="Hostvan--detail--navbar">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={{ currentVan: van }} />
      </div>
    </div>
  );
}
