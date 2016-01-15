import React from 'react';

class QuoteDetail extends React.Component {
  render() {
    return (
      <div className="row" style={{margin: '5px 0'}}>
        <div className="col-xs-2" style={{textAlign: 'right'}}>
          {this.props.label}
        </div>
        <div className="col-xs-10" style={{fontWeight: 'bold'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
QuoteDetail.propTypes = {
  label: React.PropTypes.string.isRequired
};

export default QuoteDetail;
