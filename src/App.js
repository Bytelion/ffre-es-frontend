import React from 'react';
import logo from './logo.svg';
import { SearchkitManager,
    SearchkitProvider,
    SearchBox,
    TopBar,
    Hits,
    HitsStats,
    NoHits,
    ActionBar,
    ActionBarRow,
    SortingSelector,
    Layout,
    LayoutBody,
    LayoutResults,
    SideBar,
    ResetFilters,
    RefinementListFilter,
    DynamicRangeFilter,
    RangeInput,
    InputFilter,
    SelectedFilters,
    Pagination,
    Panel
} from 'searchkit';
import { Nav } from 'react-bootstrap';
import LoanHitsTable from './LoanHitsTable.js';
import CustomFilter from './CustomFilter';
import './App.css';

const searchkit = new SearchkitManager("http://localhost:9200/")

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
                        <ResetFilters />
                        <CustomFilter attribute="loan_range" title="Loan Range" />
                        <CustomFilter attribute="jobs_retained" title="Jobs Retained" type="range" />
                        <CustomFilter attribute="business_type" title="Business Type" />
                        <CustomFilter attribute="lender" title="Lender" />
                        <CustomFilter attribute="state" title="State" />
                        <HitsStats />
                    </SideBar>
                    <LayoutResults>
                        <ActionBar>
                            <ActionBarRow>
                                <SearchBox
                                    queryOptions={{"minimum_should_match":"70%"}}
                                    autofocus={true}
                                    searchOnChange={true}
                                    queryFields={['business_name^10', 'lender^2', 'business_type']}
                                    placeholder="Search all Companies..."
                                />
                            </ActionBarRow>
                        </ActionBar>

                        <Hits listComponent={LoanHitsTable} />
                        <NoHits />
                    </LayoutResults>
                </LayoutBody>
            </Layout>
            <Pagination showNumbers={true} />
        </SearchkitProvider>
    );
}

export default App;
