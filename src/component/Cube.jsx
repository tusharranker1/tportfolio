import React from 'react'
import '../css/Cube.css'

export const Cube = (props) => {
    console.log(props)
  return (
    <div class="container">
    <div class="cube">
      <div class="face front"><img src={props.data.imgs[0]} alt='img'/></div>
      <div class="face back"><img src={props.data.imgs[1]} alt='img' style={{transform:'rotateZ(180deg)'}}/></div>
      <div class="face right"><img src={props.data.imgs[2]} alt='img'/></div>
      <div class="face left"><img src={props.data.imgs[3]} alt='img'/></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
  </div>
  )
}
