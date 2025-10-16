'use client';

import React, { useState, useRef, useEffect } from 'react';

interface ProfileData {
  name: string;
  age: number;
  location: {
    city: string;
    state: string;
    country: string;
  };
  status: string;
  orientation: string;
  bodyType: string;
  religion: string;
  zodiacSign: string;
  smoke: boolean;
  drink: boolean;
  children: string;
  quote: string;
  lastLogin: string;
}

interface BlogEntry {
  title: string;
  link: string;
}

interface MySpacePortfolioProps {
  profileData?: Partial<ProfileData>;
  songUrl?: string;
  songTitle?: string;
  artistName?: string;
  backgroundImage?: string;
  blogEntries?: BlogEntry[];
  aboutMe?: string;
  whoIdLikeToMeet?: string;
  friendCount?: number;
}

const MySpacePortfolio: React.FC<MySpacePortfolioProps> = ({
  profileData = {},
  songUrl = "",
  backgroundImage = "",
  blogEntries = [
    { title: "My Latest React Project", link: "#" },
    { title: "Learning TypeScript", link: "#" },
    { title: "5 Tips for Better Code Reviews", link: "#" },
    { title: "Building This MySpace Clone", link: "#" },
    { title: "Why I Love Coding", link: "#" }
  ],
  aboutMe = "Add your developer story here...",
  whoIdLikeToMeet = "Fellow developers, tech enthusiasts, and creative collaborators...",
  friendCount = 42
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Default profile data
  const defaultProfile: ProfileData = {
    name: "Your Developer Name",
    age: 28,
    location: {
      city: "SAN FRANCISCO",
      state: "CALIFORNIA", 
      country: "United States"
    },
    status: "Available for hire",
    orientation: "Full-Stack",
    bodyType: "5&apos; 10&quot;",
    religion: "Open Source",
    zodiacSign: "Programmer",
    smoke: false,
    drink: false,
    children: "Maybe some code babies",
    quote: "Building the future,\none line at a time",
    lastLogin: "Online Now!"
  };

  const profile = { ...defaultProfile, ...profileData };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && songUrl) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, [songUrl]);

  const togglePlay = (): void => {
    const audio = audioRef.current;
    if (audio && songUrl) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const audio = audioRef.current;
    if (audio && duration) {
      const clickX = e.nativeEvent.offsetX;
      const width = (e.target as HTMLElement).offsetWidth;
      const newTime = (clickX / width) * duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number): string => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const backgroundStyle: React.CSSProperties = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: '#FFCCFF' };

  return (
    <div style={{ minHeight: '100vh', ...backgroundStyle, fontFamily: 'Arial, sans-serif', fontSize: '11px' }}>
      {songUrl && <audio ref={audioRef} src={songUrl} />}
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '10px' }}>
        <table width="100%" cellPadding={0} cellSpacing={10}>
          <tbody>
            <tr>
              <td width={300} style={{ verticalAlign: 'top' }}>
                
                {/* Main Profile */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #CC99FF', backgroundColor: '#DDBBFF', marginBottom: '10px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#9966CC', color: 'white', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                        {profile.name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='160' viewBox='0 0 120 160'%3E%3Crect width='120' height='160' fill='white' stroke='%23333' stroke-width='1'/%3E%3Ctext x='60' y='85' text-anchor='middle' dominant-baseline='middle' font-family='Arial' font-size='10' fill='%23333'%3E[Your Photo]%3C/text%3E%3C/svg%3E"
                            alt="Profile"
                            style={{ border: '1px solid black' }}
                          />
                          <div style={{ fontSize: '9px', marginTop: '3px', fontStyle: 'italic', color: '#333' }}>
                            {profile.quote.split('\n').map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                        </div>
                        
                        <div style={{ fontSize: '10px', color: '#333' }}>
                          <div><strong>Male</strong></div>
                          <div><strong>{profile.age} years old</strong></div>
                          <div><strong>{profile.location.city}</strong></div>
                          <div><strong>{profile.location.state}</strong></div>
                          <div><strong>{profile.location.country}</strong></div>
                          <div style={{ marginTop: '8px' }}>
                            <div><strong>Last Login:</strong></div>
                            <div>{profile.lastLogin}</div>
                          </div>
                        </div>
                        
                        <div style={{ marginTop: '8px', fontSize: '9px' }}>
                          <a href="#" style={{ color: '#0066CC' }}>View My:</a> 
                          <a href="#" style={{ color: '#0066CC' }}> Pics</a> | 
                          <a href="#" style={{ color: '#0066CC' }}> Videos</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Contacting */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #CC99FF', backgroundColor: '#DDBBFF', marginBottom: '10px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#9966CC', color: 'white', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                        Contacting {profile.name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px' }}>
                        <table width="100%" style={{ fontSize: '9px' }}>
                          <tbody>
                            <tr>
                              <td style={{ paddingBottom: '2px' }}>
                                📧 <a href="mailto:your@email.com" style={{ color: '#0066CC' }}>Send Message</a>
                              </td>
                              <td style={{ paddingBottom: '2px' }}>
                                📤 <a href="#" style={{ color: '#0066CC' }}>Forward to Friend</a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: '2px' }}>
                                👤 <a href="#" style={{ color: '#0066CC' }}>Add to Friends</a>
                              </td>
                              <td style={{ paddingBottom: '2px' }}>
                                ⭐ <a href="#" style={{ color: '#0066CC' }}>Add to Favorites</a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: '2px' }}>
                                💻 <a href="https://github.com/yourusername" style={{ color: '#0066CC' }}>GitHub</a>
                              </td>
                              <td style={{ paddingBottom: '2px' }}>
                                🔗 <a href="#" style={{ color: '#0066CC' }}>LinkedIn</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* MySpace URL */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #CC99FF', backgroundColor: '#DDBBFF', marginBottom: '10px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#9966CC', color: 'white', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                        DevSpace URL:
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px' }}>
                        <div style={{ fontSize: '9px' }}>
                          http://www.devspace.com/yourname
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Details */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #CC99FF', backgroundColor: '#DDBBFF' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#9966CC', color: 'white', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Details
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px', fontSize: '9px' }}>
                        <div><strong>Status:</strong> {profile.status}</div>
                        <div><strong>Here for:</strong> Networking</div>
                        <div><strong>Orientation:</strong> {profile.orientation}</div>
                        <div><strong>Body type:</strong> {profile.bodyType}</div>
                        <div><strong>Religion:</strong> {profile.religion}</div>
                        <div><strong>Zodiac Sign:</strong> {profile.zodiacSign}</div>
                        <div><strong>Smoke /</strong></div>
                        <div><strong>Drink:</strong> {profile.smoke ? 'Yes' : 'No'} / {profile.drink ? 'Yes' : 'No'}</div>
                        <div><strong>Children:</strong> {profile.children}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              
              {/* Main Content */}
              <td style={{ verticalAlign: 'top' }}>
                
                {/* Extended Network */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '1px solid #999', backgroundColor: 'white', marginBottom: '10px' }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px', fontSize: '11px', textAlign: 'center' }}>
                        <strong>{profile.name} is in your extended network</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Blog Entries */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #CC99FF', backgroundColor: '#DDBBFF', marginBottom: '10px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#9966CC', color: 'white', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Latest Blog Entry ( <a href="#" style={{ color: 'white' }}>Subscribe to this Blog</a> )
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', fontSize: '10px' }}>
                        {blogEntries.map((entry, index) => (
                          <div key={index} style={{ marginBottom: '5px' }}>
                            <strong>{entry.title}</strong> ( <a href={entry.link} style={{ color: '#0066CC' }}>view more</a> )
                          </div>
                        ))}
                        <div style={{ marginTop: '8px' }}>
                          <a href="#" style={{ color: '#0066CC' }}>[ View All Blog Entries ]</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Blurbs/About */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #FFAA66', backgroundColor: '#FFDDAA', marginBottom: '10px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#DD8844', color: 'white', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Blurbs
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', fontSize: '10px' }}>
                        <div style={{ marginBottom: '8px' }}>
                          <strong>About me:</strong><br />
                          {aboutMe}
                        </div>
                        
                        <div>
                          <strong>Who I&apos;d like to meet:</strong><br />
                          {whoIdLikeToMeet}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Friend Space */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #FFAA66', backgroundColor: '#FFDDAA' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#DD8844', color: 'white', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Friend Space
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px' }}>
                        <div style={{ fontSize: '10px', marginBottom: '8px' }}>
                          {profile.name} has <strong>{friendCount}</strong> friends.
                        </div>
                        <table cellPadding={3} cellSpacing={0}>
                          <tbody>
                            <tr>
                              {Array.from({length: 4}, (_, i) => (
                                <td key={i} style={{ textAlign: 'center' }}>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img 
                                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 75 75'%3E%3Crect width='75' height='75' fill='white' stroke='%23333'/%3E%3Ctext x='37.5' y='42' text-anchor='middle' font-family='Arial' font-size='9' fill='%23333'%3EProject ${i+1}%3C/text%3E%3C/svg%3E`}
                                    alt={`Project ${i+1}`}
                                    style={{ border: '1px solid black' }}
                                  />
                                  <div style={{ fontSize: '8px', marginTop: '2px' }}>
                                    <a href="#" style={{ color: '#0066CC' }}>Project {i+1}</a>
                                  </div>
                                </td>
                              ))}
                            </tr>
                            <tr>
                              {Array.from({length: 4}, (_, i) => (
                                <td key={i} style={{ textAlign: 'center' }}>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img 
                                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 75 75'%3E%3Crect width='75' height='75' fill='white' stroke='%23333'/%3E%3Ctext x='37.5' y='42' text-anchor='middle' font-family='Arial' font-size='9' fill='%23333'%3EProject ${i+5}%3C/text%3E%3C/svg%3E`}
                                    alt={`Project ${i+5}`}
                                    style={{ border: '1px solid black' }}
                                  />
                                  <div style={{ fontSize: '8px', marginTop: '2px' }}>
                                    <a href="#" style={{ color: '#0066CC' }}>Project {i+5}</a>
                                  </div>
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ textAlign: 'center', marginTop: '8px' }}>
                          <a href="#" style={{ color: '#0066CC', fontSize: '9px' }}>View All of {profile.name}&apos;s Projects</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Comments Section */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #CC99FF', backgroundColor: '#DDBBFF', marginTop: '10px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#9966CC', color: 'white', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Friend Comments
                        (Displaying 3 of 47 comments) ( <a href="#" style={{ color: 'white' }}>View All</a> | <a href="#" style={{ color: 'white' }}>Add Comment</a> )
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', fontSize: '10px' }}>
                        <div style={{ marginBottom: '8px' }}>
                          <strong>TechRecruiter_Sarah</strong> | 6/1/2006 9:47 PM<br />
                          Your portfolio is amazing! Would love to discuss some opportunities.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Music Player - Only show if songUrl is provided */}
                {songUrl && (
                  <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #666666', backgroundColor: '#333333', marginTop: '10px' }}>
                    <tbody>
                      <tr>
                        <td style={{ backgroundColor: '#666666', color: 'white', padding: '2px 8px', fontSize: '12px', fontWeight: 'bold' }}>
                          {profile.name}&apos;s Music
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px' }}>
                          <table cellPadding={0} cellSpacing={0} width="100%" style={{ backgroundColor: 'black', border: '1px solid #999' }}>
                            <tbody>
                              <tr>
                                <td style={{ padding: '8px' }}>
                                  <div style={{ marginBottom: '5px' }}>
                                    <button 
                                      onClick={togglePlay}
                                      style={{ 
                                        backgroundColor: '#666',
                                        color: 'white', 
                                        border: '1px solid #999',
                                        padding: '2px 8px',
                                        marginRight: '5px',
                                        cursor: 'pointer',
                                        fontSize: '10px'
                                      }}
                                    >
                                      {isPlaying ? 'Pause' : 'Play'}
                                    </button>
                                    <span style={{ color: 'white', fontSize: '10px' }}>
                                      {formatTime(currentTime)} / {formatTime(duration)}
                                    </span>
                                  </div>
                                  
                                  <div 
                                    onClick={handleProgressClick}
                                    style={{ 
                                      backgroundColor: '#333', 
                                      height: '8px', 
                                      border: '1px inset #666',
                                      cursor: 'pointer'
                                    }}
                                  >
                                    <div 
                                      style={{ 
                                        backgroundColor: '#00FF00', 
                                        height: '6px', 
                                        width: `${duration ? (currentTime / duration) * 100 : 0}%`
                                      }}
                                    ></div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySpacePortfolio;