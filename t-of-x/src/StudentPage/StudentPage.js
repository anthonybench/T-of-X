import React from "react";
import CalendarBoard from '../Tools/CalendarBoard';
import StudentSessionBoard from '../Tools/StudentSessionBoard';
import SubmitSession from '../Tools/SubmitSession';
import { Row, Col, DatePicker } from 'antd';


function StudentPage(props) {
    const {googleAPIObj, authenticationSetup} = props;

    // Set sign-in/sign-out status message
    let message = <div className="signInStatus">Not Signed In</div>;
    if (authenticationSetup === true && googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true) {
        // https://developers.google.com/identity/sign-in/web/people
        message = <div className="signInStatus">Student: {googleAPIObj.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName()}</div>;
    }



    return(
        <div>
            <Row
                style={{ marginTop: 100 }}
                align="middle"
            >
                <Col offset={2}
                    style={{ 
                        fontSize: 50,
                        fontWeight: 500,
                    }}
                >
                    {message}
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 22, offset: 1 }} md={{ span: 14, offset: 1 }}
                    style={{ marginBottom: 30 }}
                >
                    <CalendarBoard
                        googleAPIObj={googleAPIObj}
                        authenticationSetup={authenticationSetup}
                    />
                </Col>
                <Col xs={{ span: 22, offset: 1 }} md={{ span: 7, offset: 1 }}
                    style={{ marginBottom: 30 }}
                >

                    <StudentSessionBoard
                        googleAPIObj={googleAPIObj}
                        authenticationSetup={authenticationSetup}
                    />
                </Col>
            </Row>
            <Row>
                <Col offset={1}>
                    <SubmitSession
                        googleAPIObj={googleAPIObj}
                        authenticationSetup={authenticationSetup}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default StudentPage;