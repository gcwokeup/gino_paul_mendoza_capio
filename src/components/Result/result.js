import React, {Component} from 'react';

class Result extends Component {
  render() {
    return (
        <div className='row search m-4 border rounded p-4 w-100' >
          <div className="col-lg-4 col-sm-12">
            <div className="text-center">
              {'Operation: ' + this.props.operation}
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="text-center">
              {'Expression: ' + this.props.expression}
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="text-center">
              {'Answer: ' + this.props.answer}
            </div>
          </div>
        </div>
    );
  }
}

export default Result;
