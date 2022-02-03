import React, { Component } from 'react';

export default function Button(props) {
  const styles = {
    borderRadius: 4,
    border: 'none',
    padding: '8px 12px',
    margin: 5
  };

  return <button style={styles}>{props.number}</button>;
}
