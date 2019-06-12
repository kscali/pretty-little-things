import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleInput(event) {
    let ul = document.getElementById("input-names");

    this.setState({ inputVal: event.currentTarget.value }, () => {
      if (this.state.inputVal !== "") ul.style.display = "block";
    });

    if (this.state.inputVal === "") {
      ul.style.display = "none";
    }
  }

  getProduct(e) {
    let ul = document.getElementById("input-names");
    let input = this.state.inputVal;
    if (e.key === "Enter") {
      ul.style.display = "none";
      this.setState({ inputVal: "" });
      for (let i = 0; i < this.props.products.length; i++) {
        const product = this.props.products[i];
        if (input === product.name) {
          this.props.history.push(`/products/${product.id}`);
          return;
        }
      }
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
    let ul = document.getElementById("input-names");
    for (let i = 0; i < this.props.products.length; i++) {
      const product = this.props.products[i];
      const name = event.currentTarget.innerText;
      this.setState({ inputVal: name });

      if (this.state.inputVal === product.name) {
        this.props.history.push(`/products/${product.id}`);
        return;
      }
      setTimeout(() => {
        ul.style.display = "none";
      }, 800);
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
      <div>
        <div className="auto">
          <input
            className="search-input"
            onChange={this.handleInput}
            onKeyPress={this.getProduct}
            value={this.state.inputVal}
            placeholder="&#x1F50D; Search"
          />
          <ul id="input-names" className="matches">
            {results}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
