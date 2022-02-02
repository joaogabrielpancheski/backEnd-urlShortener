export default {
  "/url/date/{date}": {
    get: {
      tags: ["URLs"],
      summary: "Busca todas as URLs encurtadas em uma data",
      description:
        "Retorna os dados de uma URL encurtada em uma data específica",
      operationId: "getShortenedUrlsByDate",
      parameters: [
        {
          name: "date",
          description: "Formato: YYYY-MM-DD",
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
                type: "array",
                items: {
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
        },
      },
    },
  },
};
