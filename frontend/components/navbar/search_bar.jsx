import React from 'react';
import { Redirect, Link } from 'react-router-dom';

 class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
   this.props.fetchProducts()
  }

  handleInput(event) {
    let ul = document.getElementById('input-names');
    if (this.inputVal === "") ul.style.display = 'none';
    if (this.inputVal !== "" ) ul.style.display = 'block';
    this.setState({ inputVal: event.currentTarget.value });
  }

  getProduct(e) {
    let ul = document.getElementById('input-names');
    let input = this.state.inputVal;
    if (e.key === "Enter") {
      e.preventDefault();
      ul.style.display = 'none';
      this.setState({ inputVal: "" });
      this.props.products.forEach(product => {
        if (input === product.name) {
          return <Redirect to={`/products/${product.id}`} />
        }
      })
      
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

  //   const results = this.matches().map((result, i) => {
  //     this.props.products.forEach(product => {
  //       if (result === product.name) {
  //         return (
  //           <li key={i} onClick={this.selectName}><Link to={`/products/${product.id}`}>{result}</Link></li>
  //         );
  //       }
  //     })
  //  });

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

export default SearchBar;