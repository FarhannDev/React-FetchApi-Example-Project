import React, { Children } from "react";

export default function Container({ children }) {
  return (
    <div className="container py-5 mt-3">
      <div className="d-flex flex-column">
        <div className="row align-content-start">
          <div className="col-*">
            {Children.map(children, (child) => (
              <>{child}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
