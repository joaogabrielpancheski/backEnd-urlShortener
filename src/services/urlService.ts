import { PrismaClient, Url } from "@prisma/client";
import { nanoid } from "nanoid/async";

import AppError from "../errors/AppError";

const prisma = new PrismaClient();

async function shortenUrl(longUrl: string): Promise<Url> {
  const short = await nanoid(6);

  const url = await prisma.url.create({
    data: {
      long: longUrl,
      short,
    },
  });

  return {
    ...url,
    short: `${process.env.API_URL}/${short}`,
  };
}

async function getShortenedUrlById(id: string): Promise<Url> {
  const url = await prisma.url.findUnique({
    where: {
      id,
    },
  });

  if (!url) throw new AppError("URL not found", 404);

  return {
    ...url,
    short: `${process.env.API_URL}/${url.short}`,
  };
}

async function getShortenedUrlsByDate(date: string): Promise<Url[]> {
  const [year, month, day] = date.split("-");
  const endDate = [year, month, Number(day) + 1].join("-");

  const urls = await prisma.url.findMany({
    where: {
      createdAt: {
        gte: new Date(date),
        lt: new Date(endDate),
      },
    },
  });

  const updatedUrls = urls.map((url) => ({
    ...url,
    short: `${process.env.API_URL}/${url.short}`,
  }));

  return updatedUrls;
}

async function getShortenedUrlsByShortening(shortUrl: string): Promise<Url> {
  console.log(shortUrl);
  const url = await prisma.url.findFirst({
    where: {
      short: shortUrl,
    },
  });

  if (!url) throw new AppError("URL not found", 404);

  console.log(url);

  return {
    ...url,
    short: `${process.env.API_URL}/${url.short}`,
  };
}

export default {
  shortenUrl,
  getShortenedUrlById,
  getShortenedUrlsByDate,
  getShortenedUrlsByShortening,
};
