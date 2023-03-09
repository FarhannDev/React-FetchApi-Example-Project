import React, { Children } from "react";
export default function Box({ children }) {
  return (
    <div className="card rounded bg-dark">
      <div className="card-body">
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </div>
    </div>
  );
}
