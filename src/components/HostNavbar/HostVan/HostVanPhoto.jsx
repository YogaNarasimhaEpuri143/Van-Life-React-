import React from "react";
import { useOutletContext } from "react-router-dom";
import "./../../../css/Host/hostvandetail.css";

export default function HostVanPhoto() {
  const vanDetail = useOutletContext();
  const data = vanDetail.currentVan;

  return (
    <div className="host--photo--outer--container">
      <img src={data.imageUrl} />
    </div>
  );
}
