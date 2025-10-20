'use client';

import { useState } from 'react';
import MySpacePortfolio from '@/components/MySpacePortfolio';

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState<'pink' | 'blue' | 'green' | 'purple' | 'peach' | 'lavender'>('pink');

  const themes = [
    { name: 'Pink Princess', value: 'pink' as const },
    { name: 'Sky Blue', value: 'blue' as const },
    { name: 'Mint Fresh', value: 'green' as const },
    { name: 'Purple Rain', value: 'purple' as const },
    { name: 'Peachy Keen', value: 'peach' as const },
    { name: 'Lavender Dreams', value: 'lavender' as const }
  ];

  // Your profile data
  const profileData = {
    name: "Skylar Lea",
    age: 29,
    location: {
      city: "DALLAS",
      state: "TEXAS",
      country: "United States"
    },
    status: "Available for hire",
    orientation: "Full-Stack",
    bodyType: "5' 6\"",
    religion: "Open Source",
    zodiacSign: "Programmer",
    smoke: false,
    drink: false,
    children: "Maybe some code babies...and one real one",
    quote: "Building the future,\none line at a time",
    lastLogin: "Online Now!"
  };

  const blogEntries = [
    { title: "🚀 Just Shipped: My React Portfolio Redesign", link: "#" },
    { title: "📚 Mastering TypeScript: A Journey", link: "#" },
    { title: "⚡ 5 Tips for Lightning-Fast Code Reviews", link: "#" },
    { title: "🎨 Building This MySpace Clone Was Wild", link: "#" },
    { title: "☕ Why I Code Better with Coffee", link: "#" }
  ];

  const aboutMe = `Hey there! I'm a passionate full-stack developer who loves building beautiful, functional web applications. 

When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or trying to perfect my coffee brewing technique. I believe great software comes from combining technical skill with creative problem-solving.

Currently obsessed with React, TypeScript, and making the web more accessible for everyone. Always down to chat about code, collaborate on projects, or debate the best VS Code themes!

Fun fact: I built this MySpace-inspired portfolio because I miss when the internet had more personality. Bring back the early 2000s web aesthetic! ✨`;

  const whoIdLikeToMeet = `Fellow developers who are passionate about clean code and user experience! I'd love to connect with:

• Frontend wizards who can make CSS do impossible things
• Backend architects who design elegant APIs
• UI/UX designers who understand both beauty and usability
• Open source maintainers and contributors
• Startup founders building cool products
• Anyone who wants to chat about tech, grab coffee, or collaborate on projects

If you're building something awesome or just want to geek out about code, let's connect! Always excited to meet people who share the passion for creating amazing digital experiences.`;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Theme Switcher */}
      <div style={{
        position: 'fixed',
        top: '15px',
        right: '15px',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        border: '2px solid #999',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '11px'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
          🎨 Choose Theme
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => setCurrentTheme(theme.value)}
              style={{
                padding: '4px 8px',
                fontSize: '10px',
                border: currentTheme === theme.value ? '2px solid #333' : '1px solid #ccc',
                backgroundColor: currentTheme === theme.value ? '#f0f0f0' : 'white',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: currentTheme === theme.value ? 'bold' : 'normal'
              }}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>

      {/* MySpace Portfolio */}
      <MySpacePortfolio
        theme={currentTheme}
        profileData={profileData}
        blogEntries={blogEntries}
        aboutMe={aboutMe}
        whoIdLikeToMeet={whoIdLikeToMeet}
        friendCount={127}
      />
    </div>
  );
}