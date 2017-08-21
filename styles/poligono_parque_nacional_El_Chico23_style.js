var size = 0;
function categories_poligono_parque_nacional_El_Chico23(feature, value, size) {
                switch(value) {case 'EL CHICO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(45,126,38,1.0)', lineDash: [10,5,1,5], lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})
    })];
                    break;}};
var styleCache_poligono_parque_nacional_El_Chico23={}
var style_poligono_parque_nacional_El_Chico23 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NOMBRE");
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
    var style = categories_poligono_parque_nacional_El_Chico23(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_poligono_parque_nacional_El_Chico23[key]){
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
        styleCache_poligono_parque_nacional_El_Chico23[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_poligono_parque_nacional_El_Chico23[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};