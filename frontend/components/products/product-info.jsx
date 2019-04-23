import React from 'react';

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, index) => {
    const title = pane.title;
    const klass = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className={klass}
          onClick={() => this.props.onTabChosen(index)}>
          <p className="li-title">{title}{' '}</p>
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>

    );
  }
}

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  render() {
    // const pane = this.props.panes[this.state.selectedPane];
    //  debugger;
    return (
      <div className="tabs-info">
        <div className='tabs'>
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.props.panes}>
          </Headers>
          <div className='tab-content'>
            <article>
              <p><b>What It is:</b></p>
              <p>{this.props.product.what_it_is}</p>
            </article>
            <article id="wid">
              <p><b>What It does:</b></p>
              <p>{this.props.product.what_it_does}</p>
            </article>
            <article id="weyntk">
              <p><b>What else you need to know: :</b></p>
              <p>{this.props.product.what_else_you_need_to_know}</p>
            </article>
          </div>

        </div>
      </div>)
  }
}
