export default {
    projectInfo: {
        name: "Project 2",
    },
    newPizzas: [
        {
            toppings: {
                pepperoni: true,
                tomatoSauce: true,
            },
            name: "Пепперони",
            price: 360,
        },
        {
            toppings: {
                onions: true,
                greens: true,
                olives: true,
                pepper: true,
                tomatoes: true,
            },
            name: "Вегетарианская",
            price: 400,
        },
        {
            toppings: {
                meat: true,
                sausages: true,
                bacon: true,
                pepper: true,
                tomatoes: true,
                bbqSauce: true,
            },
            name: "Мясная",
            price: 440,
        },
        {
            toppings: {
                mushrooms: true,
                tomatoes: true,
                greens: true,
                pepper: true,
            },
            name: "Грибная",
            price: 400,
        },
    ],
    advantages: [
        {
            icon: "/images/package.svg",
            title: "Качественные продукты",
            description:
                "Мы используем продукты только от проверенных поставщиков",
        },
        {
            icon: "/images/truck.svg",
            title: "Быстрая доставка",
            description:
                "Доставим Ваш заказ в любую точку зоны доставки за 30 минут",
        },
        {
            icon: "/images/dollar-sign.svg",
            title: "Доступные цены",
            description:
                "Мы не завышаем цены и даем покупателям возможноость собрать пиццу на свой вкус и кошелек",
        },
    ],
};
