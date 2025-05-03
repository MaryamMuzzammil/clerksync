import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
        {/* Logo or App Name */}
        <div className="text-xl font-bold text-gray-800">
          MyApp
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>

        {/* User Button */}
        <div>
          <UserButton />
        </div>
      </nav>

      <main className="p-6">
        <h1 className="text-2xl font-semibold">Welcome to the Home Page</h1>
        <p className="mt-2 text-gray-600">This is some sample content.</p>
      </main>
    </>
  );
}
