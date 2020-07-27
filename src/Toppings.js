import TomatoesTopping from "./components/pizza/TomatoesTopping";
import MushroomsTopping from "./components/pizza/MushroomsTopping";
import PepperTopping from "./components/pizza/PepperTopping";
import OnionTopping from "./components/pizza/OnionTopping";
import MeatTopping from "./components/pizza/MeatTopping";
import SausagesTopping from "./components/pizza/SausagesTopping";
import GreensTopping from "./components/pizza/GreensTopping";
import PepperoniTopping from "./components/pizza/PepperoniTopping";
import OlivesTopping from "./components/pizza/OlivesTopping";
import BaconTopping from "./components/pizza/BaconTopping";
import BBQSauce from "./components/pizza/BBQSauce";
import TomatoSauce from "./components/pizza/TomatoSauce";
import Data from "./data";
import BitList from "js-bit-list";

const ToppingComponents = {
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

const ToppingNames = Object.keys(ToppingComponents);

class ToppingBitList extends BitList {

    constructor(initialValue){
        if(!(initialValue instanceof Object)){
            super(initialValue);
        }else{
            super();
            this.setObject(initialValue);
        }
    }

    setObject(object) {
        return super.setObject(object, ToppingNames);
    }

    toObject() {
        return super.toObject(ToppingNames);
    }
}

class Toppings {
    static components() {
        return ToppingComponents;
    }

    static names() {
        return ToppingNames;
    }

    static humanNames() {
        return Data.toppings;
    }

    static prices() {
        return Data.toppingPrices;
    }

    static empty() {
        let configuration = {};
        for (let key of this.names()) {
            configuration[key] = false;
        }
        return configuration;
    }

    static random() {
        let configuration = {};
        for (let key of this.names()) {
            configuration[key] = Math.random() > 0.5;
        }
        return configuration;
    }

    static description(configuration) {
        if (!configuration || !(configuration instanceof Object)) {
            return "";
        }
        let toppingToDescription = (topping) => Data.toppings[topping];
        return Object.keys(configuration)
            .filter(toppingToDescription)
            .filter((topping) => configuration[topping])
            .map(toppingToDescription)
            .join(", ");
    }

    static configToNumber(config) {
        return new ToppingBitList(config).toNumber();
    }

    static numberToConfig(number) {
        return new ToppingBitList(number).toObject();
    }

    static numberDescription(number) {
        return this.description(this.numberToConfig(number));
    }
}

export default Toppings;
