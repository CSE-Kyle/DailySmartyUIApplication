import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form';
import {withRouter} from 'react-router-dom';

class SearchBar extends Component {
  handleFormSubmit = function({query}) { // accessing all form attributes
    console.log("trying to handle submit for query", query); // displays search bar input within console
    // navigate to a new route.
    this.props.history.push('/results'); // redirects webpage to results page after entering input in search bar
  }

  renderInput(field) {
    return <input type="text" placeholder="Search DailySmarty" {...field.input}/>
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="query" component={this.renderInput}/> {/* displays query url from input in search bar */}
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar); // high order component created with react-router-dom

export default SearchBar;