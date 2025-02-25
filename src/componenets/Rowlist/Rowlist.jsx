import React from "react";
import Row from "../Row/Row";
import requests from "../../utils/requests";

function Rowlist() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        islargrow={true}
      />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Popular" fetchurl={requests.fetchPopular} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="TV Show" fetchurl={requests.fetchTvShow} />
      <Row title="Upcomings" fetchurl={requests.fetchUpcoming} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Rowlist;
