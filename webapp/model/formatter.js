sap.ui.define([

],     
    function(){
        "use strict";
    return {

        delivery: function(sMeasure,iWeight){
            var sResult = "";
            var oResouceBunble = this.getView().getModel("i18n").getResourceBundle();
            if(sMeasure === "G"){
                iWeight = iWeight / 1000;
            }
            if(iWeight <0.5){
              sResult = oResouceBunble.getText("formatterMailDelivery");
            } else if( iWeight < 5 ){
                sResult = oResouceBunble.getText("formatterParcelDelivery");
            } else{
                sResult = oResouceBunble.getText("formatterCarrierDelivery");
            }

            return sResult;
        }

    };
});