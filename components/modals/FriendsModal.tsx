import React from 'react';
import Image from 'next/image';
import Modal from './Modal';

interface FriendsModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileName: string;
  headerBgColor: string;
  contentBgColor: string;
  friendHint: string;
  onDownloadVCard: () => void;
  onCopyEmail: () => Promise<void>;
  onCopyPageUrl: () => Promise<void>;
}

const FriendsModal: React.FC<FriendsModalProps> = ({
  isOpen,
  onClose,
  profileName,
  headerBgColor,
  contentBgColor,
  friendHint,
  onDownloadVCard,
  onCopyEmail,
  onCopyPageUrl
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`🤝 Connect with ${profileName}`}
      headerBgColor={headerBgColor}
      contentBgColor={contentBgColor}
      maxWidth="560px"
      ariaLabel={`Connect with ${profileName}`}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px'
      }}>
        <a href="mailto:skyniclea@gmail.com" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#666', color: 'white', border: '1px solid #999',
          padding: '8px 10px', textDecoration: 'none', justifyContent: 'center'
        }}>
          <span>📧</span>
          <span>Send Email</span>
        </a>

        <button onClick={onDownloadVCard} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#666', color: 'white', border: '1px solid #999',
          padding: '8px 10px', cursor: 'pointer', justifyContent: 'center'
        }}>
          <span>👤</span>
          <span>Save Contact (.vcf)</span>
        </button>

        <button onClick={onCopyEmail} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#666', color: 'white', border: '1px solid #999',
          padding: '8px 10px', cursor: 'pointer', justifyContent: 'center'
        }}>
          <span>📋</span>
          <span>Copy Email</span>
        </button>

        <button onClick={onCopyPageUrl} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#666', color: 'white', border: '1px solid #999',
          padding: '8px 10px', cursor: 'pointer', justifyContent: 'center'
        }}>
          <span>🔗</span>
          <span>Copy Page URL</span>
        </button>

        <a href="https://github.com/skylarnlea" target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#666', color: 'white', border: '1px solid #999',
          padding: '8px 10px', textDecoration: 'none', justifyContent: 'center'
        }}>
          <Image src="/icons/github.svg" alt="GitHub" width={18} height={18} />
          <span>GitHub Profile</span>
        </a>

        <a href="https://www.linkedin.com/in/skylar-lea" target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#666', color: 'white', border: '1px solid #999',
          padding: '8px 10px', textDecoration: 'none', justifyContent: 'center'
        }}>
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
          <span>LinkedIn</span>
        </a>
      </div>

      {friendHint && (
        <div aria-live="polite" style={{
          marginTop: '12px', color: '#0a8a0a', fontWeight: 'bold', textAlign: 'center'
        }}>
          {friendHint}
        </div>
      )}
    </Modal>
  );
};

export default FriendsModal;
