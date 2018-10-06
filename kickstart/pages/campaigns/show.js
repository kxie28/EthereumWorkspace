import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends Component {
  // We need to get a handle on the campaign that we're trying to look at and
  // call the getSummary() function in Campaign.sol. Anytime we want to fetch
  // data about a given campaign or anything inside a page component, we define
  // the getInitialProps function. It is called before anything is rendered on
  // the screen. We have the parameter of props b/c in the routes, we have an
  // address wildcard. This is a separate props object that is in the actual
  // component instance. The props object has a property of query, and one
  // property of the query is token out of the url that we asked our routing
  // library for and is available as address.
  static async getInitialProps(props) {
    // with props.query.address, we're able to log out the address of the contract
    // the user is trying to view. Now we need to make a new instance of the contract
    // by using web3 library, plug our address into that, then get info directly
    // off of that, we will use a new file inside the ethereum directory to create
    // campaigns in this situation so any other file or component needs access
    // to a campaign
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      // we want to give access to props.query.address to the components in the
      // render() method.
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    // destructuring the props object b/c we're making an item for each value
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests withdraw money",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver"
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers"
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign"
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (Ether)",
        description:
          "The balance is how much money this campaign has left to spend"
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
