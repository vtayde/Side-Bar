import React, {Component} from 'react';
import { Steps, Button, message } from 'antd';
import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import Step3 from '../components/Steps/Step3';

const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

class FormPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current: 0,
      };
    }
  
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }
  
    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }
  
    render() {
      const { current } = this.state;
      const style= {
        width: '60rem',
        position: 'absolute',
        top: '5rem'
      };
      return (
        <div style={style}>
          <Steps current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>
          <div align="center" style={{height:'10rem', padding: '1rem'}} className="steps-content">
            {
                this.state.current === 0 ? 
                <Step1></Step1> :
                    this.state.current === 1? 
                    <Step2></Step2>: 
                        <Step3></Step3>
            }
          </div>
          <div className="steps-action">
            {
              current < steps.length - 1
              && <Button type="primary" onClick={() => this.next()}>Next</Button>
            }
            {
              current === steps.length - 1
              && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
            }
            {
              current > 0
              && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
              )
            }
          </div>
        </div>
      );
    }
  }
  
export default FormPage;