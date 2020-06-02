import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard(props) {
  return (
    <div
      style={{
        border: "1px solid red",
        width: "300px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>{props.service.title}</p>
      <p>{props.service.description}</p>
      <p>{props.service.service_Provider}</p>
      <p>{props.service.phone_number}</p>
      <Link to="/edit-service">
        {" "}
        <button onClick={() => props.getSer(props.service)}> Edit</button>{" "}
      </Link>
      <button onClick={() => props.delete(props.service._id)}>Delete</button>
    </div>
  );
}