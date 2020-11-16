"use strict";
import React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Heart({ isActive, onClick, animationTrigger = "click", animationScale = 1.05, inactiveColor = "black", activeColor = "red", className, style }) {

  return (
    <Svg onClick={() => onClick()} viewBox="0 0 16 16" className={className} animationTrigger = {animationTrigger} animationScale = {animationScale} style = {style} xmlns="http://www.w3.org/2000/svg">
      {isActive ?
        <path fillRule="evenodd" fill={activeColor} d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        :
        <path fillRule="evenodd" fill={inactiveColor} d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
      }
    </Svg>
  );
}
const Svg = styled.svg`cursor: pointer;${props => {
  if (props.animationTrigger === "hover") return (`&:hover { transform: scale(${props.animationScale});}`)
  else return (`&:active { transform: scale(${props.animationScale});}`)
}});}`;


Heart.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  animationTrigger: PropTypes.oneOf(["click", "hover", "none"]),
  animationScale: PropTypes.number,
  inactiveColor: PropTypes.string,
  activeColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.style,
}