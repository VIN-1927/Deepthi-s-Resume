import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, to } = props;
  const [expand, setExpand] = useState(false);
  return (
    <li onClick={props.onClick}>
      <NavLink
        exact
        to={to}
        onClick={() => {
          setExpand((e) => !e);
        }}
        className={`menu-item`}
      >
        <div className="menu-icon">
          <i class={iconClassName}></i>
        </div>
        <span>{name}</span>
      </NavLink>

      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;