import React from 'react';
import PropTypes from 'prop-types';

class TodoRows extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { item, callback } = this.props;

    return (
      <tr>
        <td>{item.action}</td>
        <td>
          <input
            type='checkbox'
            checked={item.done}
            onChange={() => {
              return callback(item);
            }}
          />
        </td>
      </tr>
    );
  }
}
export default TodoRows;

TodoRows.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  callback: PropTypes.func.isRequired,
};
