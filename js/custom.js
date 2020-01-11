$(document).ready(function () {
    $(".addCF-split").click(function () {
        $("#customFields1").append('<tr class="number-row textboxrow">\n\\n\
                <td class="name_add"><input type="text" class="code" id="customFieldName" name="customFieldName[]" value="" placeholder="name" /></td>\n\\n\\n\
                <td class="email_add"><input type="email" pattern="[0-9]*" class="code" id="customFieldEmail" name="customFieldEmail[]" value="" placeholder="Email Address" /></td>\n\\n\\n\
            <td class="ammount_add"><input type="text" class="ammount" id="customFieldValue" name="customFieldValue[]" value="" placeholder="0" /> </td>\n\\n\\n\
            <td class="tax_add"><div class="td-text"><span class="taxspan">Taxes & fees <i class="fa fa-question-circle" data-toggle="modal" data-target="#instantmodal"></i></span>$2.50</div></td>\n\\n\\n\
            <td><div class="td-text"><span class="totalspan">Total</span>$58.90 <a href="javascript:void(0);" class="remCF"></a></div></td>\n\\n\\n\
</tr>');
        $('.textboxrow').css('display', 'block');
    });
    $("#table_scroll_ymi").on('click', '.remCF', function () {
        //$(this).parent().parent().parent().next('tr').remove();
        $(this).parent().parent().remove();

    });
    $("#customFields1").on('click', '.remCF', function () {
        //$(this).parent().parent().parent().next('tr').remove();
        $(this).parent().parent().parent().parent().remove();
        
    });
    $("#customFields1").on('click', '.resclose', function () {
        //$(this).parent().parent().parent().next('tr').remove();
        $(this).parent().parent().remove();

    });
    $("#table_scroll_ymi").on('click', '.resclose', function () {
        //$(this).parent().parent().parent().next('tr').remove();
        $(this).parent().parent().remove();

    });
});
//$(document).ready(function () {
//    $(".addCF-split").click(function () {
//        $("#customFields").append('<tr  class="number-row" valign="top">\n\\n\
//                <td data-content="Name"><div class="td-text"><input type="text" class="code" id="customFieldName" name="customFieldName[]" value="" placeholder="Enter name" /></div></td>\n\\n\\n\
//                <td data-content="Email"><div class="td-text"><input type="email" class="code" id="customFieldValue" name="customFieldValue[]" value="" placeholder="Enter Email " /></div></td>\n\\n\\n\
//            <td data-content="Quantity"><div class="td-text"><select type="number"  class="code" id="customAmount" name="customAmount[]" value="" placeholder="0.00" ><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select></div></td>\n\\n\\n\
//                <td><div class="td-text"><a href="javascript:void(0);" class="remCF"></a></div></td>\n\\n\\n\
//</tr>');
//    });
//    $("#customFields").on('click', '.remCF', function () {
//        $(this).parent().parent().parent().remove();
//    });
//});
$(".code").focus(function () {
    $('.preview-btn button').css({"background": "#59b795", "color": "#fff"});
});

$(function () {
    var $radioButtons = $('.payment_detail .payment_rd_btn');
    $radioButtons.click(function () {
        $radioButtons.each(function () {
            $(this).parents('.payment_detail').toggleClass('green_border', this.checked);
        });
    });
});
 $( function() {
    $( "#datepicker" ).datepicker();
  } );
// input type number
//
//$('.step-1 .activity-yamingo-table .activity-table-data.activity_input_grp .input-group .input-group-btn .btn-number').click(function (e) {
//    e.preventDefault();
//
//    fieldName = $(this).attr('data-field');
//    type = $(this).attr('data-type');
//    var input = $("input[name='" + fieldName + "']");
//    var currentVal = parseInt(input.val());
//    if (!isNaN(currentVal)) {
//        if (type == 'minus') {
//
//            if (currentVal > input.attr('min')) {
//                input.val(currentVal - 1).change();
//            }
//            if (parseInt(input.val()) == input.attr('min')) {
//                $(this).attr('disabled', true);
//            }
//
//        } else if (type == 'plus') {
//
//            if (currentVal < input.attr('max')) {
//                input.val(currentVal + 1).change();
//            }
//            if (parseInt(input.val()) == input.attr('max')) {
//                $(this).attr('disabled', true);
//            }
//
//        }
//    } else {
//        input.val(0);
//    }
//});
//$('.step-1 .activity-yamingo-table .activity-table-data.activity_input_grp .input-group .input-number').focusin(function () {
//    $(this).data('oldValue', $(this).val());
//});
//$('.step-1 .activity-yamingo-table .activity-table-data.activity_input_grp .input-group .input-number').change(function () {
//
//    minValue = parseInt($(this).attr('min'));
//    maxValue = parseInt($(this).attr('max'));
//    valueCurrent = parseInt($(this).val());
//
//    name = $(this).attr('name');
//    if (valueCurrent >= minValue) {
//        $(".step-1 .activity-yamingo-table .activity-table-data.activity_input_grp .input-group .input-group-btn .btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
//    } else {
//        alert('Sorry, the minimum value was reached');
//        $(this).val($(this).data('oldValue'));
//    }
//    if (valueCurrent <= maxValue) {
//        $(".step-1 .activity-yamingo-table .activity-table-data.activity_input_grp .input-group .input-group-btn .btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
//    } else {
//        alert('Sorry, the maximum value was reached');
//        $(this).val($(this).data('oldValue'));
//    }
//
//
//});
//$(".step-1 .activity-yamingo-table .activity-table-data.activity_input_grp .input-group .input-number").keydown(function (e) {
//    // Allow: backspace, delete, tab, escape, enter and .
//    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
//            // Allow: Ctrl+A
//                    (e.keyCode == 65 && e.ctrlKey === true) ||
//                    // Allow: home, end, left, right
//                            (e.keyCode >= 35 && e.keyCode <= 39)) {
//                // let it happen, don't do anything
//                return;
//            }
//            // Ensure that it is a number and stop the keypress
//            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//                e.preventDefault();
//            }
//        });

 $(function(){
     $('.increment').click(function() {
        var valueElement = $('#'+$(this).siblings('input').attr('id'));

        if($(this).hasClass('plus')) 
        {
           valueElement.val(Math.max(parseInt(valueElement.val()) + 1));
        } 
        else if (valueElement.val() > 0) // Stops the value going into negatives
        {
           valueElement.val(Math.max(parseInt(valueElement.val()) - 1));
        } 

     return false;
});

});