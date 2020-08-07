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
                        queryFields={['business_name', 'lender']}
                        placeholder="Search all Companies..."
                    />
                    <LayoutBody>
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
