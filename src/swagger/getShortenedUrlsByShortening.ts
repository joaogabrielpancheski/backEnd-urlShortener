export default {
  "/url/shortening/{shortening}": {
    get: {
      tags: ["URLs"],
      summary: "Busca uma URL encurtada pelo encurtamento",
      description:
        "Retorna os dados de uma URL encurtada conforme o encurtamento",
      operationId: "getShortenedUrlsByShortening",
      parameters: [
        {
          name: "shortening",
          in: "path",
          type: "string",
          required: true,
        },
      ],
      responses: {
        "200": {
          description: "Sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                    description: "ID da URL",
                  },
                  long: {
                    type: "string",
                    description: "URL original",
                  },
                  short: {
                    type: "string",
                    description: "URL encurtada",
                  },
                  createdAt: {
                    type: "string",
                    description: "Data do encurtamento",
                  },
                },
              },
            },
          },
        },
        "404": {
          description: "URL não encontrada",
        },
      },
    },
  },
};
