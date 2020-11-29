import React, { useState, useEffect } from "react";
import { Collapse } from 'antd';
import './SessionBoard.css'
const axios = require('axios');


const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}


function TeacherSessionBoard(props) {

    let placeHolder = <Panel header="Place holder" key="1">
                    <p>place holder</p>
                </Panel>;
    const [sessions, setSessions] = useState([placeHolder])

    // Sign in status
    let isSignedIn = props.authenticationSetup === true && props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;


    function addSessions(newSession) {
        setSessions(prevSessions => {
            return prevSessions.concat([newSession])
        })
    }

    function removeAllSessions(newSession) {
        setSessions(prevSessions => {
            prevSessions = []
            return prevSessions
        })
    }

    let sessionCards = []


    let creatSessionsCards = (sessionCards) => {
        let url = 'https://t-of-x-backend.anthonybench.vercel.app/sessions'


        axios.get(url)
        .then(function (response) {
            // handle success
            let data = response.data;
            let count = response.data.length

            console.log(data)

            data.forEach(element => {
                let userUrl = "https://t-of-x-backend.anthonybench.vercel.app/users/" + String(element.uid) 
                axios.get(userUrl)
                .then(function (response) {
                    // handle success
                    let cardUserName = response.data[0].username;
                    let cardDate = (new Date(element.date)).toLocaleString();//https://stackoverflow.com/questions/34550738/format-date-as-long-inside-reactjs-component
                    let cardDuration = element.duration;
                    let cardCount = sessionCards.length + 1;
                    let cardHeader = cardUserName + " " + cardDate;
                    let card = <Panel header={cardHeader} key={cardCount}>
                                    <p>Duration: {cardDuration}</p>
                                </Panel>;
                    sessionCards.push(
                        card
                    )
                })
                .then(() => {
                    if(count === sessionCards.length){
                        console.log(sessionCards);
                        removeAllSessions();
                        addSessions(sessionCards);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
            });

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

    }

    useEffect(()=>{
        // do stuff here...
        creatSessionsCards(sessionCards)
    }, []) //https://stackoverflow.com/questions/58101018/react-calling-a-method-on-load-only-once



    return(
        <div className="session-board">
            <Collapse defaultActiveKey={[]} onChange={callback}>
                    {isSignedIn ? sessions : <div>not signed in</div>}
            </Collapse>

        </div>
    );
}

export default TeacherSessionBoard;