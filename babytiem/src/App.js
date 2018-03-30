import 'semantic-ui-css/semantic.min.css';

import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Form,
  Header,
  Icon,
  List
} from 'semantic-ui-react';

import logo from './logo.svg';
import { mockPotties } from './mockData/mockPotties';
import { pottyOptions } from './pottyOptions';

class Potty extends Component {
  render() {
    const { potty } = this.props;
    const { id, activity, icon, date, type, notes, child } = potty;

    return (
      <List.Item>
        <List.Icon color="teal" circular inverted name={icon} size="big" />
        <List.Content verticalAlign="middle">
          <List.Header>
            {child.firstName} - {type}
          </List.Header>
          <List.Description>{date}</List.Description>
          <List.Description>{notes}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

class PottyList extends Component {
  render() {
    const { pottyList } = this.props;

    function pottyToHTML(potty, i) {
      return <Potty potty={potty} key={potty.id} />;
    }

    const pottyListHTML = _.chain(pottyList)
      .map(pottyToHTML)
      .value();

    return (
      <List relaxed size="big">
        {pottyListHTML}
      </List>
    );
  }
}

class App extends Component {
  renderHeader = () => {
    return (
      <Header as="h2" icon textAlign="center">
        <Icon name="theme" circular basic color="teal" />
        <Header.Content>Potty Time</Header.Content>
      </Header>
    );
  };

  renderControlPanel = () => {
    return (
      <Form>
        <Dropdown placeholder="Potty Time" selection options={pottyOptions} />

        <Button type="submit">+</Button>
      </Form>
    );
  };

  render() {
    return (
      <div className="App">
        <Container>
          {this.renderHeader()}
          <Divider hidden />
          {this.renderControlPanel()}
          <Divider hidden />
          <PottyList pottyList={mockPotties} />
        </Container>
      </div>
    );
  }
}

export default App;
