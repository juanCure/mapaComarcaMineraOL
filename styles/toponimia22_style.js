var size = 0;

var styleCache_toponimia22={}
var style_toponimia22 = function(feature, resolution){
    console.log("resolucion del mapa: ", map.getView().getResolution())
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

var setTextPathStyle = function() {
  lyr_toponimia22.setTextPathStyle(function (f)
  {
    switch(f.get('tipo')){
      case 'geoforma':
        return toponimiaGeoforma(f)
        break;
      case 'rio':
        return toponimiaRio(f)
        break;
      case 'municipio':
        return toponimiaMunicipio(f)
        break;
      case 'capital':
        return toponimiaCapital(f)
        break;
      default:
        return toponimiaDefault(f)
    }
  },
  75);
}

function toponimiaGeoforma(f) {
  return [ new ol.style.Style(
    { text: new ol.style.TextPath(
      { text: f.get("nombre"),
        font: "13px ubuntu, sans-serif",
        fill: new ol.style.Fill ({ color:'rgba(0, 0, 0, 1)' }),
        stroke: new ol.style.Stroke({ color:'rgba(0, 0, 0, 1)', width:0 }),
        textBaseline: 'middle',
        textAlign: 'center',
        rotateWithView: true,
        textOverflow: 'visible',
        minWidth: 0
      }),
      geometry: f.getGeometry().cspline()
    })]
}

function toponimiaRio(f) {
  return [ new ol.style.Style(
    { text: new ol.style.TextPath(
      { text: f.get("nombre"),
        font: "20px italic, calibri, sans-serif",
        fill: new ol.style.Fill ({ color:'rgba(0, 0, 255, 1)' }),
        stroke: new ol.style.Stroke({ color:"#0073e6", width:0 }),
        textBaseline: 'middle',
        textAlign: 'center',
        rotateWithView: true,
        textOverflow: 'visible',
        minWidth: 0
      }),
      geometry: f.getGeometry().cspline()
    })]
}

function toponimiaMunicipio(f) {
  return [ new ol.style.Style(
    { text: new ol.style.Text(
      { text: f.get("nombre"),
        font: "ligth 9px italic, calibri, sans-serif",
        fill: new ol.style.Fill ({ color:'#000' }),
        stroke: new ol.style.Stroke({ color:'#000', width:-1 }),
        textBaseline: 'middle',
        textAlign: 'center',
        rotateWithView: true,
        textOverflow: 'visible',
        minWidth: 0
      }),
      geometry: f.getGeometry().cspline()
    })]
}

function toponimiaCapital(f) {
  return [ new ol.style.Style(
    { text: new ol.style.TextPath(
      { text: f.get("nombre"),
        font: "bold 12px italic, calibri, sans-serif",
        fill: new ol.style.Fill ({ color:'rgba(0, 0, 0, 1)' }),
        stroke: new ol.style.Stroke({ color:'rgba(0, 0, 0, 1)', width:0 }),
        textBaseline: 'middle',
        textAlign: 'center',
        rotateWithView: true,
        textOverflow: 'visible',
        minWidth: 0
      }),
      geometry: f.getGeometry().cspline()
    })]
}

function toponimiaDefault(f) {
  return [ new ol.style.Style(
    { text: new ol.style.TextPath(
      { text: f.get("nombre"),
        font: "15px Arial",
        fill: new ol.style.Fill ({ color:"#369" }),
        stroke: new ol.style.Stroke({ color:"#fff", width:3 }),
        textBaseline: 'middle',
        textAlign: 'center',
        rotateWithView: true,
        textOverflow: 'visible',
        minWidth: 0
      }),
      geometry: f.getGeometry().cspline()
    })]
}