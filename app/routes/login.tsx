import type { LinksFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";
import stylesUrl from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Login() {
  const [searchParams] = useSearchParams();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        <form className="space-y-6" method="post">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="block w-full bg-gray-200 border-transparent rounded-lg focus:bg-white focus:border-blue-400 focus:ring-0 text-black"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full bg-gray-200 border-transparent rounded-lg focus:bg-white focus:border-blue-400 focus:ring-0 text-black"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 w-40 text-white font-semibold bg-gradient-to-br from-blue-400 to-blue-600 rounded-md shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
