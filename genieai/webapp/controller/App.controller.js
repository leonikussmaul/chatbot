

  sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      'sap/m/library',
      "sap/ui/core/Fragment",
      "sap/ui/model/Filter",
      "sap/ui/model/FilterOperator",
      "sap/ui/model/FilterType",
      "sap/base/Log",
      "sap/ui/core/UIComponent",
      "sap/ui/model/json/JSONModel",
      "sap/m/MessageToast",
      'sap/m/MessageBox',
    ],
    function (BaseController, library, Fragment, Filter, FilterOperator, FilterType, Log, UIComponent, JSONModel, MessageToast, MessageBox) {
      "use strict";
  
      return BaseController.extend("genieai.controller.App", {
        //formatter: formatter,
  
        onInit() {
  
          // this.oOwnerComponent = this.getOwnerComponent();
          // this.oRouter = this.oOwnerComponent.getRouter();
          // this.oRouter.attachRouteMatched(this.onRouteMatched, this);
  
        },
  
  
        getRouter: function () {
          return UIComponent.getRouterFor(this);
        },
  
            // onRouteMatched: function (oEvent) {
            //   var sRouteName = oEvent.getParameter("name"),
            //     oArguments = oEvent.getParameter("arguments");
        
            //   // Save the current route name
            //   this.currentRouteName = sRouteName;
            //   this.ID = oArguments.ID;
            // },
        
            // onStateChanged: function (oEvent) {
            //   var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
            //     sLayout = oEvent.getParameter("layout");
        
            //   // Replace the URL with the new layout if a navigation arrow was used
            //   if (bIsNavigationArrow) {
            //     this.oRouter.navTo(this.currentRouteName, {layout: sLayout, ID: this.ID}, true);
            //   }
            // },
        
            // onExit: function () {
            //   this.oRouter.detachRouteMatched(this.onRouteMatched, this);
            // }
  
  
      });
    }
  );
  
  