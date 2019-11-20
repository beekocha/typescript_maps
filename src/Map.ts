//Creating instructions for method 'addMarker',
//So we can use any other classes here with arguments likes these
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    markerInfo(): string;
}

export class Map {
    private googleMap: google.maps.Map;

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    };

    addMarker (mappable: Mappable ) : void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        })

        marker.addListener('click', ()=>{
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerInfo()
            }) 
            infowindow.open(this.googleMap, marker)
        })
    };
}