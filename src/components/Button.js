import React, { Component } from 'react';
import '../css/Button.css';

export default function Button(props) {
  const z2red = '#a90000';
  const z2pink = '#f0b2bc';

  // if (props.number < props.count) {
  //   styles.opacity = 0.4;
  //   styles.mouseover = false;
  // }

  return (
    <button
      type="button"
      onClick={props.handleClick}
      value={props.number}
      disabled={props.gameOver || props.number < props.count}
    >
      {props.number}
    </button>
  );
}
