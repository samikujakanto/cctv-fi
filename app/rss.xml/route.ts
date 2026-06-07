import { getAllArticles } from "@/lib/articles";

export async function GET() {
  const articles = getAllArticles();
  const base = "https://cctv.fi";

  const items = articles.map((a) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${base}/artikkelit/${a.slug}</link>
      <guid isPermaLink="true">${base}/artikkelit/${a.slug}</guid>
      <description><![CDATA[${a.excerpt}]]></description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <author>CCTV.fi toimitus</author>
      <category>${a.category}</category>
      ${a.tags.map((t) => `<category>${t}</category>`).join("")}
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>CCTV.fi – Kameravalvonnan tietopankki</title>
    <link>${base}</link>
    <description>Suomen kattavin kameravalvonnan tietopankki – lainsäädäntö, GDPR, vertailut, oppaat ja tekoäly.</description>
    <language>fi</language>
    <managingEditor>toimitus@cctv.fi (CCTV.fi toimitus)</managingEditor>
    <webMaster>toimitus@cctv.fi</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${base}/logo.png</url>
      <title>CCTV.fi</title>
      <link>${base}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
