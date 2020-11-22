import './App.css';
import React from "react";
import MovingBackground from './UI/Background';
import LandingPage from './LandingPage/LandingPage';
import TeacherPage from './TeacherPage/TeacherPage';
import StudentPage from './StudentPage/StudentPage';
import {Button} from "react-bootstrap";
import {IoMdHome} from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      landing: true,
      teacher: false,
      student: false,
    }

    this.landingPageSwitch = this.landingPageSwitch.bind(this);
    this.teacherPageSwitch = this.teacherPageSwitch.bind(this); // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
    this.studentPageSwitch = this.studentPageSwitch.bind(this);
  }

  landingPageSwitch = () => {
    this.setState({
        ...this.state,
        landing: true,
        teacher: false,
        student: false,
    })
    console.log("Landing page switch");
  };

  teacherPageSwitch = () => {
    if(this.state.teacher){
        this.setState({
            ...this.state,
            teacher: false,
            landing: true
        })
    } else {
        this.setState({
            ...this.state,
            teacher: true,
            landing: false
        })
    }
    console.log("Teacher page switch");
  };

  studentPageSwitch = () => {
    if(this.state.student){
        this.setState({
            ...this.state,
            student: false,
            landing: true
        })
    } else {
        this.setState({
            ...this.state,
            student: true,
            landing: false
        })
    }
    console.log("Student page switch");
  };



  render() {
    return (
      <div className="App">

        <MovingBackground/>
        <Button variant="outline-dark" onClick={() => this.landingPageSwitch()}
            style={{
                position: "absolute",
                top: 20,
                left: 30,
            }}
        >
        <IoMdHome
            size="30"
        />
        </Button>

        {/* Landing Page Section */}
        {this.state.landing &&
            <LandingPage
              teacherPageSwitch={this.teacherPageSwitch}
              studentPageSwitch={this.studentPageSwitch}
            />
            }
        
        {/* Teacher Page Section */}
        {this.state.teacher &&
            <TeacherPage/>
            }
        
        {/* Student Page Section */}
        {this.state.student &&
            <StudentPage/>
            }
        
      </div>
    );
  }
}

export default App;