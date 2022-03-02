interface PlaceProps {
title: string;
placeName: string;
countryName: string;
mainImage: string;
imageAlt: string;
locationMap: string;
description: string;
}

function Place(props: PlaceProps): JSX.Element {
    return (
        <div>
            <img src={props.mainImage} alt={props.imageAlt}/>
            <h2>{props.title}</h2>
            <h3>{props.placeName}, {props.countryName} (<a href={props.locationMap}>map link</a>)</h3>
            <p>
                <em>{props.description}</em>
            </p>
        </div>
    )
}


export default Place;

/*a title (text)
a place name (text)
a country name (text)
a main image (URL)
a link to the rough location on google maps (or alternative) (URL)
some text explaining why you like the place
