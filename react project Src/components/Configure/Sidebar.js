import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';
import General from './General';
import Grading from './Grading';
import Results from './Results';
import Certificate from './Certificate';
import Notification from './Notification';
import Theme from './Theme';
import Sell from './Sell';

const ConfigurePanel = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedView, setSelectedView] = useState('General');
    const [isPopupVisible, setIsPopupVisible] = useState({ certificate: false, notification: false, theme: false, sell: false });

    const menuItems = [
        { id: 'general', name: 'General' },
        { id: 'grading', name: 'Grading' },
        { id: 'results', name: 'Results' },
        { id: 'certificate', name: 'Certificate' },
        { id: 'notification', name: 'Notification' },
        { id: 'theme', name: 'Theme' },
        { id: 'sell', name: 'Sell' },
    ];

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tab = searchParams.get('tab');
        if (tab) {
            setSelectedView(tab.charAt(0).toUpperCase() + tab.slice(1));
        }
    }, [location]);

    const handleMenuItemClick = (view) => {
        setSelectedView(view);
        navigate(`/nav?configure?tab=${view.toLowerCase()}`);
        if (view === 'Certificate' || view === 'Notification' || view === 'Theme' || view === 'Sell') {
            setIsPopupVisible(prevState => ({ ...prevState, [view.toLowerCase()]: true }));
        }
    };

    const handleClosePopup = (view) => {
        setIsPopupVisible(prevState => ({ ...prevState, [view.toLowerCase()]: false }));
    };

    const renderContent = () => {
        switch (selectedView) {
            case 'General':
                return <General/>;
            case 'Grading':
                return <Grading/>;
            case 'Results':
                return <Results/>;
            case 'Certificate':
                return <Certificate isPopupVisible={isPopupVisible.certificate} onClosePopup={() => handleClosePopup('certificate')} />;
            case 'Notification':
                return <Notification isPopupVisible={isPopupVisible.notification} onClosePopup={() => handleClosePopup('notification')} />;
            case 'Theme':
                return <Theme isPopupVisible={isPopupVisible.theme} onClosePopup={() => handleClosePopup('theme')} />;
            case 'Sell':
                return <Sell isPopupVisible={isPopupVisible.sell} onClosePopup={() => handleClosePopup('sell')} />;
            default:
                return <p>default</p>;
        }
    };

    return (
        <div className='para1'>
            <div className="sidebar open">
                <ul>
                    {menuItems.map((item) => (
                        <li 
                            key={item.id} 
                            onClick={() => handleMenuItemClick(item.name)}
                            className={selectedView === item.name ? 'active' : ''}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cont">
                  {renderContent()}
            </div>
        </div>
    );
};

export default ConfigurePanel;




