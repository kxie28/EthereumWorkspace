// The markup to put into the Layout.js file. This is to keep the Layout.js
// nice and simple. This file is solely used to used as a header.

// For the Menu style= {{  }},  for JSX and we want to pass in an object literal,
// we need two sets of curly braces, 1st set: hey we're writing a js expression,
// the 2nd set is the object literal we're creating.

import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">CrowdCoin</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
