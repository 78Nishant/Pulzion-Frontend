import React from "react";
import Navbar from "../components/Navbar";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="text-black p-10 text-2xl font-bold">
      <p><Typewriter
  options={{
    strings: ['Welcome User! What would you like to learn?'],
    autoStart: true,
    loop: true,
  }}
/></p>
      </div>
      <span class="h-full">
      <span className="flex ">
      <div className="p-10">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/0070/5901/3716/files/coding_background.jpg?v=1688538955"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Learn Basics!</h2>
            <p>Learn The Basics of a Programming Language</p>
            <div className="card-actions justify-end">
                <a href="/learn">
              <button className="btn btn-primary">Start Now</button>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQqh5ldA3rAHmQZd7zeovoc-4w0xBZ_ZxCw&s"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Python</h2>
            <p>Learn Python Basics</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Start Now</button>
            </div>
          </div>
        </div>
      </div> 
      <div className="p-10">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://training.digigrowhub.in/wp-content/uploads/2021/02/do-coding-of-any-program-by-c-plus-plus-perfectly-and-within-time.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">C++</h2>
            <p>Learn C++ Basics</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Start Now</button>
            </div>
          </div>
        </div>
      </div>
       </span>
       <span className="flex">
       <div className="p-10">
        <div className="card bg-base-100 image-full w-96 shadow-xl ">
          <figure>
            <img
              src="https://www.freecodecamp.org/news/content/images/2020/04/jsposter.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Learn JavaScript</h2>
            <p>Learn The Basics of a PJavascript Language</p>
            <div className="card-actions justify-end">
                <a href="/learn">
              <button className="btn btn-primary">Start Now</button>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="card bg-base-100 image-full w-96 shadow-xl ">
          <figure>
            <img
              src="https://media.licdn.com/dms/image/D4E12AQHfSWXTymm4VA/article-cover_image-shrink_600_2000/0/1695299723277?e=2147483647&v=beta&t=k0oOD_n5zjaGevp72SKt4vFaW7DvHtrwbdIyb2eP0GA"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Learn Html & Css</h2>
            <p>Learn The Basics of a Html and Css Language</p>
            <div className="card-actions justify-end">
                <a href="/learn">
              <button className="btn btn-primary">Start Now</button>
            </a>
            </div>
          </div>
        </div>
      </div>
        </span>
       </span>
       
    </div>
  );
};

export default Home;
