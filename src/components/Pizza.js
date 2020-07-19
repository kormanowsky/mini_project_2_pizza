import React from "react";

class ToppingConfiguration {
    constructor(configuration) {
        const initialConfiguration = configuration || {
            tomatoes: false,
            mushrooms: false,
            pepper: false,
            onion: false,
            meat: false,
            sausages: false,
            greens: false,
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

class Topping extends React.Component {
    constructor(props) {
        super(props);
        this.renderLayer = this.renderLayer.bind(this);
        this.iterator = this.iterator.bind(this);
    }

    *iterator() {
        for (let i = 0; i < this.props.pizzaSize / this.props.size.width; ++i) {
            for (
                let j = 0;
                j < this.props.pizzaSize / this.props.size.height;
                ++j
            ) {
                yield this.props.renderer(i, j);
            }
        }
    }

    renderLayer() {
        return Array.from(this.iterator());
    }

    render() {
        return (
            <g className={`topping ${this.name}`} key={this.name}>
                {this.renderLayer()}
            </g>
        );
    }
}

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
    }
    render() {
        return (
            <Topping
                name="tomatoes"
                pizzaSize={this.props.pizzaSize}
                size={this.state.size}
                renderer={(iIndex, jIndex) => (
                    <circle
                        key={`tomato-${iIndex}-${jIndex}`}
                        className="tomato"
                        r={this.state.tomatoSize}
                        cx={(iIndex + 0.5) * this.state.size.width}
                        cy={(jIndex + 0.5) * this.state.size.height}
                        fill="red"
                    ></circle>
                )}
            />
        );
    }
}

class Pizza extends React.Component {
    *toppingIterator(width, height, renderItem) {
        for (let i = 0; i < this.state.size / width; ++i) {
            for (let j = 0; j < this.state.size / height; ++j) {
                yield renderItem(i, j);
            }
        }
    }

