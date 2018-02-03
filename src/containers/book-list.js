import React, {Component} from 'react';

import {connect} from 'react-redux';

import {selectedBook} from '../actions/index';

import {bindActionCreators} from 'redux';

 class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick= {()=> this.props.selectedBook(book)} 
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  // whatever is returned from here will show up as props inside of BookList
  // always returns an object - note the curly braces
  return {
    books: state.books
  };

}

// anything returned from this function will end up as props in book-list container
function mapDispatchToProps(dispatch) {

  // Whenever selectedBook is called, the result should be passed to all reducers
  return bindActionCreators({selectedBook: selectedBook}, dispatch);
}

// promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
