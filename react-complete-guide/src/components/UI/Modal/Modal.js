import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    // wrapping element controls the updating of the wrapped element.
    shouldComponentUpdate(nextProps, nextState) {
        // update view if show value is changed or if the children have been updated
       return (nextProps.show !== this.props.show) || (nextProps.children !== this.props.children);
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
};

Modal.propTypes = {
    children:       PropTypes.node,
    modalClosed:    PropTypes.func,
    show:           PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ])
};

export default Modal;