import React from 'react';
import Sidebar from '../layout/Sidebar';
import TopBar from '../layout/TopBar';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';

const Project = () => {
    return ( 
        <div className="container-app">
            <Sidebar/>
            <div className="main-section">
                <TopBar/>
                <main>
                    <TaskForm/>
                    <div className="container-tasks">
                        <TaskList/>
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Project;