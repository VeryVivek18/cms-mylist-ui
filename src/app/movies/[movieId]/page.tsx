import RatingStar from "@/components/client/RatingStar";
import ReviewsComponent from "@/components/server/ReviewsComponent";
import { SECURE_HOST } from "@/constants/api";
import client from "@/graphql/client";
import { getMovie } from "@/graphql/queries/getMovie.graphql";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = { params: { movieId: number } };

async function getMovieData(movieId: number): Promise<Movie> {
  const { data } = await client.query({
    query: getMovie,
    variables: { movieId: movieId },
  });
  return data.movie.data;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // get movie data
  const movie: Movie = await getMovieData(params.movieId);

  // generate metadata
  return {
    title: movie.attributes.title,
    description: movie.attributes.description,
  };
}

async function MoviePage({ params }: { params: { movieId: number } }) {
  // get movie data
  const movie: Movie = await getMovieData(params.movieId);
  // generate ui
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row pb-2 border-b-2 border-slate-300">
        <Image
          src={SECURE_HOST + movie.attributes.media.data[0].attributes.url}
          alt={"Hero Img"}
          width={300}
          height={300}
          className="w-40 h-40 inline-flex"
        />
        <div className="mx-3">
          <h1 className="font-bold text-3xl hover:underline">
            {movie.attributes.title}
          </h1>
          <h2 className="max-w-3xl text-justify font-medium text-sm text-slate-600">
            {movie.attributes.description}
          </h2>
          <div className="flex flex-row items-center ">
            <div className="pr-2 font-medium text-lg text-slate-700">
              Rating :
            </div>
            <RatingStar
              value={movie.attributes.rating}
              size={35}
              showTooltip={true}
            />
          </div>
          <div className="font-medium text-lg text-slate-700">
            Release Date : {movie.attributes.release_date.toString()}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <h2 className=" text-lg text-slate-700">Reviews :</h2>
        <ReviewsComponent reviews={movie.attributes.reviews.data} />
      </div>
    </div>
  );
}

export default MoviePage;
