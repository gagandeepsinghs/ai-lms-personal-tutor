export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "ADMIN" | "INSTRUCTOR" | "STUDENT";
    };
  }
}
