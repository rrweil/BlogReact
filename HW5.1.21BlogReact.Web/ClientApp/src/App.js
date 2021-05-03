import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import PostPage from './Pages/PostPage';


export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/postpage/:id' component={PostPage} />
            </Layout>
        );
    }
}