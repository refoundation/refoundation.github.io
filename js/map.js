var map = AmCharts.makeChart("mapdiv", {
    type: "map",
    theme: "light",
    panEventsEnabled: true,
    backgroundColor: "#535364",
    backgroundAlpha: 1,
    zoomControl: {
        zoomControlEnabled: true
    },
    dataProvider: {
        map: "usaHigh",
        getAreasFromMap: true,
        areas:
        [
            {
                "id": "US-AK",
                "showAsSelected": true
            },
            {
                "id": "US-CA",
                "showAsSelected": true
            },
            {
                "id": "US-GA",
                "showAsSelected": true
            },
            {
                "id": "US-IL",
                "showAsSelected": true
            },
            {
                "id": "US-MA",
                "showAsSelected": true
            },
            {
                "id": "US-MD",
                "showAsSelected": true
            },
            {
                "id": "US-NC",
                "showAsSelected": true
            },
            {
                "id": "US-NE",
                "showAsSelected": true
            },
            {
                "id": "US-NJ",
                "showAsSelected": true
            },
            {
                "id": "US-NV",
                "showAsSelected": true
            },
            {
                "id": "US-NY",
                "showAsSelected": true
            },
            {
                "id": "US-OK",
                "showAsSelected": true
            },
            {
                "id": "US-OR",
                "showAsSelected": true
            },
            {
                "id": "US-TX",
                "showAsSelected": true
            }
        ]
    },
    areasSettings: {
        autoZoom: true,
        color: "#B4B4B7",
        colorSolid: "#9E0000",
        selectedColor: "#9E0000",
        outlineColor: "#666666",
        rollOverColor: "#F50000",
        rollOverOutlineColor: "#000000"
    }
});