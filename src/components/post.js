import React, {Component} from 'react';

class Post extends Component {
  renderTopics() {
    let topics = this.props.associated_topics.map((topic, index) => { // referring to associated_topics from console values
      return <span className="post-topic" key={index}>{topic}</span>
    })
    return topics; // displays associated topics
  }

  render() {
    return (
      <li className="recent-post">
        <div className="recent-post__title">
          {this.props.title} {/* displaying the posts on the page */}
        </div>

        <div className="recent-post__topics">
          {this.renderTopics()}
        </div>
      </li>
    );
  }
}

export default Post;