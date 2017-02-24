<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>JQGRID </title>
        <link rel="stylesheet" type="text/css" media="screen" href="css/flick/jquery-ui-custom.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="jqgrid/css/ui.jqgrid.css" />

        <script src="js/jquery.min.js" type="text/javascript"></script>
        <script src="js/jquery-ui.min.js" type="text/javascript"></script>
        <script src="jqgrid/js/i18n/grid.locale-es.js" type="text/javascript"></script>
        <script src="jqgrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>
        <script src="js/myJqgrid.js" type="text/javascript"></script>
    </head>
    <body>
        <div>
            <table id="tableCategories"></table>
            <div id="paginacioCategories"></div>
        </div>
        
        <div>
            <a href="#" id="mostrar">Mostrar</a>
            <a href="#" id="eliminar">Eliminar</a>
            <a href="#" id="actualizar">Actualizar</a>
            <a href="#" id="anyadir">Añadir</a>
        </div>
        
        <br></br>
        
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="id" name="id"/>
            <input type="text" id="nombre" name="nombre"/>
        </div>
    </body>
</html>