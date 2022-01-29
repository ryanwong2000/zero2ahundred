import React, { Component } from 'react';

export default function Button(props) {
  const style = {
    margin: '3px'
  };

  return <button style={style}>{props.number}</button>;
}
