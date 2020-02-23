import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      answer: ''
    };
  }

  getResultFromNewtonAPI() {
    const expression = document.getElementById("expression").value;
    const myHeaders = new Headers();
    const myRequest = new Request('https://newton.now.sh/simplify/' + expression, {
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
    });

    fetch(myRequest)
    .then(resp => resp.json())
    .then(function(data) {
      console.log(data);
      const result = document.getElementById("result");
      result.innerText = data.result;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
        <div className="App">
          <header>
            <h1 className="text-center mb-5">Go Nimbly - Software Engineer Interview Project</h1>
          </header>

          <div className="container">
            {/*search section*/}
            <div className="row search">
              <div className="search mx-auto">
                <input id="expression" className="mx-2" type="text" placeholder="ex. 1+1" />
                <button className="btn btn-primary mx-2" onClick={this.getResultFromNewtonAPI}>
                  simplify
                </button>
              </div>
            </div>

            {/* Results section */}
            <div >
              Answer:
              <span id="result">
                {this.state.answer}
              </span>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
