import React, { Component } from 'react';

export default function Button(props) {
  const z2red = '#a90000';
  const z2pink = '#f0b2bc';
  const styles = {
    borderRadius: 4,
    border: 'none',
    padding: '8px 12px',
    margin: 5,
    color: 'white',
    backgroundColor: z2red, //pink
    opacity: 1,
    mouseover: true
  };

  if (props.number < props.count) {
    styles.opacity = 0.4;
    styles.mouseover = false;
  }

  return (
    <button style={styles} onClick={props.handleClick}>
      {props.number}
    </button>
  );
}
