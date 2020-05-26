import React from 'react';
//import stars


export function reviewStars(num) {
    let stars = [];
    for(let i= 0; i < num; i++) {
      stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
    }
    return (
      <div>{stars}</div>
    );
  };