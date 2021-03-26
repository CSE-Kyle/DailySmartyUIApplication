import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../actions';
import Post from './post';

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  renderPosts = function() {
    const posts = this.props.recentPosts.map((post, index) => { // mapping state to props
      if(index < 3) { // only returning no more than 3 posts (by index value)
        return (
          <Post {...post} key={index}/> // using spread operator from post to render all data within this link
        ); 
      }
    })
    return posts;
  }
  
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts__wrapper">
          <div className="recent-posts__heading">Recent Posts</div>
            <ul className="recent-posts__posts">
              {this.renderPosts()}
            </ul>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recentPosts: state.posts.recentPosts // check redux to understand
  }
}

export default connect(mapStateToProps, actions)(RecentPosts); // connecting actions to search bar; connecting to props
