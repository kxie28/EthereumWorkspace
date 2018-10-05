import React, { Component } from "react";
import Layout from "../../components/Layout";

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
    props.query.address;
  }
  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
      </Layout>
    );
  }
}

export default CampaignShow;
