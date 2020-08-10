import React from 'react';
import logo from './logo.svg';
import { SearchkitManager,
    SearchkitProvider,
    SearchBox,
    Hits,
    NoHits,
    Layout,
    LayoutBody,
    LayoutResults,
    SideBar,
    ResetFilters,
    RefinementListFilter,
    DynamicRangeFilter,
    Pagination
} from 'searchkit';
import { Container, Jumbotron } from 'react-bootstrap';
import LoanHitsTable from './LoanHitsTable.js';
import './App.css';

const searchkit = new SearchkitManager("http://localhost:9200/")

function App() {
    return (
        <div class="main">
            <Jumbotron>
                <h3>Financial Funding Research Engine</h3>
            </Jumbotron>
            <SearchkitProvider searchkit={searchkit}>
                <Layout>
                    <SearchBox
                        queryOptions={{"minimum_should_match":"70%"}}
                        autofocus={true}
                        searchOnChange={true}
                        queryFields={['business_name^3', 'lender']}
                        placeholder="Search all Companies..."
                    />
                    <LayoutBody>
                        <SideBar>
                            <ResetFilters />
                            <RefinementListFilter
                                field="loan_range.keyword"
                                title="Loan Range"
                                id="loan_range"
                                operator="OR"
                            />
                            <DynamicRangeFilter
                                field="jobs_retained"
                                id="jobs_retained"
                                title="Jobs Retained"
                                interval={5}
                            />
                            <RefinementListFilter
                                field="state.keyword"
                                title="State"
                                id="state"
                                operator="OR"
                            />
                        </SideBar>
                        <LayoutResults>
                            <Hits listComponent={LoanHitsTable} />
                            <NoHits />
                        </LayoutResults>
                    </LayoutBody>
                </Layout>
                <Pagination showNumbers={true} />
            </SearchkitProvider>
        </div>
    );
}

export default App;
