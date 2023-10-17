import React from 'react';
import { Parallax } from 'react-parallax';

import image_1 from './assets/image_1.png';
import image_2 from './assets/image_2.png';
import image_3 from './assets/image_3.jpg';
import image_4 from './assets/image_4.jpg';
import logo from './assets/logo.png';

const App = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>

        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
        </ul>
      </nav>
      <Parallax bgImage={image_3} className='first_one' strength={600}>
        <div className='content'>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            nihil eaque in eveniet blanditiis non neque minus esse doloribus.
            Quia numquam distinctio provident esse! Iste, beatae. Magnam eaque
            quae perferendis.
          </p>
        </div>
      </Parallax>
      <Parallax
        bgImage={image_4}
        className='second_one'
        strength={300}
      ></Parallax>
    </>
  );
};

export default App;
