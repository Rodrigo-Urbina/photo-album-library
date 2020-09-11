import React from "react";
import { Header, Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import Login from "../Login";

const menuItems = [
  {
    name: "albums",
    position: null,
  },
  {
    name: "photos",
    position: null,
  },
  // {
  //   name: "login",
  //   position: "right",
  // },
];

class Nav extends React.Component {
  renderMenuItems = (item) => {
    return (
      <Menu.Item
        position={item.position}
        key={item.name}
        name={item.name}
        as={NavLink}
        to={`/${item.name}`}
      />
    );
  };

  render() {
    return (
      <Menu tabular>
        <Menu.Item>
          <Link to="/">
            <Header as="h3" icon="camera retro" floated="right" />
          </Link>
        </Menu.Item>
        {Object.keys(menuItems).map((item) => {
          return this.renderMenuItems(menuItems[item]);
        })}
        {/* <Login /> */}
      </Menu>
    );
  }
}

export default Nav;
