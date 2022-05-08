var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoDark_1 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HuellaurbanaAo2010_3 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2010_3 = format_HuellaurbanaAo2010_3.readFeatures(json_HuellaurbanaAo2010_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2010_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2010_3.addFeatures(features_HuellaurbanaAo2010_3);
var lyr_HuellaurbanaAo2010_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2010_3, 
                style: style_HuellaurbanaAo2010_3,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2010_3.png" /> Huella urbana. Año 2010 '
            });
var format_HuellaurbanaAo2020_4 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2020_4 = format_HuellaurbanaAo2020_4.readFeatures(json_HuellaurbanaAo2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2020_4.addFeatures(features_HuellaurbanaAo2020_4);
var lyr_HuellaurbanaAo2020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2020_4, 
                style: style_HuellaurbanaAo2020_4,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2020_4.png" /> Huella urbana. Año 2020 '
            });
var format_HuellaurbanaAo2030prediccin_5 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2030prediccin_5 = format_HuellaurbanaAo2030prediccin_5.readFeatures(json_HuellaurbanaAo2030prediccin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2030prediccin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2030prediccin_5.addFeatures(features_HuellaurbanaAo2030prediccin_5);
var lyr_HuellaurbanaAo2030prediccin_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2030prediccin_5, 
                style: style_HuellaurbanaAo2030prediccin_5,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2030prediccin_5.png" /> Huella urbana. Año 2030 (predicción)'
            });
var format_HuellaurbanaAo2040prediccin_6 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2040prediccin_6 = format_HuellaurbanaAo2040prediccin_6.readFeatures(json_HuellaurbanaAo2040prediccin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2040prediccin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2040prediccin_6.addFeatures(features_HuellaurbanaAo2040prediccin_6);
var lyr_HuellaurbanaAo2040prediccin_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2040prediccin_6, 
                style: style_HuellaurbanaAo2040prediccin_6,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2040prediccin_6.png" /> Huella urbana. Año 2040 (predicción)'
            });
var format_HuellaurbanaAo2050prediccin_7 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2050prediccin_7 = format_HuellaurbanaAo2050prediccin_7.readFeatures(json_HuellaurbanaAo2050prediccin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2050prediccin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2050prediccin_7.addFeatures(features_HuellaurbanaAo2050prediccin_7);
var lyr_HuellaurbanaAo2050prediccin_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2050prediccin_7, 
                style: style_HuellaurbanaAo2050prediccin_7,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2050prediccin_7.png" /> Huella urbana. Año 2050 (predicción)'
            });
var format_HuellaurbanaAo2060prediccin_8 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2060prediccin_8 = format_HuellaurbanaAo2060prediccin_8.readFeatures(json_HuellaurbanaAo2060prediccin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2060prediccin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2060prediccin_8.addFeatures(features_HuellaurbanaAo2060prediccin_8);
var lyr_HuellaurbanaAo2060prediccin_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2060prediccin_8, 
                style: style_HuellaurbanaAo2060prediccin_8,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2060prediccin_8.png" /> Huella urbana. Año 2060 (predicción)'
            });
var format_OTBN_2009_9 = new ol.format.GeoJSON();
var features_OTBN_2009_9 = format_OTBN_2009_9.readFeatures(json_OTBN_2009_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTBN_2009_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTBN_2009_9.addFeatures(features_OTBN_2009_9);
var lyr_OTBN_2009_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTBN_2009_9, 
                style: style_OTBN_2009_9,
                interactive: false,
    title: 'OTBN_2009<br />\
    <img src="styles/legend/OTBN_2009_9_0.png" /> Categoría 1: Protección boscosa.<br />\
    <img src="styles/legend/OTBN_2009_9_1.png" /> Categoría 2: Mantenimiento de cobertura boscosa.<br />\
    <img src="styles/legend/OTBN_2009_9_2.png" /> Categoría 3: Uso potencial productivo.<br />\
    <img src="styles/legend/OTBN_2009_9_3.png" /> Áreas transformadas.<br />'
        });
var format_Reddeaguapotable_10 = new ol.format.GeoJSON();
var features_Reddeaguapotable_10 = format_Reddeaguapotable_10.readFeatures(json_Reddeaguapotable_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reddeaguapotable_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reddeaguapotable_10.addFeatures(features_Reddeaguapotable_10);
var lyr_Reddeaguapotable_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reddeaguapotable_10, 
                style: style_Reddeaguapotable_10,
                interactive: false,
                title: '<img src="styles/legend/Reddeaguapotable_10.png" /> Red de agua potable.'
            });
