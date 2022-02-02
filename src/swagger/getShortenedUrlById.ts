export default {
  "/url/id/{id}": {
    get: {
      tags: ["URLs"],
      summary: "Busca uma URL encurtada pelo ID",
      description: "Retorna os dados de uma URL encurtada conforme o ID",
      operationId: "getShortenedUrlById",
      parameters: [
        {
          name: "id",
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
