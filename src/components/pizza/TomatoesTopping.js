import React from "react";
import Topping from "./Topping";

class TomatoesTopping extends React.Component {
    constructor(props) {
        super(props);
        const tomatoSize = this.props.pizzaSize / 40,
            tomatoPadding = tomatoSize * 2,
            tomatoTotalSize = tomatoSize + 2 * tomatoPadding;
        this.state = {
            size: { width: tomatoTotalSize, height: tomatoTotalSize },
            tomatoSize,
        };
        this.itemRenderer = this.itemRenderer.bind(this);
    }

    itemRenderer(iIndex, jIndex) {
        return (
            <circle
                key={`tomato-${iIndex}-${jIndex}`}
                className="tomato"
                r={this.state.tomatoSize}
                cx={(iIndex + 0.5) * this.state.size.width}
                cy={(jIndex + 0.5) * this.state.size.height}
                fill="red"
            ></circle>
        );
    }
    render() {
        return (
            <Topping
                name="tomatoes"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default TomatoesTopping;
