import { Grid } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <div className="event-details sub-container">
        <Grid container>
          <Grid item xs={12} md={8}>
            <h1>Title of the event</h1>
          </Grid>
          <Grid item xs={12} md={4}>
            <button>Join Now</button>
          </Grid>
        </Grid>
        <hr />
        <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et ante
          mattis, lacinia turpis placerat, luctus magna. In arcu lectus, maximus
          in porta eu, finibus nec augue. Phasellus eget imperdiet odio. Aliquam
          erat volutpat. Phasellus ac dapibus ante. Nullam eleifend sapien non
          justo aliquam, tristique pellentesque orci dictum. Nulla pretium
          pulvinar cursus. Duis sit amet dolor ac orci tincidunt viverra. Donec
          eget nisl et eros bibendum laoreet at sed erat. Curabitur dapibus
          mauris sodales lobortis vehicula. Fusce vitae ante congue, consequat
          turpis nec, placerat justo. Sed a hendrerit nibh. Aliquam blandit
          ultricies metus, sit amet commodo enim. Mauris non lectus eros.
          Quisque rutrum turpis vel consectetur maximus. Nam eleifend porta
          nulla nec lacinia. Duis quis tortor eget quam commodo suscipit quis in
          ante. Donec bibendum dui et lacus lobortis, in molestie ex posuere.
          Curabitur consectetur varius ornare. Nam vel ultricies metus. Nunc
          dictum diam sit amet quam accumsan, non finibus metus rutrum. Nullam
          sollicitudin diam pretium, mollis nibh at, placerat libero. Maecenas
          facilisis semper nisi, non malesuada arcu efficitur vel. Morbi
          efficitur suscipit nulla. Etiam non urna nec augue posuere elementum
          et sit amet libero. In vehicula porttitor commodo. Nam non laoreet
          dui, vitae euismod elit.
        </p>
      </div>
    </div>
  );
};

export default page;
