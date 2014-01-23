(function( $, undefined ) {

$.KBWidget({
    name: "kbaseModelMetaNarrative",     
    version: "1.0.0",
    options: {
    	data: null,			// if it's not null it's the main data to show
    	ws_name: null,		// it's used in case data == null
    	job_id: null,		// it's used in case data == null
    	model_id: null		// it's used in case data == null
    },

    glammURL: "http://140.221.84.217:7040/glamm/#",
    glammModelTag: "mod",
    glammWorkspaceTag: "ws",
    wsBrowserURL: "http://narrative.kbase.us/landing/landing-pages/#/cards/models/",
    wsUrl: "http://140.221.84.209:7058/",
    timer: null,

    init: function(options) {
        var self = this;
        this._super(options);
        var container = this.$elem;

        var dataIsReady = function(data) {
        	var table = $('<table/>')
        	.addClass('table table-striped table-bordered')
        	.css({'margin-left': 'auto', 'margin-right': 'auto'});

        	var createTableRow = function(name, value) {
        		return "<tr><td>" + name + "</td><td>" + value + "</td></tr>";
        	};

        	table.append(createTableRow("<b>ID</b>", "<b>" + data[0] + "</b>"));
        	table.append(createTableRow("Genome", data[10].name));
        	table.append(createTableRow("# Genes", data[10].number_genes));
        	table.append(createTableRow("# Compounds", data[10].number_compounds));
        	table.append(createTableRow("# Reactions", data[10].number_reactions));
        	table.append(createTableRow("# Compartments", data[10].number_compartments));
        	//table.append(createTableRow("Workspace", data[7]));

        	container.append(table);

            // removed because these don't seem to work, and views should probably be within the narrartive sidebar -mike
        	//var wsBrowserLink = "<a href='" + self.wsBrowserURL + data[7] + "/" + data[0] + "' target='_blank' class='btn btn-primary' style='text-decoration:none; color: #fff'>View Model Details</a>";
        	//var glammLink = "<a href='" + self.glammURL + self.glammWorkspaceTag + "=" + data[7] + "&" + self.glammModelTag + "=" + data[0] + "' target='_blank' class='btn btn-primary' style='text-decoration:none; color: #fff'>View in GLAMM</a>";
        	
        	//container.append(wsBrowserLink);
        	//container.append(" " + glammLink);
        };
        
    	var data = options.data;
    	if (data) {
    		dataIsReady(data);
    	} else {
            var kbws = new workspaceService(this.wsUrl);
        	var panel = $('<div class="loader-table"/>');
        	container.append(panel);
        	var table = $('<table class="table table-striped table-bordered" \
        			style="margin-left: auto; margin-right: auto;" id="'+pref+'overview-table"/>');
        	panel.append(table);
        	table.append('<tr><td>Job was created with id</td><td>'+options.job_id+'</td></tr>');
        	table.append('<tr><td>Output model will have the id</td><td>'+options.model_id+'</td></tr>');
        	table.append('<tr><td>Current job state is</td><td id="'+pref+'job"></td></tr>');
        	var timeLst = function(event) {
        		kbws.get_jobs({auth: options.token, jobids: [options.job_id]}, function(data) {
        			var status = data[0]['status'];
    				var tdElem = $('#'+pref+'job');
    				tdElem.html(status);
        			if (status === 'done') {
        				clearInterval(self.timer);
        	            kbws.get_object({auth: options.token, workspace: options.ws_name, id: options.model_id, type: 'Model'}, function(ret) {
        	            	$('.loader-table').remove();
        	            	dataIsReady(ret.data);
        	            }, function(data) {
                			alert("Error: " + data.error.message)
        	            });
        			} else {
        				if (status === 'error') {
        					clearInterval(self.timer);
        				}
        			}
        		}, function(data) {
        			alert("Error: " + data.error.message)
        		});
        	};
        	timeLst();
        	self.timer = setInterval(timeLst, 5000);
    	}
        
        return this;

    }  //end init

})
}( jQuery ) );
