import WebsiteQR from "./qr";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-brown-700 mb-2">
          🍪 Crumbella Innovative Foods
        </h1>

        <p className="text-gray-700 mb-6">
          Our cookie store is baking something special.
          <br />
          We’re launching soon!
        </p>

        {/* <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition">
          Notify Me
        </button>

        <p className="text-xs text-gray-500 mt-4">© 2025 Crumbella Innovative Foods</p> */}
        <WebsiteQR />
      </div>
    </div>
  );
}
