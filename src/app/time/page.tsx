export const dynamic = 'force-dynamic'

export default async function Home() {
  const res = await fetch(
    'https://worldtimeapi.org/api/timezone/Europe/Bratislava',
    {
      cache: 'no-store',
    }
  );
  const data: { datetime: string } = await res.json();

  return (
    <main>
      Current time: {data.datetime}
    </main>
  );
}
