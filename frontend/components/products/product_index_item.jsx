import { Link } from 'react-router-dom';
import React from 'react';

const ProductIndexItem = () => {
  let style = window.location.href.slice(24);
  let makeup = () => (
    <div className="container">
      
    </div>
  )

  
  return (
    // { style === "makeup" ?
    //   <div><Makeup /></div> : style === "skincare" ?
    //     <div><SkinCare /></div> : style === "tools" ?
    //       <div><Tools /></div> : style === "fragrance" ?
    //         <div><Fragrance /></div> : <Bath />
    //       }
    <div>Hello</div>
  )

}

export default ProductIndexItem;