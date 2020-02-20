import React from 'react';
import Sidebar from '../layout/Sidebar';
import TopBar from '../layout/TopBar';

const Project = () => {
    return ( 
        <div className="container-app">
            <Sidebar/>
            <div className="main-section">
                <TopBar/>
                <main>
                    <div className="container-tasks">

                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Project;