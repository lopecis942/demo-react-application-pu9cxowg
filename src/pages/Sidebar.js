import React from 'react';

const Sidebar = () => {
  const fakeImages = [200, 60, 60, 60]; // heights of fake images

  return (
    <div className="side">
      <h2>Arcu bibendum</h2>
      <h5>Sit amet mattis vulputate</h5>

      {fakeImages.map((height, idx) => (
        <div
          key={idx}
          className="fakeimg"
          style={{ height }}
        >
          Image
        </div>
      ))}

      <p>
        Non blandit massa enim nec dui nunc mattis enim. Egestas tellus rutrum tellus
        pellentesque eu tincidunt tortor aliquam nulla..
      </p>

      <h3>Massa enim</h3>
      <p>Lorem ipsum dolor sit ame.</p>
    </div>
  );
};

export default Sidebar;
