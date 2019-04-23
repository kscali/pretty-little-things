import React from 'react';

const Details = () => (
  <div className="tabs-info">
    <div className='tabs'>
      <Headers
        selectedPane={this.props.selectedPane}
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
  </div>
)

export default Details; 