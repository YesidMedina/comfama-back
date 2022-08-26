const EntitiesFilter = require("../InformationsFilter");

jest.mock("../../../infrastructure/externalRepositories");

describe("orden de usuarios", () => {
  it("Obtener compañía con uid", async () => {
    const startId = "1";
    const endId = "20";

    const response = await EntitiesFilter(startId, endId);
    expect(response).toEqual({
      startId,
      content: [
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
        {
          status: "SUCCESS",
          statusCode: 200,
        },
      ],
      endId: "20",
      mesagge: "OK",
      startId: "1",

      statusCode: 200,
    });
  });

  it("Ocurrió un error - Id no encontrado", async () => {
    const startId = "1";
    const endId = "22";
    const response = await EntitiesFilter(startId, endId);
    expect(response).toEqual({
      message: "Error no se encuentra para rango especificado",
      statusCode: 404,
    });
  });
});
