// UserPage.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserPage = () => {
    // Sample user data
    const user = {
        username: 'JohnDoe123',
        email: 'john.doe@example.com',
        parentEmail: 'parent@example.com',
        schoolName: 'Springfield High School',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    };

    // Sample data for the monthly login graph
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Logins',
                data: [5, 8, 12, 15, 10, 20, 25, 30, 22, 18, 15, 27],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="p-6 h-screen text-black">
           
            <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
            
            {/* User Credentials Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex items-center">
                <img src={user.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-6" />
                <div>
                    <h2 className="font-bold text-xl">{user.username}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">Parent: {user.parentEmail}</p>
                    <p className="text-gray-600">School: {user.schoolName}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Streak Modules Section */}
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="font-bold text-xl mb-4">Streak Modules</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between">
                            <span>Module 1</span>
                            <span className="font-semibold">5 Days</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Module 2</span>
                            <span className="font-semibold">3 Days</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Module 3</span>
                            <span className="font-semibold">7 Days</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Module 4</span>
                            <span className="font-semibold">1 Day</span>
                        </div>
                    </div>
                </div>

                {/* Monthly Login Graph Section */}
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="font-bold text-xl mb-4">Monthly Login Graph</h2>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default UserPage;
