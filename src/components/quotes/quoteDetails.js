import React from 'react';
import QuoteDetail from './quoteDetail';

class QuoteDetails extends React.Component {
  render() {
    var quote = this.props.quote;
    var coApp = quote.coApplicant ?
      <QuoteDetail label="Co-Applicant">
        {quote.coApplicant.fullName}
      </QuoteDetail> : null;
    var drivers = quote.drivers ?
      <QuoteDetail label="Drivers">
        {
          quote.drivers.map(function(d) {
            return (
              <div key={d.id}>
                <span>{d.fullName}</span><br/>
              </div>
            )
          })
        }
      </QuoteDetail> : '';
    var vehicles = quote.vehicles ?
      <QuoteDetail label="Vehicles">
        {
          quote.vehicles.map(function(v) {
            return (
              <div key={v.id}>
                <span>{v.vin}</span><br/>
              </div>
            )
          })
        }
      </QuoteDetail> : null;

    return (
      <div>
        <QuoteDetail label="Applicant">
          {quote.applicant.fullName}
        </QuoteDetail>
        { coApp }
        { drivers }
        { vehicles }
      </div>
    );
  }
}
QuoteDetails.propTypes = {
  quote: React.PropTypes.object
};

export default QuoteDetails;
