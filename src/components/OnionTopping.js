import React from "react";
import Topping from "./Topping";

class OnionTopping extends React.Component {
    constructor(props) {
        super(props);
        const onionRadius = this.props.pizzaSize / 18,
            onionPadding = onionRadius * 0.5,
            onionTotalSize = onionRadius * 2 + onionPadding * 2,
            onionStrokeWidth = onionRadius / 8;
        this.state = {
            size: { width: onionTotalSize, height: onionTotalSize },
            strokeWidth: onionStrokeWidth,
            padding: onionPadding,
            radius: onionRadius,
        };
        this.itemRenderer = this.itemRenderer.bind(this);
    }

    itemRenderer(iIndex, jIndex) {
        return (
            <circle
                className="onion"
                key={`onion-${iIndex}-${jIndex}`}
                r={this.state.radius}
                fill="transparent"
                strokeWidth={this.state.strokeWidth}
                cx={
                    iIndex * this.state.width +
                    this.state.padding +
                    this.state.radius * (Math.random() * 0.4 + 0.8) +
                    this.state.strokeWidth / 2
                }
                cy={
                    jIndex * this.state.height +
                    this.state.padding +
                    this.state.radius * (Math.random() * 0.4 + 0.8) +
                    this.state.strokeWidth / 2
                }
                stroke="#b68cff"
            ></circle>
        );
    }
    render() {
        return (
            <Topping
                name="onion"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default OnionTopping;
