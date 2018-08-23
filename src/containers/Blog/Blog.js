import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

    render () {
      return (
            <div>
                <header className="Blog">
                  <nav>
                    <ul>
                      <li><NavLink to="/posts/"
                        exact
                        activeClassName='my-active'
                        activeStyle={{
                          color: '#fa923f',
                          textDecoration: 'underline'
                        }}>Posts</NavLink></li>

                      <li><NavLink to={{
                          pathname: '/new-post'
                        }}>New Post</NavLink></li>
                    </ul>
                  </nav>
                </header>
                { /* <Route path="/" exact render={ () => <Posts /> } />
                     <Route path="/" exact render={ () => <div>HELLO </div> } /> */ }

                <Switch>
                  <Route path="/new-post" component={NewPost} />
                  <Route path="/posts/" component={Posts} />
                  <Redirect from="/" to="/posts/" />
                  <Route render={ () => <h1>THIS IS NOT FOUND TEXT FOR ALL UNFAMILLIAR LINKS</h1> } />

                  { /* <Route path="/" component={Posts} /> */ }
                </Switch>

            </div>
        );
    }
}

export default Blog;
