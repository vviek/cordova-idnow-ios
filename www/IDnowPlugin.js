var exec = require('cordova/exec');

var idnow = {};
var pluginName = "IDnowPlugin";

idnow.startPhotoIdent = function(companyId, transactionToken, showErrorSuccessScreen, success, error) {
    alert("Method Calling");
    exec(success, error, pluginName, "startPhotoIdent", [companyId, transactionToken, showErrorSuccessScreen]);
};

module.exports = idnow;
