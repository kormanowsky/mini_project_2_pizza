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

const Toppings = {
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

class ToppingConfiguration {
    constructor(configuration) {
        const initialConfiguration = configuration || this.emptyConfiguration();
        Object.assign(this, initialConfiguration);
        for (let key in Toppings) {
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

    emptyConfiguration() {
        let configuration = {};
        for (let key in Toppings) {
            configuration[key] = false;
        }
        return configuration;
    }

    static getRandom() {
        let configuration = {};
        for (let key in Toppings) {
            configuration[key] = Math.random() > 0.5;
        }
        return configuration;
    }
}

class Pizza extends React.Component {
    constructor(props) {
        super(props);
        let size = parseInt(this.props.size);
        // If no size is given or pizza must be responsive, we may set its width to any value.
        // In this case the size of the pizza is managed by CSS properties: width and height.
        if (isNaN(size) || this.props.responsive) {
            size = 150;
        }
        this.state = {
            pizzaColor: "#ffd700",
            pizzaBorderColor: "#ffbc0a",
            size,
            bgColor: this.props.bgColor || "white",
            radius: size / 2,
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
                        if (topping in Toppings) {
                            const ToppingComponent = Toppings[topping];
                            return (
                                <ToppingComponent
                                    key={topping}
                                    pizzaSize={this.state.size}
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
            radius,
        } = this.state;
        const blankSpaceLineWidth = radius / 50,
            radiusRatio = (radius * 2 ** 0.5 - radius) / radius / 2 ** 0.5,
            smallCenteredCoord = radius * radiusRatio,
            bigCenteredCoord = size - smallCenteredCoord,
            blankSpaceLineCoordDelta = blankSpaceLineWidth / 2 ** 0.5,
            smallLeftCoord = smallCenteredCoord - blankSpaceLineCoordDelta,
            smallRightCoord = smallCenteredCoord + blankSpaceLineCoordDelta,
            bigLeftCoord = bigCenteredCoord - blankSpaceLineCoordDelta,
            bigRightCoord = bigCenteredCoord + blankSpaceLineCoordDelta,
            horizontalDivider = `M 0 ${
                radius - blankSpaceLineWidth
            } L ${size} ${radius - blankSpaceLineWidth}
        L ${size} ${radius + blankSpaceLineWidth} L 0 ${
                radius + blankSpaceLineWidth
            } L 0 ${radius - blankSpaceLineWidth}`,
            verticalDivider = `M ${radius - blankSpaceLineWidth} 0 L ${
                radius - blankSpaceLineWidth
            } ${size} 
        L ${radius + blankSpaceLineWidth} ${size} L ${
                radius + blankSpaceLineWidth
            } 0 L ${radius - blankSpaceLineWidth} 0`,
            primaryDiagonalDivider = `M ${bigLeftCoord} ${smallLeftCoord} L ${bigRightCoord} ${smallRightCoord} L ${smallRightCoord} ${bigRightCoord} 
        L ${smallLeftCoord} ${bigLeftCoord} L ${bigLeftCoord} ${smallLeftCoord}`,
            secondaryDiagonalDivider = `M ${bigRightCoord} ${bigLeftCoord} L ${smallRightCoord} ${smallLeftCoord} L ${smallLeftCoord} ${smallRightCoord} L ${bigLeftCoord} ${bigRightCoord} L ${bigRightCoord} ${bigLeftCoord}`;

        return (
            <svg
                className={`pizza${
                    this.props.responsive ? " pizza-responsive" : ""
                }`}
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle
                    className="pizza-basement"
                    r={radius}
                    cx={radius}
                    cy={radius}
                    fill={pizzaColor}
                ></circle>
                {this.renderToppings()}
                <circle
                    className="pizza-border"
                    r={radius - blankSpaceLineWidth * 2}
                    strokeWidth={blankSpaceLineWidth * 4}
                    stroke={pizzaBorderColor}
                    cx={radius}
                    cy={radius}
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
            </svg>
        );
    }
}

export { Pizza, Toppings, ToppingConfiguration };
