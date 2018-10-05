import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory"; // we use lowercase factory b/c
// this is an instance of a contract
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  // We initialize state so we can keep track of the state of the minimumContribution
  // input. It will keep rerendering while the user is putting in their input.
  // At the bottom where we use state and event handler in the <Input /> tags..
  // we use the value property (value={}) where we take the state value and push
  // it back to the component. Next, the onChange is used to update the state
  // everytime the user types into the input.
  state = {
    minimumContribution: ""
  };

  // Event handler. Whenever we have a form submittal, the browser will automatically
  // try to send the form to the backend server so, the event.preventDefault()
  // keeps the browser from attempting to submit the form.
  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(this.state.minimumContribution).send({
      from: accounts[0]
    });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>

        <Form onSubmit={this.onSubmit}>
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

          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
