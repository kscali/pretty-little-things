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

    this.setState({ inputVal: event.currentTarget.value });

    if (event.currentTarget.value === "") {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }
  }

  getProduct(e) {
    let ul = document.getElementById("input-names");

    let matches = this.matches();

    if (e.key === "Enter") {
      ul.style.display = "none";
      this.setState({ inputVal: matches[0] }, () => {
        for (let i = 0; i < this.props.products.length; i++) {
          const product = this.props.products[i];

          if (this.state.inputVal === product.name) {
            console.log("round");
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
    let ul = document.getElementById("input-names");
    for (let i = 0; i < this.props.products.length; i++) {
      const product = this.props.products[i];

      if (name === product.name) {
        ul.style.display = "none";
        this.setState({ inputVal: "" });
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
