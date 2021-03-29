import React, {Component} from 'react';

class Post extends Component {
  renderTopics() {
    let topics = this.props.associated_topics.map((topic, index) => { // referring to associated_topics from console values
      return <span className="post-topic" key={index}>{topic}</span>
    })
    return topics; // displays associated topics
  }

  renderLinks() {
    let links = this.props.post_links.map((post_link, index) => {
      return (
        <div className="post-links" key={index}>
          <div className="post-link__box">

          </div>

          <div className="post-link__link">
            <a href={post_link.link_url}>Useful Link #{index + 1}</a> {/* link_url referred within DailySmarty API link in postman (https://api.dailysmarty.com/search?q=results) */}
            {/* {index + 1} - will start at actual value instead of index value (starts at 1 instead of 0) */}
          </div>
        </div>
      )
    })
    return links;
  }

  render() {
    if(this.props.type == 'recent') {
      return (
        <li className="recent-post">
          <div className="recent-post__title">
            {this.props.title} {/* displaying the posts on the page */}
          </div>

          <div className="recent-post__topics">
            {this.renderTopics()}
          </div>
        </li>
      )
    } else if(this.props.type == 'result') {
      return (
        <li className="result-post">
          <div className="result-post__topics">
            {this.renderTopics()}
          </div>

          <div className="result-post__title">
            {this.props.title}
          </div>
          
          <div className="result-post__links">
            {this.renderLinks()}
          </div>
        </li>
      )
    }
  }
}

export default Post;