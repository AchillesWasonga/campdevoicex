import React from "react";

const Home = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to Campde Voices
      </h1>

      {/* Description */}
      <p className="mt-4 text-center">
        Campde Voices is a platform empowering young voices to lead discussions, debate solutions and inspire change globally.
      </p>

      <p className="mt-4 text-center">
        Our latest event is the Twende Rwanda Program. Please click the link below the Picture to CHECK IT OUT.
      </p>

      {/* Image */}
      <div className="flex justify-center mt-8">
        <img
          src="/twenderwa.jpeg" // image path
          alt="Campde Voices Welcome"
          className="rounded-lg shadow-md w-3/4 sm:w-1/2"
        />
      </div>

      {/* Link */}
      <div className="text-center mt-8">
        <a
          href="https://youtu.be/asbgrp9kWqg?si=IdxNdk2vA9YAk47s"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Check it Out
        </a>
      </div>
    </div>
  );
};

export default Home;

