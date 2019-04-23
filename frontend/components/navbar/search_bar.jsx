import React from 'react';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  handleInput(event) {
    let ul = document.getElementById('input-names');
    if (this.inputVal === "") ul.style.display = 'none';
    if (this.inputVal !== "" ) ul.style.display = 'block';
    this.setState({ inputVal: event.currentTarget.value });
  }

  getProduct(e) {
    let ul = document.getElementById('input-names');
    if (e.key === "Enter") {
      this.setState({inputVal: ""});
       ul.style.display = 'none';
    }
  }
  
  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      const sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({ inputVal: name });
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return (
      <div>
        <div className='auto'>
          <input
            className="search-input"
            onChange={this.handleInput}
            onKeyPress={this.getProduct}
            value={this.state.inputVal}
            placeholder="&#x1F50D; Search" />
           <ul id="input-names" className="matches">
             {results}
          </ul>
        </div>
      </div>
    );
  }
};