var format_AptitudparaSTDAR_11 = new ol.format.GeoJSON();
var features_AptitudparaSTDAR_11 = format_AptitudparaSTDAR_11.readFeatures(json_AptitudparaSTDAR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AptitudparaSTDAR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AptitudparaSTDAR_11.addFeatures(features_AptitudparaSTDAR_11);
var lyr_AptitudparaSTDAR_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AptitudparaSTDAR_11, 
                style: style_AptitudparaSTDAR_11,
                interactive: false,
    title: 'Aptitud para STDAR<br />\
    <img src="styles/legend/AptitudparaSTDAR_11_0.png" /> Alta<br />\
    <img src="styles/legend/AptitudparaSTDAR_11_1.png" /> Media<br />\
    <img src="styles/legend/AptitudparaSTDAR_11_2.png" /> Baja<br />'
        });
var format_Alcantarillado_12 = new ol.format.GeoJSON();
var features_Alcantarillado_12 = format_Alcantarillado_12.readFeatures(json_Alcantarillado_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcantarillado_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcantarillado_12.addFeatures(features_Alcantarillado_12);
var lyr_Alcantarillado_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alcantarillado_12, 
                style: style_Alcantarillado_12,
                interactive: false,
                title: '<img src="styles/legend/Alcantarillado_12.png" /> Alcantarillado.'
            });
var format_AMVL_ValledeLerma_utm_13 = new ol.format.GeoJSON();
var features_AMVL_ValledeLerma_utm_13 = format_AMVL_ValledeLerma_utm_13.readFeatures(json_AMVL_ValledeLerma_utm_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMVL_ValledeLerma_utm_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMVL_ValledeLerma_utm_13.addFeatures(features_AMVL_ValledeLerma_utm_13);
var lyr_AMVL_ValledeLerma_utm_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMVL_ValledeLerma_utm_13, 
                style: style_AMVL_ValledeLerma_utm_13,
                interactive: false,
                title: '<img src="styles/legend/AMVL_ValledeLerma_utm_13.png" /> AMVL_Valle de Lerma_utm'
            });
var format_REAS_PROTEGIDAS_14 = new ol.format.GeoJSON();
var features_REAS_PROTEGIDAS_14 = format_REAS_PROTEGIDAS_14.readFeatures(json_REAS_PROTEGIDAS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REAS_PROTEGIDAS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REAS_PROTEGIDAS_14.addFeatures(features_REAS_PROTEGIDAS_14);
var lyr_REAS_PROTEGIDAS_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REAS_PROTEGIDAS_14, 
                style: style_REAS_PROTEGIDAS_14,
                interactive: false,
    title: 'ÁREAS_PROTEGIDAS<br />\
    <img src="styles/legend/REAS_PROTEGIDAS_14_0.png" /> Reserva Fauna Silvestre Carabajal<br />\
    <img src="styles/legend/REAS_PROTEGIDAS_14_1.png" /> Reserva Hídrica y de Uso Múltiple Finca Las Costas<br />\
    <img src="styles/legend/REAS_PROTEGIDAS_14_2.png" /> Reserva Privada Club Amigos de La Montaña<br />\
    <img src="styles/legend/REAS_PROTEGIDAS_14_3.png" /> Reserva Pública Bosques Protectores<br />'
        });

