import PlaceProps from "./PlaceInterface";

function Place(props: PlaceProps): JSX.Element {
  return (
    <div id={props.linkId}>
      <h2>
        <strong>{props.title}</strong>
      </h2>
      <img src={props.mainImage} alt={props.imageAlt} />
      <h4>
        {props.placeName}, {props.countryName} (
        <a href={props.locationMap}>
          <em>map link</em>
        </a>
        )
      </h4>
      <p>{props.description}</p>
      <iframe src={props.miniMap} title={props.mapTitle}></iframe>
    </div>
  );
}

export default Place;
