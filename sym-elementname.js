(function (PV) {
    "use strict";

    function symbolVis() { };
    PV.deriveVisualizationFromBase(symbolVis);

    /**
     * Simple extention to show the element name
     * This is usefull to show what assert you are currently looking at.
     */
    var definition = {
        typeName: "elementname",
        visObjectType: symbolVis,
        iconUrl: 'Images/chrome.value.svg',
        datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
        getDefaultConfig: function () {
            return {
                DataShape: 'Value',
                BackgroundColor: 'Lightskyblue',
                FontColor: 'black',
                BorderRadius: 10,
                FontSize: 30,
                ShowPath: false,
                Height: 50,
                Width: 300
            }
        },
        configOptions: function () {
              return [
                  {
                      title: "Edit Text",
                      mode: "format"
                  }
              ];
        }
    }
    symbolVis.prototype.init = function (scope, elem)
    {
        this.onDataUpdate = dataUpdate;
        function dataUpdate(data)
        {
            if (!data) return;
            if (data.Label) {
                scope.Label = data.Label.split("|")[0];
            } 

            if (data.Path) {
                scope.Path = data.Path.split("|")[0];
            } 

        }
    };

    PV.symbolCatalog.register(definition);
})(window.PIVisualization); 
