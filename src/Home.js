import React from 'react';
import {
    SearchkitManager,
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

import CustomNav from './CustomNav';
import CustomHitsTable from './CustomHitsTable';
import CustomFilter from './CustomFilter';
import CustomFooter from './CustomFooter';
import { Link } from "react-router-dom";
import './Home.css';

const searchkit = new SearchkitManager("https://search-ffre-staging-jhz3wsrmujfb4yexpw5g37fdtm.us-east-1.es.amazonaws.com/loans/")

function Home() {
    return (
        <SearchkitProvider searchkit={searchkit}>
            <Layout>
                <CustomNav />
                <LayoutBody>
                    <SideBar>
                        <h5>Filter Results</h5>
                        <ResetFilters />
                        <CustomFilter attribute="LoanRange" title="Loan Range" />
                        <CustomFilter attribute="JobsRetained" title="Jobs Retained" type="range" />
                        <CustomFilter attribute="BusinessType" title="Business Type" />
                        <CustomFilter attribute="NAICSHuman" title="Industry" />
                        <CustomFilter attribute="Lender" title="Lender" />
                        <CustomFilter attribute="State" title="State" />
                        <HitsStats />
                    </SideBar>
                    <LayoutResults>
                        <ActionBar>
                            <ActionBarRow>
                                <SearchBox
                                    autofocus={true}
                                    searchOnChange={true}
                                    queryFields={['BusinessName^10', 'NAICSHuman^3', 'Lender^2', 'BusinessType']}
                                    placeholder="Search all Companies..."
                                />
                            </ActionBarRow>
                            <ActionBarRow>
                                <SelectedFilters />
                            </ActionBarRow>
                        </ActionBar>

                        <Hits listComponent={CustomHitsTable} />
                        <NoHits />
                    </LayoutResults>
                </LayoutBody>
            </Layout>
            <Pagination showNumbers={true} />
            <CustomFooter />
        </SearchkitProvider>
    );
}

export default Home;
