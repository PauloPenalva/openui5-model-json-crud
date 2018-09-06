sap.ui.define([], function() {
  'use strict';

  /**
   * OpenUI5 library: openui5.model.json.crud
   *
   * @namespace
   * @name openui5.model.json.crud
   * @author Mauricio Lauffer
   * @version 0.0.1
   * @public
   */
  return sap.ui.getCore().initLibrary({
    name: 'openui5.model.json.crud',
    dependencies: [
      'sap.ui.core'
    ],
    controls: [
      'openui5.model.json.crud.CRUDModel'
    ],
    noLibraryCSS: true,
    version: '0.0.1'
  });
});