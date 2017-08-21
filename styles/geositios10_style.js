var size = 0;
function categories_geositios10(feature, value, size) {
                switch(value) {case 'CULTURA':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})})
    })];
                    break;
case 'GEOLOGIA':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})})
    })];
                    break;
case 'NATURAL':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})})
    })];
                    break;}};
var styleCache_geositios10={}
var style_geositios10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Relevancia");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if (feature.get("No_Clasif") !== null) {
        labelText = String(feature.get("No_Clasif"));
    } else {
        labelText = ""
    }
    var style = categories_geositios10(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_geositios10[key]){
        var text = new ol.style.Text({
                font: '6.5px \'Calibri\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_geositios10[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_geositios10[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};