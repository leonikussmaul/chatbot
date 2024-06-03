sap.ui.define([
    "sap/m/Dialog",
    "sap/ui/core/Fragment",
    "sap/ui/core/mvc/View",
    "sap/ui/model/odata/v4/Context",
    "sap/ui/model/odata/v4/ODataModel"
  ], function (Dialog, Fragment, View, Context, ODataModel) {
    "use strict";
  
    return class NewEntityDialog {
      constructor(context, fragment, view) {
        this.context = context;
        this.fragment = fragment;
        this.view = view;
        this.resolve = null;
        this.reject = null;
        this.dialog = null;
        this.model = null;
      }
  
      open() {
        this.model = this.context.getModel();
        
        return new Promise(async (resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
  
          try {
            this.dialog = await Fragment.load({
              id: this.view.createId("newEntityDialog"),
              name: `genieai.view.fragments.${this.fragment}`,
              controller: this
            });
            this.view.addDependent(this.dialog);
            this.dialog.setBindingContext(this.context);
  
            this.context.created().then(() => {
              this.dialog.close();
              this.resolve(this.context);
            }).catch(reject);
  
            this.dialog.open();
          } catch (e) {
            reject(e);
          }
        });
      }
  
      async onCreate() {
        await this.model.submitBatch(this.model.getUpdateGroupId());
      }
  
      onCancel() {
        this.dialog.close();
        this.reject({ error: "User cancelled" });
      }
    };
  });
  