# NextAuth Session Initialization Error

This repository demonstrates a common error encountered when working with NextAuth.js sessions in Next.js applications. The issue stems from attempting to access the session object before it's fully initialized on the server side, leading to an unhandled runtime error.

## Problem

The provided `bug.js` file attempts to access the NextAuth session directly within a component's function. This approach fails because the `unstable_getServerSession` function requires both `req` and `res` objects, which aren't available in the client-side context. 

## Solution

The `bugSolution.js` file provides a corrected implementation.  It uses `getServerSideProps` to fetch the session on the server before rendering the page. This ensures that the session is properly initialized before being passed to the component, preventing the runtime error.