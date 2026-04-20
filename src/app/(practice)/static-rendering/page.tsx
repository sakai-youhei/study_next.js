import Box from "@/components/Box";
import StaticClientComponent from "@/components/StaticClientComponent";
import StaticServerComponent from "@/components/StaticServerComponent";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { logout } from "@/actions/logout";
import { notFound, redirect } from "next/navigation";

const StaticRenderingPage = async () => {
  const cookiStore = await cookies()
  const token = cookiStore.get("token")?.value ?? "なし"
  if (token !== "abc") notFound()
  return (
    <Box>
      <h1>Static Rendering Page</h1>
      <p>Token: {token}</p>
      <StaticServerComponent text="Static Server Componentへのprops" />
      <StaticClientComponent text="Static Client Componentへのprops" />
      <img src="/150x150.png" alt="Sample Image" width={150} height={150} />
      <Link href="/practice/streaming-ssr" prefetch={true}>
        Go to Streaming SSR
      </Link>
      <Link href="/dynamic-rendering" prefetch={true}>
        Go to Dynamic Rendering
      </Link>
      <Link href="/intercepting-route" >
        Go to Intercepting Route
      </Link>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </Box>
  );
};

export default StaticRenderingPage;
