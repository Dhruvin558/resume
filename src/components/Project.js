import React from 'react';
import './Project.css';

function Project() {
  return (
    <>
      <div id='project'>My Projects</div>

          <div className='projcont'>
            <div className='project'>
              <div className='project-info'>
                <h2>1. E- Commerce   Website</h2><br />
                <p className='content'>Developed an Online E-commerce Website. This website is made with HTML, CSS, and Bootstrap. It only includes the frontend of the website. This website showcases a variety of products available for purchase.<br /><br /><br /></p>
              </div>
              <div className='project-links'>
                {/* <a href='https://github.com/krutik8904/k2shop' className='btn-box'>See Project</a> */}
              </div>
            </div>

            <div className='project'>
              <div className='project-info'>
                <h2>2. Record Management System</h2><br />
                <p className='content'>Developing a Record Management System.This System Can keep Record of Admin Side and user Side.Admin Can Keep Record of Book Borrow by which Person and when they did return etx.<br /><br /><br /></p>
                <div className='project-links'>
                  {/* <a href='https://github.com/krutik8904/Record_system' className='btn-box'>See Project</a> */}
                </div>
              </div>
            </div>

      </div>
    </>
  );
}

export default Project;
