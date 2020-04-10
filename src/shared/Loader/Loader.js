import React from "react";

function Loader({ gray, color, active, children }) {
  const isWrapper = children !== undefined;
  return (
    <div
      className={`loader ${gray ? "loader_grey" : ""} ${
        color ? "loader_color" : ""
      }`}
    >
      {isWrapper && (
        <div
          className={`loader__contentWrapper ${
            active ? "loader__contentWrapper_hidden" : ""
          }`}
        >
          {children}
        </div>
      )}
      {active && (
        <div className="loader__loaderContainer">
          <span className="loader__ball_1" />
          <span className="loader__ball_2" />
          <span className="loader__ball_3" />
        </div>
      )}
    </div>
  );
}

export default Loader;
