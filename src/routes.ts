import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";

import UrlController from "./controllers/UrlController";

const routes = Router();
const urlController = new UrlController();

routes.get(
  "/:shortening",
  celebrate({
    [Segments.PARAMS]: {
      shortening: Joi.string().min(6).max(6).required(),
    },
  }),
  urlController.redirectByShortening
);

routes.post(
  "/url",
  celebrate({
    [Segments.BODY]: {
      url: Joi.string().required(),
    },
  }),
  urlController.shortenUrl
);

routes.get(
  "/url/id/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  urlController.getShortenedUrlById
);

routes.get(
  "/url/date/:date",
  celebrate({
    [Segments.PARAMS]: {
      date: Joi.string()
        .pattern(/^[0-9]{4}-{1}[0-9]{2}-{1}[0-9]{2}$/)
        .required(),
    },
  }),
  urlController.getShortenedUrlsByDate
);

routes.get(
  "/url/shortening/:shortening",
  celebrate({
    [Segments.PARAMS]: {
      shortening: Joi.string().min(6).max(6).required(),
    },
  }),
  urlController.getShortenedUrlsByShortening
);

export default routes;
