import React from "react";
import Topping from "./Topping";

class MeatTopping extends React.Component {
    constructor(props) {
        super(props);
        const meatSize = this.props.pizzaSize / 19,
            meatPadding = meatSize,
            meatTotalSize = meatSize + meatPadding * 2;
        this.state = {
            size: { width: meatTotalSize, height: meatTotalSize },
            meatSize: { width: meatSize, height: meatSize },
            padding: meatPadding,
        };
        this.itemRenderer = this.itemRenderer.bind(this);
    }

    itemRenderer(iIndex, jIndex) {
        return (
            <rect
                className="meat-piece"
                key={`meat-piece-${iIndex}-${jIndex}`}
                fill="brown"
                x={iIndex * this.state.size + this.state.padding}
                y={jIndex * this.state.size + this.state.padding}
                width={this.state.meatSize.width}
                height={this.state.meatSize.height}
                rx={this.state.meatSize.width / 5}
                ry={this.state.meatSize.width / 5}
                transform={`rotate(${360 * Math.random()}, ${
                    iIndex * this.state.size +
                    this.state.padding +
                    this.state.meatSize.width / 2
                }, ${
                    jIndex * this.state.size +
                    this.state.padding +
                    this.state.meatSize.height / 2
                })`}
            />
        );
    }
    render() {
        return (
            <Topping
                name="meat"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default MeatTopping;
