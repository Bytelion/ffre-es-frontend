import * as _ from "lodash";
import React from 'react';

class LoanHitsTable extends React.Component {

  render(){
    const { hits } = this.props
    return (
      <div style={{width: '100%', boxSizing: 'border-box', padding: 8}}>
        <table className="sk-table sk-table-striped" style={{width: '100%', boxSizing: 'border-box'}}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Loan Range</th>
              <th>State</th>
              <th>Business Type</th>
              <th>Jobs Retained</th>
              <th>Lender</th>
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
