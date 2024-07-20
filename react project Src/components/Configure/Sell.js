import React from 'react';
import './Sell.css';

function Sell({ isPopupVisible, onClosePopup }) {
  return (
    <div>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Sell</h2>
            <p>Upgrade to a seller account to start selling.</p>
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

export default Sell;
