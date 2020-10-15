import React from 'react';
import rm from './rm.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          href='https://www.instagram.com/r1c4rd0_5'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i
            className='fab fa-instagram'
            style={{
              fontSize: '32px',
              color: '#009fe3',
              marginRight: '40px'
            }} />
        </a>

        <a href='/' rel='noopener noreferrer' target='_blank' >
          <img
            src={ rm }
            alt='Ricardo Mendoza website'
            style={{ width: '32px', marginRight: '40px' }}
          />
        </a>
        
        <a
          href='https://twitter.com/R1c4rd0_5'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i
            className='fab fa-twitter'
            style={{ fontSize: '32px', color: '#009fe3' }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
