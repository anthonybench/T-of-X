import { Form, DatePicker, Button, InputNumber, Col } from 'antd';
import './SubmitSession.css'

const axios = require('axios');




function SubmitSession(props) {
    const [form] = Form.useForm();

    // Sign in status
    let isSignedIn = props.authenticationSetup === true && props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;


    const configDate = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      };

    const configDuration = {
        rules: [{ required: true, message: 'Please select duration!' }],
      };

      function onChange(value) {
        console.log('changed', value);
      }

    const onFinish = fieldsValue => {
        // Should format date value before submit.
        const values = {
          ...fieldsValue,
          'date-time-picker': fieldsValue['date-time-picker'].format(),
          'duration': fieldsValue['duration'],
        };
        console.log('Received values of form: ', values);

        if(isSignedIn){

            let userName = props.googleAPIObj.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName() 
            let url = 'https://t-of-x-backend.anthonybench.vercel.app/users/' + userName

            axios.get(url)
                .then(function (response) {
                    // handle success
                    let data = response.data;
                    let submitUid = data[0].id;
                    console.log(data);
                    console.log(submitUid);
                    console.log(values['date-time-picker'])
                    axios.post('https://t-of-x-backend.anthonybench.vercel.app/sessions/add', {
                        "uid" : submitUid,
                        "duration" : values['duration'],
                        "date" : values['date-time-picker'],
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                    });

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    };



    return(
        <div className="submit-session-board">
            <Form form={form} name="submit-session" layout={"inline"} onFinish={onFinish}>
                <Form.Item>

                    <Form.Item name="date-time-picker" label="Date-time" {...configDate}
                    >
                        <DatePicker showTime format="YYYY/MM/DD HH:mm" 
                        />
                    </Form.Item>

                    <Form.Item name="duration" label="Duration" {...configDuration}          
                        style={{display: "inline-block"}}
                    >
                        <InputNumber min={1} max={10} onChange={onChange} />
                    </Form.Item>

                    <Form.Item
                        style={{display: "inline-block"}}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                </Form.Item>

            </Form>

        </div>
    );
}

export default SubmitSession;