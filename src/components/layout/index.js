import React from 'react';
import Container from '@material-ui/core/Container';
import Footer from './footer';
import Header from './header';
import SubscriptionInfo from './subscriptionInfo';

const Layout = (props) =>  (
  <Container maxWidth="md">
    <Header />
    <SubscriptionInfo />
    {props.children}
    <Footer />
  </Container>
)

export default Layout;
