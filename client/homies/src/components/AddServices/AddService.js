import React from "react";
import { Link } from "react-router-dom";

export default function AddService(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={props.handleChange}
        value={props.service.title}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        onChange={props.handleChange}
        value={props.service.description}
      />
      <input
        type="text"
        placeholder="service provider"
        name="service_Provider"
        onChange={props.handleChange}
        value={props.service.service_Provider}
      />
      <input
        type="text"
        placeholder="phone number"
        name="phone_number"
        onChange={props.handleChange}
        value={props.service.phone_number}
      />
      <Link to="/service-list">
        {" "}
        <input
          type="button"
          value={props.service.edit ? "edit" : "add"}
          onClick={props.handleAction}
        />
      </Link>
    </div>
  );
}