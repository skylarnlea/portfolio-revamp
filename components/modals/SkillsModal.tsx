import React from 'react';
import Modal from './Modal';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerBgColor: string;
  contentBgColor: string;
}

const skillCategories = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs', 'Prisma']
  },
  {
    label: 'Cloud & DevOps',
    skills: ['GCP', 'Firebase', 'Firestore', 'Cloud Build', 'Cloud Run', 'Cloud Storage', 'CI/CD']
  },
  {
    label: 'AI/ML',
    skills: ['Vertex AI', 'Gemini', 'OpenAI', 'Claude', 'RAG', 'WebSocket', 'ElevenLabs']
  },
  {
    label: 'Testing & Tools',
    skills: ['Mocha', 'Chai', 'Jest', 'Git', 'VS Code', 'Postman', 'Insomnia']
  },
  {
    label: 'Currently Learning',
    skills: ['Python', 'C#', '.NET']
  }
];

const SkillsModal: React.FC<SkillsModalProps> = ({
  isOpen,
  onClose,
  headerBgColor,
  contentBgColor
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Skills & Tools"
      headerBgColor={headerBgColor}
      contentBgColor={contentBgColor}
      maxWidth="560px"
      ariaLabel="Skills and Tools"
    >
      {skillCategories.map((cat, i) => (
        <div key={i} style={{ marginBottom: i < skillCategories.length - 1 ? '14px' : 0 }}>
          <div style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '6px', color: headerBgColor }}>
            {cat.label}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {cat.skills.map((skill, j) => (
              <span key={j} style={{
                display: 'inline-block',
                fontSize: '12px',
                padding: '4px 10px',
                backgroundColor: 'white',
                border: `1px solid ${headerBgColor}`,
                color: '#333'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default SkillsModal;
