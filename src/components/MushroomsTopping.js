import React from "react";
import Topping from "./Topping";

class MushroomsTopping extends React.Component {
    constructor(props) {
        super(props);
        const mushroomWidth = this.state.size / 20,
            mushroomHeight = mushroomWidth * 0.8,
            mushroomPartWidth = mushroomWidth * 0.6,
            mushroomPartHeight = mushroomPartWidth * 0.8,
            mushroomPadding = mushroomWidth * 1.5,
            mushroomTotalWidth = 2 * mushroomPadding + mushroomWidth,
            mushroomTotalHeight =
                2 * mushroomPadding +
                mushroomHeight +
                mushroomPartHeight * 0.25;
        this.state = {
            size: { width: mushroomTotalWidth, height: mushroomTotalHeight },
            partSize: {
                width: mushroomPartWidth,
                height: mushroomPartHeight,
            },
            mushroomSize: {
                width: mushroomWidth,
                height: mushroomHeight,
            },
        };
        this.itemRenderer = this.itemRenderer.bind(this);
    }

    itemRenderer(iIndex, jIndex) {
        return (
            <g
                className="mushroom"
                key={`mushroom-${iIndex}-${jIndex}`}
                transform={`rotate(${Math.random() * 90 - 45}, ${
                    (iIndex + 0.5) * this.state.size.width
                } , ${(jIndex + 0.5) * this.state.size.height} )`}
            >
                <ellipse
                    cx={(iIndex + 0.5) * this.state.size.width}
                    cy={(jIndex + 0.25) * this.state.size.height}
                    rx={this.state.mushroomSize.width}
                    ry={this.state.mushroomSize.height}
                    fill="#aea4a0"
                ></ellipse>
                <ellipse
                    cx={(iIndex + 0.5) * this.state.size.width}
                    cy={
                        (jIndex + 0.25) * this.state.size.height +
                        this.state.partSize.height * 0.75
                    }
                    rx={this.state.partSize.width}
                    ry={this.state.partSize.height}
                    fill="#938e8c"
                ></ellipse>
            </g>
        );
    }
    render() {
        return (
            <Topping
                name="mushrooms"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default MushroomsTopping;
