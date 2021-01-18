import React from 'react';
import Text, { textTypes } from '../components/Text';
import copyKeys from '../utils/CopyService';

const Blog = () => {
  return (
    <div className="main-wrapper">
      <Text copyKey={copyKeys.NavBlog} type={textTypes.headerLarge} />

      <Text copyKey={copyKeys.GeneralComingSoon} type={textTypes.headerLarge} />

      {/* <a href="#">Journal: My Goals For 2021</a>

      <a href="#">Review: M1 Macbook Pro 13"</a>

      <a href="#">Tutorial: Adding Dark Mode</a>

      <a href="#">Tutorial: Adding Language Support</a>

      <a href="#">Tutorial: Simple Contact Form Validation</a>

      <a href="#">Tutorial: Hamburger Animations</a>

      <a href="#">Tutorial: Responsive Hamburger Menu</a>

      <a href="#">Journal: My Learning Journey</a> */}
    </div>
  );
};

export default Blog;
