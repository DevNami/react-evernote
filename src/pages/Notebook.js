import React from 'react';
import NotebookTemplate from 'components/notebook/NotebookTemplate';
import NotebookHeaderContainer from 'containers/notebook/NotebookHeaderContainer';
import FixedButtonContainer from 'containers/common/FixedButtonContainer';
import NotebookMainContainer from 'containers/notebook/NotebookMainContainer';

const Notebook = ({ history }) => {
  return (
    <NotebookTemplate header={<NotebookHeaderContainer history={history} />}>
      <NotebookMainContainer />
      <FixedButtonContainer history={history} />
    </NotebookTemplate>
  )
}

export default Notebook;