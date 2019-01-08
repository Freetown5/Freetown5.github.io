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
                            <a href="/">Experience</a>
                        </div>
                        <div>
                            <a href="/">Skills</a>
                        </div>
                        <div>
                            <a href="/">Education</a>
                        </div>
                        <div>
                            <a href="/">Community Outreach</a>
                        </div>
                        <div>
                            <a href="/">Conference Talks</a>
                        </div>
                        <div>
                            <a href="/">Side Projects</a>
                        </div>
                        <div>
                            <a href="/">Contact</a>
                        </div>
                    </Segment>
                </GridColumn>
            </Grid>
        )
    }
}

export default NavBar;
