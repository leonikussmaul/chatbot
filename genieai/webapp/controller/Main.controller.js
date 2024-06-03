sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("genieai.controller.Main", {
        onInit: function () {


            this.getView().setModel(new sap.ui.model.json.JSONModel({
            }), "chatModel");
        
        },

        onPostMessage: function(oEvent) {
            var oChatModel = this.getView().getModel("chatModel");
            var oInput = oChatModel.getProperty("/userInput");
        
            var oModel = this.getView().getModel();
            //test
        
            // Create a binding context for the new entry
            var oListBinding = oModel.bindList("/chat");
            var oContext = oListBinding.create(oInput);
        
            // Use submitBatch to send the request
            oModel.submitBatch("myBatchGroupId").then(function() {
                sap.m.MessageToast.show("New chat posted!");
            }).catch(function(oError) {
                var sMessage = JSON.parse(oError.responseText).error.message.value;
                sap.m.MessageBox.error(sMessage);
            });
        }
        


    });
});
