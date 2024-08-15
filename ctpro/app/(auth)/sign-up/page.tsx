export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-3 py-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
