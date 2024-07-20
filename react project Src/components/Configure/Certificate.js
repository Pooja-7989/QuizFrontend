
import React from 'react';
import './Certificate.css';

function Certificate({ isPopupVisible, onClosePopup }) {
  return (
    <div>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Certificate</h2>
            <p>Get more features by upgrading to our premium plan.</p>
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

export default Certificate;


