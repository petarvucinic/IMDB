import React from "react";
import { Grid } from "@mantine/core";
import { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../../MovieProvider";

const MovieCards = () => {
  const { movies } = useContext(MovieContext);

  // fetchApi();
  return (
    <Grid >
      {movies.length > 0
        ? movies.map((movie, index) => {
            return (
              <Grid.Col key={index} md={6} lg={3}>
                <Movie movie={movie} />
              </Grid.Col>
            );
          })
        : ""}
    </Grid>
  );
};

export default MovieCards;
