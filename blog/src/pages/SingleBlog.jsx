import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title , image , category , author , published_date , reading_time , content} = data[0];
    // console.log(data);
  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-4'>
          <h2 className='text-5xl lg:text=7xl leading-snug font-bold mb-5'>Single Blog Page </h2>
        </div>

        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
             <div>
                <img src={image} className='w-full mx-auto rounded' />
             </div>
             <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
             <p className='mb-3 text-gray-600'> <FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
         <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
         <p className='text-base text-gray-500 mb-6'>{content}</p>
         <div className='text-base text-gray-500'>
     
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo laborum tempora nemo earum incidunt quisquam! Aut, accusantium quo repellendus et consequuntur suscipit quae, error nobis earum incidunt natus facere?</p>
         <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo laborum tempora nemo earum incidunt quisquam! Aut, accusantium quo repellendus et consequuntur suscipit quae, error nobis earum incidunt natus facere?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo laborum tempora nemo earum incidunt quisquam! Aut, accusantium quo repellendus et consequuntur suscipit quae, error nobis earum incidunt natus facere?</p>
     <br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur commodi harum nostrum culpa ipsa voluptates, aliquid nemo amet rerum architecto tenetur vitae earum itaque obcaecati</p>
      
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo laborum tempora nemo earum incidunt quisquam! Aut, accusantium quo repellendus et consequuntur suscipit quae, error nobis earum incidunt natus facere?</p>
         <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo laborum tempora nemo earum incidunt quisquam! Aut, accusantium quo repellendus et consequuntur suscipit quae, error nobis earum incidunt natus facere?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo laborum tempora nemo earum incidunt quisquam! Aut, accusantium quo repellendus et consequuntur suscipit quae, error nobis earum incidunt natus facere?</p>
     <br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur commodi harum nostrum culpa ipsa voluptates, aliquid nemo amet rerum architecto tenetur vitae earum itaque obcaecati</p>
      
         </div>
                     </div>

                     <div className='lg:w-1/2'>
                      <SideBar/>
                      </div>
        </div>
    </div>
  )
}

export default SingleBlog