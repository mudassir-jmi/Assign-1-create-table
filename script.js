$(document).ready(function(){
    // Add New Row To Bottom
    $("#add-row-bottom").click(function(){
        var sno = $("#sno").val();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var city = $("#city").val();
        var country = $("#country").val();
        $(".css-serial tbody tr").last().after(
            '<tr class="fadetext">'+
                
                '<td>'+sno+'</td>'+
                '<td>'+firstname+'</td>'+
                '<td>'+lastname+'</td>'+
                '<td>'+city+'</td>'+
                '<td>'+country+'</td>'+
            '</tr>'
        );
    })

    // Add New Row To Top
    $("#add-row-top").click(function(){
        var sno = $("#sno").val();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var city = $("#city").val();
        var country = $("#country").val();
        $(".css-serial tbody tr").first().before(
            '<tr class="fadetext">'+
            
                '<td>'+sno+'</td>'+
                '<td>'+firstname+'</td>'+
                '<td>'+lastname+'</td>'+
                '<td>'+city+'</td>'+
                '<td>'+country+'</td>'+
            '</tr>'
        );
    })

})
