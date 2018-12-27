import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Right, Body, Left } from 'native-base';


export default class Leaderboard extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Right></Right> 
            <Body>LEADERBOARD</Body>
            <Left></Left>
        </Header>
        <Content>
            <Text>Leaderboard</Text>
        </Content>
        <Footer>
        </Footer>
      </Container>
    );
  }
}