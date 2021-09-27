import { Context } from "./context";

export type Middleware<EnvironmentType = Record<string, any>, ParamsType = any, StateType = any> = (
  ctx: Context<EnvironmentType, ParamsType, StateType>,
  next: MiddlewareNextFunction,
) => Promise<any>;

/** A synchronous middleware only makes sense for a final handler */
export type SyncMiddleware<EnvironmentType = Record<string, any>, ParamsType = any, StateType = any> = (
  ctx: Context<EnvironmentType, ParamsType, StateType>,
  next: MiddlewareNextFunction,
) => any;

export type MiddlewareNextFunction = () => (Promise<any> | any);
