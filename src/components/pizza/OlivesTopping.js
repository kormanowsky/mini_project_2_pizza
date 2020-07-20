import React from "react";
import Topping from "./Topping";

class OlivesTopping extends React.Component {
    constructor(props) {
        super(props);
        const onionRadius = this.props.pizzaSize / 54,
            onionPadding = onionRadius * 2,
            onionTotalSize = onionRadius * 2 + onionPadding * 2,
            onionStrokeWidth = onionRadius / 1.5;
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
                className="olive"
                key={`olive-${iIndex}-${jIndex}`}
                r={this.state.radius}
                fill="transparent"
                strokeWidth={this.state.strokeWidth}
                cx={
                    iIndex * this.state.size.width +
                    this.state.padding +
                    this.state.radius * (Math.random() * 0.4 + 0.8) +
                    this.state.strokeWidth / 2
                }
                cy={
                    jIndex * this.state.size.height +
                    this.state.padding +
                    this.state.radius * (Math.random() * 0.4 + 0.8) +
                    this.state.strokeWidth / 2
                }
                stroke="olive"
            ></circle>
        );
    }
    render() {
        return (
            <Topping
                name="olives"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default OlivesTopping;
