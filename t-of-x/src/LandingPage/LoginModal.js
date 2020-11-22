import React, {useState} from "react";
import {Modal, Button, Form, Row, Col, Container} from 'react-bootstrap'
import {IoMdContact, IoMdPerson, IoMdPeople} from "react-icons/io";

function MyVerticallyCenteredModal(props) {
    const {teacherPageSwitch, studentPageSwitch} = props;


    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)
        if(formDataObj.teacherOrStudent === "teacher") {
            teacherPageSwitch()
        } else if (formDataObj.teacherOrStudent === "student") {
            studentPageSwitch()
        }
      }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Log in
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onFormSubmit}>
            <fieldset>
                <Form.Label as="legend">
                    Log in as
                </Form.Label>
            <Form.Row>
                <Col md={{ span: 3, offset: 2 }}>
                <IoMdPerson size="130"
                    style={{ 
                        fill: '#1e7e96', 
                        marginBottom: 10,
                    }} 
                />
                    <Form.Check
                    style={{ 
                        marginLeft: 30,
                    }} 
                    inline
                    type="radio"
                    label="Teacher"
                    value="teacher"
                    name="teacherOrStudent"
                    id="checkTeacher"
                    />
                </Col>
                <Col md={{ span: 3, offset: 2 }}>
                <IoMdPeople size="140"
                    style={{ fill: '#1e7e96' }} 
                />
                    <Form.Check
                    style={{ 
                        marginLeft: 30,
                    }} 
                    inline
                    type="radio"
                    label="Student"
                    value="student"
                    name="teacherOrStudent"
                    id="checkStudent"
                    />
                </Col>
            </Form.Row>
            </fieldset>
            <Form.Row>
                    <Button type="submit" variant="danger" block
                        style={{ 
                            marginTop: 50,
                        }} 
                    >
                        Sign in with Google
                    </Button>
                    <Button variant="outline-info" block>
                        Sign up
                    </Button>
            </Form.Row>
        </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }


function LoginModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const {teacherPageSwitch, studentPageSwitch} = props;

    return (
      <>
        <Button variant="danger" onClick={() => setModalShow(true)}
            style={{
                position: "absolute",
                top: 20,
                right: 30,
            }}
        >
            Log in
        <IoMdContact
            size="30"
            style={{
                marginLeft: "10",
            }} 
        />
        </Button>
  
        <MyVerticallyCenteredModal
          teacherPageSwitch={teacherPageSwitch}
          studentPageSwitch={studentPageSwitch}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  


export default LoginModal;