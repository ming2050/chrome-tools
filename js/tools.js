$(document).ready(function($) {
    // alert("bcd");
    console.log($("#invoiceHeader"));


    $("#invoiceHeader").replaceWith('<input type="text" name="ticket" id="invoiceHeader"/>');

    $("#company").click(function(event) {
        $("#company").removeAttr('readonly');
        $("#company").removeAttr('disable');
    });
    $("#invoiceHeader").click(function(event) {
        // var old = $("#invoiceHeader") = val();
        /* Act on the event */


        json.makeInvoiceInfos = json.makeInvoiceInfos.replace('"invoiceHeader":""', $("#invoiceHeader").val());
        console.log(json, 1);
    });


});
