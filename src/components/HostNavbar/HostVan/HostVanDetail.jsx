import React from "react";
import { useOutletContext } from "react-router-dom";
import "./../../../css/Host/hostvandetail.css";

export default function HostVanDetail() {
  const vanDetail = useOutletContext();
  const data = vanDetail.currentVan;

  console.log(vanDetail);
  return (
    <div className="detail--outer--container">
      <p>
        Name: <span> {data.name}</span>
      </p>
      <p>
        Category: <span>{data.type}</span>
      </p>
      <p>
        Description: <span>{data.description}</span>
      </p>
      <p>
        Visibility: <span>Public</span>
      </p>
    </div>
  );
}
