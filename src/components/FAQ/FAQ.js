import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const FAQ = ({ image })  => (
  <Container>
    <Hero image={image}/>
    <h2>FAQ</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </Container>
);

FAQ.propTypes = {
  image: PropTypes.node.isRequired,
};

FAQ.defaultProps = {
  image: settings.FAQ.image,
};

export default FAQ;