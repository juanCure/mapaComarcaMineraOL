var size = 0;

function categories_carreteras_y_caminos_principales16(feature, value, size) {
  switch (value) {
    case 30:
      return [new ol.style.Style({
          stroke: new ol.style.Stroke({ color: 'rgba(0,153,51,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5 }),
        }),
        new ol.style.Style({
          stroke: new ol.style.Stroke({ color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
        })
      ];
      break;
    case 41:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 34:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 35:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 10:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 11:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 22:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 24:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 31:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 32:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 33:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 40:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 29:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
    case 7217:
      return [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1 }),
      })];
      break;
  }
};
var styleCache_carreteras_y_caminos_principales16 = {}
var style_carreteras_y_caminos_principales16 = function(feature, resolution) {
  var zoom = map.getView().getZoom();
  var font_size = zoom * (5 / 4);

  var context = {
    feature: feature,
    variables: {}
  };
  var value = feature.get("ID_SEGMENT");
  var labelText = "";
  var key = "";
  size = 0;
  var textAlign = "left";
  var offsetX = 0;
  var offsetY = 10;
  if (feature.get("CODIGO") != null) {
    labelText = String(feature.get("CODIGO"));
  }

  var style = categories_carreteras_y_caminos_principales16(feature, value, size);
  key = value + "_" + labelText
  if (!styleCache_carreteras_y_caminos_principales16[key]) {
    var text = new ol.style.Text({
        font: '10px \'Calibri\', sans-serif',
        text: labelText,
        textBaseline: "middle",
        textAlign: textAlign,
        offsetX: offsetX,
        offsetY: offsetY,
        fill: new ol.style.Fill({
          color: 'rgba(0, 0, 0, 1)'
        })
      });

    if(feature.getGeometry().getType() == "GeometryCollection"){
      var geometries = feature.getGeometry().getGeometries();
      var point = geometries[0];
      var line = geometries[1];
      var image = new ol.style.Icon({
        imgSize: [580, 580],
        scale: 0.0278620689655,
        anchor: [7, 7],
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        rotation: 0.0,
        src: "styles/background_security_b.svg"
      })
      styleCache_carreteras_y_caminos_principales16[key] = new ol.style.Style({ "geometry": point, "text": text, "image": image });
    } else {
      styleCache_carreteras_y_caminos_principales16[key] = new ol.style.Style({"text": text});
    }
  }

  var allStyles = [styleCache_carreteras_y_caminos_principales16[key]];
  allStyles.push.apply(allStyles, style);
  return allStyles;
};
