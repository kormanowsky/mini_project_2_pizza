export default {
    projectInfo: {
        name: "ПиццаМишка",
        address: "Красногорск, улица Братьев Горожанкиных, дом 13, ТЦ \"Строящийся\"", 
        phone: "+7 495 563 00 00"
    },
    newPizzas: [
        {
            toppings: {
                tomatoes: true,
                tomatoSauce: true,
                greens: true,
            },
            name: "Маргарита",
            price: 320,
        },
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
        {
            toppings: {
                mushrooms: true,
                tomatoes: true,
                greens: true,
                pepper: true,
                sausages: true,
            },
            name: "Ветчина+Грибы",
            price: 440,
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
    feedbacks: [
        {
            userName: "Ирина",
            date: "17 июля 2020",
            content:
                "Первый раз тут заказывала, сначала сомневалась, но всё привезли быстро. Очень вкусная пицца!",
        },
        {
            userName: "Татьяна",
            date: "15 июля 2020",
            content:
                "Заказывала мясную пиццу для дня рождения дочери. Все были в восторге!",
        },
        {
            userName: "Алексей",
            date: "19 июля 2020",
            content:
                "Я живу далеко от пиццерии, практически на краю зоны доставки, но заказ был доставлен в срок, а пицца была горячей и вкусной. Всем советую!",
        },
        {
            userName: "Иван",
            date: "21 июля 2020",
            content:
                "Очень удобный раздел - конструктор пиццы! Зашел, выбрал то, что нужно, здесь же указана итоговая стоимость пиццы.",
        },
    ],
};
