import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form';
import {withRouter} from 'react-router-dom';

class SearchBar extends Component {
  handleFormSubmit = function({query}) {
    this.props.onSubmit(query);
  }

  renderInput(field) {
    return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input}/>
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <form className={`search-bar search_bar$__{this.props.page}`} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="search-bar__wrapper">
          <Field name="query" component={this.renderInput}/> {/* displays query url from input in search bar */}
          <p>Press return to search</p>
        </div>
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar); // high order component created with react-router-dom

export default SearchBar;