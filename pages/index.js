
import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';


class indexPage extends Component{
    // static async getInitialProps(context){
    //     // fectch data and initilize for this component
    //     console.log(context);
    //     return {appName: 'super App'};
    // }

    static getInitialProps(context){
        // prepopulate data for component
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: "Super App" });
            }, 1000)
        });
        // promise.then(); //exec wehn primise is resolved

        return promise;
    }

    render(){
        return(
            <div>
                <h1>the main page of {this.props.appName}</h1>
                <p>go to <Link href='/auth'><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>go to auth</button>
            </div>
        )
    }
};

export default indexPage;