    toppingRenderers = {
        tomatoes: () => {
            return (
                <TomatoesTopping key="tomatoes" pizzaSize={this.state.size} />
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
            return (
                <g className="topping mushrooms" key="mushrooms">
                    {Array.from(
                        this.toppingIterator(
                            mushroomTotalWidth,
                            mushroomTotalHeight,
                            (iIndex, jIndex) => (
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
                            )
                        )
                    )}
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
            return (
                <g className="topping pepper" key="pepper">
                    {Array.from(
                        this.toppingIterator(
                            pepperTotalWidth,
                            pepperTotalHeight,
                            (iIndex, jIndex) => {
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
                                    (iIndex + 1) * pepperTotalWidth -
                                    pepperPadding
                                } ${(jIndex + 0.5) * pepperTotalHeight}
                                L ${
                                    iIndex * pepperTotalWidth +
                                    (3 * pepperSideSize) / 2 +
                                    pepperPadding
                                } ${
                                    (jIndex + 1) * pepperTotalHeight -
                                    pepperPadding
                                }
                                L ${
                                    iIndex * pepperTotalWidth +
                                    pepperSideSize / 2 +
                                    pepperPadding
                                } ${
                                    (jIndex + 1) * pepperTotalHeight -
                                    pepperPadding
                                }
                                L ${
                                    iIndex * pepperTotalWidth + pepperPadding
                                } ${(jIndex + 0.5) * pepperTotalHeight}
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
                                        }, ${
                                            (iIndex + 0.5) * pepperTotalWidth
                                        } , ${
                                            (jIndex + 0.5) * pepperTotalHeight
                                        } )`}
                                    ></path>
                                );
                            }
                        )
                    )}
                </g>
            );
        },

        onion: () => {
            const onionRadius = this.state.size / 18,
                onionPadding = onionRadius * 0.5,
                onionTotalSize = onionRadius * 2 + onionPadding * 2,
                onionStrokeWidth = onionRadius / 8;
            return (
                <g className="topping onion" key="onion">
                    {Array.from(
                        this.toppingIterator(
                            onionTotalSize,
                            onionTotalSize,
                            (iIndex, jIndex) => (
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
                            )
                        )
                    )}
                </g>
            );
        },

        meat: () => {
            const meatSize = this.state.size / 19,
                meatPadding = meatSize,
                meatTotalSize = meatSize + meatPadding * 2;
            return (
                <g key="meat" className="topping meat">
                    {Array.from(
                        this.toppingIterator(
                            meatTotalSize,
                            meatTotalSize,
                            (iIndex, jIndex) => (
                                <rect
                                    className="meat-piece"
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
                            )
                        )
                    )}
                </g>
            );
        },

        sausages: () => {
            const sausageRadius = this.state.size / 21,
                sausagePadding = sausageRadius * 0.5,
                sausageTotalSize = sausageRadius * 2 + sausagePadding * 2;
            return (
                <g className="topping sausages" key="sausages">
                    {Array.from(
                        this.toppingIterator(
                            sausageTotalSize,
                            sausageTotalSize,
                            (iIndex, jIndex) => (
                                <circle
                                    className="sausage"
                                    key={`sausage-${iIndex}-${jIndex}`}
                                    r={sausageRadius}
                                    fill="#ffa8c5"
                                    cx={
                                        iIndex * sausageTotalSize +
                                        sausagePadding +
                                        +sausageRadius *
                                            (Math.random() * 0.4 + 0.8)
                                    }
                                    cy={
                                        jIndex * sausageTotalSize +
                                        sausagePadding +
                                        sausageRadius *
                                            (Math.random() * 0.4 + 0.8)
                                    }
                                ></circle>
                            )
                        )
                    )}
                </g>
            );
        },

        greens: () => {
            const greensLineSize = this.state.size / 25,
                greensSquareSize = greensLineSize * 1.6,
                greensPadding = greensSquareSize / 1.5,
                greensTotalSize = greensPadding * 2 + greensSquareSize;
            return (
                <g key="greens" className="topping greens">
                    {Array.from(
                        this.toppingIterator(
                            greensTotalSize,
                            greensTotalSize,
                            (iIndex, jIndex) => (
                                <path
                                    key={`greens-${iIndex}-${jIndex}`}
                                    className="greens-piece"
                                    d={`M ${
                                        iIndex * greensTotalSize + greensPadding
                                    } ${
                                        (jIndex + 1) * greensTotalSize -
                                        greensPadding
                                    } L ${(iIndex + 0.5) * greensTotalSize} ${
                                        (jIndex + 1) * greensTotalSize -
                                        greensPadding -
                                        greensLineSize * 0.6
                                    } L ${(iIndex + 0.5) * greensTotalSize} ${
                                        jIndex * greensTotalSize + greensPadding
                                    } L ${(iIndex + 0.5) * greensTotalSize} ${
                                        (jIndex + 1) * greensTotalSize -
                                        greensPadding -
                                        greensLineSize * 0.6
                                    } L ${
                                        (iIndex + 1) * greensTotalSize -
                                        greensPadding
                                    } ${
                                        (jIndex + 1) * greensTotalSize -
                                        greensPadding
                                    }`}
                                    fill="transparent"
                                    stroke="#00c400"
                                    strokeWidth={greensSquareSize / 10}
                                    transform={`rotate(${
                                        Math.random() * 360
                                    }, ${(iIndex + 0.5) * greensTotalSize}, ${
                                        (jIndex + 1) * greensTotalSize -
                                        greensPadding -
                                        greensLineSize * 0.6
                                    })`}
                                ></path>
                            )
                        )
                    )}
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
            toppings: this.props.toppings,
        };
        this.renderToppings = this.renderToppings.bind(this);
        this.toppingIterator = this.toppingIterator.bind(this); // Temporary
    }

    renderToppings() {
        if (!this.state.toppings) {
            return "";
        }
        let enabledToppings = [];
        for (let key in this.state.toppings) {
            if (this.state.toppings[key]) {
                enabledToppings.push(key);
            }
        }
        return (
            <g className="pizza-toppings">
                {enabledToppings.map((topping) => {
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
