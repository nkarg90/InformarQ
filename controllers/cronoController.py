# -*- coding: utf-8 -*-
def index(): 
 return dict()

def download_pdf():
	file_id = 3
	import cStringIO 
	import contenttype as c
	s=cStringIO.StringIO() 
	(filename,file) = db.info.archivo.retrieve(db.info[file_id].archivo)
	s.write(file.read())  
	response.headers['Content-Type'] = c.contenttype(filename)
	response.headers['Content-Disposition'] = \
	"attachment; filename=%s" % filename  
	return s.getvalue()
