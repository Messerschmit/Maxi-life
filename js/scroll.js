/*Когда scroll position превышает значение 1, - это значит, что пользователь 
прокрутил первоначальное окно просмотра до самого низа, и после этого нам 
нужно задать header’у класс ‘sticky’. В обратном же случае, этот класс нужно удалить.*/
$(function() {
	var $page = $('html, body');
	//выбирает все ссылки с якорями
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1500);//время анимации
		return false;
	});
});