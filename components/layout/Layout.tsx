import React, { useState } from 'react';
import { NavBarProps, Navbar } from './navbar';
import { Footer } from './footer';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Navigation links for the main navbar
  const navbarLinks = [
    { href: '/', label: 'Home' },
    { href: '/summariser', label: 'Summarise' },
    { href: '/explainer', label: 'Explain' },
    { href: '/flash-card-generator', label: 'Flash Card' }
  ];

  // Links for the navigation drawer
  const drawerLinks = [
    { href: '/', label: 'Home' },
    { href: '/collections', label: 'Collections' },
    { href: '/tasks', label: 'Task' },
    { href: '/coursework', label: 'CourseWork' },
    { href: '/search', label: 'Zoom Lectures' },
    { href: '/pdf', label: 'PDF' },
    { href: '/user', label: 'User' },
    { href: '/student', label: 'Student' },
    { href: '/professor', label: 'Professor' }
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Girish Bisane | Devansh Bansal | Shwetha Bhandhary | Nimesh " />
        <meta name="title" content="Intellitool" />
        <meta name="description" content="Your Powerful All-In-One Learning Companion Powered by ChatGPT" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <title>Intellitool</title>
      </Head>

      <div className="min-h-screen">
        <Toaster />
        
        {/* Main Navbar and Drawer Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
          <button onClick={toggleDrawer} style={{ fontSize: '30px', cursor: 'pointer', background: 'none', border: 'none' }}>
            &#9776; {/* Unicode for hamburger icon */}
          </button>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0px' }}>
          <Navbar links={navbarLinks} />
          </div>
        </div>

        {/* Drawer */}
        <div style={{
          width: isDrawerOpen ? '250px' : '0',
          height: '100%',
          position: 'fixed',
          left: 0,
          top: 0,
          backgroundColor: '#2C3E50',
          overflowX: 'hidden',
          transition: 'width 0.5s',
          paddingTop: '5px',
          boxSizing: 'border-box',
          zIndex: 1000,
          color: 'white'
        }}>
          <button onClick={toggleDrawer} style={{ fontSize: '30px', cursor: 'pointer', background: 'none', border: 'none', color: 'white', display: 'block', marginBottom: '20px' }}>
            &#10005; {/* Unicode for cross icon */}
          </button>
          {drawerLinks.map((link, index) => (
            <a key={index} href={link.href} style={{ padding: '10px', color: 'white', display: 'block', textDecoration: 'none' }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Main Content */}
        <main style={{ marginLeft: isDrawerOpen ? '250px' : '0', transition: 'margin-left 0.5s', padding: '0 20px' }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
