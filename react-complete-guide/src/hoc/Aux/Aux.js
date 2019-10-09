import PropTypes from 'prop-types';

const Aux = (props) => props.children;

Aux.propTypes = {
    children: PropTypes.node.isRequired
};

export default Aux;