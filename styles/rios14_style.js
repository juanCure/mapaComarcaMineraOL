var size = 0;
function categories_rios14(feature, value, size) {
                switch(value) {case 'Intermitente':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(34,134,200,1.0)', lineDash: [10,5], lineCap: 'square', lineJoin: 'bevel', width: 1}),
    })];
                    break;
case 'Perenne':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(34,134,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
    })];
                    break;}};
var styleCache_rios14={}
var style_rios14 = function(feature, resolution){
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
    var style = categories_rios14(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_rios14[key]){
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
        styleCache_rios14[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_rios14[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};