import React from "react";
import Toppings from "../../Toppings";
import "../../scss/blocks/pizza.scss";

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
    this.getToppings = this.getToppings.bind(this);
    this.renderToppings = this.renderToppings.bind(this);
  }

  getToppings() {
    return Object.keys(this.state.toppings).filter(
      (topping) => this.state.toppings[topping]
    );
  }

  hasToppings() {
    return this.getToppings().length;
  }

  renderToppings() {
    if (!this.hasToppings()) {
      return "";
    }
    return (
      <g className="pizza-toppings">
        {this.getToppings().map((topping) => {
          const ToppingComponents = Toppings.components();
          if (topping in ToppingComponents) {
            const ToppingComponent = ToppingComponents[topping];
            return (
              <ToppingComponent key={topping} pizzaSize={this.state.size} />
            );
          }
          return "";
        })}
      </g>
    );
  }

  render() {
    const { pizzaColor, pizzaBorderColor, size, bgColor, radius } = this.state;
    const blankSpaceLineWidth = radius / 50,
      radiusRatio = (radius * 2 ** 0.5 - radius) / radius / 2 ** 0.5,
      smallCenteredCoord = radius * radiusRatio,
      bigCenteredCoord = size - smallCenteredCoord,
      blankSpaceLineCoordDelta = blankSpaceLineWidth / 2 ** 0.5,
      smallLeftCoord = smallCenteredCoord - blankSpaceLineCoordDelta,
      smallRightCoord = smallCenteredCoord + blankSpaceLineCoordDelta,
      bigLeftCoord = bigCenteredCoord - blankSpaceLineCoordDelta,
      bigRightCoord = bigCenteredCoord + blankSpaceLineCoordDelta,
      horizontalDivider = `M 0 ${radius - blankSpaceLineWidth} L ${size} ${
        radius - blankSpaceLineWidth
      }
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
        className={`pizza${this.props.responsive ? " pizza-responsive" : ""}`}
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

export default Pizza;
