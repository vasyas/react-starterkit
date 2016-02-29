import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const initialState = { greeting: 'None!' };

export function reducer(state = initialState, action) {
    if (action.type == 'CREATE_GREETING')
        return { greeting: 'mighty' };

    return state;
}

export const LandingPage = () => (
    <div>Landing page</div>
);

export const HelloPage =
connect(state => ({
    greeting: state.app.greeting
}), {
    createGreeting: () => ({type: 'CREATE_GREETING'})
})
(({greeting, createGreeting}) => (
    <div>
        <span>{'Hello, ' + greeting}</span>
        <br/>

        <button onClick={createGreeting}>Create greeting</button>
    </div>
));

export const Layout = ({children}) => (
    <div>
        <h1>Starter kit</h1>


        <Link to="/">Landing page</Link>
        &nbsp;
        |
        &nbsp;
        <Link to="/hello">Hello page</Link>

        <br/>
        <br/>

        <div>
            {children}
        </div>
    </div>
);