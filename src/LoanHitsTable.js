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
                <td>{hit._source.BusinessName}</td>
                <td>{hit._source.LoanRange}</td>
                <td>{hit._source.State}</td>
                <td>{hit._source.BusinessType}</td>
                <td>{hit._source.JobsRetained}</td>
                <td>{hit._source.Lender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default LoanHitsTable;
