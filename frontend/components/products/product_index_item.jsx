import { Link } from 'react-router-dom';
import React from 'react';

const ProductIndexItem = () => {
  let style = window.location.href.slice(24);
  let makeup = () => (
    <div className="container">
      <ul>
        <li><Link to='/face'>Face</Link></li>
      </ul>
    </div>
  )

  
  return (
    // { style === "makeup" ?
    //   <div><Makeup /></div> : style === "skincare" ?
    //     <div><SkinCare /></div> : style === "tools" ?
    //       <div><Tools /></div> : style === "fragrance" ?
    //         <div><Fragrance /></div> : <Bath />
    //       }
    <div className="side-nav-menu">
      <ul>
        <li><Link to='/face'>Face</Link></li>
        <li><Link to='/eye'>Eye</Link></li>
        <li><Link to='/lip'>Lip</Link></li>
        <li><Link to='/skin'>Skin</Link></li>
        <li><Link to='/fragrance'>Fragrance</Link></li>
        <li><Link to='/hair'>Hair</Link></li>
        <li><Link to='/brushes'>Brushes</Link></li>
        <li><Link to='/Accessories'>Accessories</Link></li>
      </ul>
    </div>
  )

}

export default ProductIndexItem;