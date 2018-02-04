import React, {Component} from 'react';

import ReactRedux, {connect} from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {

            return (
                <li key={book.title} className={"list-group-item"}>{book.title}</li>
            );
        });
    }


    render() {

        return (

            <ul className={"list-group col-md-4"}>
                {this.renderList()}
            </ul>
        )
    }
}

// glue between react and redux.
function mapStateToProps(state) {


    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);






