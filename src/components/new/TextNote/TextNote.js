import React from 'react';
import TextNoteContainer from 'containers/new/TextNoteContainer';

const TextNote = ({ history, match }) => {
  const id = match.params.id ? match.params.id : '';
  
  return (
    <div className="text-note">
      <TextNoteContainer history={history} id={id} />
    </div>
  )
}

export default TextNote;