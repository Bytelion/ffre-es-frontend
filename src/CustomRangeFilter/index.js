import React from 'react';
import { DynamicRangeFilter, RangeInput } from 'searchkit';

const CustomRangeFilter = (props) => (
    <DynamicRangeFilter
        field={props.attribute}
        id={props.attribute}
        rangeComponent={RangeInput}
    />
);

export default CustomRangeFilter;
