import Place from "./Place";
//import { greet } from "../utils/greet";

function MainContent(): JSX.Element {
  return (
    <main>
      <Place
        title={"McLeod Lake"}
        placeName={"British Columbia"}
        countryName={"Canada"}
        mainImage={"https://unsplash.com/photos/oMneOBYhJxY"}
        imageAlt={"A lake in the mountains"}
        locationMap={"https://goo.gl/maps/rg3UF4WUfEhjGAe98"}
        description={
          "Ice melt blue lakes, endless forrests and mountains that touch the sky. "
        }
      />
      <Place
        title={"Matthias Church"}
        placeName={"Budapest"}
        countryName={"Hungary"}
        mainImage={"https://unsplash.com/photos/2TmsyZXMNTE"}
        imageAlt={"Budapest Central Square"}
        locationMap={"https://goo.gl/maps/WdE1mHHxPRdv9Dw38"}
        description={
          "A bustling cultural square filled with beautiful architecture."
        }
      />
      <Place
        title={"Betws-y-Coed"}
        placeName={"Wales"}
        countryName={"UK"}
        mainImage={"https://unsplash.com/photos/Ddp_T92Vjus"}
        imageAlt={"A footpath in the mountains."}
        locationMap={"https://goo.gl/maps/rw2KgmJ258w2hNQz6"}
        description={
          "Long walks, spectacular scenery and 10/10 cream teas!. "
        }
      />
      <Place
        title={"Sheffield"}
        placeName={"England"}
        countryName={"UK"}
        mainImage={"https://unsplash.com/photos/P4ALLoVYiZI"}
        imageAlt={"The industrial city of Sheffield."}
        locationMap={"https://goo.gl/maps/k9HVz1zmgEHGV35L9"}
        description={
          "Hidden in the Peak District, Sheffield is the hidden gem of the North. "
        }
      />
    </main>
  );
}

export default MainContent;
