import React from "react";
import Topping from "./Topping";

class SausagesTopping extends React.Component {
    constructor(props) {
        super(props);
        const sausageRadius = this.props.pizzaSize / 21,
            sausagePadding = sausageRadius * 0.5,
            sausageTotalSize = sausageRadius * 2 + sausagePadding * 2;
        this.state = {
            size: { width: sausageTotalSize, height: sausageTotalSize },
            padding: sausagePadding,
            radius: sausageRadius,
        };
        this.itemRenderer = this.itemRenderer.bind(this);
    }

    itemRenderer(iIndex, jIndex) {
        return (
            <circle
                className="sausage"
                key={`sausage-${iIndex}-${jIndex}`}
                r={this.state.radius}
                fill="#ffa8c5"
                cx={
                    iIndex * this.state.size.width +
                    this.state.padding +
                    this.state.radius * (Math.random() * 0.4 + 0.8)
                }
                cy={
                    jIndex * this.state.size.height +
                    this.state.padding +
                    this.state.radius * (Math.random() * 0.4 + 0.8)
                }
            ></circle>
        );
    }
    render() {
        return (
            <Topping
                name="sausages"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default SausagesTopping;
