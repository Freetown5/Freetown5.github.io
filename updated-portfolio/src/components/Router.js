import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Home from './Home/Home';
import ConfTalks from './ConfTalks/ConfTalks';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Portfolio from './Portfolio/Portfolio';
import Volunteer from './Volunteer/Volunteer';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/skills' component={ Skills }/>
            <Route exact path='/experience' component= { Experience }/>
            <Route exact path='/confTalks' component={ ConfTalks }/>
            <Route exact path='/contact' component={ Contact }/>
            <Route exact path='/education' component={ Education }/>
            <Route exact path='/portfolio' component={ Portfolio }/>
            <Route exact path='/volunteer' component={ Volunteer }/>

        </Switch>
    </BrowserRouter>
)

export default Router; 