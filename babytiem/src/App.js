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
//console.log('uniqueChildren', uniqueChildren);

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
    const {
      pottyList,
      diaperTypeFilterValue,
      uniqueChildrenFilterValues
    } = this.props;

    function pottyToHTML(potty, i) {
      return <Potty potty={potty} key={potty.id} />;
    }

    function pottiesByChildren(potty, i) {
      if (!diaperTypeFilterValue) {
        return true;
      }
      return potty.type.value === diaperTypeFilterValue;
    }

    function pottiesByType(potty, i) {
      return _.findIndex(uniqueChildrenFilterValues, potty.child) > -1;
    }

    const pottyListHTML = _.chain(pottyList)
      .filter(pottiesByChildren)
      .filter(pottiesByType)
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
  state = {
    diaperTypeFilterValue: '',
    uniqueChildrenFilterValues: uniqueChildren
    //how do i set it all of the unique children in this array?
  };

  renderHeader = () => {
    return (
      <Header as="h2" icon textAlign="center">
        <Icon name="theme" circular basic color="teal" />
        <Header.Content>Potty Time</Header.Content>
      </Header>
    );
  };

  renderChildFilter = () => {
    const { uniqueChildrenFilterValues } = this.state;

    const childToHTML = (child, i) => {
      const childIndex = _.findIndex(uniqueChildrenFilterValues, child);
      const iExistInList = childIndex > -1;
      console.log(iExistInList, uniqueChildrenFilterValues);
      return (
        <Button
          key={child.id}
          icon
          active={iExistInList}
          onClick={(event, data) => {
            const _newValues = iExistInList
              ? _.filter(
                  uniqueChildrenFilterValues,
                  (selectionModelChild, i) => {
                    return selectionModelChild.id != child.id;
                  }
                )
              : [child, ...uniqueChildrenFilterValues];

            this.setState({ uniqueChildrenFilterValues: _newValues });
          }}
        >
          <Icon name={iExistInList ? 'child' : ''} basic color="teal" />
          {child.firstName}
        </Button>
      );
    };

    return <Button.Group basic>{uniqueChildren.map(childToHTML)}</Button.Group>;
  };

  renderControlPanel = () => {
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
    //console.log(this.state);
    const { diaperTypeFilterValue, uniqueChildrenFilterValues } = this.state;
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
            uniqueChildrenFilterValues={uniqueChildrenFilterValues}
            diaperTypeFilterValue={diaperTypeFilterValue}
          />
        </Container>
      </div>
    );
  }
}

export default App;
