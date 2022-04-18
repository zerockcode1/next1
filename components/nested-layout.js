import React from 'react';

const NestedLayout = ({children}) => {
    return (
        <div>
            <h2>Nested Layout</h2>
            {children}
        </div>
    );
};

export default NestedLayout;