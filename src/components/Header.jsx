import React from "react";

function Header({ onSubmitHandler, btnId, data }) {
  return (
    <div className="header">
      <h2 className="header-title">Historical places of Iran</h2>
      <ul className="navbar">
        {data.map((tab) => (
          <NavbarItem
            onSubmitHandler={onSubmitHandler}
            btnId={btnId}
            title={tab.city}
            id={tab.id}
            key={tab.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Header;

function NavbarItem({ title, id, onSubmitHandler, btnId }) {
  return (
    <li>
      <button
        className={+btnId === +id ? "active" : ""}
        onClick={onSubmitHandler}
        data-id={id}
      >
        {title}
      </button>
    </li>
  );
}
