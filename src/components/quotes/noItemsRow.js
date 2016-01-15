import React from 'react';

class NoItemsRow extends React.Component {
  render() {
    return (
      <tr style={{textAlign: 'center'}}>
        <td colSpan="7" style={{fontStyle: 'italic'}}>No Items Found</td>
      </tr>
    );
  }
}

export default NoItemsRow;
