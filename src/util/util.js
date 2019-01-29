const getRandomLocation = ({ data }) => {
    let floats = data.split("\n");

    let x = floats[0] * 2 * Math.PI - Math.PI;
    let y = floats[1] * 2 - 1;

    let lng = Number(rad2deg(x).toFixed(5));
    let latrad = Math.PI / 2 - Math.acos(y);
    let lat = Number(rad2deg(latrad).toFixed(5));
    let distortion = Math.pow(sec(latrad), 2).toFixed(2);
    // let latlng = new google.maps.LatLng(lat, lng, true);
    return {
        lat,
        lng
    }
}
const rad2deg = (arg) => (360 * arg / (2 * Math.PI));
const sinh = (arg) => (Math.exp(arg) - Math.exp(-arg)) / 2;
const sec = (arg) => 1 / Math.cos(arg);

export default getRandomLocation;