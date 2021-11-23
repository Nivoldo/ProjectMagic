import React from 'react';
import Sidebar from '../../components/sidebar';
import VideoCarousel from '../../components/video-carousel';
import './style.css'

function Dashboard() {
    return (
    <>
        <div className="dashboard-content">
            <Sidebar/>
            <div className="video-content">
                <VideoCarousel/>
            </div>
        </div>
    </>
    )
  }
  
export default Dashboard;