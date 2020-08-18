import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.modules.scss';

const CustomHitsTable = ({ hits }) => (
    <div style={{width: '100%', boxSizing: 'border-box', padding: 8}}>
        <table className="table table-bordered table-hover" style={{width: '100%', boxSizing: 'border-box'}}>
            <thead>
                <tr>
                    <th scope="col" className="text-nowrap">Company</th>
                    <th scope="col" className="text-nowrap">Loan Range</th>
                    <th scope="col" className="text-nowrap">State</th>
                    <th scope="col" className="text-nowrap">Industry</th>
                    <th scope="col" className="text-nowrap">Business Type</th>
                    <th scope="col" className="text-nowrap">Jobs</th>
                    <th scope="col" className="text-nowrap">Lender</th>
                </tr>
            </thead>
            <tbody>
                {hits.map(hit => (
                    <tr key={hit._id}>
                        <td className="align-middle">
                            <Link to={`/${hit._id}`}>{hit._source.BusinessName}</Link>
                        </td>
                        <td className="align-middle">{hit._source.LoanRange}</td>
                        <td className="align-middle">{hit._source.State}</td>
                        <td className="align-middle">{hit._source.NAICSHuman}</td>
                        <td className="align-middle">{hit._source.BusinessType}</td>
                        <td className="align-middle">{hit._source.JobsRetained}</td>
                        <td className="align-middle">{hit._source.Lender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CustomHitsTable;
