var size = 0;
function categories_datos_relieve15(feature, value, size) {
                switch(value) {case 'MONTAÑA':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0258620689655,
                  anchor: [7, 7],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/poi_peak.svg"
            })
    })];
                    break;
case 'TERMAL':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.038,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/aguas_termales.svg"
            })
    })];
                    break;
case 'CASCADA':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.019,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/cascada_simbología.svg"
            })
    })];
                    break;}};
var styleCache_datos_relieve15={}
var style_datos_relieve15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("rasgo");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if (feature.get("Altitud") !== null) {
        labelText = String(feature.get("Altitud"));
    } else {
        labelText = ""
    }
    var style = categories_datos_relieve15(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_datos_relieve15[key]){
        var text = new ol.style.Text({
                font: '7.8px \'Calibri\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_datos_relieve15[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_datos_relieve15[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};