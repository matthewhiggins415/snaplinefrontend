import React from 'react';
import Hero from '../components/hero/Hero';
import FeaturedPhotographers from '../components/featuredphotographers/featuredPhotographers';
import FeaturedImages from '../components/featuredimages/featuredImages';

const Landing = ({ user, notify }) => {
  return (
    <>
      <Hero />
      <FeaturedPhotographers />
      <FeaturedImages user={user} notify={notify} />
    </>
  )
}

export default Landing