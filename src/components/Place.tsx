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
      <img
        src={props.mainImage}
        alt={props.imageAlt}
      />
      <h3>{props.title}</h3>
      <h4>
        {props.placeName}, {props.countryName} (
        <a href={props.locationMap}><em>map link</em></a>)
      </h4>
      <p>
        <em>{props.description}</em>
      </p>
    </div>
  );
}

export default Place;
