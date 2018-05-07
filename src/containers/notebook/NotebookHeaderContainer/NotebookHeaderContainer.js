import React, { Component, Fragment } from 'react';

import DrawerContainer from 'containers/common/DrawerContainer';
import NotebookHeader from 'components/notebook/NotebookHeader';
import NotebookAdd from 'components/common/NotebookAdd';
import Dimmer from 'components/common/Dimmer';

import { NotebookActions } from 'store/actionCreators';

class NotebookHeaderContainer extends Component {
  state = {
    newName: '',  // 새 노트북 이름
    open: false,   // 노트북 추가 팝업 열림 여부
    isOpened: false // Drawer
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  setDrawer = (isOpened) => {
    this.setState({ isOpened });
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

  render() {
    const {
      handleInputChange,
      handleOpen, 
      handleClose, 
      addNotebook,
      setDrawer
    } = this;
    const { open, isOpened } = this.state
    const { history } = this.props

    return (
      <Fragment>
        <NotebookHeader 
          handleOpen={handleOpen}
          setDrawer={setDrawer}
        />
        <NotebookAdd 
          open={open} 
          handleClose={handleClose} 
          handleChange={handleInputChange} 
          addNotebook={addNotebook} 
        />
        <DrawerContainer 
          isOpened={isOpened} 
          setDrawer={setDrawer} 
          history={history}
        />
        <Dimmer show={isOpened} />
      </Fragment>
    );
  }
}

export default NotebookHeaderContainer;