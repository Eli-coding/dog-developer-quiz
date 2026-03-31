import { dogTypes } from '../data/dogTypes';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function Results({ dogType, onRetake }) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const dog = id ? dogTypes[id] : dogType;
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=I code like ${dog.name}. Find out which dog developer you are! ${url}`);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      <div className="card" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '30px' }}>
          {dog.name}
        </h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '50px', 
          lineHeight: '1.8',
          color: '#CCCCCC',
          fontStyle: 'italic',
          borderLeft: '4px solid #FFD700',
          paddingLeft: '20px',
          textAlign: 'left'
        }}>
          {dog.description}
        </p>
        
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <h3 style={{ color: '#51CF66', marginBottom: '20px' }}>STRENGTHS:</h3>
          <ul style={{ marginLeft: '20px', marginBottom: '40px' }}>
            {dog.strengths.map((strength, i) => (
              <li key={i} style={{ marginBottom: '12px', fontSize: '1.1rem', color: '#F5F5DC' }}>
                {strength}
              </li>
            ))}
          </ul>
          
          <h3 style={{ color: '#FF6B6B', marginBottom: '20px' }}>WEAKNESSES:</h3>
          <ul style={{ marginLeft: '20px', marginBottom: '40px' }}>
            {dog.weaknesses.map((weakness, i) => (
              <li key={i} style={{ marginBottom: '12px', fontSize: '1.1rem', color: '#F5F5DC' }}>
                {weakness}
              </li>
            ))}
          </ul>
          
          <h3 style={{ marginBottom: '15px' }}>FAMOUS FOR:</h3>
          <p style={{ 
            fontStyle: 'italic', 
            marginLeft: '20px',
            marginBottom: '40px',
            fontSize: '1.2rem',
            color: '#FFD700'
          }}>
            {dog.famousFor}
          </p>
          
          {dog.encouragement && (
            <div style={{ 
              marginTop: '40px', 
              padding: '30px', 
              backgroundColor: '#0a1a0a',
              border: '2px solid #51CF66'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem', color: '#51CF66' }}>
                💚 {dog.encouragement}
              </p>
            </div>
          )}
        </div>

        {/* BUTTONS ROW */}
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '20px'
        }}>
          <button onClick={handleCopyLink} className="btn-secondary">
            {copied ? '✅ LINK COPIED!' : '🔗 COPY LINK'}
          </button>

          <button onClick={handleWhatsApp} className="btn-secondary">
            💬 WHATSAPP
          </button>

          <button onClick={onRetake} className="btn-secondary">
            🐾 BITE BACK
          </button>
        </div>

      </div>
    </div>
  );
}

export default Results;