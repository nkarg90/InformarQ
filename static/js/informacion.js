$(document).ready(function(){
      $('.carousel').carousel();
});

function btn1Click(){
	$("#cardImage").attr("src", "../static/images/urunday.jpg");
	$("#cardTitle").text('Fundación Urunday');
	$("#cardWLink").attr("href", "http://www.fundacionurunday.org/");
	$("#cardLink").text("+Info Fundación");
	$("#cardHtml").html('<h4>Fundación Urunday</h4><p>La Fundación Urunday, establecida en Noviembre de 1989 es la encargada de unir a los escultores del mundo, cobijarlos en nuestras tierras desafiándolos a crear en cada nuevo concurso. Además de esto, la fundación, es la responsable de mantener en óptimas condiciones cada una de las esculturas que hacen de Resistencia <i>El Gran Museo a Cielo Abierto</i>. En su trayectoria podemos resaltar,<b>12 Concursos de Escultura al aire libre entre Nacionales e Internacionales, 8 bienales internacionales con la participación de 50 países y mas de 100 escultores. En Resistencia mas de 400 esculturas emplazadas en espacios públicos</b>, incrementando el patrimonio de la ciudad a mas de <i>600 obras</i>, posicionando a Resistencia en uno de los museos al aire libre <i>más importante del mundo</i>.</p>');
	$("#cardContent").text("Haciendo del ARTE un bien de TODOS");
	$("#cardEffect").attr('class', 'activator animated bounceInLeft');
}

function btn2Click(){
	$("#cardImage").attr("src", "../static/images/card.png");
	$("#cardTitle").text("Bienal 2016");
	$("#cardWLink").attr("href", "http://www.bienaldelchaco.org/");
	$("#cardLink").text("+Info Bienal");
	$("#cardEffect").attr('class', 'activator animated bounceInDown');
	$("#cardHtml").html('<h4>Bienal 2016</h4><p>Los primeros monumentos urbanos(1920) fueron erigidos por la <i>Colectividad Italiana</i>, los cuales tuvieron el carácter recordatorio de las gestas inmigrantes. A partir de 1961, la historia local comenzo a concretarse con monumentos dedicados a próceres argentinos. En 1961, El Fogón de los Arrieros lanzo un <b>"Plan de Embellecimiento"</b>, donde primaba,en cierta forma crear una <i>"Ciudad-Museo"</i>. Desde el Primer Concurso de Escultura en Madera en la Plaza Central, en 1988, hasta las Bienales internacionales en la actualidad, El Gobierno de la Provincia del Chaco y la Fundación Urunday trabajan incansablemente para hacer de cada Bienal una verdadera celebración de la identidad de los chaqueños. La Bienal 2016 convoca a once artistas consagrados internacionalmente, representando a distintos paises del mundo, quienes realizarán a cielo abierto, una escultura inspirandose en el equilibrio. El material a trabajar es el mármol,con el concepto de <i>"Equilibrium"</i> reconocido como  el cobijo de la armonia, el balance.</p><center><video class="responsive-video" controls><source src="../static/video/Bienal2016.mp4" type="video/mp4"></video></center>');
	$("#cardContent").text("El equilibrio es la tensión en reposo, es el resultado sereno, equidistante; es el cobijo de la armonía, es el balance, el dorado punto medio, lo ecuánime, la proporción, el orden; es un estado plácido de la belleza, una regla de la perfección.");
}

function btn3Click(){
	$("#cardImage").attr("src", "../static/images/fondomodif.jpg");
	$("#cardTitle").text("Bienal 2014");
	$("#cardWLink").attr("href", "http://www.bienaldelchaco.org/bienal2014/");
	$("#cardLink").text("+Info Bienal 2014");
	$("#cardEffect").attr('class', 'activator animated bounceInRight');
	$("#cardHtml").html('<h4>Bienal 2014</h4><p>Diez artistas consagrados, representando a sus paises originarios, compitieron realizando una obra original e inédita inspirandose en <i>"Homus Novus"</i>. Este concepto se refiere a una humanidad renovada, que haga de la alegria y de la buena voluntad sus señas de identidad, que enfrente con optimismo y confianza su futuro. El material a trabajar fue acero inoxidable, utilizado por primera vez en la competencia. Los escultores que participaron fueron: <p><div class="row"><div class="col s6"><li><b>Robert Kogel(Alemania)</b></li><li><b>Raúl Oscar Gomez (Argentina)</b></li><li><b>José Baier (Austria)</b></li><li><b>Thierry Ferreira (Francia)</b></li><li><b>Kei Nakamura(Japon)</b></li><li><b>Piotr Twardowski (Polonia)</b></li></div><div class="col s6"><li><b>Hugo Maciel (Portugal)</b></li><li><b>Rubio Harak (Puerto Rico)</b></li><li><b>Gleb Tkachenko (Rusia)</b></li><li><b>Ilker Yardimici (Turquía)</b></li><li><b>Raúl Zorrilla Soto-Percy (Peru)</b></li></div></div><p><center><video class="responsive-video" controls><source src="../static/video/Bienal2014.mp4" type="video/mp4"></video></center>');
	$("#cardContent").text("Es el hombre nuevo, renacido, enfrentando la vida con una vista sensible.");
}
