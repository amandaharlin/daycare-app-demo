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

const uniquePottyTypeOptions = _.chain(mockPotties)
  .map((mockPotty, i) => {
    return {
      text: mockPotty.type.label,
      value: mockPotty.type.value,
      icon: mockPotty.type.icon
    };
  })
  .uniqBy('value')
  .value(); // {text: '', value: '', icon: ''}

const uniqueChildren = _.chain(mockPotties)
  .map((mockPotty, i) => {
    return mockPotty.child;
  })
  .uniqBy('id')
  .value();

console.log();
class Potty extends Component {
  render() {
    const { potty } = this.props;
    const { key, activity, icon, date, type, notes, child, firstName } = potty;
    // console.log(child);
    return (
      <List.Item>
        <List.Icon color="teal" circular inverted name={icon} size="big" />
        <List.Content verticalAlign="middle">
          <List.Header>
            {child.firstName} - {type.value}
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
    const { pottyList, diaperTypeFilterValue } = this.props;

    function pottyToHTML(potty, i) {
      return <Potty potty={potty} key={potty.id} />;
    }

    const pottyListHTML = _.chain(pottyList)
      .filter((potty, i) => {
        if (!diaperTypeFilterValue) {
          return true;
        }

        return potty.type.value === diaperTypeFilterValue;
      })
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
  state = { diaperTypeFilterValue: '' };

  renderHeader = () => {
    return (
      <Header as="h2" icon textAlign="center">
        <Icon name="theme" circular basic color="teal" />
        <Header.Content>Potty Time</Header.Content>
      </Header>
    );
  };

  renderChildFilter = () => {
    return (
      <div>
        <Button icon>
          <Icon name="child" basic color="teal" />
          Ada
          {/* {childListHTML} */}
        </Button>
        <Button icon>
          <Icon name="child" basic color="teal" />
          Dorian
        </Button>
      </div>
    );
  };

  renderControlPanel = () => {
    //const { mockPotties } = this.props;

    // function mockPottyTypesToHTML(mockPotty, i) {
    //   return <mockPottyTypes mockPotty={mockPotty} key={mockPotty.type} />;
    // }

    // const mockPottyTypesHTML = _.chain(mockPotties)
    //   .filter((mockPotty, i) => {
    //     if (mockPotties) {
    //       console.log(mockPotties);
    //       return true;
    //     }
    //   })
    //   .map(mockPottyTypesToHTML)
    //   .value();

    return (
      <Form>
        <Dropdown
          placeholder="Potty Time"
          selection
          options={uniquePottyTypeOptions}
          value={this.state.diaperTypeFilterValue}
          onChange={(event, data) => {
            const { value } = data;
            this.setState({
              diaperTypeFilterValue: value
            });
          }}
        />
      </Form>
    );
  };

  render() {
    console.log(this.state);
    const { diaperTypeFilterValue } = this.state;
    return (
      <div className="App">
        <Container>
          {this.renderHeader()}
          <Divider hidden />
          {this.renderControlPanel()}
          <Divider hidden />
          {this.renderChildFilter()}
          <Divider hidden />
          <PottyList
            pottyList={mockPotties}
            diaperTypeFilterValue={diaperTypeFilterValue}
          />
        </Container>
      </div>
    );
  }
}

export default App;
