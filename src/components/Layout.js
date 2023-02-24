import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "ri-home-smile-line",
    },
    {
      title: "About",
      path: "/about",
      icon: "ri-information-line",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "ri-user-location-fill",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "ri-contacts-fill",
    },
  ];

  return (
    <div>
      {/* Content  */}
      <div className="">{children}</div>
      {/* Footer */}
      <div className="fixed left-0 right-0 bottom-10">
        <div className="flex justify-center ">
          {menuItems.map((item, index) => (
            <div className="flex flex-col items-center justify-end">
            {location.pathname === item.path && (
              <div className="flex flex-col items-center">
                <div className="w-10 h-5 rounded-t-full bg-primary"></div>
                <div className="w-20 h-5 text-center rounded-t-full bg-primary">
                  <i className={`${item.icon} text-xl text-white `}></i>
                </div>
              </div>
            )}

              <div
                className={`px-20 py-5 bg-primary ${
                  index === 0 && "rounded-l"
                } ${
                  index === menuItems.length - 1 && "rounded-r"
                } flex items-center justify-center space-x-2`}
              >
                {location.pathname!== item.path && <i className={`${item.icon} text-secondary text-xl`}></i>}
                <Link to={`${item.path}`} className="text-xl text-secondary">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
