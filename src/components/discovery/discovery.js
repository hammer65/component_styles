import React from 'react';

class DiscoveredPerson extends React.Component {
  render() {
    var tableStyle = {
      border: '1px solid grey'
    };
    var thStyle = {
      backgroundColor: '#EAEAEA',
      borderTop: '5px solid #009242',
      borderBottom: '1px solid grey',
      textAlign: 'center'
    };
    var tdStyle = {
      padding: '10px'
    };
    return (
      <div>
        <table style={tableStyle}>
          <tr>
            <th colSpan="2" style={thStyle}>Name</th>
          </tr>
          <tr>
            <td style={tdStyle}>SSN:</td>
            <td style={tdStyle}>XXX XX 4567</td>
          </tr>
          <tr>
            <td>DOB:</td>
            <td>March 15 1967</td>
          </tr>
          <tr>
            <td>DLN:</td>
            <td>GO2574532</td>
          </tr>
        </table>
        <a>Remove this Individual</a>
      </div>
    );
  }
}

class Discovery extends React.Component {
  render() {
    return (
      <DiscoveredPerson/>
    );
  }
}

export default Discovery;
