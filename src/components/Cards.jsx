import React from "react";

export default function Cards(props) {
  console.log(props);
  return (
    <main>
      <div className="card">
        <img src={props.imageUrl} alt="japan-image" />
        <div className="card--instruction">
          <div className="card--title">
            <h3>📍 {props.location}</h3>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>

          <h2>{props.title}</h2>
          <p className="card--date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
      {props.lineSeparator && <div className="line--separator"></div>}
    </main>
  );
}
