var size = 0;

var styleCache_poligono_geoparque12={}
var style_poligono_geoparque12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(115,0,0,1.0)', lineDash: [10,5], lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_poligono_geoparque12[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_poligono_geoparque12[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_poligono_geoparque12[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};