import React from "react";
import TomatoesTopping from "./TomatoesTopping";
import MushroomsTopping from "./MushroomsTopping";
import PepperTopping from "./PepperTopping";
import OnionTopping from "./OnionTopping";
import MeatTopping from "./MeatTopping";
import SausagesTopping from "./SausagesTopping";
import GreensTopping from "./GreensTopping";
import PepperoniTopping from "./PepperoniTopping";
import OlivesTopping from "./OlivesTopping";
import BaconTopping from "./BaconTopping";
import BBQSauce from "./BBQSauce";
import TomatoSauce from "./TomatoSauce";

class ToppingConfiguration {
    constructor(configuration) {
        const initialConfiguration = configuration || {
            tomatoes: false,
            mushrooms: false,
            pepper: false,
            onion: false,
            bacon: false,
            meat: false,
            sausages: false,
            pepperoni: false,
            olives: false,
            greens: false,
            bbqSauce: false,
            tomatoSauce: false,
        };
        Object.assign(this, initialConfiguration);
        for (let key in initialConfiguration) {
            let capitalizedKey = key[0].toUpperCase() + key.slice(1);
            this.constructor.prototype[`add${capitalizedKey}`] = () => {
                this[key] = true;
                return this;
            };
            this.constructor.prototype[`remove${capitalizedKey}`] = () => {
                this[key] = false;
                return this;
            };
        }
    }
}

class Pizza extends React.Component {
    toppings = {
        tomatoes: TomatoesTopping,
        mushrooms: MushroomsTopping,
        pepper: PepperTopping,
        onion: OnionTopping,
        bacon: BaconTopping,
        meat: MeatTopping,
        sausages: SausagesTopping,
        pepperoni: PepperoniTopping,
        olives: OlivesTopping,
        greens: GreensTopping,
        bbqSauce: BBQSauce,
        tomatoSauce: TomatoSauce,
    };

    constructor(props) {
        super(props);
        let size = parseInt(this.props.size),
            innerRadiusFraction = parseFloat(this.props.innerRadiusFraction);
        if (isNaN(size)) {
            size = 150;
        }
        if (isNaN(innerRadiusFraction)) {
            innerRadiusFraction = 0.9;
        }
        this.state = {
            pizzaColor: "#ffd700",
            pizzaBorderColor: "#ffbc0a",
            size,
            innerRadiusFraction,
            bgColor: this.props.bgColor || "white",
            outerRadius: size / 2,
            innerRadius: (size / 2) * innerRadiusFraction,
            toppings: this.props.toppings,
        };
        this.renderToppings = this.renderToppings.bind(this);
    }

    renderToppings() {
        if (!this.state.toppings) {
            return "";
        }
        return (
            <g className="pizza-toppings">
                {Object.keys(this.state.toppings)
                    .filter((topping) => this.state.toppings[topping])
                    .map((topping) => {
                        if (topping in this.toppings) {
                            const ToppingComponent = this.toppings[topping];
                            return (
                                <ToppingComponent
                                    key={topping}
                                    pizzaSize={this.state.size}
                                    pizzaRadius={this.state.innerRadius}
                                />
                            );
                        }
                        return "";
                    })}
            </g>
        );
    }

