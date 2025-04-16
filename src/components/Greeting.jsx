import React, { useEffect, useState } from 'react';

const Greeting = () => {
    const [time, setTime] = useState(new Date());
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());

            let hours = new Date().getHours();
            if (hours < 12) {
                setGreeting("Good Morning ☀️");
            } else if (hours < 18) {
                setGreeting("Good Afternoon 🌤");
            } else {
                setGreeting("Good Night 🌙");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-2">{greeting}</h1>
            <h2 className="text-2xl font-mono bg-gray-800 px-4 py-2 rounded-md shadow-md">
                {time.toLocaleTimeString()}
            </h2>
        </div>
    );
};

export default Greeting;
