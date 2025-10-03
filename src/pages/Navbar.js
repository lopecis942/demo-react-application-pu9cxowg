import React from 'react';

const Navbar = () => {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#', className: 'right' },
  ];

  return (
    <div className="navbar">
      {links.map(({ label, href, className }, idx) => (
        <a key={idx} href={href} className={className || ''}>
          {label}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
