import React from 'react';
import { Grid, Rail, Segment, GridColumn } from 'semantic-ui-react';

class NavBar extends React.Component {
    render(){
        return(
            <div className="default-code">
                <Grid centered columns={3}>
                    <GridColumn>
                        <Segment>
                            <Rail position="right">
                                <Segment>Left Rail Content</Segment>
                            </Rail>
                        </Segment>
                    </GridColumn>
                </Grid>
            </div>
        )
    }
}

export default NavBar;
