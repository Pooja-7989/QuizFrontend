import React from 'react';
import './Theme.css';

function Theme({ isPopupVisible, onClosePopup }) {
  return (
    <div>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Theme</h2>
            <p>Customize your theme settings.</p>
            <div className="popup-buttons">
              <button className="btn" onClick={onClosePopup}>Not Now</button>
              <button className="btn upgrade-btn">Upgrade</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Theme;
