import React from "react";
import client from "../../../graphql/client";
import { Movies } from "../../../graphql/queries/getMovies.graphql";
import Image from "next/image";

async function Page() {
  const { loading, error, data } = await client.query({ query: Movies });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <div>
      {data.movies.data.map((movie: Movie) => {
        console.log(movie);
        return (
          <div key={movie.id}>
            <Image
              src={
                "http://localhost:1337" +
                movie.attributes.media.data[0].attributes.url
              }
              width={500}
              height={500}
              alt="superhero"
            />
            <div>Name : {movie.attributes.title}</div>
            <div>Description : {movie.attributes.description}</div>
            <div>Rating : {movie.attributes.rating}</div>
            <div>Release Date : {movie.attributes.release_date.toString()}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
