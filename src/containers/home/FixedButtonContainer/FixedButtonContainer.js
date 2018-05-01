import React, { Component } from 'react';
import { connect } from 'react-redux'
import FixedButton from 'components/home/FixedButton';
import Dimmer from 'components/common/Dimmer';

class FixedButtonContainer extends Component {
  state = {
    isActivePlus: false
  }

  handleButtonClick = (isActivePlus, url = '') => {
    const { history } = this.props

    this.setState({ isActivePlus })

    if (url === 'textnote') {
      history.push('/new/textnote')
    }
  }

  render() {
    const { handleButtonClick } = this;
    const { isActivePlus } = this.state;
    const { isShowButton } = this.props;

    return (
      <React.Fragment>
        <Dimmer 
          show={isActivePlus} 
          white={true} 
        />
        { 
          isShowButton && 
          <FixedButton 
            isActive={isActivePlus} 
            handleButtonClick={handleButtonClick}
          />
        }

      </React.Fragment>
    )
  }
}

export default connect(
  (state) => ({
    isShowButton: state.home.isShowButton,
  })
)(FixedButtonContainer);