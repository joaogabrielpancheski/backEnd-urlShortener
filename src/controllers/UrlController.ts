import { Request, Response } from "express";

import throwError from "../errors/throwError";
import urlService from "../services/urlService";

class UrlController {
  public async shortenUrl(req: Request, res: Response): Promise<Response> {
    try {
      const url = await urlService.shortenUrl(req.body.url);

      return res.json(url);
    } catch (error) {
      return throwError(error, res);
    }
  }

  public async getShortenedUrlById(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const url = await urlService.getShortenedUrlById(req.params.id);

      return res.json(url);
    } catch (error) {
      return throwError(error, res);
    }
  }

  public async getShortenedUrlsByDate(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const urls = await urlService.getShortenedUrlsByDate(req.params.date);

      return res.json(urls);
    } catch (error) {
      return throwError(error, res);
    }
  }

  public async getShortenedUrlsByShortening(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const url = await urlService.getShortenedUrlsByShortening(
        req.params.shortening
      );

      return res.json(url);
    } catch (error) {
      return throwError(error, res);
    }
  }

  public async redirectByShortening(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    try {
      const { long } = await urlService.getShortenedUrlsByShortening(
        req.params.shortening
      );

      return res.redirect(`https://${long}`);
    } catch (error) {
      return throwError(error, res);
    }
  }
}

export default UrlController;
