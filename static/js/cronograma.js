$(document).ready(function() {
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

function clickCalendar() {
  $(".cronograma.contenido").html('<iframe class="goocalendario" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=ai0mvckkfkv1f074r24tcoalpc%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=America%2FArgentina%2FBuenos_Aires" frameborder="0" scrolling="no"></iframe></div>');
  $(".cronograma.titulo").text("Actividades Bienal");
  $(".cronograma.subtitulo").text("Calendario");
  
}

function clickDescription(){
  $(".cronograma.contenido").html('<ul class="collapsible popout" data-collapsible="accordion"><li><div class="collapsible-header"><i class="material-icons">accessibility</i>Escultoricas</div><div class="collapsible-body"><p>El Encuentro de escultores corre paralelo al Centarmen Internacional. Convoca a 9 artistas de Argentina y Latinoamerica que elaboran obras con una amplia libertad de tecnicas y materiales. Encontramos Arte Reciclado, Arte y Naturaleza y Arte con Ceramica.</p></div></li><li><div class="collapsible-header"><i class="material-icons">account_balance</i>Academicas</div><div class="collapsible-body"><p>La Facultad de Artes, Diseño y Ciencias de la Cultura de la UNNE organiza el Primer Congreso Internacional de Artes con el objetivo de crear un espacio academico de intercambio y discusion entre docentes, investigadores, artistas, estudiantes y gestores culturales. Este Primer Congreso tiene como meta fundamental visualizar y fomentar las producciones, generando un impacto en el area academica de las artes.</p></div></li><li><div class="collapsible-header"><i class="material-icons">new_releases</i>Muestras</div><div class="collapsible-body"><p>Son dos las muestras colectivas que se inaguraran en el transcurso de la Bienal 2016. La Asociacion deEscultores Chaqueños reune obras de la mayor parte de sus integrantes, quienes reflejan fielmente sus objetivos desde la fecha de su creacion en Mayo 13 de 1990. Por otra parte la Exposicion de Escultores del Mundo, propone un acercamiento a la obra  produccion de los participantes de la Bienal 2016..</p></div></li><li><div class="collapsible-header"><i class="material-icons">assignment_ind</i>Artes Escenicas</div><div class="collapsible-body"><p>En las Artes Escenicas, encontramos el Teatro El Loro Calabres de Pepe Soriano, el artista presenta sus vivencias de la infancia, la nostalgia, el desarraigo, la locura y la pasion; esta obra estuvo en los escenarios de Argentina desde 1975. En las Exposiciones Escenicas musicales,  encontramos a Sinfonia Chaco, creada en Abril de 1977. Y al Ballet Contemporaneo Chaco, dependiente del Instituto de Cultura, creado en 2009 mediante un Proyecto presentado por Mariela Alarcon. El Coro Qom Chelaalapi (Bandada de Zorzales), nacio junto a la escuela del Bariro Toba el 19 de Marzo de 1962. El Festival Filarmonico Juvenil, busca a traves de sus presentaciones promover la educacion musical integral de adolescentes y jovenes, integrado por grupos musicales, estudiantes y profesores de musica del Chaco y las Provincias de la Region. En las Exposiciones de danza El Ballet Folklorico Nacional ofrece sus funciones con la concepcion artistica de transmitir los mitos, costumbres, historias, leyendas y paisajes del Hombre Argentino. .</p></div></li><li><div class="collapsible-header"><i class="material-icons">record_voice_over</i>Artes Combinadas</div><div class="collapsible-body"><p>Las producciones de los diversos artistas locales e internacionales, fusionan diferentes disciplinas tradicionales, estableciendo de esta forma las multiples modalidades de intercambio.</p></div></li><li><div class="collapsible-header"><i class="material-icons">fitness_center</i>Artesanias</div><div class="collapsible-body"><p>El Encuentro de Artesanos Originarios, es siempre un delicioso bocado en La Bienal. La industria originaria nos lleva al ancestro, donde todo comienza. Son tres los maestros artesanos de las etnias Qom y Moqoit; Enriuque Jose, proveniente del Pueblo Moqui, Sara Ortega y Jessica Chara del Pueblo Qom.</p></div></li></ul>');
  $(".cronograma.titulo").text("Actividades Paralelas Bienal 2016");
  $(".cronograma.subtitulo").text("Descripcion");
 

  $(document).ready(function() {
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});
}