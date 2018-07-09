(function (PV) {
    "use strict";

    function symbolVis() { };
    PV.deriveVisualizationFromBase(symbolVis);

    /**
     * Simple extension that shows the element name for a attibute
     * This is usefull to use as header when using templates.
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
                BorderWidth: 1,
                BorderType: 'solid',
                BorderColor: 'Black',
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
                  },
                  {
                      // Shortcut to toggle show path
                      title: 'Toggle Show Path',
                      action: function (context) {
                          context.config.ShowPath = !context.config.ShowPath;
                      }
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

    // Register custom editor
    PV.symbolCatalog.register(definition);
})(window.PIVisualization); 
