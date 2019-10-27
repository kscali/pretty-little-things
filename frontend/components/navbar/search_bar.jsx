import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputVal: "",
      className: "matches"
    };
    
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  handleInput(event) {

    this.setState({ inputVal: event.currentTarget.value });

    if (event.currentTarget.value === "") {
      this.setState({className: "matches"})
    } else {
      this.setState({className: "matches show"})
    }
  }

  getProduct(e) {

    let matches = this.matches();

    if (e.key === "Enter") {
    
      this.setState({ inputVal: matches[0], className: "matches" }, () => {
        for (let i = 0; i < this.props.products.length; i++) {
          const product = this.props.products[i];

          if (this.state.inputVal === product.name) {
           
            this.setState({ inputVal: "" });
            this.props.history.push(`/products/${product.id}`);
            return;
          }
        }
      });
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
      matches.push("No matches");
    }

    return matches;
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({ inputVal: name });
    
    for (let i = 0; i < this.props.products.length; i++) {
      const product = this.props.products[i];

      if (name === product.name) {
        this.setState({ inputVal: "", className: "matches" });
        this.props.history.push(`/products/${product.id}`);
        return;
      }
    }
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>
          {result}
        </li>
      );
    });
    return (
      <>
        <div className="auto">
          <input
            className="search-input"
            onChange={this.handleInput}
            onKeyPress={this.getProduct}
            value={this.state.inputVal}
            placeholder="&#x1F50D; Search"
          />
          <ul className={ this.state.className }>
            {results}
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(SearchBar);
