var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_superficie_1 = new ol.format.GeoJSON();
var features_superficie_1 = format_superficie_1.readFeatures(json_superficie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_superficie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_superficie_1.addFeatures(features_superficie_1);
var lyr_superficie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_superficie_1, 
                style: style_superficie_1,
                popuplayertitle: 'superficie',
                interactive: true,
    title: 'superficie<br />\
    <img src="styles/legend/superficie_1_0.png" /> 3338,585614<br />\
    <img src="styles/legend/superficie_1_1.png" /> 3611,720257<br />\
    <img src="styles/legend/superficie_1_2.png" /> 3663,544610<br />\
    <img src="styles/legend/superficie_1_3.png" /> <br />' });
var format_secteurs_2 = new ol.format.GeoJSON();
var features_secteurs_2 = format_secteurs_2.readFeatures(json_secteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteurs_2.addFeatures(features_secteurs_2);
cluster_secteurs_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_secteurs_2
});
var lyr_secteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_secteurs_2, 
                style: style_secteurs_2,
                popuplayertitle: 'secteurs',
                interactive: true,
    title: 'secteurs<br />\
    <img src="styles/legend/secteurs_2_0.png" /> (agricole)<br />\
    <img src="styles/legend/secteurs_2_1.png" /> Commerce <br />\
    <img src="styles/legend/secteurs_2_2.png" /> (peche)<br />\
    <img src="styles/legend/secteurs_2_3.png" /> <br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_superficie_1.setVisible(true);lyr_secteurs_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_superficie_1,lyr_secteurs_2];
lyr_superficie_1.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', 'CODE_INS': 'CODE_INS', 'SCE_SEM': 'SCE_SEM', 'SCE_GEO': 'SCE_GEO', 'MODIF': 'MODIF', 'SURFACE': 'SURFACE', 'ORIGINE': 'ORIGINE', });
lyr_secteurs_2.set('fieldAliases', {'NOM': 'NOM', 'SURFACE': 'SURFACE', 'secteurs': 'Secteurs d\'activités ', });
lyr_superficie_1.set('fieldImages', {'NOM': 'TextEdit', 'TYPE': 'TextEdit', 'CODE_INS': 'Range', 'SCE_SEM': 'TextEdit', 'SCE_GEO': 'TextEdit', 'MODIF': 'DateTime', 'SURFACE': 'TextEdit', 'ORIGINE': 'TextEdit', });
lyr_secteurs_2.set('fieldImages', {'NOM': 'TextEdit', 'SURFACE': 'TextEdit', 'secteurs': 'ValueMap', });
lyr_superficie_1.set('fieldLabels', {'NOM': 'inline label - always visible', 'TYPE': 'no label', 'CODE_INS': 'no label', 'SCE_SEM': 'no label', 'SCE_GEO': 'no label', 'MODIF': 'no label', 'SURFACE': 'inline label - always visible', 'ORIGINE': 'no label', });
lyr_secteurs_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'SURFACE': 'inline label - always visible', 'secteurs': 'no label', });
lyr_secteurs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});