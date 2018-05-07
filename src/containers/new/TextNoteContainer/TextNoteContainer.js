import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TextNoteHeader from 'components/new/TextNoteHeader';
import TextNoteMain from 'components/new/TextNoteMain';
import NotebookAdd from 'components/common/NotebookAdd';

import { NoteActions, NotebookActions } from 'store/actionCreators';

class TextNoteContainer extends Component {
  state = {
    title: '',
    content: '',
    notebook: '',
    selectedNotebook: '',
    isNew: true,

    newName: '',  // 새 노트북 이름
    open: false   // 노트북 추가 팝업 열림 여부
  }

  componentDidMount = async () => {
    const { id } = this.props

    if ( id ) {
      await NoteActions.selectedNote(id);
      const { title, content, notebook } = this.props.selectedNote

      this.setState({
        title, 
        content,
        notebook,
        selectedNotebook: notebook,
        isNew: false
      })
    } else {
      this.setState({
        selectedNotebook: this.props.notebookList.get(0).name
      })
    }
  }

  handleGoBack = () => this.props.history.goBack();

  handleSelectboxChange = (event, index, value) => {
    this.setState({ 
      selectedNotebook: value
    })
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => {
    this.setState({
      open: false, 
      newName: ''
    })
  }

  addNotebook = () => {
    const { newName } = this.state
    NotebookActions.addNotebook({ name: newName })
    this.handleClose()
  }

  addNote = () => {
    let { isNew, title, content, selectedNotebook } = this.state
    
    if (title.trim() === '' && content.trim() === '') {
      alert('빈 노트는 저장되지 않습니다.')
    } else {
      title = title.trim() === '' ? '빈 제목' : title 
      
      if (isNew) {
        NoteActions.addNote({ 
          title, 
          content,
          notebook: selectedNotebook
        })
      } else {
        const { id } = this.props
        
        NoteActions.modifyNote({ 
          id,
          title, 
          content,
          notebook: selectedNotebook
        })
      }
    }
   
    this.handleGoBack();
  }

  render() {
    const { 
      handleGoBack, 
      handleInputChange,
      handleSelectboxChange,
      handleOpen, 
      handleClose, 
      addNote,
      addNotebook
    } = this;
    const { title, content, selectedNotebook, open } = this.state
    const { notebookList } = this.props

    return (
      <Fragment>
        <TextNoteHeader 
          handleGoBack={handleGoBack} 
          addNote={addNote} 
        />
        <TextNoteMain 
          title={title} 
          content={content} 
          notebookName={selectedNotebook}
          list={notebookList}
          selectedNotebook={selectedNotebook}
          handleSelectboxChange={handleSelectboxChange}
          handleInputChange={handleInputChange} 
          handleOpen={handleOpen}
        />
        <NotebookAdd 
          open={open} 
          handleClose={handleClose} 
          handleChange={handleInputChange} 
          addNotebook={addNotebook} 
        />
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({
    notebookList: state.notebook.list,
    noteList: state.note.list,
    selectedNote: state.note.selectedNote,
  })
)(TextNoteContainer);