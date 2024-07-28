import AllEvents from "./components/AllEvents";
import Banner from "./components/Banner";
import Map from "./components/Map";
import Weather from "./components/Weather";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="sub-container">
        <Weather />
        <Map />
        <AllEvents />
      </div>
    </div>
  );
}
