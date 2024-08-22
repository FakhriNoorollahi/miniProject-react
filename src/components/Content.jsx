import React from "react";

function Content({ btnId, data }) {
  const { city, imageUrl, placeName } = data.find(
    (item) => +item.id === +btnId
  );

  return (
    <div className="content" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content-information">
        <h1>IR-{city}</h1>
        <p>{placeName}</p>
      </div>
    </div>
  );
}

export default Content;
