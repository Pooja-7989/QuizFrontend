import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 RamanaSoft. All rights reserved.</p>
        <div style={styles.links}>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
          <a href="/terms" style={styles.link}>Terms of Service</a>
          <a href="/contact" style={styles.link}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  text: {
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Footer;