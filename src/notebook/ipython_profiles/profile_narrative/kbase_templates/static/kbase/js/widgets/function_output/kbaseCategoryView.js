/**
 * KBase widget to display an lists within categories.
 */
(function($, undefined) {
    $.KBWidget({
        name: 'CategoryViewWidget',
        version: '1.0.0',
        options: {
            data: null
        },
        init: function(options) {
            this._super(options);
            return this.render();
        },
        render: function() {
            // creater main comtainer
            var index = Math.floor((Math.random()*1000)+1);
            var main  = $('<div>').attr('id', index);
            // Create accordian
            if (this.options.data !== null) {
                main.addClass('panel-group');
                var i, j;
                for (i = 0; i < this.options.data.length; i++) {
                    var catid = index+'_'+i;
                    var cnum  = this.options.data[i]['items'].length
                    var clist = $('<ul>').addClass('list-group');
                    for (j = 0; j < cnum; j++) {
                        clist.append(
                            $('<li>').addClass('list-group-item').html(this.options.data[i]['items'][j])
                        );
                    }
                    main.append(
                        $('<div>').addClass('panel panel-default')
                        .append(
                            $('<div>').addClass('panel-heading').append(
                                $('<h4>').addClass('panel-title').append(
                                    $('<a>').attr({'data-toggle':'collapse', 'data-parent':'#'+index, 'href':'#'+catid})
                                        .append($('span').addClass('badge').html(cnum))
                                        .html(this.options.data[i]['title'])
                                )
                            )
                        ).append(
                           $('<div>').attr('id', catid).addClass('panel-collapse collapse in').append(
                               $('<div>').addClass('panel-body').append(clist)
                            )
                        )
                    );
                }
            }
            // put container in cell
            this.$elem.append(main);
            return this;
        }
    });
})(jQuery);