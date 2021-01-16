import React from 'react';

const ProjectList = ({ currentItem, setCurrentItem, item, index }) => {
  return (
    <div>
      <img src={`https://source.unsplash.com/random/300x20${index}`} />
      <button onClick={() => setCurrentItem(item)}>chose number {item}</button>
    </div>
  );
};

export default ProjectList;
