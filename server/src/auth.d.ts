import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string
      name: number
      avatarUrl: number
    } // user type is return type of `request.user` object
  }
}
