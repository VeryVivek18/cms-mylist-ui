import { SECURE_HOST } from "@/constants/api";
import client from "@/graphql/client";
import { Movies } from "@/graphql/queries/getMovies.graphql";
import Image from "next/image";
import Link from "next/link";
import RatingStar from "@/components/client/RatingStar";

async function MoviesListComponent() {
  const { loading, error, data } = await client.query({ query: Movies });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <div
      className="flex flex-wrap
    sm:justify-evenly  lg:justify-start
    mx-auto px-4 "
    >
      {data.movies.data.map((movie: Movie) => {
        return (
          <article
            key={movie.id}
            className="w-80 h-60 m-2 p-2
            border-solid border-2 border-slate-300 rounded 
            bg-white
            shadow-lg hover:shadow-xl"
          >
            <div className="flex flex-row mb-2">
              <Image
                src={
                  SECURE_HOST + movie.attributes.media.data[0].attributes.url
                }
                width={200}
                height={200}
                alt="superhero"
                className="w-24 h-24 rounded-full inline-block"
              />
              <div className="flex flex-col justify-center">
                <Link
                  href={`/movies/${movie.id}`}
                  className="text-3xl font-bold underline pl-2"
                >
                  {movie.attributes.title}
                </Link>
                <RatingStar
                  value={movie.attributes.rating}
                  size={20}
                  showTooltip={false}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div>Description : {movie.attributes.description}</div>
              <div>Rating : {movie.attributes.rating}</div>
              <div>
                Release Date : {movie.attributes.release_date.toString()}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default MoviesListComponent;
