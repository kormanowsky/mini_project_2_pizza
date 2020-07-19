import React from "react";
import Topping from "./Topping";

class GreensTopping extends React.Component {
    constructor(props) {
        super(props);
        const greensLineSize = this.props.pizzaSize / 25,
            greensSquareSize = greensLineSize * 1.6,
            greensPadding = greensSquareSize / 1.5,
            greensTotalSize = greensPadding * 2 + greensSquareSize;
        this.state = {
            size: { width: greensTotalSize, height: greensTotalSize },
            padding: greensPadding,
            lineSize: greensLineSize,
            squareSize: greensSquareSize,
        };
        this.itemRenderer = this.itemRenderer.bind(this);
    }

    itemRenderer(iIndex, jIndex) {
        return (
            <path
                key={`greens-${iIndex}-${jIndex}`}
                className="greens-piece"
                d={`M ${iIndex * this.state.size.width + this.state.padding} ${
                    (jIndex + 1) * this.state.size.height - this.state.padding
                } L ${(iIndex + 0.5) * this.state.size.width} ${
                    (jIndex + 1) * this.state.size.height -
                    this.state.padding -
                    this.state.lineSize * 0.6
                } L ${(iIndex + 0.5) * this.state.size.width} ${
                    jIndex * this.state.size.height + this.state.padding
                } L ${(iIndex + 0.5) * this.state.size.width} ${
                    (jIndex + 1) * this.state.size.height -
                    this.state.padding -
                    this.state.lineSize * 0.6
                } L ${
                    (iIndex + 1) * this.state.size.width - this.state.padding
                } ${
                    (jIndex + 1) * this.state.size.height - this.state.padding
                }`}
                fill="transparent"
                stroke="#00c400"
                strokeWidth={this.state.squareSize / 10}
                transform={`rotate(${Math.random() * 360}, ${
                    (iIndex + 0.5) * this.state.size.width
                }, ${
                    (jIndex + 1) * this.state.size.width -
                    this.state.padding -
                    this.state.lineSize * 0.6
                })`}
            ></path>
        );
    }
    render() {
        return (
            <Topping
                name="greens"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default GreensTopping;
