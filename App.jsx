const ShowTitle = (props) => {
  return <h1>{props.season}</h1>;
};

const Episode = (props) => {
  return (
    <p>
      {props.episode.name} {props.episode.views.toLocaleString("en-us")}
    </p>
  )
}




const Episodes = (props) => {
  return (
    <>
      <Episode episode={props.episodes[0]}/>
      <Episode episode={props.episodes[1]}/>
      <Episode episode={props.episodes[2]}/>
    </>
  );
};

const TotalSeasonViews = (props) => {
  return (
    <p>
      Seinfeld Season 1, Number of Views{" "}
      {(props.episodes[0].views + props.episodes[1].views + props.episodes[2].views).toLocaleString("en-us")}
    </p>
  );
};

const seinfeldSeason1 = {
  season: "Seinfeld Season 1",
  episodes: [
    {name: "Good News, Bad News", views: 6905040},
    {name: "The Stakeout", views: 3905040},
    {name: "The Robbery", views: 4498237},
  ]
}

const App = () => {
  // const season = "Seinfeld Season 1";
  // const episode1 = "Good News, Bad News";
  // const viewsEp1 = 6905040;
  // const episode2 = "The Stakeout";
  // const viewsEp2 = 3905040;
  // const episode3 = "The Robbery";
  // const viewsEp3 = 4498237;
  return (
    <div>
      <ShowTitle season={seinfeldSeason1.season} />
      <Episodes episodes={seinfeldSeason1.episodes} />
      <TotalSeasonViews
        season={seinfeldSeason1.season}
        episodes={seinfeldSeason1.episodes}
      />
    </div>
  );
};

export default App;