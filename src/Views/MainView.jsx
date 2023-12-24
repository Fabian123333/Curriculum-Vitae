import React from 'react';

import HeroComponent from '../Components/HeroComponent';
import EmploymentHistory from '../Components/EmploymentHistory';
import SkillsComponent from '../Components/SkillsComponent';

const MainView = () => {
  return (
    <>
      <HeroComponent/>
      <EmploymentHistory/>
      <SkillsComponent/>
    </>
  );
};

export default MainView;
