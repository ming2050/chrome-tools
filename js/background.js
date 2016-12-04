function test() {
    Ntlm.setCredentials('tech', 'mingrui1', 'Rui.9259');
    var url = 'http://attend.oa.bitauto.com/checkList.aspx';

    if (Ntlm.authenticate(url)) {
        var request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send(null);
        // console.log(request.responseText);
        $.parseHtml(request.responseText)
        // => My super secret message stored on server.
    }
    // $.ajax({
    // 	url: 'http://attend.oa.bitauto.com/checkList.aspx',
    // 	type: 'GET',
    // 	dataType: 'json',
    // 	success: function(d){
    // 		alert(d);
    // 	}
    // });

}
