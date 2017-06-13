jQuery('document').ready(function() {
	
/*	var 
		currentBackgroundImageNumber = 1,
		timer = setInterval(function() {
			
			currentBackgroundImageNumber++;
			if(currentBackgroundImageNumber > 4) {
				currentBackgroundImageNumber = 1;
			}
			jQuery('body').css('background-image', 'url(' + currentBackgroundImageNumber + '.jpg)');
			
			
		}, 3000);*/
		
	
	var degrees = 0,
	timer = setInterval(function() {
		
		degrees++;
		jQuery('body').css('background-image', 'linear-gradient( ' + degrees + 'deg, #ED1C24, #FCEE21');
		
	}, 60000 / 36);
	
	
	
	
	/*var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
	
	
	
	
	
	
	// jQuery('body').append('<a href="http://googe.com">Главный сайт страны!</a>');
	
	/*var p_cl;
	p_cl = jQuery('p').clone();	
	jQuery('body').append(p_cl); */
	
	/*var d1, t1;
	
	
	
	alert(Math.sqrt((k1 * k1) + (k2 * k2));
	
	
		d1 = prompt('У Вас есть код для доступа к этому сайту?', '');
		
		if (d1 == "да" || d1 == "yes" || d1 == "Да" || d1 == "есть" || d1 == "+") {
		
		t1 = prompt('Ваш код для доступа к сайту: ', '');
		} else {
			alert('Ну.., тогда извините');
			close();
		}
		
		if (t1 == "wp39") {
			
		jQuery('#rz').html('Вы успешно вошли на сайт! Здравствуйте, ' + t2);		
		
		} else if (t1 != "wp39") {
			
			t1 = prompt('Код можно получить у системного администратора. Можете попробывать еще ОДИН раз:', '');
			
		} 
		if (t1 != "wp39")  {
			
			alert('Простите, защита сайта. Повторите снова чуть попозже! :)');
			close();
		}
		
	/*	var v1, v2, v3;
		v1 = jQuery('#val1').val();
		v2 = jQuery('#val2').val();
		v1 = parseInt(v1);
		v2 = parseInt(v2);
		v3 = v1 + v2;
		jQuery('#dv').html(v3);*/
		
		
		
  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
});
	
	
	


