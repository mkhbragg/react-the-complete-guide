import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            disabled={props.disabled}
            onClick={props.removed}>Less</button>
        <button
            className={classes.More}
            onClick={props.added}>More</button>
    </div>
);

buildControl.propTypes = {
    added:      PropTypes.func.isRequired,
    disabled:   PropTypes.bool,
    label:      PropTypes.string.isRequired,
    removed:    PropTypes.func.isRequired
};

export default buildControl;