import 'semantic-ui-css/semantic.min.css';

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
import { pottyOptions } from './pottyOptions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header as="h2" icon textAlign="center">
            <Icon name="theme" circular basic color="teal" />
            <Header.Content>Potty Time</Header.Content>
          </Header>
          <Divider hidden />
          <Form>
            <Dropdown
              placeholder="Potty Time"
              selection
              options={pottyOptions}
            />
            {/* <Button.Group vertical size="huge">
              <Button fluid color="yellow" content="Wet Diaper" />
              <Button fluid color="brown" content="BM Diaper" />
              <Button fluid color="teal" content="Dry Diaper" />
              <hr />
              <Button fluid color="olive" content="Peed in Potty" />
              <Button fluid color="orange" content="Pooped in Potty" />
              <Button fluid color="blue" content="Potty Attempt" />
            </Button.Group>
            <hr /> */}
            {/* <Button.Group size="large">
              <Button>Wet Diaper</Button>
              <Button.Or />
              <Button>BM Diaper</Button>
              <Button.Or />
              <Button>Dry Diaper</Button>
            </Button.Group>

            <Button.Group size="large">
              <Button>Peed in Potty</Button>
              <Button.Or />
              <Button>Pooped in Potty</Button>
              <Button.Or />
              <Button>Potty Attempt</Button>
            </Button.Group> */}

            <Button type="submit">+</Button>
          </Form>
          <Divider hidden />
          <Divider horizontal>Today</Divider>
          <List relaxed size="big">
            <List.Item>
              <List.Icon
                color="teal"
                circular
                inverted
                name="theme"
                size="big"
              />
              <List.Content verticalAlign="middle">
                <List.Header>Wet Diaper</List.Header>
                <List.Description>11:36am</List.Description>
                <List.Description>Pull Ups leaked</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon
                color="teal"
                circular
                inverted
                name="theme"
                size="big"
              />
              <List.Content verticalAlign="middle">
                <List.Header>BM Diaper</List.Header>
                <List.Description>2:36pm</List.Description>
              </List.Content>
            </List.Item>
            <Divider horizontal>March 23</Divider>
            <List.Item>
              <List.Icon
                color="teal"
                circular
                inverted
                name="theme"
                size="big"
              />
              <List.Content verticalAlign="middle">
                <List.Header>Wet Diaper</List.Header>
                <List.Description>4:40pm</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon
                color="teal"
                circular
                inverted
                name="theme"
                size="big"
              />
              <List.Content verticalAlign="middle">
                <List.Header>Potty - Tried</List.Header>
                <List.Description>4:44pm</List.Description>
              </List.Content>
            </List.Item>
            <Divider horizontal>March 22</Divider>
            <List.Item>
              <List.Icon
                color="teal"
                circular
                inverted
                name="theme"
                size="big"
              />
              <List.Content verticalAlign="middle">
                <List.Header>Dry Diaper</List.Header>
                <List.Description>1:40pm</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Container>
      </div>
    );
  }
}

export default App;
