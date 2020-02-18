import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Options extends Component {
  render() {
    const { forwardRef, children } = this.props;
    return (
      <ul
        id="phoneNumber-menu-options"
        className="Autocomplete-options PhoneNumber-menu-options"
        ref={forwardRef}
        tabIndex={-1}
      >
        {children}
      </ul>
    );
  }
}

const { node, object } = PropTypes;

Options.propTypes = {
  children: node.isRequired,
  forwardRef: object
};

export default Options;
