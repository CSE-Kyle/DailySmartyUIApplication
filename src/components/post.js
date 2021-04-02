import React, {Component} from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0
    }
  }
  
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
            <a href={this.props.url_for_post}>{this.props.title}</a> {/* displaying the posts on the page */}
          </div>

          <div className="recent-post__topics">
          
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
            <a href={this.props.url_for_post}
              onMouseEnter={() => this.setState({height: 70})}
              onMouseLeave={() => this.setState({height: 0})}
            >
              {this.props.title}
            </a> {/* url_for_post referred in redux devtools */}
            {/* state -> posts -> resultsPosts or recentPosts -> (click dropdown) url_for_post */}
          </div>
          
          <AnimateHeight
            duration={500}
            height={this.state.height}
          >
            <div className="result-post__links">
              {this.renderLinks()}
            </div>
          </AnimateHeight>
        </li>
      )
    }
  }
}

export default Post;