import React, { Component } from 'react';

import NotFoundImg from '../../images/images.png'

export default class Notfound extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={NotFoundImg} />
      </div>
    )
  }
}
