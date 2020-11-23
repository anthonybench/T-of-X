import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Oauth_test extends Component {

    render() {
        // Check sign in status
        let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

        // Sign In / Sign Out button
        let signInButton = <Button variant="light" className="topBarButton" onClick={this.props.signIn}>Sign In</Button>;
        let signOutButton = <Button variant="danger" className="topBarButton" onClick={this.props.signOut}>Sign Out</Button>;

        // Set sign-in/sign-out status message
        let message = <div className="signInStatus">Not Signed In</div>;
        if (this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true) {
            // https://developers.google.com/identity/sign-in/web/people
            message = <div className="signInStatus">Welcome, {this.props.googleAPIObj.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName()}</div>;
        }

        return (
            <div 
                style={{
                    position: "absolute",
                    top: 500,
                    left: 500,
                }}
            >

                {message}
                {isSignedIn ? signOutButton : signInButton}
            </div>
        )
    }


}

export default Oauth_test;
