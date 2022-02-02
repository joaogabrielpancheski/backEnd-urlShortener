import getShortenedUrlById from "./getShortenedUrlById";
import getShortenedUrlsByDate from "./getShortenedUrlsByDate";
import getShortenedUrlsByShortening from "./getShortenedUrlsByShortening";
import shortenUrl from "./shortenUrl";

export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Documentação da API",
    description: "API de encurtamento de URL",
    contact: {
      name: "João Gabriel Pancheski",
      url: "https://www.linkedin.com/in/joaogabrielpancheski/",
    },
  },
  tags: [
    {
      name: "URLs",
    },
  ],
  paths: {
    ...shortenUrl,
    ...getShortenedUrlById,
    ...getShortenedUrlsByDate,
    ...getShortenedUrlsByShortening,
  },
};
