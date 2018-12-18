import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/layout'
import H1 from '../components/H1';
import Button from '../components/Button';

const IndexPage = () => (
  <Layout>
    <H1>Hello, people</H1>
    <Button as={Link} to="/about">About age</Button>
  </Layout>
)

export default IndexPage
