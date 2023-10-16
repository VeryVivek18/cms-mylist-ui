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
    reviews: {
      data: [Review];
    };
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

interface Review {
  id: string;
  attributes: {
    review_text: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}
