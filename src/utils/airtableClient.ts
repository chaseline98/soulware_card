export const airtableFetch = async (table: string, method: string, body?: any) => {
  const apiKey = process.env.AIRTABLE_API_KEY!;
  const baseId = process.env.AIRTABLE_BASE_ID!;
  const url = `https://api.airtable.com/v0/${baseId}/${table}`;

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(await res.text());
    throw new Error(`Airtable error: ${res.status}`);
  }

  return await res.json();
};
