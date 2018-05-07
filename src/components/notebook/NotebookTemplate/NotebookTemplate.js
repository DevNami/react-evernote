import React from 'react';

const NotebookTemplate = ({ header, children }) => {
  return (
    <div className="notebook-template">
      { header }
      <main>
        { children }
      </main>
    </div>
  )
}

export default NotebookTemplate;