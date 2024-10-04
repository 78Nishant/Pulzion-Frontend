// GameCards.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';

const Battle = () => {
    return (
        <div className='h-screen'>
            <Navbar/>
        <div className="flex justify-center items-center h-full space-x-4 p-10 ">
            {/* Maze Runner Card */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 flex items-center">
                        <FontAwesomeIcon icon={faGamepad} className="mr-2" />
                        Maze Runner
                    </div>
                    <p className="text-gray-700 text-base">
                        Navigate through the maze to find your way out. Can you escape?
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href="/maze">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Start Game
                    </button></a>
                </div>
            </div>

            {/* Quiz Card */}
            <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-white">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 flex items-center">
                        <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                        Quiz
                    </div>
                    <p className="text-gray-700 text-base">
                        Test your knowledge with fun and challenging questions. 
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href="/quiz">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Take Quiz
                    </button></a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Battle;

