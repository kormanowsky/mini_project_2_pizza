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
            const tomatoSize = this.state.size / 40,
                tomatoPadding = tomatoSize * 2,
                tomatoTotalSize = tomatoSize + 2 * tomatoPadding,
                tomatoes = [];
            for (let i = 0; i < this.state.size / tomatoTotalSize; ++i) {
                tomatoes.push([]);
                for (let j = 0; j < this.state.size / tomatoTotalSize; ++j) {
                    tomatoes[i].push(0);
                }
            }
            return (
                <g className="topping tomatoes" key="tomatoes">
                    {tomatoes.map((_, iIndex, tomatoes) => {
                        return tomatoes[iIndex].map((_, jIndex, tomatoes) => (
                            <circle
                                key={`tomato-${iIndex}-${jIndex}`}
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
        mushrooms: () => {
            const mushroomWidth = this.state.size / 20,
                mushroomHeight = mushroomWidth * 0.8,
                mushroomPartWidth = mushroomWidth * 0.6,
                mushroomPartHeight = mushroomPartWidth * 0.8,
                mushroomPadding = mushroomWidth * 1.5,
                mushroomTotalWidth = 2 * mushroomPadding + mushroomWidth,
                mushroomTotalHeight =
                    2 * mushroomPadding +
                    mushroomHeight +
                    mushroomPartHeight * 0.25;
            let mushrooms = [];
            for (let i = 0; i < this.state.size / mushroomTotalWidth; ++i) {
                mushrooms.push([]);
                for (
                    let j = 0;
                    j < this.state.size / mushroomTotalHeight;
                    ++j
                ) {
                    mushrooms[i].push(0);
                }
            }
            return (
                <g className="topping mushrooms">
                    {mushrooms.map((_, iIndex, mushrooms) => {
                        return mushrooms[iIndex].map((_, jIndex, mushrooms) => {
                            return (
                                <g className="mushroom">
                                    <ellipse
                                        cx={(iIndex + 0.5) * mushroomTotalWidth}
                                        cy={
                                            (jIndex + 0.25) *
                                            mushroomTotalHeight
                                        }
                                        rx={mushroomWidth}
                                        ry={mushroomHeight}
                                        fill="#aea4a0"
                                    ></ellipse>
                                    <ellipse
                                        cx={(iIndex + 0.5) * mushroomTotalWidth}
                                        cy={
                                            (jIndex + 0.25) *
                                                mushroomTotalHeight +
                                            mushroomPartHeight * 0.75
                                        }
                                        rx={mushroomPartWidth}
                                        ry={mushroomPartHeight}
                                        fill="#938e8c"
                                    ></ellipse>
                                </g>
                            );
                        });
                    })}
                </g>
            );
        },
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
        };
        this.renderToppings = this.renderToppings.bind(this);
    }

    renderToppings() {
        if (!(this.props.toppings instanceof ToppingConfiguration)) {
            return "";
        }
        return (
            <g className="pizza-toppings">
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
            pizzaBorderColor,
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
                    r={innerRadius - blankSpaceLineWidth}
                    strokeWidth={blankSpaceLineWidth * 2}
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
        );
    }
}

export { Pizza, ToppingConfiguration };
