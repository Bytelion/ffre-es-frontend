import React from 'react';
import { RefinementListFilter } from 'searchkit';

const CustomFilter = ({ attribute, title }) => (
    <RefinementListFilter
        field={attribute.concat(".keyword")}
        title={title}
        id={attribute}
        operator="OR"
        size={5}
    />
);

export default CustomFilter;
