import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Home from './Home/Home';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/skills' component={ Skills }/>
            <Route exact path='/experience' component= { Experience }/>
        </Switch>
    </BrowserRouter>
)

export default Router; 