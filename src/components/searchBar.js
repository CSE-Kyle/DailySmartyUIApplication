import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form'; // 

class SearchBar extends Component {
  handleFormSubmit = function({query}) { // accessing all form attributes
    console.log("trying to handle submit for query", query); // displays search bar input within console
    // navigate to a new route.
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

export default SearchBar;