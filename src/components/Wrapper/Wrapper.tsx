import React from 'react';

export const Wrapper = ({
    children
} : Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div
            className='pd-15'
        >
            {children}
        </div>
    );
};
