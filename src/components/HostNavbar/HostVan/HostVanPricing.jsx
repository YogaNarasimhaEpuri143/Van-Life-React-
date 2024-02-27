import React from "react";
import { useOutletContext } from "react-router-dom";
import "./../../../css/Host/hostvandetail.css";

export default function HostVanPricing() {
  const vanDetail = useOutletContext();
  const data = vanDetail.currentVan;

  return (
    <div className="van--price--container">
      <p className="van--price">
        &#36;{data.price} <span>/day</span>
      </p>
    </div>
  );
}
