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
                <g className="topping mushrooms" key="mushrooms">
                    {mushrooms.map((_, iIndex, mushrooms) => {
                        return mushrooms[iIndex].map((_, jIndex) => {
                            return (
                                <g
                                    className="mushroom"
                                    key={`mushroom-${iIndex}-${jIndex}`}
                                    transform={`rotate(${
                                        Math.random() * 90 - 45
                                    }, ${
                                        (iIndex + 0.5) * mushroomTotalWidth
                                    } , ${
                                        (jIndex + 0.5) * mushroomTotalHeight
                                    } )`}
                                >
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

        pepper: () => {
            const pepperSideSize = this.state.size / 15,
                pepperWidth = pepperSideSize * 2,
                pepperHeight = pepperSideSize * Math.sqrt(3),
                pepperStrokeWidth = pepperSideSize * 0.2,
                pepperPadding = pepperSideSize,
                pepperTotalWidth = pepperPadding * 2 + pepperWidth,
                pepperTotalHeight = pepperPadding * 2 + pepperHeight;
            let pepper = [];
            for (let i = 0; i < this.state.size / pepperTotalWidth; ++i) {
                pepper.push([]);
                for (let j = 0; j < this.state.size / pepperTotalHeight; ++j) {
                    pepper[i].push(0);
                }
            }
            return (
                <g className="topping pepper" key="pepper">
                    {pepper.map((_, iIndex, pepper) => {
                        return pepper[iIndex].map((_, jIndex) => {
                            let pepperD = `M ${
                                iIndex * pepperTotalWidth + pepperPadding
                            } ${(jIndex + 0.5) * pepperTotalHeight} 
                            L ${
                                iIndex * pepperTotalWidth +
                                pepperSideSize / 2 +
                                pepperPadding
                            } ${jIndex * pepperTotalHeight + pepperPadding}
                            L ${
                                iIndex * pepperTotalWidth +
                                (3 * pepperSideSize) / 2 +
                                pepperPadding
                            } ${jIndex * pepperTotalHeight + pepperPadding}
                            L ${
                                (iIndex + 1) * pepperTotalWidth - pepperPadding
                            } ${(jIndex + 0.5) * pepperTotalHeight}
                            L ${
                                iIndex * pepperTotalWidth +
                                (3 * pepperSideSize) / 2 +
                                pepperPadding
                            } ${
                                (jIndex + 1) * pepperTotalHeight - pepperPadding
                            }
                            L ${
                                iIndex * pepperTotalWidth +
                                pepperSideSize / 2 +
                                pepperPadding
                            } ${
                                (jIndex + 1) * pepperTotalHeight - pepperPadding
                            }
                            L ${iIndex * pepperTotalWidth + pepperPadding} ${
                                (jIndex + 0.5) * pepperTotalHeight
                            }
                            L ${
                                iIndex * pepperTotalWidth +
                                pepperSideSize / 2 +
                                pepperPadding
                            } ${jIndex * pepperTotalHeight + pepperPadding}`
                                .replace(/[\n\t]/g, " ")
                                .replace(/[\t ]+/g, " ");
                            return (
                                <path
                                    className="pizza-pepper"
                                    fill="transparent"
                                    stroke="green"
                                    strokeWidth={pepperStrokeWidth}
                                    strokeLinejoin="round"
                                    d={pepperD}
                                    key={`pepper-${iIndex}-${jIndex}`}
                                    transform={`rotate(${
                                        Math.random() * 360
                                    }, ${(iIndex + 0.5) * pepperTotalWidth} , ${
                                        (jIndex + 0.5) * pepperTotalHeight
                                    } )`}
                                ></path>
                            );
                        });
                    })}
                </g>
            );
        },

        onion: () => {
            const onionRadius = this.state.size / 18,
                onionPadding = onionRadius * 0.5,
                onionTotalSize = onionRadius * 2 + onionPadding * 2,
                onionStrokeWidth = onionRadius / 8;
            let onions = [];
            for (let i = 0; i < this.state.size / onionTotalSize; ++i) {
                onions.push([]);
                for (let j = 0; j < this.state.size / onionTotalSize; ++j) {
                    onions[i].push(0);
                }
            }
            return (
                <g className="topping onion" key="onion">
                    {onions.map((_, iIndex, onions) => {
                        return onions.map((_, jIndex) => {
                            return (
                                <circle
                                    className="onion"
                                    key={`onion-${iIndex}-${jIndex}`}
                                    r={onionRadius}
                                    fill="transparent"
                                    strokeWidth={onionStrokeWidth}
                                    cx={
                                        iIndex * onionTotalSize +
                                        onionPadding +
                                        +onionRadius *
                                            (Math.random() * 0.4 + 0.8) +
                                        onionStrokeWidth / 2
                                    }
                                    cy={
                                        jIndex * onionTotalSize +
                                        onionPadding +
                                        onionStrokeWidth / 2 +
                                        onionRadius *
                                            (Math.random() * 0.4 + 0.8)
                                    }
                                    stroke="#b68cff"
                                ></circle>
                            );
                        });
                    })}
                </g>
            );
        },

        meat: () => {
            const meatSize = this.state.size / 19,
                meatPadding = meatSize,
                meatTotalSize = meatSize + meatPadding * 2,
                meatPieces = [];
            for (let i = 0; i < this.state.size / meatTotalSize; ++i) {
                meatPieces.push([]);
                for (let j = 0; j < this.state.size / meatTotalSize; ++j) {
                    meatPieces[i].push(0);
                }
            }
            return (
                <g key="meat" className="topping meat">
                    {meatPieces.map((_, iIndex, meatPieces) => {
                        return meatPieces[iIndex].map((_, jIndex) => {
                            return (
                                <rect
                                    class="meat-piece"
                                    key={`meat-piece-${iIndex}-${jIndex}`}
                                    fill="brown"
                                    x={iIndex * meatTotalSize + meatPadding}
                                    y={jIndex * meatTotalSize + meatPadding}
                                    width={meatSize}
                                    height={meatSize}
                                    rx={meatSize / 5}
                                    ry={meatSize / 5}
                                    transform={`rotate(${
                                        360 * Math.random()
                                    }, ${
                                        iIndex * meatTotalSize +
                                        meatPadding +
                                        meatSize / 2
                                    }, ${
                                        jIndex * meatTotalSize +
                                        meatPadding +
                                        meatSize / 2
                                    })`}
                                />
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
        );
    }
}

export { Pizza, ToppingConfiguration };
