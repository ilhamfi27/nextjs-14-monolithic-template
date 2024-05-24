import * as UUID from 'uuid';
import { AsyncLocalStorage } from 'async_hooks';
import { Nullable } from '@/src/@types/nullable';
import { UserEntity } from '../models/user';

export interface Context {
  user: Nullable<UserEntity>;
  record?: Record<string, any>;
}

export class RequestContext {
  static readonly contextMap: Map<string, Context> = new Map();
  static readonly asyncLocalStorage = new AsyncLocalStorage<string>();
  static async startContext<T>(handler: () => void | Promise<T>) {
    const contextId = UUID.v4();
    const initialContext: Context = {
      user: null,
    };
    RequestContext.contextMap.set(contextId, initialContext);
    const res = await RequestContext.asyncLocalStorage.run(contextId, handler);
    RequestContext.contextMap.delete(contextId);
    return res as T;
  }
  static getContext(): Context {
    const id = RequestContext.asyncLocalStorage.getStore();

    return RequestContext.contextMap.get(id as string) || ({} as Context);
  }
  static setContext(data: Partial<Context>): void {
    const id = RequestContext.asyncLocalStorage.getStore();
    const context = RequestContext.getContext();
    RequestContext.contextMap.set(id as string, {
      ...context,
      ...data,
    });
  }
}
