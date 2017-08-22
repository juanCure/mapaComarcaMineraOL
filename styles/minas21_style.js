var size = 0;
function categories_minas21(feature, value, size) {
                switch(value) {case 'MINA':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0258620689655,
                  anchor: [7, 7],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/poi_mine.svg"
            })
    })];
                    break;}};
var styleCache_minas21={}
var style_minas21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ENTIDAD");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if (feature.get("Nombre") !== null) {
        labelText = String(feature.get("Nombre"));
    } else {
        labelText = ""
    }
    var style = categories_minas21(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_minas21[key]){
        var text = new ol.style.Text({
                font: '16px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_minas21[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_minas21[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};