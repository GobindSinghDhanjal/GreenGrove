import AllEvents from "./components/AllEvents";
import Banner from "./components/Banner";
// import Map from "./components/Map";
import Weather from "./components/Weather";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./components/Map"), { ssr:false })

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
