import React from 'react';
import { SearchkitManager,
    SearchkitProvider,
    SearchBox,
    TopBar,
    Hits,
    HitsStats,
    NoHits,
    ActionBar,
    ActionBarRow,
    Layout,
    LayoutBody,
    LayoutResults,
    SideBar,
    ResetFilters,
    SelectedFilters,
    Pagination
} from 'searchkit';

import LoanHitsTable from './LoanHitsTable.js';
import CustomFilter from './CustomFilter';
import CustomFooter from './CustomFooter';
import './App.css';

const searchkit = new SearchkitManager("https://search-ffre-staging-jhz3wsrmujfb4yexpw5g37fdtm.us-east-1.es.amazonaws.com/loans/")

function App() {
    return (
        <SearchkitProvider searchkit={searchkit}>
            <Layout>
                <TopBar>
                    <div>
                        <h3 style={{"color":"white"}}>LOGO</h3>
                    </div>
                </TopBar>
                <LayoutBody>
                    <SideBar>
                        <h5>Filter Results</h5>
                        <ResetFilters />
                        <CustomFilter attribute="LoanRange" title="Loan Range" />
                        <CustomFilter attribute="JobsRetained" title="Jobs Retained" type="range" />
                        <CustomFilter attribute="BusinessType" title="Business Type" />
                        <CustomFilter attribute="Lender" title="Lender" />
                        <CustomFilter attribute="State" title="State" />
                        <HitsStats />
                    </SideBar>
                    <LayoutResults>
                        <ActionBar>
                            <ActionBarRow>
                                <SearchBox
                                    queryOptions={{"minimum_should_match":"70%"}}
                                    autofocus={true}
                                    searchOnChange={true}
                                    queryFields={['BusinessName^10', 'Lender^2', 'BusinessType']}
                                    placeholder="Search all Companies..."
                                />
                            </ActionBarRow>
                            <ActionBarRow>
                                <SelectedFilters />
                            </ActionBarRow>
                        </ActionBar>

                        <Hits listComponent={LoanHitsTable} />
                        <NoHits />
                    </LayoutResults>
                </LayoutBody>
            </Layout>
            <Pagination showNumbers={true} />
            <CustomFooter />
        </SearchkitProvider>
    );
}

export default App;
