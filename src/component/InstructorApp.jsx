import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { Router, Switch, Route } from 'react-router-dom';
import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
    render(){
        return(
        <Router>
        <>
            <h1>Instructor Application</h1>
            <Switch>
                <Route exact path="/" component={ListCoursesComponent} />
                <Route exact path="/courses" component={ListCoursesComponent}/>
                <Route path="/courses/:id" component={CourseComponent} />
            </Switch>
            
            </>
            </Router>
        )
    }
}

export default InstructorApp;