import React from 'react';

const ProjectDisplay = ({ currentItem, setCurrentItem, item }) => {
  return (
    <>
      <button onClick={() => setCurrentItem(undefined)}>close</button>
      <p>this is item {item}</p>
    </>
  );
};

export default ProjectDisplay;
