import React from "react";

class ToppingConfiguration {
    constructor() {
        this.configuration = {
            tomatoes: false,
            mushrooms: false,
            pepper: false,
            onion: false,
            meat: false,
            sausages: false,
            greens: false,
        };
        for (let key in this.configuration) {
            let capitalizedKey = key[0].toUpperCase() + key.slice(1);
            this.constructor.prototype[`add${capitalizedKey}`] = () => {
                this.configuration[key] = true;
                return this;
            };
            this.constructor.prototype[`remove${capitalizedKey}`] = () => {
                this.configuration[key] = false;
                return this;
            };
        }
    }

    getAll() {
        let toppings = [];
        for (let key in this.configuration) {
            if (this.configuration[key]) {
                toppings.push(key);
            }
        }
        return toppings;
    }
}

class Pizza extends React.Component {
    toppingRenderers = {
        tomatoes: () => {
            const tomatoSize = 4,
                tomatoPadding = 8,
                tomatoTotalSize = tomatoSize + 2 * tomatoPadding,
                tomatoes = [];
            for (let i = 0; i < this.state.size / tomatoTotalSize; ++i) {
                tomatoes.push([]);
                for (let j = 0; j < this.state.size / tomatoTotalSize; ++j) {
                    tomatoes[i].push(0);
                }
            }
            return (
                <g className="topping tomatoes">
                    {tomatoes.map((_, iIndex, tomatoes) => {
                        return tomatoes[iIndex].map((_, jIndex, tomatoes) => (
                            <circle
                                className="tomato"
                                r={tomatoSize}
                                cx={(iIndex + 0.5) * tomatoTotalSize}
                                cy={(jIndex + 0.5) * tomatoTotalSize}
                                fill="red"
                            ></circle>
                        ));
                    })}
                </g>
            );
        },
    };

    constructor(props) {
        super(props);
        let size = parseInt(this.props.size),
            innerRadiusFraction = parseInt(this.props.innerRadiusFraction);
        if (isNaN(size)) {
            size = 150;
        }
        if (isNaN(innerRadiusFraction)) {
            innerRadiusFraction = 0.9;
        }
        this.state = {
            pizzaColor: "#ffd700",
            size,
            innerRadiusFraction,
            bgColor: this.props.bgColor || "white",
            outerRadius: size / 2,
            innerRadius: (size / 2) * innerRadiusFraction,
        };
        this.renderToppings = this.renderToppings.bind(this);
    }

    renderToppings() {
        if (!(this.props.toppings instanceof ToppingConfiguration)) {
            return "";
        }
        return (
            <g className="toppings">
                {this.props.toppings.getAll().map((topping) => {
                    if (topping in this.toppingRenderers) {
                        return this.toppingRenderers[topping]();
                    }
                    return "";
                })}
            </g>
        );
    }

    render() {
        const {
            pizzaColor,
            size,
            bgColor,
            outerRadius,
            innerRadius,
        } = this.state;
        const blankSpaceLineWidth = 0.5 * (outerRadius - innerRadius),
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
            <svg width={size} height={size}>
                <circle
                    r={outerRadius}
                    cx={outerRadius}
                    cy={outerRadius}
                    fill={bgColor}
                ></circle>
                <circle
                    r={innerRadius}
                    cx={outerRadius}
                    cy={outerRadius}
                    fill={pizzaColor}
                ></circle>
                {this.renderToppings()}
                <path d={horizontalDivider} fill={bgColor}></path>
                <path d={verticalDivider} fill={bgColor}></path>
                <path d={primaryDiagonalDivider} fill={bgColor}></path>
                <path d={secondaryDiagonalDivider} fill={bgColor}></path>
                <circle
                    r={innerRadius + blankSpaceLineWidth * 5}
                    strokeWidth={blankSpaceLineWidth * 10}
                    stroke={bgColor}
                    fill="transparent"
                    cx={outerRadius}
                    cy={outerRadius}
                ></circle>
            </svg>
        );
    }
}

export { Pizza, ToppingConfiguration };
