jQuery(document).ready(function() {
  var update_texts = function() {
    $('body').i18n();
  };

  $(document).on('click' , '.lang-switch', function(e){
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    console.log($(this).data('locale'))
    localStorage.setItem("lang", $(this).data('locale'));
    update_texts();});

 //   $('.lang-switch').click(function(e) {
 //     e.preventDefault();
 //     $.i18n().locale = $(this).data('locale');
 //     update_texts();
 //   });

  $.i18n().load({
    'en': {
      'navBar_10': 'GameDev',
      'navBar_21': 'Everydays',
      'navBar_30': 'Studies',

      'index_p1' : 'Digital storytelling.',
      'index_p2' : 'Video game student, and lover of design, music, cinema, 3D art and programming.',
      'index_p3' : 'I believe in the power that the new digital and interactive frontier holds to change lives through unique transcendent and personal experiences.',
      'index_p4' : 'Currently living in Madrid, sfinishing my last year before receiving my undergraduate degree in video game design and development, from design school ESNE.',
      'index_p5' : 'Always looking for opportunities to learn and create new projects.',

      'difPlanet_p1': 'A different planet is the first game I uploaded to the internet. It took me two weeks to create in my spare time for the Beginners Circle Jam #3.',
      'difPlanet_p2': 'All assets were made from the ground up except for the music and some of the sound effects',
      'difPlanet_p3': 'The goal of the game is to find a different planet in a galaxy filled with boredom and contempt.',
      'difPlanet_p4': 'It plays as a plataformer in which you must visit all the planets to open the gate to the next sector, while accounting for the gravity of the different celestial bodies.',
      'difPlanet_a1':'You can play it <a href="https://octoyisus.itch.io/differentplanet" target="_blank"> here</a>.',

      'becomeRed_p1': 'Become Red is a little wave FPS that I developed during a Uni course. The main gimmick is that you can alternate between first person view and a top-down camera. Another cool element of the game is the use of a dynamic music system.',
        'becomeRed_p2':'I poured my heart and soul into this project over the course of 300 hours. All the design, code, and assets have been created by me from the ground up except for the music, animations, and some of the sound effects.',
        'becomeRed_p3':'When to game loads you\'re placed on a sort of hub level, there is a brief tutorial there (just follow the signs).  You\'ll see two portals each one takes you to a different level. In each of them you need to defeat all enemy waves. If at any point you need a reminder of the control scheme or change the configuration just press ESC to pause the game.',
        'becomeRed_a1':'You can play it <a href="https://octoyisus.itch.io/become-red" target="_blank"> here</a>',

        'everydays_h11':'Everydays',
        'everydays_p1':'From January 2020 onward, daily renders, like a discount Beeple.',
        'everydays_p2':'This includes modeling, texturing, material creation, some photogrametry and composition. My software of choice is mainly Blender, but also ZBrush, Photoshop, Substance Painter and Substance Designer.',
        'everydays_p3':'All of them are available on my <a href="https://www.instagram.com/octoyisus/"  target="_blank">Instagram</a>.',

        'studies_h10':'My career in video game design and development:',
        'studies_h11':'First year',
        'studies_h12':'Second year',
        'studies_h13':'Third year',
        'studies_p1':'I\'m currently on my fourth and final year of my undergraduate degree. Here\'s a little something from each year to show for it.',
        'studies_p2':'In the first year I used Windows Forms to create an implementation of the puzzle known as nonogram created by designer Tetsuya Nishio.',
        'studies_p3':'It includes more than 30 different nonograms of different sizes. Inside each puzzle the player must guess which of the cells are part of the drawing and which are not by using the information provided. The drawings are read from .txt during execution. After committing a number of mistakes, depending on the size of the puzzle, the user is forced to restart the puzzle.',
        'studies_p4':'You can download and check the code on <a href="https://github.com/pelayofigaredo/nonogramas" target="_blank">github</a>',
        'studies_p5':'During my second year I discovered the 3D art world and thus I created a sort of walking simulator to showcase my work. Code-wise it has nothing interesting, but it encompasses many of hours of learning and discovery about modeling, texturing, shading and animation.',
        'studies_p6':'The exe can be found on <a href="https://octoyisus.itch.io/museum"  target="_blank"> Itch.io </a>',
        'studies_p7':'My third year was a busy one. The workload was huge, but the results were pretty satisfying. It was also the year I developed <a href="becomeRed.html">Become Red</a>. Codewise it was the year of the AI. I created a bunch of projects during this course, but the most exciting two are the following, both of them use Unity and C#:',
        'studies_p8':'The first one is a simulation of hunter/prey behavior using final state machines. The agents only can access the information picked up by their senses, and the simulation can be configured during execution. The project is available on <a href="https://github.com/pelayofigaredo/hunterprey" target="_blank">github</a>',
        'studies_p9':'The second one is an ecosystem simulator. The animal behavior is also governed by a finite state machine. It also incorporates genetic algorithms, so the creature\'s offspring inherits traits from both parents with a random variation on top. The terrain in which the simulation takes place is procedural generated using Perlin noise. The project is available on <a href="https://github.com/pelayofigaredo/ecosystem" target="_blank">github</a>',
        'studies_p10':'Lastly, I want to show an animation created as an homage/video-clip of a song from one of my favorite bands. The facial animation was done by filming myself singing with tracking dots drawn on my face, and then, tracking their movement and applying it to a 3D model of my face.'
        

      },
    'es': {
      'navBar_10': 'Videojuegos',
      'navBar_21': 'Diarios',
      'navBar_30': 'Estudios',

      'index_p1' : 'Narrativa digital.',
      'index_p2' : 'Estudiante de videojuegos y amante del dise??o, la m??sica, el cine, el arte 3D y la programac??on.',
      'index_p3' : 'Creo en el poder de la nueva frontera digital interactiva para cambiar las vidas de la gente a trav??s de experiencias ??nicas, trascendentales y personales.',
      'index_p4' : 'Actualmente resido en Madrid, donde curso mi ??ltimo a??o del grado de ingenier??a del videojuego en la escuela de dise??o ESNE.',
      'index_p5' : 'Siempre en busca de oportunidades para aprender y crear nuevos proyectos.',

      'difPlanet_p1': 'A different planet es el primer juego que sub?? a internet. Lo cre?? como mi entrada para la Jam "Beginners Circle Jam #3".',
      'difPlanet_p2': 'Todos los elementos han sido creados por m?? desde cero, excepto la m??sica y algunos de los efectos de sonido.',
      'difPlanet_p3': 'El objetivo del juego es encontrar un planeta diferente en una galaxia llena de aburrimiento y homogeneidad.',
      'difPlanet_p4': 'Mec??nicamente, se juega como un plataformas en el que debes visitar todos los planetas de cada nivel para abrir una puerta al siguiente, teniendo en cuenta que tu nave se ver?? afectada por la gravedad de los diferentes cuerpos celestes.',
      'difPlanet_a1':'Puedes jugarlo <a href="https://octoyisus.itch.io/differentplanet" target="_blank"> aqu??</a>.',

        'becomeRed_p1':'Become red es un peque??o FPS de oleadas que desarroll?? como proyecto en la universidad. El principal gancho es que se puede alternar entre la primera persona y una vista cenital en tercera persona. Otra cosa guay es el empleo de un sistema de m??sica din??mica.',
        'becomeRed_p2':'Vert?? sudor y l??grimas en este proyecto durante 300 horas, as?? que todo el dise??o, c??digo y todos los dem??s elementos han sido hechos por m?? desde cero, excepto por la m??sica, animaciones, y alguno de los efectos sonoros.',
        'becomeRed_p3':'Cuando arranca el juego apareces en un nivel de interconexi??n, que funciona como men??. En ??l hay un peque??o tutorial (sigue las instrucciones de los carteles). Ver??s dos portales, cada uno te lleva a un nivel diferente en el que deber??s derrotar a todos los enemigos. Si en alg??n momento necesitas un recordatorio de los controles puedes pausar con ESC.',
        'becomeRed_a1':'Puedes jugarlo <a href="https://octoyisus.itch.io/become-red" target="_blank"> aqu??</a>.',

        'everydays_h11':'Diarios',
        'everydays_p1':'Desde enero del 2020 hasta hoy, un render diario, como un Beeple de bazar.',
        'everydays_p2':'Esto incluye: modelado, texturizado, creaci??n de materiales, algo de fotogrametr??a y composici??n. En cuanto a software, principalmente uso Blender, pero tambi??n ZBrush, Photoshop, Substance Painter y Substance Designer.',
        'everydays_p3':'Todos ellos est??n disponibles en mi <a href="https://www.instagram.com/octoyisus/"  target="_blank">Instagram</a>.',

        'studies_h10':'Mi carrera en dise??o y desarrollo de videojuegos:',
        'studies_h11':'Primero',
        'studies_h12':'Segundo',
        'studies_h13':'Tercero',
        'studies_p1':'Actualmente me encuentro en mi cuarto y ??ltimo a??o de carrera. A continuaci??n quiero mostrar un poco de cada a??o de este viaje',
        'studies_p2':'Durante mi primer a??o, emple?? el sistema de formularios de Windows para crear una implementaci??n del puzle conocido como nonogramas, creado por el dise??ador Tetsuya Nishio.',
        'studies_p3':'Incluye m??s de 30 nonogramas de diferentes tama??os. Dentro de cada puzle el jugador ha de adivinar cu??l de las casillas son parte del dibujo empleando la informaci??n dada. Los dibujos son le??dos desde archivos .txt en tiempo de ejecuci??n. Tras cometer un n??mero m??ximo de errores, que vienen dados por el tama??o del puzle, el jugador habr?? perdido y deber?? reiniciar.',
        'studies_p4':'El c??digo se puede ver y descargar desde <a href="https://github.com/pelayofigaredo/nonogramas" target="_blank">github</a>',
        'studies_p5':'Durante el segundo curso descubr?? el mundo del arte 3D, con lo que cre?? una especie de museo virtual para exponer mis trabajos. En cuanto al c??digo no tiene nada de particular, pero en ??l se ven reflejadas muchas horas de modelado, texturizado, sombreado y animaci??n',
        'studies_p6':'El archivo ejecutable se encuentra en  <a href="https://octoyisus.itch.io/museum"  target="_blank"> Itch.io </a>',
        'studies_p7':'En mi tercer a??o estuve bastante ocupado. La carga de trabajo fue enorme, pero con resultados muy satisfactorios. Tambi??n fu?? el a??o en el que desarroll??  <a href="becomeRed.html">Become Red</a>. En lo referente a la programaci??n, fue el a??o de la IA. Cree unos cuantos proyectos para esa asignatura, empleando Unity y C#, los dos m??s interesantes son los siguientes:',
        'studies_p8':'El primero es una simulaci??n de comportamientos de cazador y presa, empleando m??quinas de estado finito. Los agentes solo pueden acceder a la informaci??n obtenida mediante sus sentidos, y la simulaci??n puede ser configurada en tiempo de ejecuci??n. El proyecto est?? disponible en <a href="https://github.com/pelayofigaredo/hunterprey" target="_blank">github</a>',
        'studies_p9':'El segundo es un simulador de ecosistemas. El comportamiento de los animales tambi??n est?? gobernado por una m??quina de estados finita. Tambi??n emplea algoritmos gen??ticos de forma que la descendencia de las criaturas hereda rasgos de ambos padres, junto con una posibilidad de mutaci??n aleatoria. La simulaci??n transcurre en un terreno que se genera de forma procedural empleando Ruido Perlin. El proyecto est?? disponible en <a href="https://github.com/pelayofigaredo/ecosystem" target="_blank">github</a>',
        'studies_p10':'Por ??ltimo, quiero ense??ar una animaci??n que cre?? como videoclip u homenaje a una canci??n de uno de mis grupos favoritos. La animaci??n facial se cre?? mediante un proceso por el cual me filmaba a m?? mismo cantando, con puntos dibujados en mi cara, para posteriormente trasladar este movimiento a un modelo 3D'
        
       

    }
  });

  //Load selected ln

  var lang = localStorage.getItem("lang");

  if(lang != null){
    $.i18n().locale = lang;
  }

  update_texts();
});
