import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

import {connect} from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  handleSearchBarSubmit(query) { // accessing all form attributes
    // console.log("trying to handle submit for query", query); // displays search bar input within console    
    this.props.fetchPostsWithQuery(query); // ask about this (why am I using props from fetchPostsWithQuery?)
    this.props.history.push('/results'); // redirects webpage to results page after entering input in search bar; navigate to a new route.
  }
  
  render() {
    return (
      <div>
        <Logo/>
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/> {/* loggin the data once submitted and pushed to results */}
        <RecentPosts/>
      </div>
    );
  }
}

export default connect(null, actions)(Home);