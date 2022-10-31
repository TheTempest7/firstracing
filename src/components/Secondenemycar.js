import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const url = 'data:image/png;base64,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';

function Secondenemycar(props) {
    const [image] = useImage(url);
    return (
        <Image x={props.coordinate.x} y={props.coordinate.y} image={image} />
    )
}

export default Secondenemycar;

