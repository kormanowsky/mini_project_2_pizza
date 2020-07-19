import React from "react";
class Topping extends React.Component {
    constructor(props) {
        super(props);
        this.renderItems = this.renderItems.bind(this);
        this.itemsIterator = this.itemsIterator.bind(this);
    }

    *itemsIterator() {
        for (
            let i = 0;
            i < this.props.pizzaSize / this.props.itemSize.width;
            ++i
        ) {
            for (
                let j = 0;
                j < this.props.pizzaSize / this.props.itemSize.height;
                ++j
            ) {
                yield this.props.itemRenderer(i, j);
            }
        }
    }

    renderItems() {
        return Array.from(this.itemsIterator());
    }

    render() {
        return (
            <g className={`topping ${this.name}`} key={this.name}>
                {this.renderItems()}
            </g>
        );
    }
}

export default Topping;
