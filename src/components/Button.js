import React, { Component } from 'react';

export default function Button(props) {
  const z2red = '#a90000';
  const z2pink = '#f0b2bc';
  const styles = {
    borderRadius: 4,
    border: 'none',
    padding: '10px 12px',
    margin: 5,
    color: 'white',
    backgroundColor: z2red, //pink
    opacity: 1,
    mouseover: true,
    fontSize: 12
  };

  if (props.number < props.count) {
    styles.opacity = 0.4;
    styles.mouseover = false;
  }

  return (
    <button
      type="button"
      style={styles}
      onClick={props.handleClick}
      value={props.number}
      disabled={props.gameOver || props.number < props.count}
    >
      {props.number}
    </button>
  );
}
