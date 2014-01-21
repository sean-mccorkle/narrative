(function( $, undefined ) {
    $.KBWidget({
        name: "KBaseGWASPopMaps",
        parent: "kbaseWidget",
        version: "1.0.0",
        options: {
            color: "black",
            width: 1200
        },

        init: function(options) {
            this._super(options);

            var self = this;

            var $mapDiv = $('<div/>')
            .addClass('gmap3')
            .attr({ id: 'test1'});
            self.$elem.append($mapDiv);

            // var $mapDiv2 = $('<input/>').text('Show Map')
            // .attr({type:'button'})
            // .attr({value:'Show Map'})
            // .attr({ id: 'test2'});

            // //self.$elem.append($mapDiv2);



            $('#test1').width('1100px').height('450px').gmap3({
              map:{
                options:{
                  center:[46.578498,2.457275],
                  zoom: 2,
                  mapTypeId: google.maps.MapTypeId.TERRAIN
                }
              },
              marker:{
                values: [
                    [50.9167, 9.57073],
                    [45, 1.3],
                    [40.31, -3.22],
                    [56.68, 16.5],
                    [51.2167, 4.4],
                    [50.3, 5.3],
                    [56.5459, -4.79821],
                    [56.4, 12.9],
                    [56.4, 12.9],
                    [56.4, 12.9],
                    [49, 11],
                    [47.6479, -122.305],
                    [63.324, 18.484],
                    [63.324, 18.484],
                    [41.6833, 2.8],
                    [48, 19],
                    [55.86, 13.51],
                    [49.4013, 16.2326],
                    [49.4013, 16.2326],
                    [49.2, 16.6166],
                    [56.3, 16],
                    [47.5, 7.5],
                    [50.5, 9.5],
                    [41.3599, -122.755],
                    [54.1, -6.2],
                    [40.2077, -8.42639],
                    [50.2981, 8.26607],
                    [29.2144, -13.4811],
                    [49, 0.5],
                    [51.4083, -0.6383],
                    [51.4083, -0.6383],
                    [51.3, 1.1],
                    [40.2077, -8.42639],
                    [38.3, -92.3],
                    [37.3, 15],
                    [15.1111, -23.6167],
                    [49.8724, 8.65081],
                    [41.1876, -87.1923],
                    [55.76, 14.12],
                    [49.4112, 16.2815],
                    [49.4112, 16.2815],
                    [49.1, 16.2],
                    [62.877, 18.177],
                    [62.877, 18.177],
                    [55.949444, -3.160278],
                    [62.9, 18.4],
                    [50.3, 6.3],
                    [50, 8.5],
                    [50.1721, 8.38912],
                    [58.3, 25.3],
                    [63.0165, 18.3174],
                    [63.0165, 18.3174],
                    [40.5, -8.32],
                    [56.06, 14.29],
                    [50.3, 8],
                    [53.5, 10.5],
                    [46.5, 6.08],
                    [50.584, 8.67825],
                    [51.5338, 9.9355],
                    [51.5338, 9.9355],
                    [47, 15.5],
                    [50.3, 8],
                    [49, 2],
                    [49, 15],
                    [52.3721, 9.73569],
                    [48.8, 17.1],
                    [56.1, 13.74],
                    [56.1, 13.74],
                    [51.4083, -0.6383],
                    [51.4083, -0.6383],
                    [52.24, 9.44],
                    [49.33, 15.76],
                    [47.5, 11.5],
                    [50.5, 7.5],
                    [49.2, 16.6166],
                    [49, 15],
                    [47, 14],
                    [35, 77],
                    [55.8, 13.1],
                    [50.0667, 8.5333],
                    [44.46, -85.37],
                    [55.66, 13.4],
                    [41.2816, -86.621],
                    [41.2816, -86.621],
                    [51, 7],
                    [38.48, 68.49],
                    [55.705, 13.196],
                    [49.5, 73.1],
                    [49.5, 73.1],
                    [57, -4],
                    [47.984, 10.8719],
                    [50.3833, 8.0666],
                    [55.9473, 13.821],
                    [56.1494, 15.7884],
                    [50, 19.3],
                    [56.0328, 14.775],
                    [56.0328, 14.775],
                    [52.25, 4.5667],
                    [41.59, 2.49],
                    [48, 0.5],
                    [56.09, 13.9],
                    [62.801, 18.079],
                    [62.801, 18.079],
                    [49.38, 16.81],
                    [49.38, 16.81],
                    [55.71, 13.2],
                    [55.71, 13.2],
                    [46, 3.3],
                    [50.95, 7.5],
                    [44, 12.37],
                    [44.15, 9.65],
                    [49, 9.3],
                    [32.34, 22.46],
                    [50.3, 8.3],
                    [61.36, 34.15],
                    [47.5, 1.5],
                    [50, 10],
                    [51.4083, -0.6383],
                    [51.4083, -0.6383],
                    [51.0581, 13.2995],
                    [52.24, 4.45],
                    [62.9513, 18.2763],
                    [56.1509, 15.7735],
                    [56.1509, 15.7735],
                    [50.3827, 8.01161],
                    [56.4573, 16.1408],
                    [60.25, 18.37],
                    [60.23, 6.13],
                    [38.07, 13.22],
                    [58, 56.3167],
                    [59, 29],
                    [43.7703, 11.2547],
                    [41.5, 2.25],
                    [42.0945, -86.3253],
                    [42.0945, -86.3253],
                    [49.2655, -123.206],
                    [43.25, -6],
                    [49.42, 16.36],
                    [49.42, 16.36],
                    [49.42, 16.36],
                    [46, 3.3],
                    [49, 16],
                    [50.5, 8.5],
                    [50.5, 8.5],
                    [48.5, -1.41],
                    [48.5, -1.41],
                    [55.6942, 13.4504],
                    [42.036, -86.511],
                    [42.036, -86.511],
                    [41.5609, -86.4251],
                    [41.5609, -86.4251],
                    [56.3, 34],
                    [49, 38.28],
                    [56.07, 13.74],
                    [62.69, 18],
                    [49.49, 14.24],
                    [49.1833, 15.8833],
                    [38.3333, -3.53333],
                    [47, -122.2],
                    [38.35, 68.48],
                    [38.35, 68.48],
                    [56.3, 16],
                    [58.4173, 14.1576],
                    [51.4083, -0.6383],
                    [51.4083, -0.6383],
                    [59, 18],
                    [52.6058, 11.8558],
                    [52, 36],
                    [49.5, 14.5],
                    [60, 23.5],
                    [60, 23.5],
                    [55.95, 13.85],
                    [41.7194, 2.93056],
                    [41.7194, 2.93056],
                    [34.43, 136.31],
                    [45, 7.5],
                    [56.06, 13.97],
                    [56.0648, 13.9707],
                    [56.0648, 13.9707],
                    [48.3, 14.45],
                    [48.3, 14.45],
                    [49.3, -123],
                    [55.58, 14.334],
                    [55.58, 14.334],
                    [57.75, 16.6333],
                    [57.7, 15.8],
                    [56.1, 13.9167],
                    [52.3, 21],
                    [41.7302, -71.2825],
                    [47.25, 8.26],
                    [52.3, 30],
                    [52.3, 30],
                    [52.3, 9.3],
                    [37.45, -119.35],
                    [49.3853, 16.2544],
                    [49.3853, 16.2544],
                    [47.3667, 8.55]

                ],
                cluster:{
                  radius: 100,
                    // This style will be used for clusters with more than 0 markers
                    0: {
                        content: '<div class="cluster cluster-1">CLUSTER_COUNT</div>',
                      // content: 'Guruprasad kOra',
                        width: 53,
                        height: 52
                    },
                    // This style will be used for clusters with more than 20 markers
                    20: {
                      content: '<div class="cluster cluster-2">CLUSTER_COUNT</div>',
                        // content: 'gmaptest1 33',
                        width: 56,
                        height: 55
                    },
                    // This style will be used for clusters with more than 50 markers
                    50: {
                        content: '<div class="cluster cluster-3">CLUSTER_COUNT</div>',
                        // content: 'kbase gwas test',
                        width: 66,
                        height: 65
                    }
                },
                events:{
                    click: function(cluster, event, data){
                        console.log(data);
                    }
                }
              }
            });

            $('#test1').gmap3({
              marker:{
                latLng:[50.92104315206032, 2.1936031249999814],
                options:{
                  draggable: true
                }}       
            });




            return this;
            //return this.render();
        },
        render: function(options) {

            
            $('#test1').width('1100px').height('450px').gmap3({
              map:{
                options:{
                  center:[46.578498,2.457275],
                  zoom: 2,
                  mapTypeId: google.maps.MapTypeId.TERRAIN
                }
              },
              marker:{
                values: [
                    [50.9167, 9.57073],
                    [45, 1.3],
                    [40.31, -3.22],
                    [56.68, 16.5],
                    [51.2167, 4.4],
                    [50.3, 5.3],
                    [56.5459, -4.79821],
                    [56.4, 12.9],
                    [56.4, 12.9],
                    [56.4, 12.9],
                    [49, 11],
                    [47.6479, -122.305],
                    [63.324, 18.484],
                    [63.324, 18.484],
                    [41.6833, 2.8],
                    [48, 19],
                    [55.86, 13.51],
                    [49.4013, 16.2326],
                    [49.4013, 16.2326],
                    [49.2, 16.6166],
                    [56.3, 16],
                    [47.5, 7.5],
                    [50.5, 9.5],
                    [41.3599, -122.755],
                    [54.1, -6.2],
                    [40.2077, -8.42639],
                    [50.2981, 8.26607],
                    [29.2144, -13.4811],
                    [49, 0.5],
                    [51.4083, -0.6383],
                    [51.4083, -0.6383],
                    [51.3, 1.1],
                    [40.2077, -8.42639],
                    [38.3, -92.3],
                    [37.3, 15],
                    [15.1111, -23.6167],
                    [49.8724, 8.65081],
                    [41.1876, -87.1923],
                    [55.76, 14.12],
                    [49.4112, 16.2815],
                    [49.4112, 16.2815],
                    [49.1, 16.2],
                    [62.877, 18.177],
                    [62.877, 18.177],
                    [55.949444, -3.160278],
                    [62.9, 18.4],
                    [50.3, 6.3],
                    [50, 8.5],
                    [50.1721, 8.38912],
                    [58.3, 25.3],
                    [63.0165, 18.3174],
                    [63.0165, 18.3174],
                    [40.5, -8.32],
                    [56.06, 14.29],
                    [50.3, 8],
                    [53.5, 10.5],
                    [46.5, 6.08],
                    [50.584, 8.67825],
                    [51.5338, 9.9355],
                    [51.5338, 9.9355],
                    [47, 15.5],
                    [50.3, 8],
                    [49, 2],
                    [49, 15],
                    [52.3721, 9.73569],
                    [48.8, 17.1],
                    [56.1, 13.74],
                    [56.1, 13.74],
                    [51.4083, -0.6383],
                    [51.4083, -0.6383],
                    [52.24, 9.44],
                    [49.33, 15.76],
                    [47.5, 11.5],
                    [50.5, 7.5],
                    [49.2, 16.6166],
                    [49, 15],
                    [47, 14],
                    [35, 77],
                    [55.8, 13.1],
                    [50.0667, 8.5333],
                    [44.46, -85.37],
                    [55.66, 13.4],
                    [41.2816, -86.621],
                    [41.2816, -86.621],
                    [51, 7],
                    [38.48, 68.49],
                    [55.705, 13.196],
                    [49.5, 73.1],
                    [49.5, 73.1],
                    [57, -4],
                    [47.984, 10.8719],
                    [50.3833, 8.0666],
                    [55.9473, 13.821],
                    [56.1494, 15.7884],
                    [50, 19.3],
                    [56.0328, 14.775],
                    [56.0328, 14.775],
                    [52.25, 4.5667],
                    [41.59, 2.49],
                    [48, 0.5],
                    [56.09, 13.9],
                    [62.801, 18.079],
                    [62.801, 18.079],
                    [49.38, 16.81],
                    [49.38, 16.81],
                    [55.71, 13.2],
                    [55.71, 13.2],
                    [46, 3.3],
                    [50.95, 7.5],
                    [44, 12.37],
                    [44.15, 9.65],
                    [49, 9.3],
                    [32.34, 22.46],
                    [50.3, 8.3],
                    [61.36, 34.15],
                    [47.5, 1.5],
                    [50, 10],
                    [51.4083, -0.6383],
                    [51.4083, -0.6383],
                    [51.0581, 13.2995],
                    [52.24, 4.45],
                    [62.9513, 18.2763],
                    [56.1509, 15.7735],
                    [56.1509, 15.7735],
                    [50.3827, 8.01161],
                    [56.4573, 16.1408],
                    [60.25, 18.37],
                    [60.23, 6.13],
                    [38.07, 13.22],
                    [58, 56.3167],
                    [59, 29],
                    [43.7703, 11.2547],
                    [41.5, 2.25],
                    [42.0945, -86.3253],
                    [42.0945, -86.3253],
                    [49.2655, -123.206],
                    [43.25, -6],
                    [49.42, 16.36],
                    [49.42, 16.36],
                    [49.42, 16.36],
                    [46, 3.3],
                    [49, 16],
                    [50.5, 8.5],
                    [50.5, 8.5],
                    [48.5, -1.41],
                    [48.5, -1.41],
                    [55.6942, 13.4504],
                    [42.036, -86.511],
                    [42.036, -86.511],
                    [41.5609, -86.4251],
                    [41.5609, -86.4251],
                    [56.3, 34],
                    [49, 38.28],
                    [56.07, 13.74],
                    [62.69, 18],
                    [49.49, 14.24],
                    [49.1833, 15.8833],
                    [38.3333, -3.53333],
                    [47, -122.2],
                    [38.35, 68.48],
                    [38.35, 68.48],
                    [56.3, 16],
                    [58.4173, 14.1576],
                    [51.4083, -0.6383],
                    [51.4083, -0.6383],
                    [59, 18],
                    [52.6058, 11.8558],
                    [52, 36],
                    [49.5, 14.5],
                    [60, 23.5],
                    [60, 23.5],
                    [55.95, 13.85],
                    [41.7194, 2.93056],
                    [41.7194, 2.93056],
                    [34.43, 136.31],
                    [45, 7.5],
                    [56.06, 13.97],
                    [56.0648, 13.9707],
                    [56.0648, 13.9707],
                    [48.3, 14.45],
                    [48.3, 14.45],
                    [49.3, -123],
                    [55.58, 14.334],
                    [55.58, 14.334],
                    [57.75, 16.6333],
                    [57.7, 15.8],
                    [56.1, 13.9167],
                    [52.3, 21],
                    [41.7302, -71.2825],
                    [47.25, 8.26],
                    [52.3, 30],
                    [52.3, 30],
                    [52.3, 9.3],
                    [37.45, -119.35],
                    [49.3853, 16.2544],
                    [49.3853, 16.2544],
                    [47.3667, 8.55]

                ],
                cluster:{
                  radius: 100,
                    // This style will be used for clusters with more than 0 markers
                    0: {
                      content: '<div class="cluster cluster-1">CLUSTER_COUNT</div>',
                        width: 53,
                        height: 52
                    },
                    // This style will be used for clusters with more than 20 markers
                    20: {
                      content: '<div class="cluster cluster-2">CLUSTER_COUNT</div>',
                        width: 56,
                        height: 55
                    },
                    // This style will be used for clusters with more than 50 markers
                    50: {
                      content: '<div class="cluster cluster-3">CLUSTER_COUNT</div>',
                        width: 66,
                        height: 65
                    }
                }
              }
            });

            $('#test1').gmap3({
              marker:{
                latLng:[50.92104315206032, 2.1936031249999814],
                options:{
                  draggable: true
                }}       
            });

            $('#test1').hide();

            $('#text2').click(function(){
                console.log('console output displayed!')
                alert('clicked');

                $('#text1').show();
            });
            

            return this;
        },
        getData: function() {
            return {
                type:"GwasPopulation",
                id: this.options.objId,
                gwaspopulationId: this.options.gwaspopulationId,
                workspace: this.options.workspaceID,
                title: "GWAS Population Distribution"
            };
        }
    });
})( jQuery )
