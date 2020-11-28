import React from "react";
import CalendarBoard from '../Tools/CalendarBoard';
import { Row, Col } from 'antd';


function TeacherPage(props) {
    const {googleAPIObj, authenticationSetup} = props;

    // Set sign-in/sign-out status message
    let message = <div className="signInStatus">Not Signed In</div>;
    if (authenticationSetup === true && googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true) {
        // https://developers.google.com/identity/sign-in/web/people
        message = <div className="signInStatus">Teacher: {googleAPIObj.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName()}</div>;
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
                >
                    <CalendarBoard
                        googleAPIObj={googleAPIObj}
                        authenticationSetup={authenticationSetup}
                    />
                </Col>
                <Col offset={1}>
                    Session board
                </Col>
            </Row>
        </div>
    );
}

export default TeacherPage;
