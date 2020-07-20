import React from "react";
class Sauce extends React.Component {
    constructor(props) {
        super(props);

        const sauceWidth = this.props.pizzaSize / 35,
            saucePadding = sauceWidth * 3,
            sauceTotalWidth = sauceWidth + saucePadding;

        this.state = {
            pizzaSize: this.props.pizzaSize,
            width: sauceTotalWidth,
            sauceWidth,
        };

        this.renderItems = this.renderItems.bind(this);
    }

    renderItem(iIndex) {
        return (
            <path
                fill="transparent"
                stroke={this.props.color}
                strokeWidth={this.state.sauceWidth / 2}
                strokeLinecap="round"
                d={`M ${iIndex * this.state.width} 0
            L ${iIndex * this.state.width} ${this.state.pizzaSize}`}
            />
        );
    }

    *itemsIterator() {
        for (let i = 0; i < this.state.pizzaSize / this.state.width; ++i) {
            yield this.renderItem(i);
        }
    }

    renderItems() {
        return Array.from(this.itemsIterator());
    }

    render() {
        return (
            <g
                className={`sauce ${this.props.name}`}
                transform={`rotate(${Math.random() * 180}, ${
                    this.state.pizzaSize / 2
                }, ${this.state.pizzaSize / 2})`}
            >
                {this.renderItems()}
            </g>
        );
    }
}

export default Sauce;
