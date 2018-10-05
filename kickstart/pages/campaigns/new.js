import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory"; // we use lowercase factory b/c
// this is an instance of a contract
import web3 from "../../ethereum/web3";
// Link object is a React component that allows us to render anchor tags into our
// React components and navigate around the application. Router object allows
// us to programatically redirect people from one page to another page in our app
import { Link, Router } from "../../routes";

class CampaignNew extends Component {
  // We initialize state so we can keep track of the state of the minimumContribution
  // input. It will keep rerendering while the user is putting in their input.
  // At the bottom where we use state and event handler in the <Input /> tags..
  // we use the value property (value={}) where we take the state value and push
  // it back to the component. Next, the onChange is used to update the state
  // everytime the user types into the input.
  state = {
    minimumContribution: "",
    errorMessage: "",
    // Flag to check if action is loading
    loading: false
  };

  // Event handler. Whenever we have a form submittal, the browser will automatically
  // try to send the form to the backend server so, the event.preventDefault()
  // keeps the browser from attempting to submit the form.
  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });

      // This will redirect our user to the index page after a successful transaction
      Router.pushRoute("/");
    } catch (err) {
      // We set up a new state property
      // err ^ has a message property
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
