var size = 0;
function categories_pliegues_fallas_fracturas4(feature, value, size) {
                switch(value) {case 'PLIEGUE ACOSTADO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.9)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
    }),new ol.style.Style({
        
    })];
                    break;
case 'FALLA NORMAL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.9)', lineDash: [10,5], lineCap: 'round', lineJoin: 'round', width: 0}),
    }),new ol.style.Style({
        
    })];
                    break;
case 'FRACTURA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.9)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 1}),
    })];
                    break;}};
var styleCache_pliegues_fallas_fracturas4={}
var style_pliegues_fallas_fracturas4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TIPO");
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
    var style = categories_pliegues_fallas_fracturas4(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_pliegues_fallas_fracturas4[key]){
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
        styleCache_pliegues_fallas_fracturas4[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_pliegues_fallas_fracturas4[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};