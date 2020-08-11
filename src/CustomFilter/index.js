import React from 'react';
import { Panel } from 'searchkit';
import CustomListFilter from '../CustomListFilter';
import CustomRangeFilter from '../CustomRangeFilter';

const CustomFilter = (props) => (
    <Panel title={props.title} collapsable={true} defaultCollapsed={true}>
        {props.type == 'range' ? (
            <CustomRangeFilter attribute={props.attribute} />
        ) : (
            <CustomListFilter attribute={props.attribute} />
        )}
    </Panel>
);

export default CustomFilter;
