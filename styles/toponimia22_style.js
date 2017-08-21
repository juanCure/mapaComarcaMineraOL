var size = 0;

var styleCache_toponimia22={}
var style_toponimia22 = function(feature, resolution){
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
        
    })];
    key = value + "_" + labelText
    if (!styleCache_toponimia22[key]){
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
        styleCache_toponimia22[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_toponimia22[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};