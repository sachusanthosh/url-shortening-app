import { useState } from "react";
import { shortenUrl } from "../api/urlShortener/";

const InputUrl = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(null);

  const handleShortenUrl = async () => {
    try {
      const shortUrl = await shortenUrl(longUrl);
      setShortUrl(shortUrl);
      setError(null);
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 bg-custom-bg text-white mt-3">
      <div className="tagline flex flex-col items-center space-y-4">
        <h1 className="font-extrabold text-6xl text-gradient-v2 py-3">
          Shorten Your Looong Links :&#41;{" "}
        </h1>
        <p className="text-sm text-[#C9CED6]">
          Shortify is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>
      <div className="url-manipulation space-y-6">
        <div className="input-url flex items-center justify-between space-x-2 bg-custom-bg-alt border-2 border-[#353C4A] rounded-full p-1 w-[40rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <input
            type="url"
            className="flex-1 bg-transparent border-none outline-none text-sm"
            placeholder="https://example.com"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button
            className="bg-[#144EE3] font-semibold text-white px-6 py-2 rounded-full text-sm transform transition duration-200 active:scale-90"
            onClick={handleShortenUrl}
          >
            Shortify <i className="fa-solid fa-wand-magic-sparkles"></i>
          </button>
        </div>

        {error && (
          <div className="bg-red-500 text-white p-2 rounded-md">
            {error}
          </div>
        )}

        {shortUrl && (
          <div className="shortened-url flex flex-col items-center space-y-4">
            <p>Your shortened URL:</p>
            <div className="flex items-center space-x-2 bg-custom-bg-alt border-2 border-[#353C4A] rounded-full p-1 w-[30rem]">
              <input
                type="text"
                className="flex-1 bg-transparent border-none outline-none text-sm px-2"
                value={`http://localhost:3000/${shortUrl}`}
                readOnly
              />
              <button
                className="bg-[#144EE3] font-semibold text-white px-6 py-2 rounded-full text-sm transform transition duration-200 active:scale-90"
                onClick={() => navigator.clipboard.writeText(`http://localhost:3000/${shortUrl}`)}
              >
                <i className="fa-regular fa-copy"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputUrl;