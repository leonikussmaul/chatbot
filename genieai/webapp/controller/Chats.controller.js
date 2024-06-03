sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataListBinding",
    "../service/NewEntityDialog",
    "sap/ui/base/Event",
    "sap/m/ListItemBase"
],
function (Controller, ODataListBinding, NewEntityDialog, Event, ListItemBase) {
    "use strict";

    return Controller.extend("genieai.controller.Chats", {
        onInit: function () {


         
        
        },

        onAddChat: async function(event) {
            var oView = this.getView();
            var oBinding = oView.byId("chatList").getBinding("items");
        
            // Create a new entry in the list binding
            var oContext = oBinding.create({
                text_chunk: "New Chat"
            });
        
            // Create an instance of the NewEntityDialog
            var oDialog = new NewEntityDialog(oContext, "NewChatDialog", oView);
        
            // Open the dialog and handle the result
            try {
                var oNewContext = await oDialog.open();

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
               oRouter.navTo("chat", {
                    chat: oNewContext.getObject().ID
                });
            } catch (e) {
                oContext.delete("$auto");
            }
        }
        
       
        


    });
});
