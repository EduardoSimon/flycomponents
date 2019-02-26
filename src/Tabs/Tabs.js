import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    defaultActiveIndex: PropTypes.number,
    onTabSelected: PropTypes.func
  };

  static childContextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired
  };

  static defaultProps = {
    children: null,
    defaultActiveIndex: 0,
    onTabSelected: null
  };

  state = {
    activeIndex: this.props.defaultActiveIndex
  };

  getChildContext() {
    return {
      activeIndex: this.state.activeIndex,
      onSelectTab: this.selectTabIndex
    };
  }

  selectTabIndex = activeIndex => {
    const { onTabSelected } = this.props;
    this.setState({ activeIndex });

    if (onTabSelected) onTabSelected({ activeIndex });
  };

  render() {
    const { className } = this.props;
    const tabClassName = classNames('Tabs', className);

    return <div className={tabClassName}>{this.props.children}</div>;
  }
}

export default Tabs;
