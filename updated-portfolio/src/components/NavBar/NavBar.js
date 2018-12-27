import React from 'react';
import { Grid, Rail, Segment, GridColumn, Button } from 'semantic-ui-react';

class NavBar extends React.Component {
    render(){
        return(
            <Grid columns={3}>
                <GridColumn>
                    <Segment>
                        <p>Left Rail Content</p>
                    </Segment>
                </GridColumn>
            </Grid>
        )
    }
}

export default NavBar;
