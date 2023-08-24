import React from "react";
import { Link } from "react-router-dom";

const Menu = ({header, items, active, setActive, onCloseMenu}) => {
    const handleLinkClick = () => {
        onCloseMenu();
    };

    return (
        <div
            className={active ? "menu active" : "menu"}
            onClick={() => setActive(false)}
        >
            <div className="menu__content" onClick={(e) => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul className="menu__list">
                    {items.map((item, key) =>
                        <li key={key} className="menu__list-item">
                            <img src={item.icon} className="menu__list-item-img"/>
                            <Link to={item.href} onClick={handleLinkClick}>
                                {item.value}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
