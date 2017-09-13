/*var lyr_dem_geoparquesombreado0 = new ol.layer.Image({
    opacity: 1,
    title: "dem_geoparque (sombreado)",
    source: new ol.source.ImageStatic({
       url: "./layers/dem_geoparquesombreado0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
        projection: 'EPSG:3857',
        alwaysInRange: true,
        //imageSize: [13181, 13383],
        imageExtent: [-11116312.126881, 2225204.987494, -10906301.953286, 2439444.989857]
    })
});*/
/***** Cambiando el raster como una capa WMS *****/
var layer_dem_geoparque_sombreado = new ol.layer.Tile({
  opacity: 0.6,
  title: "dem_geoparque (sombreado)",
  source: new ol.source.TileWMS({
    url: 'http://132.248.14.208/geoserver/wms',
    params: { 'LAYERS': 'geonode:dem_geoparque_sombreado2_c', 'TILED': true },
    serverType: 'geoserver'
  })
});
/*var lyr_dem_geoparqueelevacin1 = new ol.layer.Image({
    opacity: 1,
    title: "dem_geoparque (elevación)",
    source: new ol.source.ImageStatic({
       url: "./layers/dem_geoparqueelevacin1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
        projection: 'EPSG:3857',
        alwaysInRange: true,
        //imageSize: [13181, 13383],
        imageExtent: [-11116312.126881, 2225204.987494, -10906301.953286, 2439444.989857]
    })
});*/
/***** Cambiando el raster como una capa WMS *****/
var layer_dem_geoparque_elevacion = new ol.layer.Tile({
  opacity: 0.5,
  title: "dem_geoparque (elevación)",
  source: new ol.source.TileWMS({
    url: 'http://132.248.14.208/geoserver/wms',
    params: { 'LAYERS': 'geonode:dem_geoparque_elevacion2_c', 'TILED': true },
    serverType: 'geoserver'
  })
});

