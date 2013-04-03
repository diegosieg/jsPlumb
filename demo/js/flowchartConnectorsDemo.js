;(function() {

	window.jsPlumbDemo = {
		init : function() {
			jsPlumb.importDefaults({
				DragOptions : { cursor: 'pointer', zIndex:2000 },
				EndpointStyles : [{ fillStyle:'#27AE60' }, { fillStyle:'#2980B9' }],
				Endpoints : [ [ "Dot", {radius:7} ], [ "Dot", { radius:7 } ]],
				ConnectionOverlays : [
					[ "Arrow", { location:0.9 } ],
					[ "Label", {
						location:0.1,
						id:"label",
						cssClass:"aLabel"
					}]
				]
			});

			var connectorPaintStyle = {
				lineWidth:2,
				strokeStyle:"#2ECC71",
				joinstyle:"round",
				outlineColor:"#EAEDEF",
				outlineWidth:7
			},

			connectorHoverStyle = {
				lineWidth:2,
				strokeStyle:"#E74C3C"
			},

			sourceEndpoint = {
				endpoint:"Dot",
				paintStyle:{ fillStyle:"#2980B9",radius:7 },
				isSource:true,
				connector:[ "Flowchart", { stub:[40, 60], gap:10 } ],
				connectorStyle:connectorPaintStyle,
				hoverPaintStyle:connectorHoverStyle,
				connectorHoverStyle:connectorHoverStyle,
                dragOptions:{},
                overlays:[
                	[ "Label", {
	                	location:[0.5, 1.5],
	                	label:"out",
	                	cssClass:"endpointSourceLabel"
	                } ]
                ]
			},

			targetEndpoint = {
				endpoint:"Dot",
				paintStyle:{ fillStyle:"#27AE60",radius:7 },
				hoverPaintStyle:connectorHoverStyle,
				maxConnections:-1,
				dropOptions:{ hoverClass:"hover", activeClass:"active" },
				isTarget:true,
                overlays:[
                	[ "Label", { location:[0.5, -0.5], label:"in", cssClass:"endpointTargetLabel" } ]
                ]
			},
			init = function(connection) {
				connection.getOverlay("label").setLabel(connection.sourceId.substring(6) + "-" + connection.targetId.substring(6));
				connection.bind("editCompleted", function(o) {
					if (typeof console != "undefined")
						console.log("connection edited. path is now ", o.path);
				});
			};

			var allSourceEndpoints = [], allTargetEndpoints = [];
				_addEndpoints = function(toId, sourceAnchors, targetAnchors) {
					for (var i = 0; i < sourceAnchors.length; i++) {
						var sourceUUID = toId + sourceAnchors[i];
						allSourceEndpoints.push(jsPlumb.addEndpoint(toId, sourceEndpoint, { anchor:sourceAnchors[i], uuid:sourceUUID }));
					}
					for (var j = 0; j < targetAnchors.length; j++) {
						var targetUUID = toId + targetAnchors[j];
						allTargetEndpoints.push(jsPlumb.addEndpoint(toId, targetEndpoint, { anchor:targetAnchors[j], uuid:targetUUID }));
					}
				};

			// _addEndpoints("window6", ["TopCenter", "TopLeft", "TopRight", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
			// _addEndpoints("window5", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
			// _addEndpoints("window4", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
			// _addEndpoints("window2", ["LeftMiddle", "BottomCenter"], ["TopCenter", "RightMiddle"]);
			// _addEndpoints("window3", ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
			// _addEndpoints("window1", ["LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter"]);


			jsPlumb.bind("jsPlumbConnection", function(connInfo, originalEvent) {
				init(connInfo.connection);
			});


			jsPlumb.draggable(jsPlumb.getSelector(".window"), { grid: [1, 1] });

			// jsPlumb.connect({uuids:["window2BottomCenter", "window3TopCenter"], editable:true});
			// jsPlumb.connect({uuids:["window2LeftMiddle", "window4LeftMiddle"], editable:true});
			// jsPlumb.connect({uuids:["window4TopCenter", "window4RightMiddle"], editable:true});
			// jsPlumb.connect({uuids:["window3RightMiddle", "window2RightMiddle"], editable:true});
			// jsPlumb.connect({uuids:["window4BottomCenter", "window1TopCenter"], editable:true});
			// jsPlumb.connect({uuids:["window3BottomCenter", "window1BottomCenter"], editable:true});

			jsPlumb.bind("click", function(conn, originalEvent) {
				if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
					jsPlumb.detach(conn);
			});

			jsPlumb.bind("dblclick", function(connInfo, originalEvent) {
				if (confirm("Delete box " + connInfo.sourceId +"?"))
					jsPlumb.detach(connInfo);
			});

			jsPlumb.bind("connectionDrag", function(connection) {
				console.log("connection " + connection.id + " is being dragged");
			});

			jsPlumb.bind("connectionDragStop", function(connection) {
				console.log("connection " + connection.id + " was dragged");
			});
		}
	};
})();