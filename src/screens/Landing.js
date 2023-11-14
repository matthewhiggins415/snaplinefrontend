import React from 'react';
import Hero from '../components/hero/Hero';
import FeaturedPhotographers from '../components/featuredphotographers/featuredPhotographers';
import FeaturedImages from '../components/featuredimages/featuredImages';
// import SearchBar from '../components/searchbar/searchBar';

const Landing = ({ user, notify }) => {
  return (
    <>
      <Hero />
      {/* <SearchBar /> */}
      <FeaturedPhotographers />
      <FeaturedImages user={user} notify={notify} />
    </>
  )
}

export default Landing