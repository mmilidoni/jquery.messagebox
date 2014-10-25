/**************************************************************************************
 * jquery.messagebox 0.1
 * by Michele Milidoni
 * https://github.com/mmilidoni/jquery.messagebox
 * This project licensed under a Apache 2.0 License.
 **************************************************************************************/

var MESSAGE_INFO = "messagebox-info";
var MESSAGE_WARNING = "messagebox-warning";
var MESSAGE_ERROR = "messagebox-error";
var MESSAGE_CONFIRM = "messagebox-confirm";

(function($) {

    $.infoMessage = function(msg, success, fail) {
        messagebox(msg, MESSAGE_INFO, success, fail);
    };

    $.warningMessage = function(msg, success, fail) {
        messagebox(msg, MESSAGE_WARNING, success, fail);
    };

    $.errorMessage = function(msg, success, fail) {
        messagebox(msg, MESSAGE_ERROR, success, fail);
    };

    $.confirmMessage = function(msg, success, fail) {
        messagebox(msg, MESSAGE_CONFIRM, success, fail);
    };

    messagebox = function(msg, type, success, fail) {
        var btns = {};
        if (!isFunction(success)) {
            success = function() {
            };
        }
        if (isFunction(fail)) {
            btns = {
                Ok: function() {
                    success();
                    $(this).dialog("close");
                },
                Cancel: function() {
                    fail();
                    $(this).dialog("close");
                }
            };
        } else {
            btns = {
                Ok: function() {
                    success();
                    $(this).dialog("close");
                }
            }
        }

        $("#messagebox").remove();
        $("<div id='messagebox'>" + msg + "</div>").appendTo("body");
        $("#messagebox").dialog({
            dialogClass: type,
            buttons: btns,
            modal: true
        });
        $(".ui-dialog-titlebar").hide();
    };

}(jQuery));


function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
