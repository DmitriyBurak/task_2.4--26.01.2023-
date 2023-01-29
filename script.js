
// task 1

    let rep = 0;
    while (rep < 2){
        console.log('Привет');
        rep++; 
    }

    
    // task 2

    let nums = 1;
    while (nums <= 5){
        console.log(nums);
        nums++; 
    }

    // task 3

    let numbs = 7;
    while (numbs <= 22){
        console.log(numbs);
        numbs++; 
    }

    //task 4

    let obj = {
        Коля: 200,
        Вася: 300,
        Петя: 400
    }

    for (const key in obj) {
        console.log(`${key} - зарплата ${obj[key]} долларов`);     
        }

    // task 5

    let startNum = 1000;
    let n = 0;
    while (startNum >= 50){
        startNum = startNum/2;
        n++;
    }
    console.log('Получилось число ' + startNum + ' за количество итераций, равное ' + n);

    // task 6

    let fr = Number(prompt('Введите число от 1 до 7 для опредедения числа первой пятницы:'));
    for (let day = 1; day <= 31; day++){
        if ( (day-fr) % 7 == 0){
            console.log('Сегодня пяница, ' + day + '-е число. Необходимо подготовить отчет.');
            continue;
        } console.log('Сегодня не пятница');
    }