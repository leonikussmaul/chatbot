sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataListBinding",
    "../service/NewEntityDialog",
    "sap/ui/base/Event",
    "sap/m/ListItemBase"
],
function (Controller, ODataListBinding, NewEntityDialog, Event, ListItemBase) {
    "use strict";

    return Controller.extend("genieai.controller.NoChat", {
        onInit: function () {


         
        
        },

        onAddChat: async function(event) {
            // var oView = this.getView();
            // var oBinding = oView.byId("chatList").getBinding("items");
        
            // // Create a new entry in the list binding
            // var oContext = oBinding.create({
            //     model: "gpt-3.5-turbo"
            // });
        
            // // Create an instance of the NewEntityDialog
            // var oDialog = new NewEntityDialog(oContext, "NewChatDialog", oView);
        
            // // Open the dialog and handle the result
            // try {
            //     var oNewContext = await oDialog.open();
            //     this.getRouter().navTo("chat", {
            //         chat: oNewContext.getObject().ID
            //     });
            // } catch (e) {
            //     oContext.delete("$auto");

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        
             oRouter.navTo("chat", {
                    chat: "0fac83c4-e03d-463c-987f-2ff04f75c9ce"
                });
            // }
        }
        
       
        


    });
});
