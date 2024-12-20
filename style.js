document.getElementById("bookCarButton").onclick = function() {
    document.getElementById("bookingModal").style.display = "block";
}

document.getElementById("closeModal").onclick = function() {
    document.getElementById("bookingModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("bookingModal")) {
        document.getElementById("bookingModal").style.display = "none";
    }
}

document.getElementById("bookingForm").onsubmit = function(event) {
    event.preventDefault();

    const carType = document.getElementById("car").value;
    let price = 0;

    switch (carType) {
        case "car1":
            price = 800; 
            break;
        case "car2":
            price = 700;
            break;
        case "car3":
            price = 750;
            break;
        case "car4":
            price = 800;
            break;
        case "car5":
            price = 2000; 
            break;
        case "car6":
            price = 2200;
            break;
        case "car7":
            price = 1800;
            break;
        case "car8":
            price = 1900;
            break;
        case "car9":
            price = 4500; 
            break;
        case "car10":
            price = 5000;
            break;
        case "car11":
            price = 4000;
            break;
        case "car12":
            price = 4000;
            break;
        default:
            price = 0;
    }

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const pickupLocation = document.getElementById("pickupLocation").value;
    const pickupTime = document.getElementById("pickupTime").value;

    const totalPrice = price; 

    document.getElementById("price").innerText = `Бронирование для ${name} на ${date} в ${pickupLocation} в ${pickupTime}. Стоимость руб/час: ${totalPrice}`;
};

const economyCars = document.querySelectorAll('.economy');
const comfortCars = document.querySelectorAll('.comfort');
const businessCars = document.querySelectorAll('.business'); 

document.getElementById('econom').addEventListener('click', () => {
    economyCars.forEach(car => car.style.display = 'block');
    comfortCars.forEach(car => car.style.display = 'none');
    businessCars.forEach(car => car.style.display = 'none'); 
});

document.getElementById('comfort').addEventListener('click', () => {
    economyCars.forEach(car => car.style.display = 'none');
    comfortCars.forEach(car => car.style.display = 'block');
    businessCars.forEach(car => car.style.display = 'none'); 
});

document.getElementById('business').addEventListener('click', () => {
    economyCars.forEach(car => car.style.display = 'none');
    comfortCars.forEach(car => car.style.display = 'none');
    businessCars.forEach(car => car.style.display = 'block');
});


economyCars.forEach(car => car.style.display = 'block');

document.getElementById('privacy-policy').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    
    const newWindow = window.open("", "_blank", "width=600,height=400");
    newWindow.document.write(`
        <html>
            <head>
                <title>Политика конфиденциальности</title>
            </head>
            <body>
                <h1>Политика конфиденциальности</h1>
                
                <p>Политика конфиденциальности

<br>Эта Политика конфиденциальности описывает, как мы собираем, используем и защищаем ваши личные данные, когда вы используете наш сайт и сервисы каршеринга. Пожалуйста, внимательно ознакомьтесь с данной политикой, чтобы понимать, как мы обращаемся с вашей информацией.

<br>1. Информация, которую мы собираем

Мы можем собирать следующую информацию о вас:
- Личная информация: имя, фамилия, адрес электронной почты, номер телефона, дата рождения и другая информация, которую вы предоставляете при регистрации или использовании нашего сервиса.
- Информация о поездках: данные о ваших поездках, включая время, дату, продолжительность, маршрут и другую информацию, связанную с использованием автомобиля.
- Финансовая информация: информация о ваших платежах, включая данные кредитной карты и историю транзакций.
- Техническая информация: IP-адрес, тип устройства, браузер, параметры экрана и другие данные, которые собираются автоматически при вашем использовании сайта.

<br>2. Как мы используем вашу информацию

Мы используем собранную информацию для следующих целей:
- Предоставление услуг каршеринга, включая бронирование, оплату и управление поездками.
- Улучшение качества обслуживания и персонализация пользовательского опыта.
- Связь с вами для информирования о новостях, предложениях и обновлениях.
- Обработка ваших запросов и предложений.
- Соблюдение юридических и регуляторных требований.

<br>3. Передача информации

Мы не продаем и не сдаем в аренду вашу личную информацию третьим лицам. Однако мы можем передавать вашу информацию:
- Партнерам и поставщикам услуг, которые помогают нам предоставлять наши сервисы.
- В соответствии с законодательством, если это необходимо для защиты наших прав или для соблюдения юридических требований.

<br>4. Безопасность ваших данных

Мы принимаем все необходимые меры для защиты ваших данных от несанкционированного доступа, изменения и раскрытия. Мы используем современные технологии шифрования и регулярно обновляем наши меры безопасности.

<br>5. Изменения в политике конфиденциальности

Мы оставляем за собой право в любое время вносить изменения в данную Политику конфиденциальности. Все изменения будут опубликованы на этой странице с указанием даты последнего обновления. Рекомендуем вам периодически пересматривать эту политику.

<br>6. Контакты

Если у вас есть вопросы или замечания по поводу нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами по электронной почте: сНамиПоПути@muy.ru или по телефону: +78964637337.</p>
            </body>
        </html>
    `);
    newWindow.document.close();
});


const backToTopBtn = document.getElementById('backToTopBtn');


window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
};


backToTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};