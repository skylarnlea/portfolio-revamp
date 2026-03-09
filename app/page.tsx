'use client';

import { useState } from 'react';
import MySpacePortfolio from '@/components/MySpacePortfolio';

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState<'pink' | 'blue' | 'green' | 'purple' | 'peach' | 'lavender'>('pink');

  const themes = [
    { name: 'Pink Princess', value: 'pink' as const, color: '#FFCCFF' },
    { name: 'Sky Blue', value: 'blue' as const, color: '#CCE7FF' },
    { name: 'Mint Fresh', value: 'green' as const, color: '#D4EDDA' },
    { name: 'Purple Rain', value: 'purple' as const, color: '#E6D7FF' },
    { name: 'Peachy Keen', value: 'peach' as const, color: '#FFE4CC' },
    { name: 'Lavender Dreams', value: 'lavender' as const, color: '#F0E6FF' }
  ];

  // Your profile data
  const profileData = {
    name: "Skylar Lea",
    age: 30,
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
    quote: "Teaching AI to talk so I don't have to",
    lastLogin: "Online Now!"
  };

  const projects = [
    {
      name: "Multi-Channel AI Ecosystem",
      description: "Contributed to and supported backend services for a multi-channel AI ecosystem (Web, Reddit Bot, Retail VA) using GCP Vertex AI and a RAG model to deliver up-to-date Samsung product responses.",
      tech: ["Vertex AI", "RAG", "GCP", "Node.js", "TypeScript"],
      type: "AI/ML",
      image: "/images/WhySwitchPage.png"
    },
    {
      name: "Conversational AI — Voice Pipeline",
      description: "Contributed to and maintained the backend for a conversational AI with a voice-to-voice pipeline (Speech-to-Text → ElevenLabs TTS), scaling it from 4 Samsung stores to 400+ T-Mobile and Verizon stores with real-time WebSocket streaming.",
      tech: ["WebSocket", "ElevenLabs", "GCP STT", "Node.js"],
      type: "AI/ML"
    },
    {
      name: "Influencer Management Platform",
      description: "Worked across the full stack on a ground-up rebuild of a gamified influencer management platform, helping cut cloud costs by 65% and supporting its transition into a multi-tenant B2B SaaS product.",
      tech: ["Next.js", "TypeScript", "Node.js", "GCP", "Firestore"],
      type: "B2B SaaS"
    },
    {
      name: "HR Self-Service Chatbot",
      description: "Built a full-stack RAG-powered chatbot using Gemini 2.5 Flash to automate employee self-service, helping reduce HR workload by giving employees instant access to company policies and IT support docs.",
      tech: ["Next.js", "TypeScript", "Vertex AI"],
      type: "Internal Tool",
      image: "/images/AIChatbotAssistant.png"
    },
    {
      name: "Carrier Partner Features",
      description: "Worked with T-Mobile and Verizon teams to build responsive frontend features from processed and organized JSON data.",
      tech: ["React", "JavaScript", "REST APIs", "HTML/CSS"],
      type: "Consumer Web"
    },
    {
      name: "MySpace Portfolio (This Site!)",
      description: "A nostalgic MySpace-inspired developer portfolio because the early 2000s web aesthetic deserves a comeback.",
      tech: ["Next.js", "TypeScript", "React"],
      type: "Personal Project"
    }
  ];

  const aboutMe = `Howdy! I'm a passionate full-stack software engineer who loves building beautiful, impactful, functional web applications. When I'm not building, you can find me at the cutest coffee shop in town, spending time with those I love most, or attempting to golf... Currently mastering my skills in backend development. Always down to chat about opportunities, collaborate on projects, or debate the best VS Code themes (Atom One Dark)! I built this MySpace-inspired portfolio because it's nostalgic, duh. Bring back the early 2000s web aesthetic please!`;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* MySpace Portfolio */}
      <MySpacePortfolio
        theme={currentTheme}
        profileData={profileData}
        aboutMe={aboutMe}
        projects={projects}
        themeCircles={
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {themes.map((t) => (
              <button
                key={t.value}
                className="theme-circle"
                onClick={() => setCurrentTheme(t.value)}
                title={t.name}
                style={{
                  width: currentTheme === t.value ? '18px' : '14px',
                  height: currentTheme === t.value ? '18px' : '14px',
                  borderRadius: '50%',
                  backgroundColor: t.color,
                  border: currentTheme === t.value ? '2px solid white' : '1px solid rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'transform 0.15s ease, width 0.15s ease, height 0.15s ease',
                  boxShadow: currentTheme === t.value ? '0 0 4px rgba(0,0,0,0.3)' : 'none',
                  flexShrink: 0
                }}
              />
            ))}
          </div>
        }
      />
    </div>
  );
}