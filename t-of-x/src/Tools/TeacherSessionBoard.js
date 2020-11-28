import React from "react";
import { Collapse } from 'antd';
import './SessionBoard.css'


const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


function TeacherSessionBoard(props) {




    return(
        <div className="session-board">
            <Collapse defaultActiveKey={[]} onChange={callback}>
                    <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                    </Panel>
            </Collapse>


        </div>
    );
}

export default TeacherSessionBoard;