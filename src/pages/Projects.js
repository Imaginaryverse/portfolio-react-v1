import React, { useState } from 'react';
import ProjectDisplay from '../components/ProjectDisplay';
import ProjectList from '../components/ProjectList';
import Text, { textTypes } from '../components/Text';
import copyKeys from '../utils/CopyService';

const Projects = () => {
  const [currentItem, setCurrentItem] = useState(undefined);

  const itemList = [1, 2, 3];

  return (
    <div className="main-wrapper">
      <Text copyKey={copyKeys.NavProjects} type={textTypes.headerLarge} />

      <Text copyKey={copyKeys.GeneralComingSoon} type={textTypes.headerLarge} />

      {/* {currentItem ? (
        <ProjectDisplay
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          item={itemList[currentItem - 1]}
        />
      ) : (
        itemList.map((item, i) => (
          <ProjectList
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            item={item}
            index={i}
          />
        ))
      )} */}
    </div>
  );
};

export default Projects;
