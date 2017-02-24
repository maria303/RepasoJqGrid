$(document).ready(function () {

    jQuery.browser = {};
    (function () {
        jQuery.browser.msie = false;
        jQuery.browser.version = 0;
        if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
            jQuery.browser.msie = true;
            jQuery.browser.version = RegExp.$1;
        }
    })();

    jQuery("#tableCategories").jqGrid({
        url: 'php/lista_categorias.php',
        datatype: 'json',
        mtype: 'POST',
        colNames: ['id', 'nombre'],
        colModel: [
            {name: 'id', index: 'id', width: 55},
            {name: 'nombre', index: 'nombre', width: 300}
        ],
        pager: '#paginacioCategories',
        rowNum: 10,
        rowList: [10, 20, 30],
        sortname: 'id',
        viewrecords: true,
        sortorder: "asc",
        caption: "Llista Categories"
    });

    $('#mostrar').click(function () {
        var id = jQuery("#tableCategories").jqGrid('getGridParam', 'selrow');
        if (id) {
            var ret = jQuery("#tableCategories").jqGrid('getRowData', id);
//            alert("id=" + ret.id + " nombre=" + ret.nombre);
            $('#id').val(ret.id);
            $('#nombre').val(ret.nombre);
        } else {
            alert("Please select row");
        }
    });
    
    $('#eliminar').click(function(){
        var id = jQuery("#tableCategories").jqGrid('getGridParam', 'selrow');
        if (id) {
            var ret = jQuery("#tableCategories").jqGrid('getRowData', id);
            idCategoria = ret.id;
            
            $.ajax({
                url: 'php/eliminar.php',
                data: {id : idCategoria},
                type: 'POST',
                success: function(data){
                    $('#tableCategories').trigger('reloadGrid');
                }
            });
        } else {
            alert("Please select row");
        }
    });
    
    $('#actualizar').click(function(){
//        var id = jQuery("#tableCategories").jqGrid('getGridParam', 'selrow');
//        if (id) {
//            var ret = jQuery("#tableCategories").jqGrid('getRowData', id);
//            idCategoria = ret.id;
//            nombreCategoria = ret.nombre;
//            $('#nombre').val(nombreCategoria);
            idCategoria = $('#id').val();
            nombreCategoria = $('#nombre').val();
            
            $.ajax({
                url: 'php/modificar.php',
                data: {id: idCategoria, nombre: nombreCategoria},
                type: 'POST',
                success: function(data){
                    $('#tableCategories').trigger('reloadGrid');
                }
            });
//        } else {
//            alert("Please select row");
//        }
    });
    
    $('#anyadir').click(function(){
        nombreCategoria = $('#nombre').val();
        
        $.ajax({
            url: 'php/anyadir.php',
            data: {nombre: nombreCategoria},
            type: 'POST',
            success: function(data){
                $('#tableCategories').trigger('reloadGrid');
            }
        });
    });
});