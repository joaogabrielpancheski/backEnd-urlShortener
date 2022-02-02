export default {
  "/url": {
    post: {
      tags: ["URLs"],
      summary: "Encurtar uma URL",
      description: "Retorna os dados de uma URL encurtada",
      operationId: "shortenUrl",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                url: {
                  type: "string",
                },
              },
            },
          },
        },
      },
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
