$(document).ready(function($) {
    if (document.domain == '10010.com') {
        // 修改默认的抬头校验函数
        _receipt["successInvoiceType"] = function(data) {
            if (data.tzlimitDTO != "" && data.list.length > 0) {
                $(".tips_list").hide();
                $(".fpxq").hide();
                $("#invoiceMessage").empty()
                    .setTemplateElement("reMessageTemplate").processTemplate(
                        data);
                $(".reMessage").show();
                // 发票抬头
                if (true || data.tzlimitDTO.editable == "01" || (data.tzlimitDTO.invoiceType == "1001004" && data.userinfo.usernumber == "11111111111")) { // 可修改 邮箱登录未绑定一卡充必须可修改
                    $("#company").attr({
                        "readonly": false,
                        "unselectable": false,
                        "disabled": false
                    });
                    $("#company").removeAttr("value");
                } else if (data.tzlimitDTO.editable == "02") { // 不可修改
                    $("#company").attr({
                        "value": $("#custName").val(),
                        "readonly": true,
                        "unselectable": "on",
                        "disabled": true
                    });
                    $("#company").css("background-color", "#FFFFFF");
                    //不可修改抬头 要设置可下一步
                    $(".reMessage .rec_btn").css("background-color", "#1ab394")
                    $(".reMessage .rec_btn").unbind("click").click(function() {
                        goNext();
                    });
                } else {

                } // 手机号码限制
                if (data.tzlimitDTO.messageReceivingNum && data.tzlimitDTO.messageReceivingNum == '02') {
                    $("#phoneNum").attr("placeholder", "手机号码接收短信");
                } else {
                    $("#phoneNum").attr("placeholder", "仅支持联通号码接收短信");
                }
                if (data.tzlimitDTO.invoiceType == "1001003") { // 营业类
                    // 发票项
                    var paytype = $("#receiptId .dd.on").find(
                        "input[name='paytype']").val();
                    $("#selectid").empty().prepend("<p>" + paytype + "</p>");
                } // 一卡充 添加省份地市
                if (data.tzlimitDTO.invoiceType == "1001004") {
                    if (data.cardList && data.cardList.cardDTO && data.cardList.cardDTO.provinceDTOClientList) {
                        var isflag = false;
                        $(".fpjy_c.wb ul li").each(function(index, el) {
                            if ($(this).val() == data.userinfo.citycode) {
                                // 初始化地市code
                                $("#cityCode").val(data.userinfo.citycode);
                                // 初始化地市name
                                $(".search_up_city3 p").html($(this).text());
                                isflag = true;
                            }
                        });
                        if (!isflag) {
                            // 默认初始化
                            provinceselect();
                        }
                    }
                }
            }
        }
    }
});
