function onEachFeaturePoint(feature, layer) {
    var popupContent = "<h6> Project Name: " + feature.properties.project_na +
        "<br></h6><h7> Right of Way or Onsite: " + feature.properties.row_onsite +
        "<br></h6><h7> Project Type: " + feature.properties.asset_type +
        "<br><h7> Status: " + feature.properties.status_gro +
        "<br></h7> Current stage: " +  feature.properties.status + "</p>";
    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}

function onEachFeaturePointwt(feature, layer) {
    var popupContent = "<h6> Tree Species: " + feature.properties.spc_common +
        "<br></h6><h7> Location: " + feature.properties.curb_loc +
        "<br></h6><h7> Record logged: " + feature.properties.created_at +
        "<br><h7> Health: " + feature.properties.health +
        "<br></h7> DBH: " +  feature.properties.tree_dbh + "</p>";
    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}

var allgi = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/allgi.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    allgi.addData(data);

    allgiCluster.addLayers(allgi.getLayers());

    allgi.remove();
});

var gi = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/roof.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi.addData(data);

    giCluster.addLayers(gi.getLayers());

    gi.remove();
});

var gi2 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/cistern.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi2.addData(data);

    giCluster2.addLayers(gi2.getLayers());

    gi2.remove();
});

var gi3 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/detentionsystem.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi3.addData(data);

    giCluster3.addLayers(gi3.getLayers());

    gi3.remove();
});

var gi4 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/drywall.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi4.addData(data);

    giCluster4.addLayers(gi4.getLayers());

    gi4.remove();
});

var gi5 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/multiplegi.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi5.addData(data);

    giCluster5.addLayers(gi5.getLayers());

    gi5.remove();
});

var gi6 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/permeablepavers.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi6.addData(data);

    giCluster6.addLayers(gi6.getLayers());

    gi6.remove();
});

var gi7 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/porousasphalt.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi7.addData(data);

    giCluster7.addLayers(gi7.getLayers());

    gi7.remove();
});

var gi8 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/porousconcrete.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi8.addData(data);

    giCluster8.addLayers(gi8.getLayers());

    gi8.remove();
});

var gi9 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/raingarden.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi9.addData(data);

    giCluster9.addLayers(gi9.getLayers());

    gi9.remove();
});

var gi10 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/rainwaterharvesting.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi10.addData(data);

    giCluster10.addLayers(gi10.getLayers());

    gi10.remove();
});

var gi11 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/rowb.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi11.addData(data);

    giCluster11.addLayers(gi11.getLayers());

    gi11.remove();
});

var gi12 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/rowbasinconcrete.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi12.addData(data);

    giCluster12.addLayers(gi12.getLayers());

    gi12.remove();
});

var gi13 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/roweb.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi13.addData(data);

    giCluster13.addLayers(gi13.getLayers());

    gi13.remove();
});

var gi14 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/rowgs.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi14.addData(data);

    giCluster14.addLayers(gi14.getLayers());

    gi14.remove();
});

var gi15 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/rowmedian.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi15.addData(data);

    giCluster15.addLayers(gi15.getLayers());

    gi15.remove();
});

var gi16 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/rowsgs.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi16.addData(data);

    giCluster16.addLayers(gi16.getLayers());

    gi16.remove();
});

var gi17 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/rowsoil.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi17.addData(data);

    giCluster17.addLayers(gi17.getLayers());

    gi17.remove();
});

var gi18 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/soiltreepit.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi18.addData(data);

    giCluster18.addLayers(gi18.getLayers());

    gi18.remove();
});

var gi19 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/sspipe.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi19.addData(data);

    giCluster19.addLayers(gi19.getLayers());

    gi19.remove();
});
var gi20 = L.geoJSON(null, {
    style: function (feature) {
    return feature.properties && feature.properties.style;
},
    onEachFeature: onEachFeaturePoint,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: smallLeafIcon })}});

$.getJSON("./gi/ssstorage.geojson", function (data) {
    // Do NOT create the GeoJSON layer here.
    // Create it outside and then fill the data
    gi20.addData(data);

    giCluster20.addLayers(gi20.getLayers());

    gi20.remove();
});



