import { createBuilder } from "@ibnlanre/builder";
import { role } from "./roles";
import { user } from "./user";

export const builder = createBuilder({
  user,
  role,
});
