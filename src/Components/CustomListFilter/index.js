import React from 'react';
import { RefinementListFilter, InputFilter } from 'searchkit';

const CustomListFilter = (props) => (
    <div>
        <InputFilter
            id={props.attribute.concat('_q')}
            searchOnChange={true}
            prefixQueryFields={props.attribute}
        />
        <RefinementListFilter
            field={props.attribute.concat(".keyword")}
            id={props.attribute}
            operator="OR"
            size={5}
        />
    </div>
);

export default CustomListFilter;
