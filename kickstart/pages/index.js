import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

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

  // iterate through the list of campaign addresses, and for every address, we'll
  // create a different object. Each object will represent a different card.
  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          // Use backticks to use the ES6 template string. We need a dynamic
          // address that is the current campaign we are iterating over
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        // fluid stretches each card to the side of the page (far left to far right)
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  /*
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }*/

  // renders text onto the screen for jsx
  render() {
    return (
      // b/c of the Layout component, every page will have the layout component
      // in the page, in this case, a header.
      <Layout>
        <div>
          <h3>Open Campaigns</h3>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                // primary is the same as primary={true}, primary adds a blue styling
                // to the button
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

// next NEEDS to see that a component has been exported in pages
export default CampaignIndex;
