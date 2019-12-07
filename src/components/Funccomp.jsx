import React from 'react';

const Funccomp = () => {
    const menu = ['Rice', 'Beans', 'Yam', 'Semo']

    return (
        <div>
           {
               menu.map(item=>(<p>{item}</p>))
           }
        </div>
    );
}

export default Funccomp;
