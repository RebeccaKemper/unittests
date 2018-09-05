sap.ui.define([
		"rebecca/kemper/unittests/unittests/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("rebecca.kemper.unittests.unittests.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);