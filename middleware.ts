export { default } from "next-auth/middleware"

// import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server";

// export default withAuth(
//     function middleware(req) {
//         console.log(req.nextauth);
//         if (
//             req.nextUrl.pathname === "/admin-dashboard" &&
//             req.nextauth.token?.role !== "admin"
//         ) {
//             return new NextResponse("You are not authorized!");
//         }
//     },
//     {
//         // pages: {
//         //     signIn: "/login",
//         // },
//         callbacks: {
//             authorized: (params) => {
//                 let { token } = params;
//                 return !!token;
//             },
//         },
//     }
// )

// export const config = {
//     matcher: ['/grimoire/:path*', '/adventures/:path*'], // Rotas protegidas pelo middleware
// };
