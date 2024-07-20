import React from 'react';
import './Notification.css';

function Notification({ isPopupVisible, onClosePopup }) {
  return (
    <div>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Notifications</h2>
            <p>Manage your notifications settings.</p>
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

export default Notification;