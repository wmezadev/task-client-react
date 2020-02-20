import React from 'react';
import NewProject from '../projects/NewProject';
import ProjectsList from '../projects/ProjectsList';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NewProject/>
            <div className="projects">
                <h2>Your Projects</h2>
            </div>
            <ProjectsList/>
        </aside> 
    );
}
 
export default Sidebar;