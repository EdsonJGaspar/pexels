import { NextRequest, NextResponse } from "next/server";

const publicRoots = [
  { path: "/login", whenAuthenticated: "redirect" },
  { path: "/register", whenAuthenticated: "redirect" },
  { path: "/", whenAuthenticated: "next" },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";

//
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoot = publicRoots.find((route) => route.path === path);
  const authToken = request.cookies.get("token");
  //console.log("Funcionou. ", path);
  //Se usuario nao estuver autenticado e quer acessar uma rota pubica.
  if (!authToken && publicRoot) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoot) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    //Nao pode rotarnar so o path porque o redirect redireciona a utl completa.
    //return NextResponse.redirect("/login");
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoot && publicRoot.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoot) {
    //Verificar se JWT esta expirado, sem bater na API

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
