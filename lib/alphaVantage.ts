const BASE_URL = 'https://www.alphavantage.co/query';
const API_KEY = process.env.NEXT_PUBLIC_ALPHAVANTAGE_KEY;

export async function getCompanyOverview(symbol: string) {
  const url = `${BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url, {
    next: { revalidate: 60 * 60 }, // cache for 1 hour
  });
  return res.json();
}

export async function getDailyPrices(symbol: string) {
  const url = `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`;
  const res = await fetch(url, {
    next: { revalidate: 60 * 60 }, // cache for 1 hour
  });
  return res.json();
}
