import React from 'react';
//import stars


export function reviewStars(props) {
    let stars = [];
    for(let i= 0; i < props.rating; i++) {
      stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
    }
    return (
      <>
      <div>{stars}</div>
      <div>{props.voters}</div>
      </>
    );
  };