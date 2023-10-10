declare module "*.graphql";

interface Movie {
  id: string;
  attributes: {
    title: string;
    description: string;
    rating: number;
    release_date: Date;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    media: Media;
  };
}

interface Media {
  data: [
    {
      id: string;
      attributes: {
        url: string;
      };
    }
  ];
}
