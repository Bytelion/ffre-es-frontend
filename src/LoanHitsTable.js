import * as _ from "lodash";
import React from 'react';

class LoanHitsTable extends React.Component {

  render(){
    const { hits } = this.props
    return (
      <div style={{width: '100%', boxSizing: 'border-box', padding: 8}}>
        <table className="table table-bordered table-hover" style={{width: '100%', boxSizing: 'border-box'}}>
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Loan Range</th>
              <th scope="col">State</th>
              <th scope="col">Business Type</th>
              <th scope="col">Jobs Retained</th>
              <th scope="col">Lender</th>
            </tr>
          </thead>
          <tbody>
            {hits.map(hit => (
              <tr key={hit._id}>
                <td>{hit._source.business_name}</td>
                <td>{hit._source.loan_range}</td>
                <td>{hit._source.state}</td>
                <td>{hit._source.business_type}</td>
                <td>{hit._source.jobs_retained}</td>
                <td>{hit._source.lender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default LoanHitsTable;
