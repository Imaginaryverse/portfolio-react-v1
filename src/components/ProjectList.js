import React from 'react';

const ProjectList = ({ currentItem, setCurrentItem, item }) => {
  return (
    <button onClick={() => setCurrentItem(item)}>chose number {item}</button>
  );
};

export default ProjectList;
