import React from 'react';

export default class ProductInfo extends React.Component {
  
  render() {

    return (
      <div className="tabbed">
    
        <input name="tabbed" id="tabbed1" type="radio" defaultChecked />
        <section>
          <h5>
            <label htmlFor="tabbed1">Details</label>
          </h5>
          <div >
            <p className="p-details"><b>What It is:</b></p>
            <p className="p-details"> {this.props.product.what_it_is}</p>

            <p className="p-details"><b>What It does:</b></p>
            <p className="p-details">{this.props.product.what_it_does}</p>

            <p className="p-details"><b>What else you need to know: :</b></p>
            <p className="p-details">{this.props.product.what_else_you_need_to_know}</p>
           </div>
        </section>

      
        <input name="tabbed" id="tabbed2" type="radio" />
        <section className="seg-2">
          <h5>
            <label htmlFor="tabbed2">How To Use</label>
          </h5>
          <div>
            <p className="sug-use"><b>Suggested Usage: </b></p>
            <ul className="tab-ul">
              {this.props.product.how_to_use.map((el, i) => {
                return <li key={i}>{el}</li>
              })}
            </ul>
            </div>
        </section>

        <input name="tabbed" id="tabbed3" type="radio" />
        <section>
          <h5>
            <label htmlFor="tabbed3">Ingredients</label>
          </h5>
          <div>
            <p className="p-details">{this.props.product.ingredients}</p>
          </div>
        </section>
      </div>
    )
  }
}




