/**
 * Based on editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB modified for Streaming Ltd 2013
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.HelixMediaPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceHelixMedia', function() {
				// Internal image object like a flash placeholder
				if (ed.dom.getAttrib(ed.selection.getNode(), 'class', '').indexOf('mceItem') != -1)
					return;

				ed.windowManager.open({
					file : url + '/hml.html',
					width : 950 + parseInt(ed.getLang('advimage.delta_width', 0)),
					height : 500 + parseInt(ed.getLang('advimage.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});

                        var xmlhttp=new XMLHttpRequest();
                        var iconurl=url.substring(0, url.indexOf("loader.php"))+"helixmedia/icon.php";
                        xmlhttp.open("GET",iconurl,false);
                        xmlhttp.send();
                        var icon=xmlhttp.responseText; 

			// Register buttons
			ed.addButton('helixmedia', {
				title : 'helixmedia.add_media',
				cmd : 'mceHelixMedia',
                                image : icon
			});
		},

		getInfo : function() {
			return {
				longname : 'Helix Media Resource',
				author : 'Streaming Ltd - based on AdvImage by Moxiecode Systems AB',
				authorurl : 'http://www.streaming.co.uk',
                infourl : 'http://www.streaming.co.uk',
                version : '3.6.0' // Version of AdvImage plugin this plugin is based on.
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('helixmedia', tinymce.plugins.HelixMediaPlugin);
})();