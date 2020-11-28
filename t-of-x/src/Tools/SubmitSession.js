import { Form, DatePicker, Button, InputNumber } from 'antd';
import './SubmitSession.css'




function SubmitSession() {
    const [form] = Form.useForm();

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
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          'duration': fieldsValue['duration'],


        };
        console.log('Received values of form: ', values);
    };



    return(
        <div className="submit-session-board">
            <Form form={form} name="submit-session" layout={"inline"} onFinish={onFinish}>
                <Form.Item>

                    <Form.Item name="date-time-picker" label="Date-time" {...configDate}
                        style={{display: "inline-block"}}
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