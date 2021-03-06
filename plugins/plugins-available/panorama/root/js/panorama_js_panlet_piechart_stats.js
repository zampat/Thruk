Ext.define('TP.PanletPieChartHosts', {
    extend: 'TP.PanletPieChart',

    title:  'Hosts',
    height: 200,
    width:  200,
    has_search_button: 'host',
    hideSettingsForm: ['url'],
    initComponent: function() {
        this.callParent();
        this.xdata.url       = 'panorama.cgi?task=hosts_pie';
        this.reloadOnSiteChanges = true;
        TP.addFormFilter(this, this.has_search_button);
    }
});

Ext.define('TP.PanletPieChartServices', {
    extend: 'TP.PanletPieChart',

    title:  'Services',
    height: 200,
    width:  200,
    has_search_button: 'service',
    hideSettingsForm: ['url'],
    initComponent: function() {
        this.callParent();
        this.xdata.url       = 'panorama.cgi?task=services_pie';
        this.reloadOnSiteChanges = true;
        TP.addFormFilter(this, this.has_search_button);
    }
});
