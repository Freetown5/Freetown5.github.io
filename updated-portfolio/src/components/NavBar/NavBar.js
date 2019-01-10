import React from 'react';
import { Grid, Segment, GridColumn } from 'semantic-ui-react';

class NavBar extends React.Component {
    render(){
        return(
            <Grid columns={3}>
                <GridColumn>
                    <Segment>
                        <p>Left Rail Content</p>
                        <div>
                            <a href="/experience">Experience</a>
                        </div>
                        <div>
                            <a href="/skills">Skills</a>
                        </div>
                        <div>
                            <a href="/education">Education</a>
                        </div>
                        <div>
                            <a href="/volunteer">Community Outreach</a>
                        </div>
                        <div>
                            <a href="/confTalks">Conference Talks</a>
                        </div>
                        <div>
                            <a href="/portfolio">Side Projects</a>
                        </div>
                        <div>
                            <a href="/contact">Contact</a>
                        </div>
                    </Segment>
                </GridColumn>
            </Grid>
        )
    }
}

export default NavBar;
