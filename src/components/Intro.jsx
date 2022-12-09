import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Jacob Moore
      </h1>
      <p className="text-base md:text-xl mb-3 font-large">
        Self Taught Web Developer
      </p>
      <p className=" text-sm max-w-xl mb-6">
        I started my coding journey when I was 16 and wanted to make an app. My
        parents got me a "Coding for Dummies" book and it sat there and
        collected dust. Fast foward 11 years, I decided to finally take software
        development seriously. I had tried to learn on my own in the past but
        nothing seemed to stick. In November 2021 I purchased a few courses on
        Udemy, and with motivation from a friend got started in my learning
        journey.
        <br />
        Here I am almost a year later and still going strong. I have increased
        my knowlege in HTML, CSS, JavaScript. More recently I have started to
        learn React.JS, CSS frameworks such as tailwind (used to style this
        website), and Vite (used on this webstie as well). In my free time I
        love to go exploring with my wife and my dog, play games, read, and
        cook.
      </p>
    </div>
  );
}

export default Intro;
