import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

class NavigationItem extends Component {
    render() {
        return (
            <li className={classes.NavigationItem}>
                <NavLink exact
                    to={this.props.link}
                    activeClassName={classes.active}>{this.props.children}</NavLink>
            </li>
        );
    }
};

NavigationItem.propTypes = {
    active:     PropTypes.bool,
    children:   PropTypes.node.isRequired,
    link:       PropTypes.string.isRequired
};

export default NavigationItem;