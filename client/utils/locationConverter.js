//Properly format an input of latitude and longitude so that it can be successfully converted into a geometry object

export default function locationConverter(latitude, longitude) {
    return { location: { type: "Point", coordinates: [latitude, longitude] } };
}