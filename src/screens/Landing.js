import React from 'react';
import Hero from '../components/hero/Hero';
import FeaturedPhotographers from '../components/featuredphotographers/featuredPhotographers';
import FeaturedImages from '../components/featuredimages/featuredImages';

const Landing = ({ notify }) => {
  return (
    <>
      <Hero />
      <FeaturedPhotographers />
      <FeaturedImages />
    </>
  )
}

export default Landing