var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Administrasidesa_1 = new ol.format.GeoJSON();
var features_Administrasidesa_1 = format_Administrasidesa_1.readFeatures(json_Administrasidesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasidesa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasidesa_1.addFeatures(features_Administrasidesa_1);
var lyr_Administrasidesa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasidesa_1, 
                style: style_Administrasidesa_1,
                popuplayertitle: "Administrasidesa",
                interactive: true,
                title: '<img src="styles/legend/Administrasidesa_1.png" /> Administrasidesa'
            });
var format_Agriladang_2 = new ol.format.GeoJSON();
var features_Agriladang_2 = format_Agriladang_2.readFeatures(json_Agriladang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agriladang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agriladang_2.addFeatures(features_Agriladang_2);
var lyr_Agriladang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agriladang_2, 
                style: style_Agriladang_2,
                popuplayertitle: "Agriladang",
                interactive: true,
                title: '<img src="styles/legend/Agriladang_2.png" /> Agriladang'
            });
var format_Agrisawah_3 = new ol.format.GeoJSON();
var features_Agrisawah_3 = format_Agrisawah_3.readFeatures(json_Agrisawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agrisawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agrisawah_3.addFeatures(features_Agrisawah_3);
var lyr_Agrisawah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agrisawah_3, 
                style: style_Agrisawah_3,
                popuplayertitle: "Agrisawah",
                interactive: true,
                title: '<img src="styles/legend/Agrisawah_3.png" /> Agrisawah'
            });
var format_Bangunan_4 = new ol.format.GeoJSON();
var features_Bangunan_4 = format_Bangunan_4.readFeatures(json_Bangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_4.addFeatures(features_Bangunan_4);
var lyr_Bangunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_4, 
                style: style_Bangunan_4,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_4.png" /> Bangunan'
            });
var format_Kebun_5 = new ol.format.GeoJSON();
var features_Kebun_5 = format_Kebun_5.readFeatures(json_Kebun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_5.addFeatures(features_Kebun_5);
var lyr_Kebun_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_5, 
                style: style_Kebun_5,
                popuplayertitle: "Kebun",
                interactive: true,
                title: '<img src="styles/legend/Kebun_5.png" /> Kebun'
            });
var format_Nonagrihutankering_6 = new ol.format.GeoJSON();
var features_Nonagrihutankering_6 = format_Nonagrihutankering_6.readFeatures(json_Nonagrihutankering_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nonagrihutankering_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nonagrihutankering_6.addFeatures(features_Nonagrihutankering_6);
var lyr_Nonagrihutankering_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nonagrihutankering_6, 
                style: style_Nonagrihutankering_6,
                popuplayertitle: "Nonagrihutankering",
                interactive: true,
                title: '<img src="styles/legend/Nonagrihutankering_6.png" /> Nonagrihutankering'
            });
var format_Nonagrisemakbelukar_7 = new ol.format.GeoJSON();
var features_Nonagrisemakbelukar_7 = format_Nonagrisemakbelukar_7.readFeatures(json_Nonagrisemakbelukar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nonagrisemakbelukar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nonagrisemakbelukar_7.addFeatures(features_Nonagrisemakbelukar_7);
var lyr_Nonagrisemakbelukar_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nonagrisemakbelukar_7, 
                style: style_Nonagrisemakbelukar_7,
                popuplayertitle: "Nonagrisemakbelukar",
                interactive: true,
                title: '<img src="styles/legend/Nonagrisemakbelukar_7.png" /> Nonagrisemakbelukar'
            });
var format_Pemukiman_8 = new ol.format.GeoJSON();
var features_Pemukiman_8 = format_Pemukiman_8.readFeatures(json_Pemukiman_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_8.addFeatures(features_Pemukiman_8);
var lyr_Pemukiman_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_8, 
                style: style_Pemukiman_8,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_8.png" /> Pemukiman'
            });
var format_Sungai_9 = new ol.format.GeoJSON();
var features_Sungai_9 = format_Sungai_9.readFeatures(json_Sungai_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_9.addFeatures(features_Sungai_9);
var lyr_Sungai_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_9, 
                style: style_Sungai_9,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_9.png" /> Sungai'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Administrasidesa_1.setVisible(true);lyr_Agriladang_2.setVisible(true);lyr_Agrisawah_3.setVisible(true);lyr_Bangunan_4.setVisible(true);lyr_Kebun_5.setVisible(true);lyr_Nonagrihutankering_6.setVisible(true);lyr_Nonagrisemakbelukar_7.setVisible(true);lyr_Pemukiman_8.setVisible(true);lyr_Sungai_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Administrasidesa_1,lyr_Agriladang_2,lyr_Agrisawah_3,lyr_Bangunan_4,lyr_Kebun_5,lyr_Nonagrihutankering_6,lyr_Nonagrisemakbelukar_7,lyr_Pemukiman_8,lyr_Sungai_9];
lyr_Administrasidesa_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Agriladang_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Agrisawah_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Bangunan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Kebun_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Nonagrihutankering_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNSPHN': 'JNSPHN', 'JNSHTN': 'JNSHTN', 'KRPPHN': 'KRPPHN', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'KLSLCO': 'KLSLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TKTHTN': 'TKTHTN', 'TIPHTN': 'TIPHTN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Nonagrisemakbelukar_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSMK': 'JNSSMK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pemukiman_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Administrasidesa_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Agriladang_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Agrisawah_3.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Bangunan_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Kebun_5.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Nonagrihutankering_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNSPHN': '', 'JNSHTN': '', 'KRPPHN': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'KLSLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TKTHTN': '', 'TIPHTN': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Nonagrisemakbelukar_7.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSMK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Pemukiman_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Sungai_9.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Administrasidesa_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Agriladang_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Agrisawah_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Bangunan_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Kebun_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Nonagrihutankering_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNSPHN': 'no label', 'JNSHTN': 'no label', 'KRPPHN': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'KLSLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TKTHTN': 'no label', 'TIPHTN': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Nonagrisemakbelukar_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSMK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pemukiman_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Sungai_9.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - visible with data', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});