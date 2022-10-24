import React from 'react';
import { Stage, Layer, Rect, Text, Circle, Line, Image } from 'react-konva';
import { useState } from 'react';
import useImage from 'use-image';
import centralLine from '../image/centralLine.png';


const url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAACNCAYAAABc1+GFAAABcGlDQ1BpY2MAACiRdZG9S8NAGMaffohSW4roIOKQoYpDC0VBHKWCXapDW8GqS3JNWiFJwyVFiqvg4lBwEF38GvwPdBVcFQRBEUSc/AP8WqTE95pCi7QX7t4fT+55uXsO8Gd0ZtjBJGCYDs+mU9JqYU3qf0cIQ4jQGpSZbS3lFvPoOX4e4RP1ISF69d7XdQwWVZsBvgHiWWZxh3ieOLPlWIL3iEdYWS4SnxDHOR2Q+Fboisdvgksefwnm+ewC4Bc9pVIHKx3MytwgniKOGXqVtc4jbhJWzZUc1TGa47CRRRopSFBQxSZ0OEhQNSmz7r5k07eMCnkYrRZq4OQooUzeOKlV6qpS1UhX6dNRE7n/z9PWZqa97uEU0Pfqup8TQP8+0Ki77u+p6zbOgMALcG22/RXKae6b9Hpbix0D0R3g8qatKQfA1S4w+mzJXG5KAZp+TQM+LoBIARi+B0LrXlat/zh/AvLb9ER3wOERMEn7oxt/nkBn3Yl+3jAAAAAJcEhZcwAALiMAAC4jAXilP3YAAACRSURBVGhD7dShEcAgFAVBQv89Jxk04gyopYAvbpb3vP8bh948dHeddXxbVxZZ+rejhRZaegFaeivbQgstvQAtvZVtoYWWXoCW3sq20EJLL0BLb2VbaKGlF6Clt7IttNDSC9DSW9kWWmjpBWjprWwLLbT0ArT0VraFFlp6AVp6K9tCCy29AC29lW2hhZZe4L6WD4RcBRbDANw2AAAAAElFTkSuQmCC';

function Divider(props) {

    const [image] = useImage(url);

    return (
        <Image x={props.coordinate.x} y={props.coordinate.y} image={image} />
    )
}

export default Divider;


