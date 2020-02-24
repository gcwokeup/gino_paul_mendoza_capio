import React, {Component} from 'react';

class Result extends Component {
  render() {
    // Add primary border and bigger margin if latest result
    const wrapperClasses =
        this.props.newest ? 'row font-weight-bold search my-5 mx-3 border border-primary rounded p-4 w-100' : 'row search m-1 border rounded p-4 w-100'
    return (
        <div className={wrapperClasses}  >
          <div className=" col-lg-4 col-sm-12">
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
