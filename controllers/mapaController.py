from gluon.serializers import loads_json
	
def index():
	mapas = db().select(db.mapa.ALL)
	return dict(mapa=mapas)

def plano():
	return dict()

def bienal():
	return dict()

def getMarkers():
	mapas = []
	rows = db(db.mapa.id>0).select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infoWindow': { 'content': "<h1>" + row.nombre +"</h1>"+ row.tel +"<p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" },	
		}
		mapas.append(mapa)
	return response.json(mapas)

def getRestaurantes():
	mapas = []
	rows = db(db.mapa.tipo=='Restaurante').select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infoWindow': { 'content': "<h4>" + row.nombre +"</h4>"+ row.tel +"<p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>"},
			'icon':'../static/icons/icon_green32.png',
		}
		mapas.append(mapa)
	return response.json(mapas)

def getServicio():
	mapas = []
	rows = db(db.mapa.tipo=='Estacion de Servicio').select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infoWindow': { 'content': '<h3>' + row.nombre +'</h3>'+ row.tel +'<p>Direccion: '+row.direccion+'</p><p>'+row.descripcion+'</p>' },
			'icon':'../static/icons/icon_pink32.png',
		}
		mapas.append(mapa)
	return response.json(mapas)

def getBares():
	mapas = []
	rows = db(db.mapa.tipo=='Bar').select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infoWindow': { 'content': "<h4>" + row.nombre +"</h4>"+ row.tel +"<p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" },
			'icon':'../static/icons/icon_lightblue32.png',
		}
		mapas.append(mapa)
	return response.json(mapas)

def getTransporte():
	mapas = []
	rows = db(db.mapa.tipo=='Transporte').select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infoWindow': { 'content': "<h4>" + row.nombre +"</h4>"+ row.tel +"<p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" },
		}
		mapas.append(mapa)
	return response.json(mapas)

#Abajo la funcion para descargar PDF
def downloadPlano():
	file_id = 4
	import cStringIO 
	import contenttype as c
	s=cStringIO.StringIO() 
	(filename,file) = db.info.archivo.retrieve(db.info[file_id].archivo)
	s.write(file.read())  
	response.headers['Content-Type'] = c.contenttype(filename)
	response.headers['Content-Disposition'] = \
	"attachment; filename=%s" % filename  
	return s.getvalue()