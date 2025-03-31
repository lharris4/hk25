function define_markers(config) {
    return Object.fromEntries(Object.entries(config).map(([k, v]) => {
        return [k, L.AwesomeMarkers.icon(v)];
    }));
}
