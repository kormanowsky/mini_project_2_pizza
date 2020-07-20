import React from "react";
import Topping from "./Topping";

class BaconTopping extends React.Component {
    constructor(props) {
        super(props);
        const baconHeight = this.props.pizzaSize / 50,
            baconSegmentWidth = baconHeight * 1.5,
            baconPadding = baconHeight * 2,
            baconWidth = baconSegmentWidth * 5,
            baconTotalWidth = baconWidth + baconPadding * 2,
            baconTotalHeight = baconHeight + baconPadding * 2,
            baconStrokeWidth = baconHeight * 1.5;
        this.state = {
            size: { width: baconTotalWidth, height: baconTotalHeight },
            strokeWidth: baconStrokeWidth,
            padding: baconPadding,
            segmentSize: { width: baconSegmentWidth, height: baconHeight },
        };
        this.itemRenderer = this.itemRenderer.bind(this);
    }

    itemRenderer(iIndex, jIndex) {
        return (
            <path
                fill="transparent"
                stroke="#ff5d94"
                strokeWidth={this.state.strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
                d={`M ${iIndex * this.state.size.width + this.state.padding} ${
                    (jIndex + 1) * this.state.size.height - this.state.padding
                }
                L ${
                    iIndex * this.state.size.width +
                    this.state.padding +
                    this.state.segmentSize.width
                } ${jIndex * this.state.size.height + this.state.padding}
                L ${
                    iIndex * this.state.size.width +
                    this.state.padding +
                    2 * this.state.segmentSize.width
                } ${(jIndex + 1) * this.state.size.height - this.state.padding}
                L ${
                    iIndex * this.state.size.width +
                    this.state.padding +
                    3 * this.state.segmentSize.width
                } ${jIndex * this.state.size.height + this.state.padding}
                L ${
                    iIndex * this.state.size.width +
                    this.state.padding +
                    4 * this.state.segmentSize.width
                } ${(jIndex + 1) * this.state.size.height - this.state.padding}
                L ${
                    iIndex * this.state.size.width +
                    this.state.padding +
                    5 * this.state.segmentSize.width
                } ${jIndex * this.state.size.height + this.state.padding}`}
                transform={`rotate(${Math.random() * 90 - 45}, ${
                    iIndex * this.state.size.width +
                    this.state.padding +
                    2.5 * this.state.segmentSize.width
                }, ${(jIndex + 0.5) * this.state.size.height})`}
            ></path>
        );
    }
    render() {
        return (
            <Topping
                name="bacon"
                pizzaSize={this.props.pizzaSize}
                itemSize={this.state.size}
                itemRenderer={this.itemRenderer}
            />
        );
    }
}

export default BaconTopping;
