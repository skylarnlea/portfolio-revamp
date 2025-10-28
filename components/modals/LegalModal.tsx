import React from 'react';
import Modal from './Modal';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerBgColor: string;
  contentBgColor: string;
}

const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  headerBgColor,
  contentBgColor
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="🎵 Music Player - Legal Notice"
      headerBgColor={headerBgColor}
      contentBgColor={contentBgColor}
      maxWidth="600px"
    >
      <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
        <div style={{ marginBottom: '16px', fontWeight: 'bold', color: headerBgColor }}>
          Why Can&apos;t I Embed Music on My Personal Website?
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <strong>Copyright Law:</strong> Most music is protected by copyright, meaning you need permission (and usually payment) to use it on websites, even personal ones.
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <strong>Licensing Fees:</strong> Platforms like Spotify, Apple Music, and YouTube pay millions in licensing fees to record labels. Personal sites typically can&apos;t afford these costs.
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <strong>Legal Risks:</strong> Embedding copyrighted music without permission can result in DMCA takedown notices, legal action, or hefty fines.
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <strong>Alternatives:</strong> Use royalty-free music, creative commons tracks, or simply link to official music platforms instead!
        </div>
        
        <div style={{ fontSize: '12px', fontStyle: 'italic', color: '#666', textAlign: 'center' }}>
          This MySpace clone respects copyright law and artist rights 🎨
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            onClick={onClose}
            style={{
              backgroundColor: headerBgColor,
              color: 'white',
              border: 'none',
              padding: '8px 20px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LegalModal;
