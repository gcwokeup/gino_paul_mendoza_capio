import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Result from './components/Result/result';


class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      operation: null,
      expression: null,
      latestAnswer: null,
      pastResults: []
    };
  }

  componentDidMount() {
    this.setState({ error: null, operation: 'simplify', pastResults: [] })
  }
  getResultFromNewtonAPI() {
    const expression = document.getElementById('expression').value;
    const myHeaders = new Headers();
    const myRequest = new Request('https://newton.now.sh/' + this.state.operation + '/' + expression, {
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
    });

    fetch(myRequest)
    .then(resp => resp.json())
    .then(result => this.updateState(result))
    .catch(function(error) {
      console.log(error);
    });
  }

  updateState(data) {
    this.state.pastResults.unshift(data);
    const updatedResults = this.state.pastResults;
    this.setState({expression: data.expression, latestAnswer: data.result, pastResults: updatedResults});
  }

  changeOperation(newOperation) {
    this.setState({ error: null, operation: newOperation });
  }

  render() {
    const results = this.state.pastResults.map((data, index) =>
        <Result
            operation={data.operation}
            expression={data.expression}
            answer={data.result}
            newest={index === 0}
        />

    );
    return (
        <div className='App'>
          <header>
            <h1 className='text-center mb-5'>Go Nimbly - Software Engineer Interview Project</h1>
          </header>
          <div className='container'>
            {/* operations available */}
            <h4 className='text-center'>Pick an operation</h4>
            <ul className='nav nav-pills nav-fill border-bottom pb-4'>
              {/* TODO: Separate into own component */}
              <li className='nav-item m-2'>
                <button id='simplify-btn' className={this.state.operation === 'simplify' ? 'btn btn-primary active' : 'btn btn-primary'}  onClick={() => {this.changeOperation('simplify')}}>
                  simplify
                </button>
              </li>
              <li className='nav-item m-2'>
                <button id='factor-btn' className={this.state.operation === 'factor' ? 'btn btn-primary active' : 'btn btn-primary'}  onClick={() => {this.changeOperation('factor')}}>
                  factor
                </button>
              </li>
              <li className='nav-item m-2'>
                <button id='derive-btn' className={this.state.operation === 'derive' ? 'btn btn-primary active' : 'btn btn-primary'}  onClick={() => {this.changeOperation('derive')}}>
                  derive
                </button>
              </li>
              <li className='nav-item m-2'>
                <button id='integrate-btn' className={this.state.operation === 'integrate' ? 'btn btn-primary active' : 'btn btn-primary'}  onClick={() => {this.changeOperation('integrate')}}>
                  integrate
                </button>
              </li>
            </ul>
            
            {/*search section*/}
            {/* TODO: Separate into own component */}
            <div className='row search m-4 align-content-center d-flex justify-content-around'>
              <div className='col-md-8 col-sm-12 m-2'>
                <input id='expression' className='w-100 mx-2 p-2 rounded' type='text' placeholder='ex. 1+1' />
              </div>
              <div className='col-md-2 col-sm-12 m-2'>
                <button id='submit-expression-button' className='btn btn-primary mx-2 p-2 w-100' onClick={() => {this.getResultFromNewtonAPI()}}>
                  {this.state.operation}
                </button>
              </div>
            </div>

            {/* Results section */}
            <div className="container results">
              {results}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
