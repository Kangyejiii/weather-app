interface Response {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

export const getTime = async (timeZone: string): Promise<Response> => {
  const res = await fetch(
    `http://timeapi.io/api/Time/current/zone?timeZone=${timeZone}
  `,
    { next: { tags: ["time"] } }
  );

  if (!res.ok) {
    if (!res.ok) throw new Error("getTimezone 에러");
  }
  return res.json();
};
