import React from 'react';

const HomeTemplate = ({ header, children }) => {
  return (
    <div className="home-template">
      { header }
      <main>
        { children }
      </main>
    </div>
  )
}

export default HomeTemplate;