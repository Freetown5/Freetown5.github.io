import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/skills' component={ Skills }/>
            <Route exact path='/experience' component= { Experience }/>
        </Switch>
    </BrowserRouter>
)

export default Router; 