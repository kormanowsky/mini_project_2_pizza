import React from "react";
import Topping from "./Topping";

class PepperTopping extends React.Component {
    constructor(props) {
        super(props);
        const pepperSideSize = this.props.pizzaSize / 15,
            pepperWidth = pepperSideSize * 2,
            pepperHeight = pepperSideSize * Math.sqrt(3),
            pepperStrokeWidth = pepperSideSize * 0.2,
            pepperPadding = pepperSideSize,
            pepperTotalWidth = pepperPadding * 2 + pepperWidth,
            pepperTotalHeight = pepperPadding * 2 + pepperHeight;
        this.state = {
            size: { width: pepperTotalWidth, height: pepperTotalHeight },
            pepperSize: {
                width: pepperWidth,
                height: pepperHeight,
            },
            strokeWidth: pepperStrokeWidth,
            padding: pepperPadding,
            sideSize: pepperSideSize,
        };
        this.itemRenderer = this.itemRenderer.bind(this);
    }

    itemRenderer(iIndex, jIndex) {
        let pepperD = `M ${
            iIndex * this.state.size.width + this.state.padding
        } ${(jIndex + 0.5) * this.state.size.height} 
            L ${
                iIndex * this.state.size.width +
                this.state.sideSize / 2 +
                this.state.padding
            } ${jIndex * this.state.size.height + this.state.padding}
            L ${
                iIndex * this.state.size.width +
                (3 * this.state.sideSize) / 2 +
                this.state.padding
            } ${jIndex * this.state.size.height + this.state.padding}
            L ${(iIndex + 1) * this.state.size.width - this.state.padding} ${
            (jIndex + 0.5) * this.state.size.height
        }
            L ${
                iIndex * this.state.size.width +
                (3 * this.state.sideSize) / 2 +
                this.state.padding
            } ${(jIndex + 1) * this.state.size.height - this.state.padding}
            L ${
                iIndex * this.state.size.width +
                this.state.sideSize / 2 +
                this.state.padding
            } ${(jIndex + 1) * this.state.size.height - this.state.padding}
            L ${iIndex * this.state.size.width + this.state.padding} ${
            (jIndex + 0.5) * this.state.size.height
        }
            L ${
                iIndex * this.state.size.width +
                this.state.sideSize / 2 +
                this.state.padding
            } ${jIndex * this.state.size.height + this.state.padding}`
            .replace(/[\n\t]/g, " ")
            .replace(/[\t ]+/g, " ");
        return (
            <path
                className="pizza-pepper"
                fill="transparent"
                stroke="green"
                strokeWidth={this.state.strokeWidth}
                strokeLinejoin="round"
                d={pepperD}
                key={`pepper-${iIndex}-${jIndex}`}
                transform={`rotate(${Math.random() * 360}, ${
                    (iIndex + 0.5) * this.state.size.width
                } , ${(jIndex + 0.5) * this.state.size.height} )`}
            ></path>
        );
    }
    render() {
        return (
            <Topping
                name="pepper"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default PepperTopping;
