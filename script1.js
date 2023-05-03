var answer =parseInt(Math.random() * 100);

	while(true){
	var userAncwer = prompt("Введите число от 0 до 100, для выхода нажмите q.");
	if (userAncwer == 'q') {
		break;
	}
	userAncwer = parseInt(userAncwer);

	if(userAncwer > answer) {
		alert("Ваш ответ слишком большой");
	}
	else if (userAncwer < answer) {
		alert("Ваш ответ слишком маленький");
	}
	else if (userAncwer == answer) {
		alert("Вы угадали!");
		break;
	}
	else{
		alert("Необходимо ввести число!")
	}