import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import NoteList from 'components/common/NoteList';

class NoteListContainer extends Component {
  handleClick = (id) => {
    this.props.history.push(`/new/textnote/${id}`)
  }

  render() {
    const { handleClick } = this
    const { list } = this.props

    return (
      <Fragment>
        <NoteList list={list} handleClick={handleClick} />
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({
    list: state.note.list,
  })
)(NoteListContainer);