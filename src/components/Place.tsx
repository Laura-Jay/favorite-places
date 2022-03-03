interface PlaceProps {
  title: string;
  placeName: string;
  countryName: string;
  mainImage: string;
  imageAlt: string;
  locationMap: string;
  miniMap: string;
  mapTitle: string;
  description: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <div>
      <img src={props.mainImage} alt={props.imageAlt} />
      <h3>
        <strong>{props.title}</strong>
      </h3>
      <h4>
        {props.placeName}, {props.countryName} (
        <a href={props.locationMap}>
          <em>map link</em>
        </a>
        )
      </h4>
      <p>
        <em>{props.description}</em>
      </p>
      <iframe src={props.miniMap} title={props.mapTitle}></iframe>
    </div>
  );
}

export default Place;
