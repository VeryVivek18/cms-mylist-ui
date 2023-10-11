import React from "react";
import Image from "next/image";
import { SECURE_HOST } from "@/constants/api";
import client from "@/graphql/client";
import { Movies } from "@/graphql/queries/getMovies.graphql";

async function MoviesComponent() {
  const { loading, error, data } = await client.query({ query: Movies });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <div className="container mx-auto px-4">
      {data.movies.data.map((movie: Movie) => {
        return (
          <div key={movie.id} className="rounded-md border-black">
            <p>
              <Image
                src={
                  SECURE_HOST + movie.attributes.media.data[0].attributes.url
                }
                width={200}
                height={200}
                alt="superhero"
                className="w-24 h-24 rounded-full inline-block"
              />
              <span className="text-3xl font-bold underline pl-2">
                Name : {movie.attributes.title}
              </span>
            </p>
            <div>Description : {movie.attributes.description}</div>
            <div>Rating : {movie.attributes.rating}</div>
            <div>Release Date : {movie.attributes.release_date.toString()}</div>
            <hr className="bg-grey-600 p-1" />
          </div>
        );
      })}
    </div>
  );
}

export default MoviesComponent;
