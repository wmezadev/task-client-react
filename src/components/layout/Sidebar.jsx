import React from 'react';
import NewProject from '../projects/NewProject';
import ListProjects from '../projects/ListProjects';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<soan>Tasks</soan></h1>
            <NewProject/>
            <div className="projects">
                <h2>Your Projects</h2>
            </div>
            <ListProjects/>
        </aside> 
    );
}
 
export default Sidebar;