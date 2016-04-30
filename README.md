# Nihaulis - Pinyin tone writers / Escritor de acentos del Pinyin

## English

### What it does

Nihaulis is a very, very simple web app to write Pinyin accents (or tone marks) in every "occidental" device. The idea is to get to the app, write your text in pinyin with the help of the control pannel, and copy the text to paste it wherever you want (email, blog, anywhere). 
It's made with Bootstrap on the CSS, so it's a responsive website for mobile devices. Still, I didn't put a lot of work on it, so that could be improved.

### How it works

When I say "its a very, very simple web app" I actually mean it. Because, it doesn't play with convertions, encoding, ASCII, or anything like that. Its way simplier than that. What it does is... wait for it... Copy the html text on the buttons and add it to the textarea aaaaaaand that's it. Nothing more.

### "Talk is cheap, show me the code!"

```

    var clipboard = new Clipboard('#CopiarTexto'); // I'll talk about the dependencies later on this post :)


    $(".btn-letra").click(function(){ // When clicking wichever button on the control panel...

      var letra = $(this).text();	// Assign the TEXT (NOT THE VALUE) of the button to some var

      $('#CajaTexto').val($('#CajaTexto').val() + letra);  // Then assign that at the end of the textarea
      $("#CajaTexto").focus();	// Focus the textarea. Optional, but its a nice touch to make quicker the writing

    });

	$("#CopiarTexto").click(function(){		// This is a lazy text alert of "success" at copying the text.

	  $("#Respuesta").fadeIn("fast");
	  setTimeout(function(){  $("#Respuesta").fadeOut("slow"); },2500);


	});


	/* What about uppercase or lowercase letters? Well, thats... other group of buttons. Look at the html for that. */

	$("#btn-tipotexto").click(function(){

		$("#Mayus").toggle();
		$("#Minus").toggle();

		$("#CajaTexto").focus();

	});


```

### Anything I should now?

Yup. First of all, it uses jQuery (because I'm to lazy to write raw JS), Bootstrap (because I'm still to lazy to diagram the grid layout and stuff), and Clipboard.js to copy to the Windows clipboard the value of the textarea. Yeah, some of the CSS was writed by me (because I'm lazy but I like pretty things).

Second of all, this was a quick app, writed in spanish and with some lack of features (like a nice alert system).

There's a live demo on [www.nihaulis.hol.es](https://www.nihaulis.hol.es/).

## Criollo

### Qué hace

Nihaulis es una aplicación re simple que hice para poder escribir en Pinyin en cualquier máquina. La idea es entrar a la página, escribir lo que necesitás con ayuda del panel, y copiar el texto donde quieras (mail, blog o lo que sea).
Está hecha con Bootstrap por el CSS, así que va bien para el celu. De todas formas, no le dí mucha bolilla al tema celulares, así que se puede mejorar.

### Cómo funca ésto

Cuando digo que la app es una pavada lo digo en serio. Porque no usa conversiones, codificaciones, ASCII ni nada de éso. Es mucho más simple. Lo que hace es - agarrate Catalina - copiar el texto html de los botones y agregarlo al textarea yyyyy éso solo. Nada más.

### "En la cancha se ven los pingos"

```

    var clipboard = new Clipboard('#CopiarTexto'); // Después te cuento qué onda las dependencias :)


    $(".btn-letra").click(function(){ // Cuando clickeás un botón del panel...

      var letra = $(this).text();	// Asigna el TEXTO (NO EL VALOR) del botón a una variable

      $('#CajaTexto').val($('#CajaTexto').val() + letra);  // Éso lo agrego al final del textarea
      $("#CajaTexto").focus();	// Hago foco en el textarea. Opcional, pero está bueno para escribir más rápido

    });

	$("#CopiarTexto").click(function(){		// Éste es un mensaje de alerta "de éxito" al copiar el código. Sí, así nomás.

	  $("#Respuesta").fadeIn("fast");
	  setTimeout(function(){  $("#Respuesta").fadeOut("slow"); },2500);


	});


	/* ¿Y qué onda con las mayúsculas y las minúsculas? Bueh, éso es... otro grupo de botones. Chusmeá el HTML para éso */)

	$("#btn-tipotexto").click(function(){

		$("#Mayus").toggle();
		$("#Minus").toggle();

		$("#CajaTexto").focus();

	});


```

### ¿Algo que me quieras decir?

Sep. Primero que nada, usa jQuery (porque me daba fiaca escribir JS crudo), Bootstrap (porque también soy vago para diagramar una grilla y otras cosas), y Clipboard.js para copiar al portapapeles de windows el valor del textarea. Si, un poco de CSS igual lo escribí yo (porque soy vago pero me gustan las cosas copadas).

Segundo, ésta app la hice en dos patadas, sin traducciones y le faltan un par de cosas (como un sistema decente de alertas).