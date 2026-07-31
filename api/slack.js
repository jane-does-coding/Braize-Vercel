const headers = {
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  'Content-Type': 'application/json',
};

async function slack(path, token) {
  const response = await fetch(`https://slack.com/api/${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.ok ? response.json() : null;
}

export async function GET() {
  const token = process.env.SLACK_BOT_TOKEN;
  const channelId = process.env.SLACK_BRAIZE_CHANNEL_ID;
  if (!token) return Response.json({ memberCount: null, emoji: {} }, { headers });

  const [channel, emojiList] = await Promise.all([
    channelId
      ? slack(`conversations.info?channel=${encodeURIComponent(channelId)}&include_num_members=true`, token)
      : null,
    slack('emoji.list', token),
  ]);

  const emoji = Object.fromEntries(
    Object.entries(emojiList?.emoji || {}).filter(([, url]) => typeof url === 'string' && !url.startsWith('alias:'))
  );

  return Response.json({
    memberCount: typeof channel?.channel?.num_members === 'number' ? channel.channel.num_members : null,
    emoji,
  }, { headers });
}
