// stateless


import React from 'react';

import User from '../../components/User'


const authIndexPage = (props) => (
    <div>
        <h1>the auth index page - {props.appName}</h1>
        <User name='griffin' age={18} />
    </div>
);

//hook
authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: "Super App Auth" });
        }, 1000)
    });

    return promise;
}

export default authIndexPage;