import React, { Component } from 'react';
import CourseDataService from '../service/CourseDataService';

const INSTURCTOR = 'in28minutes';
class ListCoursesComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            courses:[],
            message : null
        }
        this.refreshCourses = this.refreshCourses.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount(){
        this.refreshCourses();
    }

    refreshCourses(){
        CourseDataService.retriveAllCourses('INSTRUCTOR')
            .then(
                response => {
                    console.log(response);
                    this.setState({courses : response.data});
                }
            )
    }

    deleteCourse(id){
        CourseDataService.deleteCourse(INSTURCTOR, id)
        .then(
            response => {
                this.setState({message : `Delete of course ${id} Successfully `});
                this.refreshCourses();
            }
        )
    }

    render(){
        const { courses, message } = this.state;
        return(
            <div className="container">
                <h3>All Courses</h3>
                {message && <div className="alert alert-success">{message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map(course => (
                                 <tr key={course.id}>
                                 <td>{course.id}</td>
                                 <td>{course.description}</td>
                                 <td><button className="btn btn-warning" onClick={()=>this.deleteCourse(course.id)}>Delete</button></td>
                             </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListCoursesComponent;