sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "wvega/com/zlistaproductos/model/formatter"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, Filter, FilterOperator, formatter) {
        "use strict";


        return Controller.extend("wvega.com.zlistaproductos.controller.App", {
            formatter: formatter,
            onInit: function () {

            },
            onShowHello: function () {
                //show a native JavaScript alert
                // alert("Hello worl");

                // MessageToast.show("Lorem ipsum dolor sit amet, sed diam nonumy\r\n eirmod.");

                //leer msg d i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();

                var sRecipiente = this.getView().getModel("helloPanel").getProperty("/recipiente/name");


                var sMsg = oBundle.getText("helloMessage", [sRecipiente, "bien"]);
                MessageToast.show(sMsg);
            },

            onFilterProducts: function(oEvent){
                var aFilter = [],
                    sQuery = oEvent.getParameter("query"),
                    oList = this.getView().byId("productList"),
                    oBinding = oList.getBinding("items");

                if(sQuery){
                    aFilter.push(new Filter("ProductID",FilterOperator.Contains,sQuery));
                }

                oBinding.filter(aFilter);
           },
           onItemSelected: function(oEvent){
            var oSeletedItem=oEvent.getSource();
            var oContext = oSeletedItem.getBindingContext();
            var sPath = oContext.getPath();
            var oProductDetailPanel = this.byId("productDetailPanel");

            oProductDetailPanel.bindElement(sPath);
            oProductDetailPanel.setVisible(true);
           }
        });
    });
