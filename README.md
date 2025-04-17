# Greeting Component

## Overview

The `Greeting` component is a simple React application that displays a dynamic greeting based on the time of day. It updates the greeting and the current time every second.

## Features

* **Dynamic Greeting:** Displays "Good Morning ☀️", "Good Afternoon 🌤", or "Good Night 🌙" depending on the time of day.
* **Real-time Clock:** Shows the current time, updated every second.
* **Responsive UI:** The greeting and time are displayed in a centered layout with a dark theme.

## Technical Details

* Built using React.
* Uses `useState` to manage the greeting and time.
* Uses `useEffect` to update the time and greeting every second using `setInterval`.
* Styled using Tailwind CSS.

## Setup

1.  **Prerequisites:**
    * Node.js and npm installed.

2.  **Installation:**
    * Clone the repository.
    * Run `npm install` to install the dependencies.

3.  **Running the application:**
    * Run `npm start` to start the development server.
    * Open your browser at `http://localhost:3000` to view the application.

## Usage

The `Greeting` component is a standalone component that can be integrated into any React application.  It is a direct visual display, and does not require user interaction.

## Code Snippet

```react
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
Explanation of the code
