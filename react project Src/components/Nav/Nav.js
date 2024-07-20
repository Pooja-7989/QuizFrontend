import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';
import Dashboard from '../PopUp/dashboard';
import Publish from '../Publish/Publish';
import Analyze from '../Analyze/Analyze';
import ConfigurePanel from '../Configure/Sidebar';
import SurveyPage from '../CreatePage/SurveyPage';

const CreateDash = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedView, setSelectedView] = useState('Create');

    const menuItems = [
        { id: 'create', name: 'Create' },
        { id: 'configure', name: 'Configure' },
        { id: 'publish', name: 'Publish' },
        { id: 'analyze', name: 'Analyze' },
    ];

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tab = searchParams.get('?');
        if (tab) {
            setSelectedView(tab.charAt(0).toUpperCase() + tab.slice(1));
        }
    }, [location]);

    const handleMenuItemClick = (view) => {
        setSelectedView(view);
        navigate(`/nav?${view.toLowerCase()}`);
    };

    const renderContent = () => {
        switch (selectedView) {
            case 'Configure':
                return <ConfigurePanel />;
            case 'Publish':
                return <Publish />
            case 'Analyze':
                return <Analyze />;
            default:
                return <SurveyPage />;
        }
    };

    return (
        <div className='Navbody'>
        <Dashboard/>
            <div className="top-panel">
                <ul className="menu2">
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
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default CreateDash;