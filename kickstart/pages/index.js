import React, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Component {
  // componentDidMount is 100% appropriate in React, but in next.js, there
  // is an extra requirement for data loading. Server side rendering attempts to
  // render our component on the server and then take the HTML and send it to
  // the browser. The catch is if we want to do our data fetching ( having our
  // Next server reach out to the ethereum network to get some initial data,
  // Next does not execute the componentDidMount). So to make sure that the data
  // fetching occurs, we have to use getInitialProps (very specific to Next.js)
  static async getInitialProps() {
    // we use static b/c it is defines a class function. With a static keyword
    // this function is not assigned to instances of the class, instead the function
    // is assigned to the class itself.
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    // { campaigns: campaigns } can be shortened to { campaigns } and is
    // provided to our Component as "props" and now we can freely reference
    // this.props.campaigns
    return { campaigns: campaigns };
  }

  /*
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }*/

  // renders text onto the screen for jsx
  render() {
    return <div>{this.props.campaigns[0]}</div>;
  }
}

// next NEEDS to see that a component has been exported in pages
export default CampaignIndex;
