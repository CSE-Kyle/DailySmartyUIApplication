import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
          <li> {/* unique key prop */}
            {this.props.title} {/* displaying the posts on the page */}
          </li>
        );
    }
}

export default Post;