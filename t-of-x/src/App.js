import './App.css';
import React from "react";
import MovingBackground from './UI/Background';
import LandingPage from './LandingPage/LandingPage';
import TeacherPage from './TeacherPage/TeacherPage';
import StudentPage from './StudentPage/StudentPage';
import Oauth_test from './oauth_test';
import {Button} from "react-bootstrap";
import {IoMdHome} from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';

// https://stackoverflow.com/questions/51977448/how-to-use-gapi-in-react
// https://www.npmjs.com/package/gapi-script
import { gapi } from 'gapi-script';

// https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project
require('dotenv').config();



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      landing: true,
      teacher: false,
      student: false,
      authenticationSetup: false,
    }

    this.landingPageSwitch = this.landingPageSwitch.bind(this);
    this.teacherPageSwitch = this.teacherPageSwitch.bind(this); // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
    this.studentPageSwitch = this.studentPageSwitch.bind(this);
    this.setupLogin = this.setupLogin.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.setupLogin();
  }

  async setupLogin() {
    // Connect to Google project and do initial setup
    // https://github.com/LucasAndrad/gapi-script-live-example/blob/master/src/components/GoogleLogin.js
    // https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md
    // https://developers.google.com/identity/sign-in/web/reference
    // https://developers.google.com/gmail/api/quickstart/js
    gapi.load('client:auth2', () => { // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
        gapi.client.init({
            apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            discoveryDocs: [
                "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
            ], // Put discovery docs of Google APIs you want to use here
            scope: "https://www.googleapis.com/auth/calendar"
        }).then(() => {
            this.setState({
                ...this.state,
                authenticationSetup: true,
            });
            console.log("Google Setup Completed")
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve ? 
        }).catch((error) => {
            console.log("Google Setup Error: " + error);
        });
    });
  }

  signIn() {
      if (this.state.authenticationSetup === true && gapi.auth2.getAuthInstance().isSignedIn.get() === false) {
          gapi.auth2.getAuthInstance().signIn().then(() => {
              this.setState({
                ...this.state,
                  authenticationSetup: true
              }); // https://www.educative.io/edpresso/how-to-force-a-react-component-to-re-render
          });
      }
  }
  signOut() {
      if (this.state.authenticationSetup === true && gapi.auth2.getAuthInstance().isSignedIn.get() === true) {
          gapi.auth2.getAuthInstance().signOut().then(() => {
              this.setState({
                ...this.state,
                  authenticationSetup: true
              }); // https://www.educative.io/edpresso/how-to-force-a-react-component-to-re-render
          });
      }
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

        <Oauth_test 
                googleAPIObj={gapi}
                authenticationSetup={this.state.authenticationSetup}
                signIn={this.signIn}
                signOut={this.signOut}
            />

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