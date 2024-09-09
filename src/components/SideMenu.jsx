import React, { useState, useEffect } from "react";
import logo from "../assets/kids.png";
// import Avatar from '../assets/avatar.jpg';
import MenuItem from "./MenuItem";
import Footer from "../components/layout/footer"

const menuItems = [
  {
    name: "Portfolio",
    exact: true,
    to: "/",
    iconClassName: "bi bi-shuffle",
  },
  {
    name: "About",
    exact: true,
    to: "/about",
    iconClassName: "bi bi-file-person-fill",
  },

  {
    name: "Content",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-diagram-3-fill",
    subMenus: [
      { name: "Qualifications", to: "/content/qualifications" },
      { name: "Experience", to: "/content/experience" },
    ],
  },

  { name: "Contact", exact:true, to: `/contact`,
   iconClassName: "bi bi-vector-pen" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }

    props.onCollapse(inactive);
    // eslint-disable-next-line
  }, [inactive]);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="kids" />
        </div>

        <div
          onClick={() => {
            setInactive(!inactive);
          }}
          className="toggle-menu-btn"
        >
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      
      <div className="divider"> </div>

      <div className='portfolio'>
        <h4> PORTFOLIO</h4>
      </div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          
        
        </ul>
      </div>
      

      <Footer></Footer>
    </div>
  );
};

export default SideMenu;