var format_municipios2 = new ol.format.GeoJSON();
var features_municipios2 = format_municipios2.readFeatures(json_municipios2, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_municipios2 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_municipios2.addFeatures(features_municipios2);

var lyr_municipios2 = new ol.layer.Vector({
  source: jsonSource_municipios2,
  style: style_municipios2,
  title: '<img src="styles/legend/municipios2.png" /> municipios'
});
var format_geologia3 = new ol.format.GeoJSON();
var features_geologia3 = format_geologia3.readFeatures(json_geologia3, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_geologia3 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_geologia3.addFeatures(features_geologia3);
var lyr_geologia3 = new ol.layer.Vector({
  source: jsonSource_geologia3,
  style: style_geologia3,
  title: 'geologia'
});

var format_pliegues_fallas_fracturas4 = new ol.format.GeoJSON();
var features_pliegues_fallas_fracturas4 = format_pliegues_fallas_fracturas4.readFeatures(json_pliegues_fallas_fracturas4, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_pliegues_fallas_fracturas4 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_pliegues_fallas_fracturas4.addFeatures(features_pliegues_fallas_fracturas4);
var lyr_pliegues_fallas_fracturas4 = new ol.layer.Vector({
  source: jsonSource_pliegues_fallas_fracturas4,
  style: style_pliegues_fallas_fracturas4,
  title: 'pliegues_fallas_fracturas<br />\
        <img src="styles/legend/pliegues_fallas_fracturas4_0.png" /> PLIEGUE ACOSTADO<br />\
        <img src="styles/legend/pliegues_fallas_fracturas4_1.png" /> FALLA NORMAL<br />\
        <img src="styles/legend/pliegues_fallas_fracturas4_2.png" /> FRACTURA<br />'
});
var format_poligono_Cubitos5 = new ol.format.GeoJSON();
var features_poligono_Cubitos5 = format_poligono_Cubitos5.readFeatures(json_poligono_Cubitos5, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_poligono_Cubitos5 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_poligono_Cubitos5.addFeatures(features_poligono_Cubitos5);

var lyr_poligono_Cubitos5 = new ol.layer.Vector({
  source: jsonSource_poligono_Cubitos5,
  style: style_poligono_Cubitos5,
  title: '<img src="styles/legend/poligono_Cubitos5.png" /> poligono_Cubitos'
});
var format_poligono_El_Hiloche_46 = new ol.format.GeoJSON();
var features_poligono_El_Hiloche_46 = format_poligono_El_Hiloche_46.readFeatures(json_poligono_El_Hiloche_46, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_poligono_El_Hiloche_46 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_poligono_El_Hiloche_46.addFeatures(features_poligono_El_Hiloche_46);
var lyr_poligono_El_Hiloche_46 = new ol.layer.Vector({
  source: jsonSource_poligono_El_Hiloche_46,
  style: style_poligono_El_Hiloche_46,
  title: '<img src="styles/legend/poligono_El_Hiloche_46.png" /> poligono_El_Hiloche_4'
});
var format_poligono_El_Hiloche_37 = new ol.format.GeoJSON();
var features_poligono_El_Hiloche_37 = format_poligono_El_Hiloche_37.readFeatures(json_poligono_El_Hiloche_37, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_poligono_El_Hiloche_37 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_poligono_El_Hiloche_37.addFeatures(features_poligono_El_Hiloche_37);
var lyr_poligono_El_Hiloche_37 = new ol.layer.Vector({
  source: jsonSource_poligono_El_Hiloche_37,
  style: style_poligono_El_Hiloche_37,
  title: '<img src="styles/legend/poligono_El_Hiloche_37.png" /> poligono_El_Hiloche_3'
});
var format_poligono_El_Hiloche_28 = new ol.format.GeoJSON();
var features_poligono_El_Hiloche_28 = format_poligono_El_Hiloche_28.readFeatures(json_poligono_El_Hiloche_28, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_poligono_El_Hiloche_28 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_poligono_El_Hiloche_28.addFeatures(features_poligono_El_Hiloche_28);
var lyr_poligono_El_Hiloche_28 = new ol.layer.Vector({
  source: jsonSource_poligono_El_Hiloche_28,
  style: style_poligono_El_Hiloche_28,
  title: '<img src="styles/legend/poligono_El_Hiloche_28.png" /> poligono_El_Hiloche_2'
});
var format_poligono_El_Hiloche_19 = new ol.format.GeoJSON();
var features_poligono_El_Hiloche_19 = format_poligono_El_Hiloche_19.readFeatures(json_poligono_El_Hiloche_19, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_poligono_El_Hiloche_19 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_poligono_El_Hiloche_19.addFeatures(features_poligono_El_Hiloche_19);
var lyr_poligono_El_Hiloche_19 = new ol.layer.Vector({
  source: jsonSource_poligono_El_Hiloche_19,
  style: style_poligono_El_Hiloche_19,
  title: '<img src="styles/legend/poligono_El_Hiloche_19.png" /> poligono_El_Hiloche_1'
});
/*var format_geositios10 = new ol.format.GeoJSON();
var features_geositios10 = format_geositios10.readFeatures(json_geositios10, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_geositios10 = new ol.source.Vector({
    attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_geositios10.addFeatures(features_geositios10);
var lyr_geositios10 = new ol.layer.Vector({
    source: jsonSource_geositios10,
    style: style_geositios10,
    title: 'geositios<br />\
        <img src="styles/legend/geositios10_0.png" /> HISTÓRICO-CULTURAL<br />\
        <img src="styles/legend/geositios10_1.png" /> GEOLOGIA<br />\
        <img src="styles/legend/geositios10_2.png" /> BIOTA Y ECOSISTEMAS<br />'
});*/

/**** Agregando la capa geositios *****/
var format_geositios0 = new ol.format.GeoJSON();
var features_geositios0 = format_geositios0.readFeatures(json_geositios0, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_geositios0 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_geositios0.addFeatures(features_geositios0);
var lyr_geositios0 = new ol.layer.Vector({
  source: jsonSource_geositios0,
  style: style_geositios0,
  title: 'geositios<br />\
        <img src="styles/legend/geositios0_0.png" /> biota, ecosistemas<br />\
        <img src="styles/legend/geositios0_1.png" /> geología<br />\
        <img src="styles/legend/geositios0_2.png" /> geología, geomorfología<br />\
        <img src="styles/legend/geositios0_3.png" /> geología, histórica, cultural<br />\
        <img src="styles/legend/geositios0_4.png" /> historica, cultural<br />\
        <img src="styles/legend/geositios0_5.png" /> <br />'
});

var format_cabeceras_municipales11 = new ol.format.GeoJSON();
var features_cabeceras_municipales11 = format_cabeceras_municipales11.readFeatures(json_cabeceras_municipales11, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_cabeceras_municipales11 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_cabeceras_municipales11.addFeatures(features_cabeceras_municipales11);
var lyr_cabeceras_municipales11 = new ol.layer.Vector({
  source: jsonSource_cabeceras_municipales11,
  style: style_cabeceras_municipales11,
  title: 'cabeceras_municipales<br />\
        <img src="styles/legend/cabeceras_municipales11_0.png" /> Atotonilco El Grande<br />\
        <img src="styles/legend/cabeceras_municipales11_1.png" /> Epazoyucan<br />\
        <img src="styles/legend/cabeceras_municipales11_2.png" /> Huasca de Ocampo<br />\
        <img src="styles/legend/cabeceras_municipales11_3.png" /> Mineral del Chico<br />\
        <img src="styles/legend/cabeceras_municipales11_4.png" /> Mineral del Monte<br />\
        <img src="styles/legend/cabeceras_municipales11_5.png" /> Omitlán de Juárez<br />\
        <img src="styles/legend/cabeceras_municipales11_6.png" /> Pachuca de Soto<br />\
        <img src="styles/legend/cabeceras_municipales11_7.png" /> Pachuquilla<br />\
        <img src="styles/legend/cabeceras_municipales11_8.png" /> Singuilucan<br />'
});
var format_poligono_geoparque12 = new ol.format.GeoJSON();
var features_poligono_geoparque12 = format_poligono_geoparque12.readFeatures(json_poligono_geoparque12, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_poligono_geoparque12 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_poligono_geoparque12.addFeatures(features_poligono_geoparque12);
var lyr_poligono_geoparque12 = new ol.layer.Vector({
  source: jsonSource_poligono_geoparque12,
  style: style_poligono_geoparque12,
  title: '<img src="styles/legend/poligono_geoparque12.png" /> poligono_geoparque'
});
var format_poligono_RBios13 = new ol.format.GeoJSON();
var features_poligono_RBios13 = format_poligono_RBios13.readFeatures(json_poligono_RBios13, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_poligono_RBios13 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_poligono_RBios13.addFeatures(features_poligono_RBios13);
var lyr_poligono_RBios13 = new ol.layer.Vector({
  source: jsonSource_poligono_RBios13,
  style: style_poligono_RBios13,
  title: '<img src="styles/legend/poligono_RBios13.png" /> poligono_RBios'
});
var format_rios14 = new ol.format.GeoJSON();
var features_rios14 = format_rios14.readFeatures(json_rios14, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_rios14 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_rios14.addFeatures(features_rios14);
var lyr_rios14 = new ol.layer.Vector({
  source: jsonSource_rios14,
  style: style_rios14,
  title: 'rios<br />\
        <img src="styles/legend/rios14_0.png" /> Intermitente<br />\
        <img src="styles/legend/rios14_1.png" /> Perenne<br />'
});
var format_datos_relieve15 = new ol.format.GeoJSON();
var features_datos_relieve15 = format_datos_relieve15.readFeatures(json_datos_relieve15, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_datos_relieve15 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_datos_relieve15.addFeatures(features_datos_relieve15);
var lyr_datos_relieve15 = new ol.layer.Vector({
  source: jsonSource_datos_relieve15,
  style: style_datos_relieve15,
  title: 'datos_relieve<br />\
        <img src="styles/legend/datos_relieve15_0.png" /> ELEVACIÓN<br />\
        <img src="styles/legend/datos_relieve15_1.png" /> AGUAS TERMALES<br />\
        <img src="styles/legend/datos_relieve15_2.png" /> CASCADA<br />'
});
var format_carreteras_y_caminos_principales16 = new ol.format.GeoJSON();
var features_carreteras_y_caminos_principales16 = format_carreteras_y_caminos_principales16.readFeatures(json_carreteras_y_caminos_principales16, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_carreteras_y_caminos_principales16 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_carreteras_y_caminos_principales16.addFeatures(features_carreteras_y_caminos_principales16);
var lyr_carreteras_y_caminos_principales16 = new ol.layer.Vector({
  source: jsonSource_carreteras_y_caminos_principales16,
  style: style_carreteras_y_caminos_principales16,
  title: 'carreteras_y_caminos_principales<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_0.png" /> 30<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_1.png" /> 41<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_2.png" /> 34<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_3.png" /> 35<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_4.png" /> 10<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_5.png" /> 11<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_6.png" /> 22<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_7.png" /> 24<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_8.png" /> 31<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_9.png" /> 32<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_10.png" /> 33<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_11.png" /> 40<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_12.png" /> 29<br />\
        <img src="styles/legend/carreteras_y_caminos_principales16_13.png" /> 7217<br />'
});
var format_ruta_humboldt17 = new ol.format.GeoJSON();
var features_ruta_humboldt17 = format_ruta_humboldt17.readFeatures(json_ruta_humboldt17, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ruta_humboldt17 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_ruta_humboldt17.addFeatures(features_ruta_humboldt17);
var lyr_ruta_humboldt17 = new ol.layer.Vector({
  source: jsonSource_ruta_humboldt17,
  style: style_ruta_humboldt17,
  title: '<img src="styles/legend/ruta_humboldt17.png" /> ruta_humboldt'
});
var format_ruta_historico_minera18 = new ol.format.GeoJSON();
var features_ruta_historico_minera18 = format_ruta_historico_minera18.readFeatures(json_ruta_historico_minera18, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ruta_historico_minera18 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_ruta_historico_minera18.addFeatures(features_ruta_historico_minera18);
var lyr_ruta_historico_minera18 = new ol.layer.Vector({
  source: jsonSource_ruta_historico_minera18,
  style: style_ruta_historico_minera18,
  title: '<img src="styles/legend/ruta_historico_minera18.png" /> ruta_historico_minera'
});
var format_ruta_geonatural19 = new ol.format.GeoJSON();
var features_ruta_geonatural19 = format_ruta_geonatural19.readFeatures(json_ruta_geonatural19, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ruta_geonatural19 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_ruta_geonatural19.addFeatures(features_ruta_geonatural19);
var lyr_ruta_geonatural19 = new ol.layer.Vector({
  source: jsonSource_ruta_geonatural19,
  style: style_ruta_geonatural19,
  title: '<img src="styles/legend/ruta_geonatural19.png" /> ruta_geonatural'
});
var format_ruta_geocultural20 = new ol.format.GeoJSON();
var features_ruta_geocultural20 = format_ruta_geocultural20.readFeatures(json_ruta_geocultural20, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_ruta_geocultural20 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_ruta_geocultural20.addFeatures(features_ruta_geocultural20);
var lyr_ruta_geocultural20 = new ol.layer.Vector({
  source: jsonSource_ruta_geocultural20,
  style: style_ruta_geocultural20,
  title: '<img src="styles/legend/ruta_geocultural20.png" /> ruta_geocultural'
});
var format_minas21 = new ol.format.GeoJSON();
var features_minas21 = format_minas21.readFeatures(json_minas21, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_minas21 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_minas21.addFeatures(features_minas21);
var lyr_minas21 = new ol.layer.Vector({
  source: jsonSource_minas21,
  style: style_minas21,
  title: 'minas<br />\
        <img src="styles/legend/minas21_0.png" /> MINA<br />'
});
var format_toponimia22 = new ol.format.GeoJSON();
var features_toponimia22 = format_toponimia22.readFeatures(json_toponimia22, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_toponimia22 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_toponimia22.addFeatures(features_toponimia22);
var lyr_toponimia22 = new ol.layer.Vector({
  source: jsonSource_toponimia22,
  style: style_toponimia22,
  title: '<img src="styles/legend/toponimia22.png" /> toponimia'
});
var format_poligono_parque_nacional_El_Chico23 = new ol.format.GeoJSON();
var features_poligono_parque_nacional_El_Chico23 = format_poligono_parque_nacional_El_Chico23.readFeatures(json_poligono_parque_nacional_El_Chico23, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_poligono_parque_nacional_El_Chico23 = new ol.source.Vector({
  attributions: [new ol.Attribution({ html: '<a href=""></a>' })],
});
jsonSource_poligono_parque_nacional_El_Chico23.addFeatures(features_poligono_parque_nacional_El_Chico23);
var lyr_poligono_parque_nacional_El_Chico23 = new ol.layer.Vector({
  source: jsonSource_poligono_parque_nacional_El_Chico23,
  style: style_poligono_parque_nacional_El_Chico23,
  title: 'poligono_parque_nacional_El_Chico<br />\
        <img src="styles/legend/poligono_parque_nacional_El_Chico23_0.png" /> EL CHICO<br />'
});

/*lyr_dem_geoparquesombreado0.setVisible(true);
lyr_dem_geoparqueelevacin1.setVisible(true);*/
layer_dem_geoparque_sombreado.setVisible(true);
layer_dem_geoparque_elevacion.setVisible(true);
lyr_municipios2.setVisible(true);
lyr_geologia3.setVisible(false);
lyr_pliegues_fallas_fracturas4.setVisible(true);
lyr_poligono_Cubitos5.setVisible(true);
lyr_poligono_El_Hiloche_46.setVisible(true);
lyr_poligono_El_Hiloche_37.setVisible(true);
lyr_poligono_El_Hiloche_28.setVisible(true);
lyr_poligono_El_Hiloche_19.setVisible(true);
// lyr_geositios10.setVisible(true);
lyr_geositios0.setVisible(true);
lyr_cabeceras_municipales11.setVisible(true);
lyr_poligono_geoparque12.setVisible(true);
lyr_poligono_RBios13.setVisible(true);
lyr_rios14.setVisible(true);
lyr_datos_relieve15.setVisible(true);
lyr_carreteras_y_caminos_principales16.setVisible(true);
lyr_ruta_humboldt17.setVisible(true);
lyr_ruta_historico_minera18.setVisible(true);
lyr_ruta_geonatural19.setVisible(true);
lyr_ruta_geocultural20.setVisible(true);
lyr_minas21.setVisible(true);
lyr_toponimia22.setVisible(true);
lyr_poligono_parque_nacional_El_Chico23.setVisible(true);

// var layersList = [lyr_dem_geoparquesombreado0,lyr_dem_geoparqueelevacin1,lyr_municipios2,lyr_geologia3,lyr_pliegues_fallas_fracturas4,lyr_poligono_Cubitos5,lyr_poligono_El_Hiloche_46,lyr_poligono_El_Hiloche_37,lyr_poligono_El_Hiloche_28,lyr_poligono_El_Hiloche_19,lyr_geositios10,lyr_cabeceras_municipales11,lyr_poligono_geoparque12,lyr_poligono_RBios13,lyr_rios14,lyr_datos_relieve15,lyr_carreteras_y_caminos_principales16,lyr_ruta_humboldt17,lyr_ruta_historico_minera18,lyr_ruta_geonatural19,lyr_ruta_geocultural20,lyr_minas21,lyr_toponimia22,lyr_poligono_parque_nacional_El_Chico23];
var layersList = [layer_dem_geoparque_sombreado, layer_dem_geoparque_elevacion, lyr_municipios2, lyr_geologia3, lyr_pliegues_fallas_fracturas4, lyr_poligono_Cubitos5, lyr_poligono_El_Hiloche_46, lyr_poligono_El_Hiloche_37, lyr_poligono_El_Hiloche_28, lyr_poligono_El_Hiloche_19, lyr_cabeceras_municipales11, lyr_poligono_geoparque12, lyr_poligono_RBios13, lyr_rios14, lyr_datos_relieve15, lyr_carreteras_y_caminos_principales16, lyr_ruta_humboldt17, lyr_ruta_historico_minera18, lyr_ruta_geonatural19, lyr_ruta_geocultural20, lyr_minas21, lyr_toponimia22, lyr_poligono_parque_nacional_El_Chico23,lyr_geositios0];
lyr_municipios2.set('fieldAliases', { 'NAME': 'NAME', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'OBJECTID': 'OBJECTID', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'Numero': 'Numero', });
lyr_geologia3.set('fieldAliases', { 'SIMBOLO': 'SIMBOLO', 'NOMBRE': 'NOMBRE', 'EDAD': 'EDAD', 'clasif': 'clasif', });
lyr_pliegues_fallas_fracturas4.set('fieldAliases', { 'LAYER': 'LAYER', 'SIMBOLO': 'SIMBOLO', 'TIPO': 'TIPO', 'DIMENSI_KM': 'DIMENSI_KM', 'RUMBO': 'RUMBO', 'AZIMUTH': 'AZIMUTH', });
lyr_poligono_Cubitos5.set('fieldAliases', { 'id': 'id', 'v': 'v', 'x': 'x', 'y': 'y', });
lyr_poligono_El_Hiloche_46.set('fieldAliases', { 'id': 'id', 'v': 'v', 'v1': 'v1', 'y': 'y', 'x': 'x', });
lyr_poligono_El_Hiloche_37.set('fieldAliases', { 'id': 'id', 'v': 'v', 'v1': 'v1', 'y': 'y', 'x': 'x', });
lyr_poligono_El_Hiloche_28.set('fieldAliases', { 'id': 'id', 'v': 'v', 'v1': 'v1', 'y': 'y', 'x': 'x', });
lyr_poligono_El_Hiloche_19.set('fieldAliases', { 'id': 'id', 'v': 'v', 'y': 'y', 'x': 'x', });
// lyr_geositios10.set('fieldAliases', { 'ID': 'ID', 'Sitio': 'Sitio', 'Relevancia': 'Relevancia', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'No_Clasif': 'No_Clasif', 'color': 'color', });
// lyr_geositios0.set('fieldAliases', { 'id': 'id', 'nombre': 'nombre', 'categoria': 'categoria', 'provincia': 'provincia', 'x': 'x', 'y': 'y', 'municipio': 'municipio', 'color': 'color', });
lyr_geositios0.set('fieldAliases', {'id': 'id', 'Geositio': 'Geositio', 'Relevancia': 'Relevancia', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Descripción': 'Descripción', 'relevC': 'relevC'});
lyr_cabeceras_municipales11.set('fieldAliases', { 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'NOMBRE': 'NOMBRE', 'OID': 'OID', });
lyr_poligono_geoparque12.set('fieldAliases', { 'NAME': 'NAME', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'OBJECTID': 'OBJECTID', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', });
lyr_poligono_RBios13.set('fieldAliases', { 'ID_UANP': 'ID_UANP', 'NOMBRE': 'NOMBRE', 'CAT_DECRET': 'CAT_DECRET', 'CAT_MANEJO': 'CAT_MANEJO', 'ULT_DECRET': 'ULT_DECRET', 'ESTADOS': 'ESTADOS', 'MUNICIPIOS': 'MUNICIPIOS', 'SUP_DECRET': 'SUP_DECRET', 'SUP_TOT_CA': 'SUP_TOT_CA', 'SUP_TER_CA': 'SUP_TER_CA', 'SUP_MAR_CA': 'SUP_MAR_CA', 'REGION': 'REGION', 'ID_ANP': 'ID_ANP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area': 'Area', });
lyr_rios14.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'ENTIDAD': 'ENTIDAD', 'TIPO': 'TIPO', 'FC': 'FC', 'SHAPE_len': 'SHAPE_len', 'Nombre': 'Nombre', });
lyr_datos_relieve15.set('fieldAliases', { 'id': 'id', 'Altitud': 'Altitud', 'Nombre': 'Nombre', 'rasgo': 'rasgo', });
lyr_carreteras_y_caminos_principales16.set('fieldAliases', { 'ID_SEGMENT': 'ID_SEGMENT', 'NOM_TRAMO': 'NOM_TRAMO', 'CODIGO': 'CODIGO', });
lyr_ruta_humboldt17.set('fieldAliases', { 'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_ruta_historico_minera18.set('fieldAliases', { 'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_ruta_geonatural19.set('fieldAliases', { 'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_ruta_geocultural20.set('fieldAliases', { 'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_minas21.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'ENTIDAD': 'ENTIDAD', 'TIPO': 'TIPO', 'Nombre': 'Nombre', });
lyr_toponimia22.set('fieldAliases', { 'id': 'id', 'nombre': 'nombre', 'tipo': 'tipo', });
lyr_poligono_parque_nacional_El_Chico23.set('fieldAliases', { 'ID_UANP': 'ID_UANP', 'NOMBRE': 'NOMBRE', 'CAT_DECRET': 'CAT_DECRET', 'CAT_MANEJO': 'CAT_MANEJO', 'ULT_DECRET': 'ULT_DECRET', 'ESTADOS': 'ESTADOS', 'MUNICIPIOS': 'MUNICIPIOS', 'SUP_DECRET': 'SUP_DECRET', 'SUP_TOT_CA': 'SUP_TOT_CA', 'SUP_TER_CA': 'SUP_TER_CA', 'SUP_MAR_CA': 'SUP_MAR_CA', 'REGION': 'REGION', 'ID_ANP': 'ID_ANP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area': 'Area', });
lyr_municipios2.set('fieldImages', { 'NAME': 'TextEdit', 'GM_LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'OBJECTID': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Numero': 'TextEdit', });
lyr_geologia3.set('fieldImages', { 'SIMBOLO': 'TextEdit', 'NOMBRE': 'TextEdit', 'EDAD': 'TextEdit', 'clasif': 'TextEdit', });
lyr_pliegues_fallas_fracturas4.set('fieldImages', { 'LAYER': 'TextEdit', 'SIMBOLO': 'TextEdit', 'TIPO': 'TextEdit', 'DIMENSI_KM': 'TextEdit', 'RUMBO': 'TextEdit', 'AZIMUTH': 'TextEdit', });
lyr_poligono_Cubitos5.set('fieldImages', { 'id': 'TextEdit', 'v': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_poligono_El_Hiloche_46.set('fieldImages', { 'id': 'TextEdit', 'v': 'TextEdit', 'v1': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_poligono_El_Hiloche_37.set('fieldImages', { 'id': 'TextEdit', 'v': 'TextEdit', 'v1': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_poligono_El_Hiloche_28.set('fieldImages', { 'id': 'TextEdit', 'v': 'TextEdit', 'v1': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_poligono_El_Hiloche_19.set('fieldImages', { 'id': 'TextEdit', 'v': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
// lyr_geositios10.set('fieldImages', { 'ID': 'TextEdit', 'Sitio': 'TextEdit', 'Relevancia': 'TextEdit', 'X_UTM': 'TextEdit', 'Y_UTM': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'No_Clasif': 'TextEdit', 'color': 'Color', });
// lyr_geositios0.set('fieldImages', { 'id': 'TextEdit', 'nombre': 'TextEdit', 'categoria': 'TextEdit', 'provincia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'municipio': 'TextEdit', 'color': 'Color', });
lyr_geositios0.set('fieldImages', {'id': 'TextEdit', 'Geositio': 'TextEdit', 'Relevancia': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Descripción': 'TextEdit', 'relevC': 'TextEdit'});
lyr_cabeceras_municipales11.set('fieldImages', { 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOMBRE': 'TextEdit', 'OID': 'TextEdit', });
lyr_poligono_geoparque12.set('fieldImages', { 'NAME': 'TextEdit', 'GM_LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'OBJECTID': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', });
lyr_poligono_RBios13.set('fieldImages', { 'ID_UANP': 'TextEdit', 'NOMBRE': 'TextEdit', 'CAT_DECRET': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'ULT_DECRET': 'TextEdit', 'ESTADOS': 'TextEdit', 'MUNICIPIOS': 'TextEdit', 'SUP_DECRET': 'TextEdit', 'SUP_TOT_CA': 'TextEdit', 'SUP_TER_CA': 'TextEdit', 'SUP_MAR_CA': 'TextEdit', 'REGION': 'TextEdit', 'ID_ANP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_rios14.set('fieldImages', { 'OBJECTID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'FC': 'TextEdit', 'SHAPE_len': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_datos_relieve15.set('fieldImages', { 'id': 'TextEdit', 'Altitud': 'TextEdit', 'Nombre': 'TextEdit', 'rasgo': 'TextEdit', });
lyr_carreteras_y_caminos_principales16.set('fieldImages', { 'ID_SEGMENT': 'TextEdit', 'NOM_TRAMO': 'TextEdit', 'CODIGO': 'TextEdit', });
lyr_ruta_humboldt17.set('fieldImages', { 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_ruta_historico_minera18.set('fieldImages', { 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_ruta_geonatural19.set('fieldImages', { 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_ruta_geocultural20.set('fieldImages', { 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_minas21.set('fieldImages', { 'OBJECTID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_toponimia22.set('fieldImages', { 'id': 'Hidden', 'nombre': 'TextEdit', 'tipo': 'UniqueValues', });
lyr_poligono_parque_nacional_El_Chico23.set('fieldImages', { 'ID_UANP': 'TextEdit', 'NOMBRE': 'TextEdit', 'CAT_DECRET': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'ULT_DECRET': 'TextEdit', 'ESTADOS': 'TextEdit', 'MUNICIPIOS': 'TextEdit', 'SUP_DECRET': 'TextEdit', 'SUP_TOT_CA': 'TextEdit', 'SUP_TER_CA': 'TextEdit', 'SUP_MAR_CA': 'TextEdit', 'REGION': 'TextEdit', 'ID_ANP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_municipios2.set('fieldLabels', { 'NAME': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'OBJECTID': 'no label', 'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', 'Numero': 'no label', });
lyr_geologia3.set('fieldLabels', { 'SIMBOLO': 'inline label', 'NOMBRE': 'inline label', 'EDAD': 'inline label', 'clasif': 'inline label', });
lyr_pliegues_fallas_fracturas4.set('fieldLabels', { 'LAYER': 'no label', 'SIMBOLO': 'no label', 'TIPO': 'no label', 'DIMENSI_KM': 'no label', 'RUMBO': 'no label', 'AZIMUTH': 'no label', });
lyr_poligono_Cubitos5.set('fieldLabels', { 'id': 'no label', 'v': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_poligono_El_Hiloche_46.set('fieldLabels', { 'id': 'no label', 'v': 'no label', 'v1': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_poligono_El_Hiloche_37.set('fieldLabels', { 'id': 'no label', 'v': 'no label', 'v1': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_poligono_El_Hiloche_28.set('fieldLabels', { 'id': 'no label', 'v': 'no label', 'v1': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_poligono_El_Hiloche_19.set('fieldLabels', { 'id': 'no label', 'v': 'no label', 'y': 'no label', 'x': 'no label', });
// lyr_geositios10.set('fieldLabels', { 'ID': 'header label', 'Sitio': 'header label', 'Relevancia': 'header label', 'X_UTM': 'header label', 'Y_UTM': 'header label', 'Provincia': 'header label', 'Municipio': 'header label', 'No_Clasif': 'header label', 'color': 'no label', });
// lyr_geositios0.set('fieldLabels', { 'id': 'inline label', 'nombre': 'inline label', 'categoria': 'inline label', 'provincia': 'inline label', 'x': 'inline label', 'y': 'inline label', 'municipio': 'inline label', 'color': 'inline label', });
lyr_geositios0.set('fieldLabels', {'id': 'inline label', 'Geositio': 'inline label', 'Relevancia': 'inline label', 'Provincia': 'inline label', 'Municipio': 'inline label', 'Latitud': 'inline label', 'Longitud': 'inline label', 'Descripción': 'inline label', 'relevC': 'inline label' });
lyr_cabeceras_municipales11.set('fieldLabels', { 'NOM_ENT': 'no label', 'NOM_MUN': 'no label', 'NOMBRE': 'no label', 'OID': 'no label', });
lyr_poligono_geoparque12.set('fieldLabels', { 'NAME': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'OBJECTID': 'no label', 'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', });
lyr_poligono_RBios13.set('fieldLabels', { 'ID_UANP': 'no label', 'NOMBRE': 'no label', 'CAT_DECRET': 'no label', 'CAT_MANEJO': 'no label', 'ULT_DECRET': 'no label', 'ESTADOS': 'no label', 'MUNICIPIOS': 'no label', 'SUP_DECRET': 'no label', 'SUP_TOT_CA': 'no label', 'SUP_TER_CA': 'no label', 'SUP_MAR_CA': 'no label', 'REGION': 'no label', 'ID_ANP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Area': 'no label', });
lyr_rios14.set('fieldLabels', { 'OBJECTID': 'no label', 'ENTIDAD': 'no label', 'TIPO': 'no label', 'FC': 'no label', 'SHAPE_len': 'no label', 'Nombre': 'no label', });
lyr_datos_relieve15.set('fieldLabels', { 'id': 'no label', 'Altitud': 'no label', 'Nombre': 'no label', 'rasgo': 'no label', });
lyr_carreteras_y_caminos_principales16.set('fieldLabels', { 'ID_SEGMENT': 'no label', 'NOM_TRAMO': 'no label', 'CODIGO': 'no label', });
lyr_ruta_humboldt17.set('fieldLabels', { 'NAME': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_ruta_historico_minera18.set('fieldLabels', { 'NAME': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_ruta_geonatural19.set('fieldLabels', { 'NAME': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_ruta_geocultural20.set('fieldLabels', { 'NAME': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_minas21.set('fieldLabels', { 'OBJECTID': 'no label', 'ENTIDAD': 'no label', 'TIPO': 'no label', 'Nombre': 'no label', });
lyr_toponimia22.set('fieldLabels', { 'nombre': 'no label', 'tipo': 'no label', });
lyr_poligono_parque_nacional_El_Chico23.set('fieldLabels', { 'ID_UANP': 'no label', 'NOMBRE': 'no label', 'CAT_DECRET': 'no label', 'CAT_MANEJO': 'no label', 'ULT_DECRET': 'no label', 'ESTADOS': 'no label', 'MUNICIPIOS': 'no label', 'SUP_DECRET': 'no label', 'SUP_TOT_CA': 'no label', 'SUP_TER_CA': 'no label', 'SUP_MAR_CA': 'no label', 'REGION': 'no label', 'ID_ANP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Area': 'no label', });
lyr_poligono_parque_nacional_El_Chico23.on('precompose', function(evt) {
  evt.context.globalCompositeOperation = 'normal';
});
