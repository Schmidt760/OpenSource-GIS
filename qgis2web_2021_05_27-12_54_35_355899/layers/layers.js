var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_U5_Haltestellen_edit_1 = new ol.format.GeoJSON();
var features_U5_Haltestellen_edit_1 = format_U5_Haltestellen_edit_1.readFeatures(json_U5_Haltestellen_edit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U5_Haltestellen_edit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U5_Haltestellen_edit_1.addFeatures(features_U5_Haltestellen_edit_1);
var lyr_U5_Haltestellen_edit_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U5_Haltestellen_edit_1, 
                style: style_U5_Haltestellen_edit_1,
                interactive: true,
                title: '<img src="styles/legend/U5_Haltestellen_edit_1.png" /> U5_Haltestellen_edit'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_U5_Haltestellen_edit_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_U5_Haltestellen_edit_1];
lyr_U5_Haltestellen_edit_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'x': 'x', 'y': 'y', });
lyr_U5_Haltestellen_edit_1.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Name': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', });
lyr_U5_Haltestellen_edit_1.set('fieldLabels', {'Name': 'inline label', });
lyr_U5_Haltestellen_edit_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});