    render() {
        const {
            pizzaColor,
            pizzaBorderColor,
            size,
            bgColor,
            outerRadius,
            innerRadius,
        } = this.state;
        const blankSpaceLineWidth = 0.25 * (outerRadius - innerRadius),
            radiusRatio =
                (outerRadius * 2 ** 0.5 - innerRadius) / outerRadius / 2 ** 0.5,
            smallCenteredCoord = outerRadius * radiusRatio,
            bigCenteredCoord = size - smallCenteredCoord,
            blankSpaceLineCoordDelta = blankSpaceLineWidth / 2 ** 0.5,
            smallLeftCoord = smallCenteredCoord - blankSpaceLineCoordDelta,
            smallRightCoord = smallCenteredCoord + blankSpaceLineCoordDelta,
            bigLeftCoord = bigCenteredCoord - blankSpaceLineCoordDelta,
            bigRightCoord = bigCenteredCoord + blankSpaceLineCoordDelta,
            horizontalDivider = `M 0 ${
                outerRadius - blankSpaceLineWidth
            } L ${size} ${outerRadius - blankSpaceLineWidth}
        L ${size} ${outerRadius + blankSpaceLineWidth} L 0 ${
                outerRadius + blankSpaceLineWidth
            } L 0 ${outerRadius - blankSpaceLineWidth}`,
            verticalDivider = `M ${outerRadius - blankSpaceLineWidth} 0 L ${
                outerRadius - blankSpaceLineWidth
            } ${size} 
        L ${outerRadius + blankSpaceLineWidth} ${size} L ${
                outerRadius + blankSpaceLineWidth
            } 0 L ${outerRadius - blankSpaceLineWidth} 0`,
            primaryDiagonalDivider = `M ${bigLeftCoord} ${smallLeftCoord} L ${bigRightCoord} ${smallRightCoord} L ${smallRightCoord} ${bigRightCoord} 
        L ${smallLeftCoord} ${bigLeftCoord} L ${bigLeftCoord} ${smallLeftCoord}`,
            secondaryDiagonalDivider = `M ${bigRightCoord} ${bigLeftCoord} L ${smallRightCoord} ${smallLeftCoord} L ${smallLeftCoord} ${smallRightCoord} L ${bigLeftCoord} ${bigRightCoord} L ${bigRightCoord} ${bigLeftCoord}`;

        return (
            <div>
                <svg className="pizza" width={size} height={size}>
                    <circle
                        className="pizza-basement"
                        r={innerRadius}
                        cx={outerRadius}
                        cy={outerRadius}
                        fill={pizzaColor}
                    ></circle>
                    {this.renderToppings()}
                    <circle
                        className="pizza-border"
                        r={innerRadius - blankSpaceLineWidth * 2}
                        strokeWidth={blankSpaceLineWidth * 4}
                        stroke={pizzaBorderColor}
                        cx={outerRadius}
                        cy={outerRadius}
                        fill="transparent"
                    ></circle>
                    <g className="pizza-dividers">
                        <path
                            className="pizza-divider pizza-divider-horizontal"
                            d={horizontalDivider}
                            fill={bgColor}
                        ></path>
                        <path
                            className="pizza-divider pizza-divider-vertical"
                            d={verticalDivider}
                            fill={bgColor}
                        ></path>
                        <path
                            className="pizza-divider pizza-divider-diagonal"
                            d={primaryDiagonalDivider}
                            fill={bgColor}
                        ></path>
                        <path
                            className="pizza-divider pizza-divider-diagonal"
                            d={secondaryDiagonalDivider}
                            fill={bgColor}
                        ></path>
                    </g>
                    <circle
                        className="pizza-background"
                        r={innerRadius + outerRadius * radiusRatio}
                        strokeWidth={outerRadius * radiusRatio * 2}
                        stroke={bgColor}
                        fill="transparent"
                        cx={outerRadius}
                        cy={outerRadius}
                    ></circle>
                </svg>

                {Object.keys(this.state.toppings).map((topping) => (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "2rem",
                        }}
                        key={`control-${topping}`}
                    >
                        <button
                            disabled={this.state.toppings[topping]}
                            onClick={() => {
                                this.setState({
                                    toppings: Object.assign(
                                        {},
                                        this.state.toppings,
                                        {
                                            [topping]: true,
                                        }
                                    ),
                                });
                            }}
                        >
                            Add {topping}
                        </button>
                        <button
                            disabled={!this.state.toppings[topping]}
                            onClick={() => {
                                this.setState({
                                    toppings: Object.assign(
                                        {},
                                        this.state.toppings,
                                        {
                                            [topping]: false,
                                        }
                                    ),
                                });
                            }}
                        >
                            Remove {topping}
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export { Pizza, ToppingConfiguration };
