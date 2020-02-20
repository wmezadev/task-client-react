import React, { Fragment, useState } from 'react';

const NewProject = () => {
    const [project, setProject] = useState({
        name: ''
    });

    const { name } = project;

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProject = e => {
        e.preventDefault();

        // validate
        // add to state
        // reset form
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
            >
            New project
            </button>
            <form className="form-new-project" onSubmit={onSubmitProject}>
                <input 
                    type="text" 
                    className="input-text"
                    name="name" 
                    placeholder="Project name"
                    autoComplete="off"
                    value={name}
                    onChange={onChangeProject}
                />
                <button
                    type="button"
                    className="btn btn-block btn-primary">
                Add project
                </button>
            </form>    
        </Fragment>
    );
}
 
export default NewProject;