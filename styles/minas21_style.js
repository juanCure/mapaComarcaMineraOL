var size = 0;

function categories_minas21(feature, value, size) {
    switch (value) {
        case 'MINA':
            return [new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [580, 580],
                    scale: size,
                    anchor: [7, 7],
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/poi_mine_b.svg"
                })
            })];
            break;
    }
};
var styleCache_minas21 = {}
var style_minas21 = function(feature, resolution) {
    /***** Verificando el nivel del zoom para establecer un tamaño adecuado
            para la fuente del texto de la capa minas *****/
    var zoom = map.getView().getZoom();
    // console.log("Zoom: " + zoom);
    var font_size = zoom * (5/4);
    size = 0.0258620689655;
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ENTIDAD");
    var labelText = "";
    var key = "";
    // size = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = -8;
    if (feature.get("Nombre") !== null) {
        labelText = String(feature.get("Nombre"));
    } else {
        labelText = ""
    }
    var style = categories_minas21(feature, value, size);
    key = value + "_" + labelText
    /*if (!styleCache_minas21[key]) {
    }*/
    if(zoom >= 13){
      style = categories_minas21(feature, value, size*2);
      var text = new ol.style.Text({
        // font: font_size + 'px \'MS Shell Dlg 2\', sans-serif',
        // font: font_size + 'px arial, sans-serif',
        font: font_size + 'px italic bold Calibri, serif',
        text: labelText,
        textBaseline: "middle",
        textAlign: textAlign,
        offsetX: offsetX,
        offsetY: offsetY,
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 1)'
        })
      });

      styleCache_minas21[key] = new ol.style.Style({ "text": text });    
    } else {
      styleCache_minas21[key] = new ol.style.Style({ "text": '' });
    }
    
    
    var allStyles = [styleCache_minas21[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};