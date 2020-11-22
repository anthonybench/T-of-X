import React from "react";
import LoginModal from './LoginModal';

function LandinPage(props) {
    const {landingPageSwitch, teacherPageSwitch, studentPageSwitch} = props;
    return(
        <>

        <LoginModal
            landingPageSwitch={landingPageSwitch}
            teacherPageSwitch={teacherPageSwitch}
            studentPageSwitch={studentPageSwitch}
        />

        </>
    );
}

export default LandinPage;