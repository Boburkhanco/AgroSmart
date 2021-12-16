searchBtn.addEventListener('click', e => {
    headerMenu.classList.toggle('dNone')
    searchPart.classList.toggle('dBlock')
})
menuToggler.addEventListener('click', e => {
    menuHamburger.classList.toggle('displayBlock')
    desktopMode.classList.toggle('displayNone')
    mobileMode.classList.toggle('displayBlock')
})

products = [
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Ахрор Ортиков",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 12000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Алишер Узоков",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган анор",
        "cost": 15000,
        "summary": "Анор хакида кискача маълумот   Анор хакида кискача маълумот    Анор хакида кискача маълумот   Анор хакида кискача маълумот  Анор хакида кискача маълумотАнор хакида кискача маълумот   Анор хакида кискача маълумот    Анор хакида кискача маълумот   Анор хакида кискача маълумот  Анор хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Абдулла Курбонов",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 18000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Толиб Алиев",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 23000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Равшан Сайфуллаев",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 7000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Элёр Турдиев",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 10000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Ахрор Ортиков",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 12000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Алишер Узоков",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган анор",
        "cost": 15000,
        "summary": "Анор хакида кискача маълумот   Анор хакида кискача маълумот    Анор хакида кискача маълумот   Анор хакида кискача маълумот  Анор хакида кискача маълумотАнор хакида кискача маълумот   Анор хакида кискача маълумот    Анор хакида кискача маълумот   Анор хакида кискача маълумот  Анор хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Абдулла Курбонов",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 18000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Толиб Алиев",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 23000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Равшан Сайфуллаев",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 7000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    },
    {
        "img": "http://i3.ytimg.com/vi/ygTmV3K57_8/hqdefault.jpg",
        "customer": "Элёр Турдиев",
        "date": "17.11.2021",
        "tel": "+998 (90) 123-45-67",
        "tel2": "+998 (90) 123-67-45",
        "title": "Куёш нурига тЎйинган олма",
        "cost": 10000,
        "summary": "Олма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумотОлма хакида кискача маълумот   Олма хакида кискача маълумот    Олма хакида кискача маълумот   Олма хакида кискача маълумот  Олма хакида кискача маълумот",
        "locationUrl": "https://goo.gl/maps/xy789KXa2UysjaZS8",
        "location": "Фаргона вилояти Ўзбекистон тумани"
    }
]


products.forEach(i => {
    let DIV = document.createElement('div')
    DIV.setAttribute('class', 'products-item') 

    let IMG = document.createElement('div')
    IMG.setAttribute('class', 'products-item__img')

    let SPAN = document.createElement('span')
    SPAN.setAttribute('class', 'products-item__img-bookmark')

    let SPAN2 = document.createElement('span')
    SPAN2.setAttribute('class', 'products-item__img-options')

    let ITEMLINK = document.createElement('a')
    ITEMLINK.setAttribute('class', 'products-item__link')
    ITEMLINK.href = "product.html"

    let DIV2 = document.createElement('div')
    DIV2.setAttribute('class', 'products-item__inner')

    let BTN = document.createElement('button')
    BTN.setAttribute('class','products-item__inner-btn')
    BTN.textContent = i.cost

    let TITLE = document.createElement('h4')
    TITLE.setAttribute('class', 'products-item__inner-title')
    TITLE.textContent = i.title

    let LINK = document.createElement('a')
    LINK.setAttribute('class', 'products-item__inner-link')
    LINK.href = i.locationUrl

    let IMG2 = document.createElement('img')
    IMG2.setAttribute('class','location-logo')

    let locName = document.createElement('p')
    locName.setAttribute('class','location-name')
    locName.textContent = i.location


    DIV.append(IMG, ITEMLINK)
    ITEMLINK.appendChild(DIV2)
    IMG.append(SPAN, SPAN2)
    DIV2.append(BTN, TITLE, LINK)
    LINK.append(IMG2, locName)

    productPageProducts.appendChild(DIV)
  })
  