lyr_GoogleSatelite_0.setVisible(true);lyr_CartoDark_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(false);lyr_HuellaurbanaAo2010_3.setVisible(true);lyr_HuellaurbanaAo2020_4.setVisible(true);lyr_HuellaurbanaAo2030prediccin_5.setVisible(false);lyr_HuellaurbanaAo2040prediccin_6.setVisible(false);lyr_HuellaurbanaAo2050prediccin_7.setVisible(false);lyr_HuellaurbanaAo2060prediccin_8.setVisible(false);lyr_OTBN_2009_9.setVisible(false);lyr_Reddeaguapotable_10.setVisible(false);lyr_AptitudparaSTDAR_11.setVisible(false);lyr_Alcantarillado_12.setVisible(false);lyr_AMVL_ValledeLerma_utm_13.setVisible(false);lyr_REAS_PROTEGIDAS_14.setVisible(false);
var layersList = [lyr_GoogleSatelite_0,lyr_CartoDark_1,lyr_OpenStreetMap_2,lyr_HuellaurbanaAo2010_3,lyr_HuellaurbanaAo2020_4,lyr_HuellaurbanaAo2030prediccin_5,lyr_HuellaurbanaAo2040prediccin_6,lyr_HuellaurbanaAo2050prediccin_7,lyr_HuellaurbanaAo2060prediccin_8,lyr_OTBN_2009_9,lyr_Reddeaguapotable_10,lyr_AptitudparaSTDAR_11,lyr_Alcantarillado_12,lyr_AMVL_ValledeLerma_utm_13,lyr_REAS_PROTEGIDAS_14];
lyr_HuellaurbanaAo2010_3.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2020_4.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2030prediccin_5.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2040prediccin_6.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2050prediccin_7.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2060prediccin_8.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'dn': 'dn', });
lyr_OTBN_2009_9.set('fieldAliases', {'id': 'id', 'FID': 'FID', 'CAT_GRAL': 'CAT_GRAL', 'COLOR_GRAL': 'COLOR_GRAL', 'has': 'has', });
lyr_Reddeaguapotable_10.set('fieldAliases', {'id': 'id', 'fnode_': 'fnode_', 'tnode_': 'tnode_', 'lpoly_': 'lpoly_', 'rpoly_': 'rpoly_', 'length': 'length', 'e1402_': 'e1402_', 'e1402_id': 'e1402_id', 'codigo': 'codigo', 'ancho': 'ancho', 'anchomed': 'anchomed', 'nombre': 'nombre', 'nom_nor': 'nom_nor', 'ladoi': 'ladoi', 'ladod': 'ladod', 'desdei': 'desdei', 'desded': 'desded', 'hastai': 'hastai', 'hastad': 'hastad', 'cod_calle': 'cod_calle', 'nombre_dgi': 'nombre_dgi', 'mzai': 'mzai', 'mzad': 'mzad', 'conteoi': 'conteoi', 'conteod': 'conteod', 'codinomb': 'codinomb', 'cod_eje': 'cod_eje', 'alumbrado': 'alumbrado', 'agua': 'agua', 'cloacas': 'cloacas', 'tv_clabe': 'tv_clabe', 'gas': 'gas', 'telefono': 'telefono', 'electrico': 'electrico', 'recoleccio': 'recoleccio', 'barrido': 'barrido', 'valor_unit': 'valor_unit', 'desde_par': 'desde_par', 'hasta_par': 'hasta_par', 'desde_impa': 'desde_impa', 'hasta_impa': 'hasta_impa', 'pre_dir': 'pre_dir', 'pre_tipo': 'pre_tipo', 'nro_depart': 'nro_depart', 'cod_locali': 'cod_locali', 'shape_len': 'shape_len', 'vialidad': 'vialidad', 'trat_vial': 'trat_vial', 'vial': 'vial', 'e6433_': 'e6433_', 'e6433_id': 'e6433_id', 'listadoi': 'listadoi', 'listadod': 'listadod', 'colecti': 'colecti', 'colectd': 'colectd', 'constri': 'constri', 'constrd': 'constrd', 'obseri': 'obseri', 'obserd': 'obserd', });
lyr_AptitudparaSTDAR_11.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'Aptitude': 'Aptitude', });
lyr_Alcantarillado_12.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'FECHA_ALTA': 'FECHA_ALTA', 'ID_CATEGOR': 'ID_CATEGOR', 'DESC_CATEG': 'DESC_CATEG', 'ID_ESTADO': 'ID_ESTADO', 'DESC_ESTAD': 'DESC_ESTAD', 'ID_LOC': 'ID_LOC', 'ID_TIPO_SE': 'ID_TIPO_SE', 'MATERIAL': 'MATERIAL', 'DESC_MATER': 'DESC_MATER', 'DIAM_NOMIN': 'DIAM_NOMIN', 'NUM_SISTEM': 'NUM_SISTEM', 'OS_REFEREN': 'OS_REFEREN', 'ID_BAR': 'ID_BAR', 'DESC_BAR': 'DESC_BAR', 'LNG_TRAMO': 'LNG_TRAMO', });
lyr_AMVL_ValledeLerma_utm_13.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'AREA': 'AREA', });
lyr_REAS_PROTEGIDAS_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', '_id': '_id', 'boundary': 'boundary', 'name_de': 'name_de', 'name_es': 'name_es', 'operator': 'operator', 'operator_t': 'operator_t', 'protect_cl': 'protect_cl', 'protected_': 'protected_', 'protection': 'protection', 'related_la': 'related_la', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'old_name': 'old_name', 'short_name': 'short_name', 'start_date': 'start_date', 'source': 'source', 'ramsar': 'ramsar', 'ref_ramsar': 'ref_ramsar', 'name_en': 'name_en', 'name_it': 'name_it', 'name_mk': 'name_mk', 'note': 'note', 'alt_name': 'alt_name', 'name_ca': 'name_ca', 'name_fr': 'name_fr', 'name_ka': 'name_ka', 'name_lt': 'name_lt', 'name_ms': 'name_ms', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_sv': 'name_sv', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'official_n': 'official_n', 'website': 'website', 'wikimedia_': 'wikimedia_', 'heritage': 'heritage', 'heritage_o': 'heritage_o', 'name_nl': 'name_nl', 'ref_whc': 'ref_whc', 'source_nam': 'source_nam', 'whc_criter': 'whc_criter', 'whc_inscri': 'whc_inscri', 'name_ja': 'name_ja', 'contact_we': 'contact_we', 'site_owner': 'site_owner', 'site_statu': 'site_statu', 'leisure': 'leisure', '_relations': '_relations', 'geological': 'geological', 'alt_name_e': 'alt_name_e', 'source_url': 'source_url', 'governance': 'governance', 'protecti_1': 'protecti_1', 'is_in_stat': 'is_in_stat', 'hazard_typ': 'hazard_typ', 'place': 'place', 'legislatio': 'legislatio', 'phone': 'phone', 'fixme': 'fixme', 'natural': 'natural', 'email': 'email', 'animal_she': 'animal_she', 'animal_s_1': 'animal_s_1', 'animal_s_2': 'animal_s_2', 'opening_ho': 'opening_ho', 'zoo': 'zoo', 'landuse': 'landuse', 'source_bou': 'source_bou', 'historic': 'historic', 'site_type': 'site_type', 'protect_ar': 'protect_ar', 'layer': 'layer', });
lyr_HuellaurbanaAo2010_3.set('fieldImages', {'id': 'TextEdit', 'dn': 'Range', });
lyr_HuellaurbanaAo2020_4.set('fieldImages', {'id': '', 'dn': '', });
lyr_HuellaurbanaAo2030prediccin_5.set('fieldImages', {'id': '', 'dn': '', });
lyr_HuellaurbanaAo2040prediccin_6.set('fieldImages', {'id': '', 'dn': '', });
lyr_HuellaurbanaAo2050prediccin_7.set('fieldImages', {'id': '', 'dn': '', });
lyr_HuellaurbanaAo2060prediccin_8.set('fieldImages', {'id': '', 'fid': '', 'dn': '', });
lyr_OTBN_2009_9.set('fieldImages', {'id': 'TextEdit', 'FID': 'TextEdit', 'CAT_GRAL': 'TextEdit', 'COLOR_GRAL': 'TextEdit', 'has': 'TextEdit', });
lyr_Reddeaguapotable_10.set('fieldImages', {'id': 'TextEdit', 'fnode_': 'TextEdit', 'tnode_': 'TextEdit', 'lpoly_': 'TextEdit', 'rpoly_': 'TextEdit', 'length': 'TextEdit', 'e1402_': 'TextEdit', 'e1402_id': 'TextEdit', 'codigo': 'Range', 'ancho': 'Range', 'anchomed': 'TextEdit', 'nombre': 'TextEdit', 'nom_nor': 'TextEdit', 'ladoi': 'TextEdit', 'ladod': 'TextEdit', 'desdei': 'TextEdit', 'desded': 'TextEdit', 'hastai': 'TextEdit', 'hastad': 'TextEdit', 'cod_calle': 'TextEdit', 'nombre_dgi': 'TextEdit', 'mzai': 'TextEdit', 'mzad': 'TextEdit', 'conteoi': 'TextEdit', 'conteod': 'TextEdit', 'codinomb': 'TextEdit', 'cod_eje': 'TextEdit', 'alumbrado': 'Range', 'agua': 'Range', 'cloacas': 'Range', 'tv_clabe': 'Range', 'gas': 'Range', 'telefono': 'Range', 'electrico': 'Range', 'recoleccio': 'Range', 'barrido': 'Range', 'valor_unit': 'TextEdit', 'desde_par': 'TextEdit', 'hasta_par': 'TextEdit', 'desde_impa': 'TextEdit', 'hasta_impa': 'TextEdit', 'pre_dir': 'Range', 'pre_tipo': 'Range', 'nro_depart': 'Range', 'cod_locali': 'TextEdit', 'shape_len': 'TextEdit', 'vialidad': 'Range', 'trat_vial': 'TextEdit', 'vial': 'TextEdit', 'e6433_': 'TextEdit', 'e6433_id': 'TextEdit', 'listadoi': 'Range', 'listadod': 'Range', 'colecti': 'Range', 'colectd': 'Range', 'constri': 'Range', 'constrd': 'Range', 'obseri': 'TextEdit', 'obserd': 'TextEdit', });
lyr_AptitudparaSTDAR_11.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'Aptitude': 'TextEdit', });
lyr_Alcantarillado_12.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'FECHA_ALTA': 'DateTime', 'ID_CATEGOR': 'Range', 'DESC_CATEG': 'TextEdit', 'ID_ESTADO': 'Range', 'DESC_ESTAD': 'TextEdit', 'ID_LOC': 'Range', 'ID_TIPO_SE': 'Range', 'MATERIAL': 'TextEdit', 'DESC_MATER': 'TextEdit', 'DIAM_NOMIN': 'Range', 'NUM_SISTEM': 'TextEdit', 'OS_REFEREN': 'TextEdit', 'ID_BAR': 'TextEdit', 'DESC_BAR': 'TextEdit', 'LNG_TRAMO': 'TextEdit', });
lyr_AMVL_ValledeLerma_utm_13.set('fieldImages', {'NOMBRE': 'TextEdit', 'AREA': 'Range', });
lyr_REAS_PROTEGIDAS_14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', '_id': 'TextEdit', 'boundary': 'TextEdit', 'name_de': 'TextEdit', 'name_es': 'TextEdit', 'operator': 'TextEdit', 'operator_t': 'TextEdit', 'protect_cl': 'TextEdit', 'protected_': 'TextEdit', 'protection': 'TextEdit', 'related_la': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'old_name': 'TextEdit', 'short_name': 'TextEdit', 'start_date': 'TextEdit', 'source': 'TextEdit', 'ramsar': 'TextEdit', 'ref_ramsar': 'TextEdit', 'name_en': 'TextEdit', 'name_it': 'TextEdit', 'name_mk': 'TextEdit', 'note': 'TextEdit', 'alt_name': 'TextEdit', 'name_ca': 'TextEdit', 'name_fr': 'TextEdit', 'name_ka': 'TextEdit', 'name_lt': 'TextEdit', 'name_ms': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_sv': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'official_n': 'TextEdit', 'website': 'TextEdit', 'wikimedia_': 'TextEdit', 'heritage': 'TextEdit', 'heritage_o': 'TextEdit', 'name_nl': 'TextEdit', 'ref_whc': 'TextEdit', 'source_nam': 'TextEdit', 'whc_criter': 'TextEdit', 'whc_inscri': 'TextEdit', 'name_ja': 'TextEdit', 'contact_we': 'TextEdit', 'site_owner': 'TextEdit', 'site_statu': 'TextEdit', 'leisure': 'TextEdit', '_relations': 'TextEdit', 'geological': 'TextEdit', 'alt_name_e': 'TextEdit', 'source_url': 'TextEdit', 'governance': 'TextEdit', 'protecti_1': 'TextEdit', 'is_in_stat': 'TextEdit', 'hazard_typ': 'TextEdit', 'place': 'TextEdit', 'legislatio': 'TextEdit', 'phone': 'TextEdit', 'fixme': 'TextEdit', 'natural': 'TextEdit', 'email': 'TextEdit', 'animal_she': 'TextEdit', 'animal_s_1': 'TextEdit', 'animal_s_2': 'TextEdit', 'opening_ho': 'TextEdit', 'zoo': 'TextEdit', 'landuse': 'TextEdit', 'source_bou': 'TextEdit', 'historic': 'TextEdit', 'site_type': 'TextEdit', 'protect_ar': 'TextEdit', 'layer': 'TextEdit', });
lyr_HuellaurbanaAo2010_3.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2020_4.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2030prediccin_5.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2040prediccin_6.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2050prediccin_7.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2060prediccin_8.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'dn': 'no label', });
lyr_OTBN_2009_9.set('fieldLabels', {'id': 'no label', 'FID': 'no label', 'CAT_GRAL': 'no label', 'COLOR_GRAL': 'no label', 'has': 'no label', });
lyr_Reddeaguapotable_10.set('fieldLabels', {'id': 'no label', 'fnode_': 'no label', 'tnode_': 'no label', 'lpoly_': 'no label', 'rpoly_': 'no label', 'length': 'no label', 'e1402_': 'no label', 'e1402_id': 'no label', 'codigo': 'no label', 'ancho': 'no label', 'anchomed': 'no label', 'nombre': 'no label', 'nom_nor': 'no label', 'ladoi': 'no label', 'ladod': 'no label', 'desdei': 'no label', 'desded': 'no label', 'hastai': 'no label', 'hastad': 'no label', 'cod_calle': 'no label', 'nombre_dgi': 'no label', 'mzai': 'no label', 'mzad': 'no label', 'conteoi': 'no label', 'conteod': 'no label', 'codinomb': 'no label', 'cod_eje': 'no label', 'alumbrado': 'no label', 'agua': 'no label', 'cloacas': 'no label', 'tv_clabe': 'no label', 'gas': 'no label', 'telefono': 'no label', 'electrico': 'no label', 'recoleccio': 'no label', 'barrido': 'no label', 'valor_unit': 'no label', 'desde_par': 'no label', 'hasta_par': 'no label', 'desde_impa': 'no label', 'hasta_impa': 'no label', 'pre_dir': 'no label', 'pre_tipo': 'no label', 'nro_depart': 'no label', 'cod_locali': 'no label', 'shape_len': 'no label', 'vialidad': 'no label', 'trat_vial': 'no label', 'vial': 'no label', 'e6433_': 'no label', 'e6433_id': 'no label', 'listadoi': 'no label', 'listadod': 'no label', 'colecti': 'no label', 'colectd': 'no label', 'constri': 'no label', 'constrd': 'no label', 'obseri': 'no label', 'obserd': 'no label', });
lyr_AptitudparaSTDAR_11.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'Aptitude': 'no label', });
lyr_Alcantarillado_12.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'FECHA_ALTA': 'no label', 'ID_CATEGOR': 'no label', 'DESC_CATEG': 'no label', 'ID_ESTADO': 'no label', 'DESC_ESTAD': 'no label', 'ID_LOC': 'no label', 'ID_TIPO_SE': 'no label', 'MATERIAL': 'no label', 'DESC_MATER': 'no label', 'DIAM_NOMIN': 'no label', 'NUM_SISTEM': 'no label', 'OS_REFEREN': 'no label', 'ID_BAR': 'no label', 'DESC_BAR': 'no label', 'LNG_TRAMO': 'no label', });
lyr_AMVL_ValledeLerma_utm_13.set('fieldLabels', {'NOMBRE': 'no label', 'AREA': 'no label', });
lyr_REAS_PROTEGIDAS_14.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', '_id': 'no label', 'boundary': 'no label', 'name_de': 'no label', 'name_es': 'no label', 'operator': 'no label', 'operator_t': 'no label', 'protect_cl': 'no label', 'protected_': 'no label', 'protection': 'no label', 'related_la': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'old_name': 'no label', 'short_name': 'no label', 'start_date': 'no label', 'source': 'no label', 'ramsar': 'no label', 'ref_ramsar': 'no label', 'name_en': 'no label', 'name_it': 'no label', 'name_mk': 'no label', 'note': 'no label', 'alt_name': 'no label', 'name_ca': 'no label', 'name_fr': 'no label', 'name_ka': 'no label', 'name_lt': 'no label', 'name_ms': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_sv': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'official_n': 'no label', 'website': 'no label', 'wikimedia_': 'no label', 'heritage': 'no label', 'heritage_o': 'no label', 'name_nl': 'no label', 'ref_whc': 'no label', 'source_nam': 'no label', 'whc_criter': 'no label', 'whc_inscri': 'no label', 'name_ja': 'no label', 'contact_we': 'no label', 'site_owner': 'no label', 'site_statu': 'no label', 'leisure': 'no label', '_relations': 'no label', 'geological': 'no label', 'alt_name_e': 'no label', 'source_url': 'no label', 'governance': 'no label', 'protecti_1': 'no label', 'is_in_stat': 'no label', 'hazard_typ': 'no label', 'place': 'no label', 'legislatio': 'no label', 'phone': 'no label', 'fixme': 'no label', 'natural': 'no label', 'email': 'no label', 'animal_she': 'no label', 'animal_s_1': 'no label', 'animal_s_2': 'no label', 'opening_ho': 'no label', 'zoo': 'no label', 'landuse': 'no label', 'source_bou': 'no label', 'historic': 'no label', 'site_type': 'no label', 'protect_ar': 'no label', 'layer': 'no label', });
lyr_REAS_PROTEGIDAS_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});