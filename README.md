
<h1 align="center"><img width = "50px" src = "https://github.com/matthewgferrari/react-heart/blob/main/example/heart.png"/>React-Heart</h1>

<div align="center">

<h4 align = "center">An SVG based, animated and customizable heart button</h4>

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/matthewgferrari/engine-express/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-heart)](https://www.npmjs.com/package/express-engine)
</div>
 <div align = "center"><img src = "https://github.com/matthewgferrari/react-heart/blob/main/example/demo.gif"/></div>

## Demo
<a href = "https://www.github.io.matthewgferrari/react-heart">Live demo and sandbox</a>

## Installation
React-Heart is available as an [npm package](https://www.npmjs.com/package/react-heart).

```sh
// with npm
npm install react-heart
```
## Usage
```sh
import React, { useState } from "react"
import Heart from "react-heart"

function App() {
	const [active, setActive] = useState(false)
	return (
		<div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)}/>
		</div>
	);
}
```
## Props
Name | Type | Required? | Default | Description 
-----|------|---------|---------|---------
isActive | bool| required| N/A | Current heart status
onClick| function| required| N/A| Heart was clicked callback
animationTrigger | 'none' \| 'click' \| 'hover' | optional | 'click'| Animation trigger
AnimationScale| number|optional|1.05|Scale of animation 
inactiveColor | string|optional|'black'|Color of inactive heart
activeColor|string|optional |'red'| Color of active heart
className |string |optional | N/A| Class name to apply custom CSS
style|object|optional |N/A| Style object

## Example
```sh
import React, { useState } from "react"
import Heart from "react-heart"

function App() {
	const [active, setActive] = useState(false)
	return (
		<div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "none" inactiveColor = "rgba(255,125,125,.75)" activeColor = "#e019ae" style = {{marginTop:'1rem'}}/>
		</div>
	);
}
```
