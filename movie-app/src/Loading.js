import React from 'react';
import PropTypes from 'prop-types';

function Loading({msg}) {
    return <h1>{msg}</h1>
}

Loading.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Loading;