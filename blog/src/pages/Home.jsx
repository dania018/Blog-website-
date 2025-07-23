import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner/>
      {/* Add your Homepage content here */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home