import React from "react";
import { Row, Col, Typography } from 'antd';
import { FaLinkedin, FaGithub, FaStackOverflow, FaYoutube } from "react-icons/fa";
import { Button } from "react-bootstrap";
import LandingCarousel from "./LandingCarousel";


const { Title } = Typography;

function LandinPage(props) {
    return(
        <div>
            <Row/>
            <Row
                style={{ marginTop: 150 }}
                align="middle"
            >
                <Col offset = {3}>
                    <Title
                        style={{ 
                            fontSize: 70,
                            fontWeight: 900,
                            marginBottom: 0,
                        }}
                    >
                        TEACHER<br/>
                        NAME
                        
                    </Title>
                </Col>
                <Col offset={3}
                    style={{ 
                        fontSize: 20,
                        fontWeight: 700,
                    }}
                >
                    Titles that let people know this the teacher they want!
                </Col>
            </Row>
            <Row  align="top">
                <Col offset = {3}>
                    <a href="https://www.linkedin.com/in/anthonybench/"  target="_blank" rel="noreferrer">
                        <FaLinkedin
                            size="40"
                            color='black'
                            style={{ marginRight: "2em"}}
                        />
                    </a>
                    <a href="https://github.com/anthonybench" target="_blank" rel="noreferrer">
                        <FaGithub
                            size="40"
                            color='black'
                            style={{ marginRight: "2em"}}
                        />
                    </a>
                    <a href="https://stackoverflow.com/users/9637247/yep?tab=profile" target="_blank" rel="noreferrer">
                        <FaStackOverflow
                            size="40"
                            color='black'
                            style={{ marginRight: "2em"}}
                        />
                    </a>
                    <a href="https://www.youtube.com/channel/UC0-Tlkjzbib0cuBCIFscSrQ" target="_blank" rel="noreferrer">
                        <FaYoutube
                            size="40"
                            color='black'
                        />
                    </a>
                </Col>
            </Row>
            <Row
                style={{ 
                    marginTop: 50,

                }}
            >
            <Col offset = {1} span = {22}>
                <LandingCarousel/>
            </Col>
            </Row>
        </div>
    );
}

export default LandinPage;