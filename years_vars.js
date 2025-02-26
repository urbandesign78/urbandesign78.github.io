function onEachFeature(feature, layer) {
    var popupContent = "<h4> Borough: " + feature.properties.boroname +
        "</h4><h5> NTA Name: " + feature.properties.ntaname +
        "</h5> This NTA has a total of " +  feature.properties.total + " flood calls from 311" +
        "</br> with " + feature.properties.totalcb + " catch basins, " + feature.properties.totalgi +
        " green infrastructure projects, and " + feature.properties.totalst +
        " wetland street trees. " + "</p>";
    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);

    layer.on({
        click: function (e) { map.fitBounds(e.target.getBounds()) },
        mouseover: function (e) { e.target.setStyle({ fillOpacity: 0}) },
        mouseout: function (e) { e.target.setStyle({ fillOpacity:0.8}) }
    });
}

var nycTot = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColorTot(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntafloodfin.geojson", function(data) {
    nycTot.addData(data);
    fuse = new Fuse(data.features, {
        keys: [
        'properties.boroname',
        'properties.ntaname',
        'properties.total'
        ]  
    }) 
})

//2010 

var nyc2010 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2010.geojson", function(data) {
nyc2010.addData(data);
})

//2011

var nyc2011 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2011.geojson", function(data) {
nyc2011.addData(data);
})

//2012

var nyc2012 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2012.geojson", function(data) {
nyc2012.addData(data);
})


//2013

var nyc2013 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2013.geojson", function(data) {
nyc2013.addData(data);
})

//2014

var nyc2014 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2014.geojson", function(data) {
nyc2014.addData(data);
})

//2015 

var nyc2015 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2015.geojson", function(data) {
nyc2015.addData(data);
})

//2016

var nyc2016 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2016.geojson", function(data) {
nyc2016.addData(data);
})

//2017

var nyc2017 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2017.geojson", function(data) {
nyc2017.addData(data);
})

//2018

var nyc2018 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2018.geojson", function(data) {
nyc2018.addData(data);
})

//2019

var nyc2019 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2019.geojson", function(data) {
nyc2019.addData(data);
})

//2020

var nyc2020 = L.geoJSON(null, {
    style: function (feature) {
        return { fillColor: getColor(feature.properties.total),
                weight: 2,
                opacity: 1,
                color: "grey",
                dashArray: '3',
                fillOpacity: 0.8 };
    },
    onEachFeature: onEachFeature
    });

$.getJSON("ntaflood2020.geojson", function(data) {
nyc2020.addData(data);
})

var fuse;
            
var searchControl = new L.Control.Search({
    layer: nycTot,
    position: "topright",
    propertyName: 'ntaname',
    marker: false,
    moveToLocation: function (latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
    },
    filterData: function (text, records) {
        var jsons = fuse.search(text),
            ret = {}, key;

        for (var i in jsons) {
            key = jsons[i].properties.ntaname;
            ret[key] = records[key];
        }
        return ret;
    }
});

searchControl.on('search:locationfound', function (e) {

}).on('search:collapsed', function (e) {

});

