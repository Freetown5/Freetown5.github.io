import React from 'react';

class Experience extends React.Component {
    render(){
        return(
            <div className="experience">
                <h1>Professional Experience</h1>

                {/* Create a json doc and turn text into expressions */}
                <div>
                    <h2>Title</h2>
                    <h3>Company</h3>
                    <h3>Dates</h3>
                    <p>Description</p>
                    <div>
                        Compannies Logo
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;