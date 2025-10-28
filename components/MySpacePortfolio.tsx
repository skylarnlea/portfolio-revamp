import React, { useState } from 'react';
import Image from 'next/image';
import FriendsModal from './modals/FriendsModal';
import PicsModal from './modals/PicsModal';
import VideosModal from './modals/VideosModal';
import LegalModal from './modals/LegalModal';

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
  backgroundImage?: string;
  blogEntries?: BlogEntry[];
  aboutMe?: string;
  whoIdLikeToMeet?: string;
  friendCount?: number;
  theme?: 'pink' | 'blue' | 'green' | 'purple' | 'peach' | 'lavender';
}

const MySpacePortfolio: React.FC<MySpacePortfolioProps> = ({
  profileData = {},
  // songUrl intentionally unused for now
  backgroundImage = "",
  theme = 'pink',
  blogEntries = [
    { title: "My Favorite Coffee Shop", link: "#" },
    { title: "Learning C#", link: "#" },
    { title: "5 Tips for Better Code Reviews", link: "#" },
    { title: "Building This MySpace Clone", link: "#" },
    { title: "Why I Love Coding", link: "#" }
  ],
  aboutMe = "Add your developer story here...",
  whoIdLikeToMeet = "Fellow developers, tech enthusiasts, and creative collaborators...",
  friendCount = 42
}) => {
  const [showLegalModal, setShowLegalModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarkHint, setBookmarkHint] = useState<string>('');
  const [friendHint, setFriendHint] = useState<string>('');
  const [showFriendsModal, setShowFriendsModal] = useState<boolean>(false);
  const [showPicsModal, setShowPicsModal] = useState<boolean>(false);
  const [showVideosModal, setShowVideosModal] = useState<boolean>(false);

  // Copy current page URL to clipboard (with fallback for non-secure contexts)
  const handleCopyCurrentUrl = async (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>): Promise<void> => {
    if (e) e.preventDefault();
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const url = window.location.href;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback: create a temporary textarea to copy from
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        const selection = document.getSelection();
        const selected = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (selected && selection) {
          selection.removeAllRanges();
          selection.addRange(selected);
        }
      }
      setCopied(true);
    } catch (err) {
      // Silently fail; could also surface an error state
      console.error('Failed to copy URL:', err);
    } finally {
      // Reset copied message after a short delay
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  // Pastel color themes
  const themes = {
    pink: {
      background: '#FFCCFF',
      profileBg: '#DDBBFF',
      profileHeader: '#9966CC',
      contactBg: '#DDBBFF',
      contactHeader: '#9966CC',
      urlBg: '#DDBBFF',
      urlHeader: '#9966CC',
      detailsBg: '#DDBBFF',
      detailsHeader: '#9966CC',
      blogBg: '#DDBBFF',
      blogHeader: '#9966CC',
      blurbsBg: '#FFDDAA',
      blurbsHeader: '#DD8844',
      friendsBg: '#FFDDAA',
      friendsHeader: '#DD8844'
    },
    blue: {
      background: '#CCE7FF',
      profileBg: '#B3D9FF',
      profileHeader: '#4D94FF',
      contactBg: '#B3D9FF',
      contactHeader: '#4D94FF',
      urlBg: '#B3D9FF',
      urlHeader: '#4D94FF',
      detailsBg: '#B3D9FF',
      detailsHeader: '#4D94FF',
      blogBg: '#B3D9FF',
      blogHeader: '#4D94FF',
      blurbsBg: '#D4EDDA',
      blurbsHeader: '#6C9F7F',
      friendsBg: '#D4EDDA',
      friendsHeader: '#6C9F7F'
    },
    green: {
      background: '#D4EDDA',
      profileBg: '#C3E6CB',
      profileHeader: '#6C9F7F',
      contactBg: '#C3E6CB',
      contactHeader: '#6C9F7F',
      urlBg: '#C3E6CB',
      urlHeader: '#6C9F7F',
      detailsBg: '#C3E6CB',
      detailsHeader: '#6C9F7F',
      blogBg: '#C3E6CB',
      blogHeader: '#6C9F7F',
      blurbsBg: '#FFE4B3',
      blurbsHeader: '#D4A574',
      friendsBg: '#FFE4B3',
      friendsHeader: '#D4A574'
    },
    purple: {
      background: '#E6D7FF',
      profileBg: '#D9CCFF',
      profileHeader: '#8A67FF',
      contactBg: '#D9CCFF',
      contactHeader: '#8A67FF',
      urlBg: '#D9CCFF',
      urlHeader: '#8A67FF',
      detailsBg: '#D9CCFF',
      detailsHeader: '#8A67FF',
      blogBg: '#D9CCFF',
      blogHeader: '#8A67FF',
      blurbsBg: '#FFD9E6',
      blurbsHeader: '#E673A3',
      friendsBg: '#FFD9E6',
      friendsHeader: '#E673A3'
    },
    peach: {
      background: '#FFE4CC',
      profileBg: '#FFD9B3',
      profileHeader: '#E6905A',
      contactBg: '#FFD9B3',
      contactHeader: '#E6905A',
      urlBg: '#FFD9B3',
      urlHeader: '#E6905A',
      detailsBg: '#FFD9B3',
      detailsHeader: '#E6905A',
      blogBg: '#FFD9B3',
      blogHeader: '#E6905A',
      blurbsBg: '#E6F3E6',
      blurbsHeader: '#7BB37B',
      friendsBg: '#E6F3E6',
      friendsHeader: '#7BB37B'
    },
    lavender: {
      background: '#F0E6FF',
      profileBg: '#E6CCFF',
      profileHeader: '#B366FF',
      contactBg: '#E6CCFF',
      contactHeader: '#B366FF',
      urlBg: '#E6CCFF',
      urlHeader: '#B366FF',
      detailsBg: '#E6CCFF',
      detailsHeader: '#B366FF',
      blogBg: '#E6CCFF',
      blogHeader: '#B366FF',
      blurbsBg: '#FFF0E6',
      blurbsHeader: '#E6B380',
      friendsBg: '#FFF0E6',
      friendsHeader: '#E6B380'
    }
  };

  const currentTheme = themes[theme];

  // Default profile data
  const defaultProfile: ProfileData = {
    name: "Skylar Lea",
    age: 29,
    location: {
      city: "DALLAS",
      state: "TEXAS", 
      country: "United States"
    },
    status: "Available for hire",
    orientation: "Full-Stack",
    bodyType: "5&apos; 10&quot;",
    religion: "Open Source",
    zodiacSign: "Programmer",
    smoke: false,
    drink: false,
    children: "Maybe some code babies...and one real one",
    quote: "Building the future,\none line at a time",
    lastLogin: "Online Now!"
  };

  const profile = { ...defaultProfile, ...profileData };

  const togglePlay = (): void => {
    // Show legal disclaimer instead of playing music
    setShowLegalModal(true);
  };

  const closeLegalModal = (): void => {
    setShowLegalModal(false);
  };

  // Open/close Pics modal
  const openPicsModal = (e?: React.MouseEvent<HTMLAnchorElement>): void => {
    if (e) e.preventDefault();
    setShowPicsModal(true);
  };
  const closePicsModal = (): void => {
    setShowPicsModal(false);
  };

  // Open/close Videos modal
  const openVideosModal = (e?: React.MouseEvent<HTMLAnchorElement>): void => {
    if (e) e.preventDefault();
    setShowVideosModal(true);
  };
  const closeVideosModal = (): void => {
    setShowVideosModal(false);
  };

  // Open/close Friends modal
  const openFriendsModal = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
    if (e) e.preventDefault();
    setShowFriendsModal(true);
  };
  const closeFriendsModal = (): void => {
    setShowFriendsModal(false);
    setFriendHint('');
  };

  // Helper: copy text to clipboard with fallback
  const copyText = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    } catch {
      return false;
    }
  };

  // Modal actions
  const handleDownloadVCard = (): void => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const fullName = profile.name || 'My Friend';
    const parts = fullName.trim().split(' ').filter(Boolean);
    const firstName = parts[0] || '';
    const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
    const middleName = parts.length > 2 ? parts.slice(1, -1).join(' ') : '';

    const siteUrl = window.location.href;
    const email = 'skyniclea@gmail.com';
    const note = profile.status ? `Status: ${profile.status}` : '';

    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${fullName}`,
      `N:${lastName};${firstName};${middleName};;`,
      `EMAIL:${email}`,
      `URL:${siteUrl}`,
      note ? `NOTE:${note}` : undefined,
      'END:VCARD'
    ].filter(Boolean).join('\n');

    try {
      const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fullName.toLowerCase().replace(/\s+/g, '-')}.vcf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setFriendHint('Contact card downloaded');
    } catch (err) {
      console.error('Failed to generate vCard:', err);
      setFriendHint('Unable to download contact');
    } finally {
      window.setTimeout(() => setFriendHint(''), 2500);
    }
  };

  const handleCopyEmail = async (): Promise<void> => {
    const ok = await copyText('skyniclea@gmail.com');
    setFriendHint(ok ? 'Email copied' : 'Copy failed');
    window.setTimeout(() => setFriendHint(''), 2000);
  };

  const handleCopyPageUrl = async (): Promise<void> => {
    if (typeof window === 'undefined') return;
    const ok = await copyText(window.location.href);
    setFriendHint(ok ? 'URL copied' : 'Copy failed');
    window.setTimeout(() => setFriendHint(''), 2000);
  };

  // Show browser-appropriate instructions to bookmark the page
  const handleAddToFavorites = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
    if (e) e.preventDefault();
    if (typeof window === 'undefined') return;

    const url = window.location.href;
    const title = document?.title || 'This page';

    // Legacy attempts (mostly not supported in modern browsers)
    const w = window as unknown as {
      external?: { AddFavorite?: (url: string, title: string) => void };
      sidebar?: { addPanel?: (title: string, url: string, panel?: string) => void };
    };
    // IE
    if (w.external?.AddFavorite) {
      try {
        w.external.AddFavorite(url, title);
        return;
      } catch {}
    }
    // Old Firefox
    if (w.sidebar?.addPanel) {
      try {
        w.sidebar.addPanel(title, url, '');
        return;
      } catch {}
    }

    // Fallback: show a small hint with the right shortcut/instructions
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    const ua = navigator.userAgent || '';
  const winObj = window as unknown as Record<string, unknown>;
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !('MSStream' in winObj);
    const isAndroid = /Android/.test(ua);

    let message = '';
    if (isIOS) {
      message = "On iOS: Tap the Share button, then 'Add to Home Screen' or 'Add Bookmark'.";
    } else if (isAndroid) {
      message = "On Android: Open the browser menu (⋮) and choose 'Add to Home screen' or 'Bookmark'.";
    } else {
      message = `Press ${isMac ? '⌘' : 'Ctrl'}+D to bookmark this page.`;
    }
    setBookmarkHint(message);
    window.setTimeout(() => setBookmarkHint(''), 4000);
  };

  const backgroundStyle: React.CSSProperties = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: currentTheme.background };

  return (
    <div style={{ minHeight: '100vh', ...backgroundStyle, fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <table width="100%" cellPadding={0} cellSpacing={20}>
          <tbody>
            <tr>
              <td width={400} style={{ verticalAlign: 'top' }}>
                
                {/* Main Profile */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: `2px solid ${currentTheme.profileHeader}`, backgroundColor: currentTheme.profileBg, marginBottom: '15px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: currentTheme.profileHeader, color: 'white', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                        {profile.name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '15px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                          <Image 
                            src="/images/profilephoto.jpg"
                            alt="Profile Photo"
                            width={300}
                            height={400}
                            style={{ 
                              border: '1px solid black',
                              objectFit: 'contain',
                              width: '100%',
                              height: 'auto',
                              maxWidth: '300px',
                              maxHeight: '400px'
                            }}
                            priority
                          />
                          <div style={{ fontSize: '12px', marginTop: '6px', fontStyle: 'italic', color: '#333' }}>
                            {profile.quote.split('\n').map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                        </div>
                        
                        <div style={{ fontSize: '13px', color: '#333' }}>
                          <div><strong>Female</strong></div>
                          <div><strong>{profile.age} years old</strong></div>
                          <div><strong>{profile.location.city}</strong></div>
                          <div><strong>{profile.location.state}</strong></div>
                          <div><strong>{profile.location.country}</strong></div>
                          <div style={{ marginTop: '12px' }}>
                            <div><strong>Last Login:</strong></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                              {/* Signal bars */}
                              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1px', marginRight: '4px' }}>
                                <div style={{ 
                                  width: '3px', 
                                  height: '4px', 
                                  backgroundColor: '#66CC66', 
                                  border: '1px solid #339933',
                                  borderBottom: 'none'
                                }}></div>
                                <div style={{ 
                                  width: '3px', 
                                  height: '7px', 
                                  backgroundColor: '#66CC66', 
                                  border: '1px solid #339933',
                                  borderBottom: 'none'
                                }}></div>
                                <div style={{ 
                                  width: '3px', 
                                  height: '10px', 
                                  backgroundColor: '#66CC66', 
                                  border: '1px solid #339933',
                                  borderBottom: 'none'
                                }}></div>
                                <div style={{ 
                                  width: '3px', 
                                  height: '13px', 
                                  backgroundColor: '#66CC66', 
                                  border: '1px solid #339933',
                                  borderBottom: 'none'
                                }}></div>
                              </div>
                              {/* Person icon */}
                              <div style={{ 
                                width: '14px', 
                                height: '14px', 
                                backgroundColor: '#FF9900', 
                                borderRadius: '50%',
                                border: '1px solid #CC6600',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}>
                                <div style={{
                                  width: '8px',
                                  height: '8px',
                                  backgroundColor: '#FF9900',
                                  position: 'absolute',
                                  bottom: '-5px',
                                  borderRadius: '4px 4px 0 0',
                                  border: '1px solid #CC6600',
                                  borderBottom: 'none'
                                }}></div>
                              </div>
                              {/* Online Now text */}
                              <span style={{ 
                                color: '#00CC00', 
                                fontWeight: 'bold', 
                                fontSize: '14px',
                                textShadow: '1px 1px 0px #008800'
                              }}>
                                Online Now!
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div style={{ marginTop: '12px', fontSize: '12px' }}>
                          <a href="#" style={{ color: '#0066CC' }}>View My:</a> 
                          <a href="#pics" onClick={openPicsModal} style={{ color: '#0066CC' }}> Pics</a> | 
                          <a href="#videos" onClick={openVideosModal} style={{ color: '#0066CC' }}> Videos</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Contacting */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: `2px solid ${currentTheme.contactHeader}`, backgroundColor: currentTheme.contactBg, marginBottom: '15px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: currentTheme.contactHeader, color: 'white', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                        Contacting {profile.name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px' }}>
                        <table width="100%" style={{ fontSize: '12px' }}>
                          <tbody>
                            <tr>
                              <td style={{ paddingBottom: '4px' }}>
                                <a href="mailto:skyniclea@gmail.com" style={{ color: '#0066CC', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <span style={{ fontSize: '16px' }}>📧</span>
                                  <span>Send Message</span>
                                </a>
                              </td>
                              <td style={{ paddingBottom: '4px' }}>
                                <a
                                  href="#"
                                  onClick={handleCopyCurrentUrl}
                                  title="Copy page URL to clipboard"
                                  style={{ color: '#0066CC', display: 'flex', alignItems: 'center', gap: '4px' }}
                                >
                                  <span style={{ fontSize: '16px' }} aria-hidden>📤</span>
                                  <span>Forward to Friend</span>
                                  {copied && (
                                    <span style={{ marginLeft: '6px', color: '#0a8a0a', fontSize: '11px', fontWeight: 'bold' }}>
                                      Copied!
                                    </span>
                                  )}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: '4px' }}>
                                <a
                                  href="#"
                                  onClick={openFriendsModal}
                                  title="Connect options"
                                  style={{ color: '#0066CC', display: 'flex', alignItems: 'center', gap: '4px' }}
                                >
                                  <span style={{ fontSize: '16px' }}>👤</span>
                                  <span>Add to Friends</span>
                                </a>
                              </td>
                              <td style={{ paddingBottom: '4px' }}>
                                <a
                                  href="#"
                                  onClick={handleAddToFavorites}
                                  title="Bookmark this page"
                                  style={{ color: '#0066CC', display: 'flex', alignItems: 'center', gap: '4px' }}
                                >
                                  <span style={{ fontSize: '16px' }}>⭐</span>
                                  <span>Add to Favorites</span>
                                  {bookmarkHint && (
                                    <span
                                      aria-live="polite"
                                      style={{ marginLeft: '6px', color: '#0a8a0a', fontSize: '11px', fontWeight: 'bold' }}
                                    >
                                      {bookmarkHint}
                                    </span>
                                  )}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: '4px' }}>
                                <a href="https://github.com/skylarnlea" style={{ color: '#0066CC', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} style={{ display: 'inline-block' }} />
                                  GitHub
                                </a>
                              </td>
                              <td style={{ paddingBottom: '4px' }}>
                                <a href="https://www.linkedin.com/in/skylar-lea" style={{ color: '#0066CC', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} style={{ display: 'inline-block' }} />
                                  LinkedIn
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* MySpace URL */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: `2px solid ${currentTheme.urlHeader}`, backgroundColor: currentTheme.urlBg, marginBottom: '15px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: currentTheme.urlHeader, color: 'white', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                        DevSpace URL:
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px' }}>
                        <div style={{ fontSize: '12px' }}>
                          http://www.devspace.com/skylarlea
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Details */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: `2px solid ${currentTheme.detailsHeader}`, backgroundColor: currentTheme.detailsBg }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: currentTheme.detailsHeader, color: 'white', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Details
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontSize: '12px' }}>
                        <div><strong>Status:</strong> {profile.status}</div>
                        <div><strong>Here for:</strong> Networking</div>
                        <div><strong>Orientation:</strong> {profile.orientation}</div>
                        <div><strong>Body type:</strong> {profile.bodyType}</div>
                        <div><strong>Religion:</strong> {profile.religion}</div>
                        <div><strong>Zodiac Sign:</strong> {profile.zodiacSign}</div>
                        <div><strong>Smoke:</strong> {profile.smoke ? 'Yes' : 'No'}</div>
                        <div><strong>Drink:</strong> {profile.drink ? 'Yes' : 'No'}</div>
                        <div><strong>Children:</strong> {profile.children}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              
              {/* Main Content */}
              <td style={{ verticalAlign: 'top' }}>
                
                {/* Extended Network */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '1px solid #999', backgroundColor: 'white', marginBottom: '15px' }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: '12px', fontSize: '14px', textAlign: 'center' }}>
                        <strong>{profile.name} is in your extended network</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Blog Entries */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: `2px solid ${currentTheme.blogHeader}`, backgroundColor: currentTheme.blogBg, marginBottom: '15px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: currentTheme.blogHeader, color: 'white', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Latest Blog Entry ( <a href="#" style={{ color: 'white' }}>Subscribe to this Blog</a> )
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '15px', fontSize: '13px' }}>
                        {blogEntries.map((entry, index) => (
                          <div key={index} style={{ marginBottom: '8px' }}>
                            <strong>{entry.title}</strong> ( <a href={entry.link} style={{ color: '#0066CC' }}>view more</a> )
                          </div>
                        ))}
                        <div style={{ marginTop: '12px' }}>
                          <a href="#" style={{ color: '#0066CC' }}>[ View All Blog Entries ]</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Blurbs/About */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: `2px solid ${currentTheme.blurbsHeader}`, backgroundColor: currentTheme.blurbsBg, marginBottom: '15px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: currentTheme.blurbsHeader, color: 'white', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Blurbs
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '15px', fontSize: '13px' }}>
                        <div style={{ marginBottom: '12px' }}>
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
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: `2px solid ${currentTheme.friendsHeader}`, backgroundColor: currentTheme.friendsBg }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: currentTheme.friendsHeader, color: 'white', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Friend Space
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '15px' }}>
                        <div style={{ fontSize: '13px', marginBottom: '12px' }}>
                          {profile.name} has <strong>{friendCount}</strong> friends.
                        </div>
                        <table cellPadding={6} cellSpacing={0}>
                          <tbody>
                            <tr>
                              {Array.from({length: 4}, (_, i) => (
                                <td key={i} style={{ textAlign: 'center' }}>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img 
                                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='white' stroke='%23333'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-family='Arial' font-size='12' fill='%23333'%3EProject ${i+1}%3C/text%3E%3C/svg%3E`}
                                    alt={`Project ${i+1}`}
                                    style={{ border: '1px solid black' }}
                                  />
                                  <div style={{ fontSize: '11px', marginTop: '4px' }}>
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
                                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='white' stroke='%23333'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-family='Arial' font-size='12' fill='%23333'%3EProject ${i+5}%3C/text%3E%3C/svg%3E`}
                                    alt={`Project ${i+5}`}
                                    style={{ border: '1px solid black' }}
                                  />
                                  <div style={{ fontSize: '11px', marginTop: '4px' }}>
                                    <a href="#" style={{ color: '#0066CC' }}>Project {i+5}</a>
                                  </div>
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ textAlign: 'center', marginTop: '12px' }}>
                          <a href="#" style={{ color: '#0066CC', fontSize: '12px' }}>View All of {profile.name}&apos;s Projects</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Comments Section */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: `2px solid ${currentTheme.blogHeader}`, backgroundColor: currentTheme.blogBg, marginTop: '15px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: currentTheme.blogHeader, color: 'white', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Friend Comments
                        (Displaying 3 of 47 comments) ( <a href="#" style={{ color: 'white' }}>View All</a> | <a href="#" style={{ color: 'white' }}>Add Comment</a> )
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '15px', fontSize: '13px' }}>
                        <div style={{ marginBottom: '12px' }}>
                          <strong>TechRecruiter_Sarah</strong> | 6/1/2006 9:47 PM<br />
                          Your portfolio is amazing! Would love to discuss some opportunities.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Music Player - Always visible with disclaimer */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '2px solid #666666', backgroundColor: '#333333', marginTop: '15px' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#666666', color: 'white', padding: '6px 12px', fontSize: '15px', fontWeight: 'bold' }}>
                        {profile.name}&apos;s Music
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '15px' }}>
                        <div style={{ color: 'white', fontSize: '14px', marginBottom: '12px' }}>
                          <div><strong>Currently Playing:</strong></div>
                          <div>&quot;Your Favorite Coding Song&quot; - Artist Name</div>
                        </div>
                        
                        <table cellPadding={0} cellSpacing={0} width="100%" style={{ backgroundColor: 'black', border: '1px solid #999' }}>
                          <tbody>
                            <tr>
                              <td style={{ padding: '12px' }}>
                                <div style={{ marginBottom: '8px' }}>
                                  <button 
                                    onClick={togglePlay}
                                    style={{ 
                                      backgroundColor: '#666',
                                      color: 'white', 
                                      border: '1px solid #999',
                                      padding: '4px 12px',
                                      marginRight: '8px',
                                      cursor: 'pointer',
                                      fontSize: '12px'
                                    }}
                                  >
                                    ▶️ Play
                                  </button>
                                  <button 
                                    onClick={togglePlay}
                                    style={{ 
                                      backgroundColor: '#666',
                                      color: 'white', 
                                      border: '1px solid #999',
                                      padding: '4px 12px',
                                      marginRight: '8px',
                                      cursor: 'pointer',
                                      fontSize: '12px'
                                    }}
                                  >
                                    ⏸️ Pause
                                  </button>
                                  <span style={{ color: 'white', fontSize: '12px' }}>
                                    0:00 / 3:42
                                  </span>
                                </div>
                                
                                <div 
                                  onClick={togglePlay}
                                  style={{ 
                                    backgroundColor: '#333', 
                                    height: '12px', 
                                    border: '1px inset #666',
                                    cursor: 'pointer'
                                  }}
                                >
                                  <div 
                                    style={{ 
                                      backgroundColor: '#00FF00', 
                                      height: '10px', 
                                      width: '0%'
                                    }}
                                  ></div>
                                </div>
                                
                                <div style={{ color: '#999', fontSize: '11px', marginTop: '8px', textAlign: 'center' }}>
                                  Click to learn about music licensing! 🎵
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <FriendsModal
        isOpen={showFriendsModal}
        onClose={closeFriendsModal}
        profileName={profile.name}
        headerBgColor={currentTheme.profileHeader}
        contentBgColor={currentTheme.profileBg}
        friendHint={friendHint}
        onDownloadVCard={handleDownloadVCard}
        onCopyEmail={handleCopyEmail}
        onCopyPageUrl={handleCopyPageUrl}
      />

      <PicsModal
        isOpen={showPicsModal}
        onClose={closePicsModal}
        headerBgColor={currentTheme.detailsHeader}
        contentBgColor={currentTheme.detailsBg}
      />

      <VideosModal
        isOpen={showVideosModal}
        onClose={closeVideosModal}
        headerBgColor={currentTheme.blogHeader}
        contentBgColor={currentTheme.blogBg}
      />

      <LegalModal
        isOpen={showLegalModal}
        onClose={closeLegalModal}
        headerBgColor={currentTheme.profileHeader}
        contentBgColor={currentTheme.profileBg}
      />
    </div>
  );
};

export default MySpacePortfolio;
