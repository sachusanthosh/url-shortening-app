const API_BASE_URL = "http://localhost:3000"; // Update this if your backend is hosted elsewhere

export const shortenUrl = async (longUrl) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ longUrl }),
    });

    if (!response.ok) {
      throw new Error("Failed to shorten URL");
    }

    const data = await response.json();
    return data.url.shortUrl;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
};