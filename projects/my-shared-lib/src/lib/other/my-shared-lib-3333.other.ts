// noinspection JSUnusedGlobalSymbols
export const remoteObj3333A = { a: 1 }

// noinspection JSUnusedGlobalSymbols
export const remoteObj3333B = { b: 2 }

// consuming host cannot see this since interfaces are a compile time only construct
export interface ModMyRemote3333Service {
  hello: (msg?: string | null) => void
}
