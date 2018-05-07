import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import NotebookSearch from 'components/notebook/NotebookSearch';
import NotebookList from 'components/notebook/NotebookList';

class NotebookMainContainer extends Component {
  state = {
    search: '',
    originalNotebookList: [],
    filteredNotebookList: [],
  }

  componentDidMount = () => {
    const { notebookList } = this.props

    this.setState({
      originalNotebookList: notebookList,
      filteredNotebookList: [...notebookList]
    })
  }

  componentWillReceiveProps = ({ notebookList }) => {
    this.setState({
      originalNotebookList: notebookList,
      filteredNotebookList: [...notebookList]
    }, () => {
      this.setFilterNotebook()
    })
  }

  handleSearchInputChange = e => {
    const search = e.target.value
    
    this.setFilterNotebook(search)
  }

  setFilterNotebook = (search = this.state.search) => {
    const filteredNotebookList = this.state.originalNotebookList.filter((d) => d.name.indexOf(search) !== -1)

    this.setState({
      search,
      filteredNotebookList
    })
  }

  render() {
    const { handleSearchInputChange } = this
    const { 
      search,
      originalNotebookList,
      filteredNotebookList
    } = this.state
    const notebookList = search.trim() === '' ? originalNotebookList : filteredNotebookList

    return (
      <Fragment>
        <NotebookSearch handleChange={handleSearchInputChange} />
        <NotebookList list={notebookList} />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    notebookList: state.notebook.list,
    noteList: state.note.list,
  })
)(NotebookMainContainer);