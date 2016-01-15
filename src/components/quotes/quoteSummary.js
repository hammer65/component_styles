import React from 'react';
import DetailBox from './detailBox';
import QuoteDetails from './quoteDetails';
import {Row, Col} from 'react-bootstrap';

class QuoteSummary extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={6}>
          <DetailBox title="Quote Details">
            <QuoteDetails quote={this.props.quote} />
          </DetailBox>
        </Col>
        <Col xs={12} sm={6}>
          <DetailBox title="Carrier Rates">
            <div style={{textAlign: 'center'}}>
              <span style={{fontStyle: 'italic'}}>No Items Found</span>
            </div>
          </DetailBox>
        </Col>
      </Row>
    );
  }
}
QuoteSummary.propTypes = {
  quote: React.PropTypes.object.isRequired
};

export default QuoteSummary;
