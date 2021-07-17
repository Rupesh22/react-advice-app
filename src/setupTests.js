import "@testing-library/jest-dom/extend-expect";

import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://api.adviceslip.com/advice", (req, res, ctx) => {
    return res(
      ctx.json({ slip: { id: 9800, advice: "It's always the quiet ones...." } })
    );
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
