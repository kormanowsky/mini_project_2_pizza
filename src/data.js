export default {
  projectInfo: {
    name: "ПиццаМишка",
    address: 'Красногорск, улица Братьев Горожанкиных, дом 13, ТЦ "Строящийся"',
    phone: "+7 495 563 00 00",
    geolocation: [55.831132, 37.294537],
    colors: {
      primary: "#ffd700",
      primaryDark: "#ffbc0a",
      accent: "#F44336",
    },
    donationsTarget: "4100115734204527",
  },
  toppings: {
    tomatoes: "помидоры",
    mushrooms: "грибы",
    pepper: "сладкий перец",
    onion: "лук",
    bacon: "бекон",
    meat: "говядина",
    sausages: "ветчина",
    pepperoni: "пепперони",
    olives: "оливки",
    greens: "зелень",
    bbqSauce: "соус барбекю",
    tomatoSauce: "томатный соус",
  },
  basePrice: 240,
  toppingPrices: {
    tomatoes: 40,
    mushrooms: 50,
    pepper: 40,
    onion: 40,
    bacon: 50,
    meat: 60,
    sausages: 50,
    pepperoni: 50,
    olives: 40,
    greens: 30,
    bbqSauce: 40,
    tomatoSauce: 40,
  },
  pizzas: [
    {
      id: 100000001,
      toppings: {
        tomatoes: true,
        tomatoSauce: true,
        greens: true,
      },
      name: "Маргарита",
      price: 320,
    },
    {
      id: 100000002,
      toppings: {
        pepperoni: true,
        tomatoSauce: true,
      },
      name: "Пепперони",
      price: 360,
    },
    {
      id: 100000003,
      toppings: {
        onion: true,
        greens: true,
        olives: true,
        pepper: true,
        tomatoes: true,
      },
      name: "Вегетарианская",
      price: 400,
    },
    {
      id: 100000004,
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
      id: 100000005,
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
      id: 100000006,
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
      description: "Мы используем продукты только от проверенных поставщиков",
    },
    {
      icon: "/images/truck.svg",
      title: "Быстрая доставка",
      description: "Доставим Ваш заказ в любую точку зоны доставки за 30 минут",
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
  keys: {
    yandexMaps: "4e069f4c-6ebd-4114-a4b1-21bae1ca2aa8",
  },
};
