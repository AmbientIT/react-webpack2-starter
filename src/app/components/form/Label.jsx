import React, { PropTypes } from 'react';

const Label = ({ key, children }) => {
  return (
    <label className="bold mb1" htmlFor={key}>
      { children }
    </label>
  );
};

Label.defaultName = 'Label';
Label.propTypes = {
  children: PropTypes.node,
  key: PropTypes.string,
};
Label.defaultProps = {
  key: '',
};

export default Label;
