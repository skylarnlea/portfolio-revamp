import React from 'react';
import Modal from './Modal';

interface PicsModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerBgColor: string;
  contentBgColor: string;
}

const PicsModal: React.FC<PicsModalProps> = ({
  isOpen,
  onClose,
  headerBgColor,
  contentBgColor
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Pics — Skills & Tools"
      headerBgColor={headerBgColor}
      contentBgColor={contentBgColor}
      maxWidth="700px"
      ariaLabel="Skills and Tools Gallery"
    >
      <div style={{ fontSize: '12px', marginBottom: '10px' }}>
        Snapshots of tech I use: UI states, components, and quick diagrams.
      </div>
      <table cellPadding={6} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            {['React', 'TypeScript', 'Next.js', 'Node.js'].map((skill, i) => (
              <td key={i} style={{ textAlign: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='90' viewBox='0 0 130 90'%3E%3Crect width='130' height='90' fill='white' stroke='%23999'/%3E%3Ctext x='65' y='50' text-anchor='middle' font-family='Arial' font-size='14' fill='%23333'%3E${encodeURIComponent(skill)}%3C/text%3E%3C/svg%3E`}
                  alt={`${skill} example`}
                  style={{ border: '1px solid black' }}
                />
                <div style={{ fontSize: '11px', marginTop: '4px' }}>
                  <a href="#" style={{ color: '#0066CC' }}>{skill} highlight</a>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            {['CSS/SCSS', 'Testing', 'GraphQL', 'Docker'].map((skill, i) => (
              <td key={i} style={{ textAlign: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='90' viewBox='0 0 130 90'%3E%3Crect width='130' height='90' fill='white' stroke='%23999'/%3E%3Ctext x='65' y='50' text-anchor='middle' font-family='Arial' font-size='12' fill='%23333'%3E${encodeURIComponent(skill)}%3C/text%3E%3C/svg%3E`}
                  alt={`${skill} example`}
                  style={{ border: '1px solid black' }}
                />
                <div style={{ fontSize: '11px', marginTop: '4px' }}>
                  <a href="#" style={{ color: '#0066CC' }}>{skill} highlight</a>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};

export default PicsModal;
