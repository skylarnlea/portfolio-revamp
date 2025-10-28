import React from 'react';
import Modal from './Modal';

interface VideosModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerBgColor: string;
  contentBgColor: string;
}

const VideosModal: React.FC<VideosModalProps> = ({
  isOpen,
  onClose,
  headerBgColor,
  contentBgColor
}) => {
  const videos = [
    { title: 'React UI State Demo', note: 'Short clip showing component states & animations' },
    { title: 'API Integration (Next.js)', note: 'Fetching, caching, and error handling' },
    { title: 'Testing Flow', note: 'Unit + integration snapshot of critical paths' },
    { title: 'CI/CD Preview', note: 'DevOps pipeline and preview deploys' }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Videos — Skills in Action"
      headerBgColor={headerBgColor}
      contentBgColor={contentBgColor}
      maxWidth="700px"
      ariaLabel="Skills in Action Videos"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px' }}>
        {videos.map((vid, i) => (
          <div key={i} style={{ border: '1px solid #999', background: 'white' }}>
            <div style={{ background: '#222', color: 'white', padding: '6px 10px', fontSize: '12px' }}>
              ▶️ {vid.title}
            </div>
            <div style={{ padding: '10px', fontSize: '12px', color: '#333' }}>
              <div style={{ height: '140px', background: '#000', border: '1px solid #666', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', marginBottom: '8px' }}>
                Video placeholder
              </div>
              <div style={{ color: '#555' }}>{vid.note}</div>
              <div style={{ marginTop: '6px' }}>
                <a href="#" style={{ color: '#0066CC', fontSize: '12px' }}>Open demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default VideosModal;
