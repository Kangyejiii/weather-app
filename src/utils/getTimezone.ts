const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Response {
  location: Location;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export const getTimezone = async (location: string): Promise<Response> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/timezone.json?key=${API_KEY}&q=${location}
  `,
    { next: { tags: ["time"] } }
  );

  if (!res.ok) {
    if (!res.ok) throw new Error("getTimezone 에러");
  }
  return res.json();
};
