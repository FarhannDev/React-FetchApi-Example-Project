import React from "react";

export default function BoxTitle({ title }) {
  return (
    <div className="card-title border-bottom pb-2 pt-2">
      <h3 className="text-white">{title}</h3>
    </div>
  );
}
