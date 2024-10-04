// import React from 'react'
import Navbar from '../components/Navbar'

// const module = () => {
//   return (
//     <div className='w-screen h-screen'>
//      <Navbar/>

//     </div>
//   )
// }

// export default module
import React from 'react';

const Learning = () => {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-black  text-white p-5">
                <h1 className="text-3xl text-center">Learn Programming Basics</h1>
                <nav className="mt-4">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#introduction" className="hover:underline">Introduction</a></li>
                        <li><a href="#concepts" className="hover:underline">Basic Concepts</a></li>
                        <li><a href="#resources" className="hover:underline">Resources</a></li>
                    </ul>
                </nav>
            </header>

            <main className="flex-grow p-5 text-black">
                <section id="introduction" className="mb-10">
                    <h2 className="text-2xl font-bold">Introduction</h2>
                    <p className="mt-2">
                        Welcome to your journey in learning programming! This page covers basic concepts and provides resources to help you get started.
                    </p>
                </section>

                <section id="concepts" className="mb-10">
                    <h2 className="text-2xl font-bold">Basic Programming Concepts</h2>

                    <h3 className="text-xl font-semibold mt-4">1. Variables</h3>
                    <p>Variables are used to store information. For example, in JavaScript:</p>
                    <pre className="bg-gray-200 p-3 rounded"><code>let name = "John";</code></pre>

                    <h3 className="text-xl font-semibold mt-4">2. Data Types</h3>
                    <p>Common data types include:</p>
                    <ul className="list-disc ml-5">
                        <li><strong>String:</strong> Textual data, e.g., "Hello"</li>
                        <li><strong>Number:</strong> Numeric data, e.g., 42</li>
                        <li><strong>Boolean:</strong> True or false values</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">3. Functions</h3>
                    <p>Functions are reusable blocks of code. For example:</p>
                    <pre className="bg-gray-200 p-3 rounded"><code>function greet(name) {'{'} return "Hello, " + name; {'}'}</code></pre>

                    <h3 className="text-xl font-semibold mt-4">4. Control Structures</h3>
                    <p>Control structures like loops and conditionals help manage the flow of your program. For example:</p>
                    <pre className="bg-gray-200 p-3 rounded"><code>
if (age &gt;= 18) {'{'}<br />
    console.log("You are an adult.");<br />
{'}'} else {'{'}<br />
    console.log("You are a minor.");<br />
{'}'}
                    </code></pre>
                </section>

                <section id="resources">
                    <h2 className="text-2xl font-bold">Resources</h2>
                    <p>Here are some helpful resources to further your learning:</p>
                    <ul className="list-disc ml-5">
                        <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">freeCodeCamp</a></li>
                        <li><a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Codecademy</a></li>
                        <li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">W3Schools</a></li>
                    </ul>
                </section>
            </main>
            <footer className="bg-gray-800 text-white text-center p-3">
                <p>&copy; 2024 Learn Programming Basics</p>
            </footer>
        </div>
      </div>
    );
};

export default Learning;
