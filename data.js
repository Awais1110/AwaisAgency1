// Format: ID|Service|Rate per 1000 (Rs) - already x1.8 applied|Min|Max|Average Time   ( # = category )
const RAW = `
# TikTok Views - Cheapest
2536|TikTok Video Views | Cancel Enable | Start Instant | Speed: 10M/Day|1.7487|100|2147483647|4 hours and 26 minutes
2862|TikTok Video Views | High Quality | Cancel Enable | Instant Start | Speed: 10M/Day|5.0942|100|2147483647|2 hours and 12 minutes
2566|TikTok Video Views | Cancel Enable | Instant Start | Speed: 100K/Day|1.5898|1000|100000|5 hours and 14 minutes
2835|TikTok Video Views | Max Unlimited | Instant Start | Day 100M | Recommended|2.7580|100|2147483647|1 hour and 30 minutes
2865|TikTok Video Views | High Quality | Cancel Enable | Refill: 365 Days | Instant Start | Speed: 100M/Day|5.7024|100|200000|13 minutes

# TikTok Views - 100% Non Drop
2711|TikTok Views | Non Drop | Speed: 1M Per Day | Refill No | Super Fast|29.7562|100|2147483647|17 minutes
2712|TikTok Views | Non Drop | Speed: 1M Per Day | Refill 30 Days | Super Fast|31.7952|100|2147483647|25 minutes
2713|TikTok Views | Non Drop | Speed: 1M Per Day | Refill Lifetime | Super Fast|33.3850|100|2147483647|17 minutes

# TikTok Views - Pakistan
2215|TikTok Views | Non Drop | Country: Pakistan | Ultra Fast Speed | Refill No|28.3392|100|1000000|30 minutes
2213|TikTok Views | Non Drop | Country: Pakistan | Ultra Fast Speed | Refill 30 Days|31.7952|100|1000000|24 minutes
2214|TikTok Views | Non Drop | Country: Pakistan | Ultra Fast Speed | Refill Lifetime|34.9747|100|1000000|13 minutes

# TikTok Organic Views - Real For You Ads
2031|TikTok Real Sponsor Ad | Normal Results | Video For You Service | Best For Monetization | Need Video Code | Complete Time 24 Hours|156.2112|10000|1000000|16 hours and 17 minutes
2030|TikTok Real Sponsor Ad | VIP Results | Video For You Service | Best For Monetization | Need Video Code | Complete Time 24 Hours|199.4803|10000|1000000|16 hours and 14 minutes

# TikTok Likes - Working New
2986|TikTok Likes | High Quality | Speed: 25K/Day | Instant Start | Refill: No|295.4880|10|25000|21 minutes
2987|TikTok Likes | High Quality | Speed: 50K/Day | Instant Start | Refill: No|310.2624|10|50000|35 minutes
2988|TikTok Likes | High Quality | Speed: 100K/Day | Instant Start | Refill: No|361.1520|10|100000|3 hours and 42 minutes

# TikTok Likes - HQ Profiles
2616|TikTok Likes | HQ & Real Profiles | Low Drop | Instant Start | Refill: No | Speed: 25K/Day|58.7520|10|25000|11 hours and 3 minutes
2617|TikTok Likes | HQ & Real Profiles | Low Drop | Instant Start | Refill: 30 Days | Speed: 25K/Day|81.0778|10|25000|18 hours and 29 minutes
2618|TikTok Likes | HQ & Real Profiles | Low Drop | Instant Start | Refill: Lifetime | Speed: 25K/Day|83.4624|10|25000|11 hours and 11 minutes

# TikTok Likes - Real Profiles
2627|TikTok Likes | 100% Real Accounts (With Videos) | Low Drop | Super Instant | No Refill | Speed: 50K/Day|72.5760|10|50000|23 hours and 11 minutes
2628|TikTok Likes | 100% Real Accounts (With Videos) | Low Drop | Super Instant | Refill: 30 Days | Speed: 50K/Day|102.6432|10|50000|14 hours and 3 minutes
2629|TikTok Likes | 100% Real Accounts (With Videos) | Low Drop | Super Instant | Refill: Lifetime | Speed: 50K/Day|128.5632|10|50000|14 hours and 33 minutes

# TikTok Likes - Non Drop New
2977|TikTok Likes | Non Drop | Speed: 50K/Day | Cancel Enable | Refill: No|521.6764|100|50000|36 minutes
2978|TikTok Likes | Non Drop | Speed: 50K/Day | Cancel Enable | Refill: 30 Days|558.9390|100|50000|4 hours and 59 minutes
2979|TikTok Likes | Non Drop | Speed: 50K/Day | Cancel Enable | Refill: Lifetime|596.2014|100|50000|2 hours and 15 minutes

# TikTok Real Likes - Never Drop
19|TikTok Likes | Premium Quality | 100% Real Profiles | Worldwide | Never Drop | Lifetime Refill | Speed: 5K/Day|660.2465|10|50000|25 minutes

# TikTok Likes - Pakistan Sponsored Ads
2943|TikTok Likes + Bonus Views | Source: Pakistan For You Page | 100% Real Sponsor Ads | 100% Non Drop | Refill: Lifetime | Start time: 1-24 Hours|590.9760|1000|100000|13 hours and 32 minutes

# TikTok Likes - Pakistan Mixed
1386|TikTok Likes | Quality: Pakistani Mixed Likes | Speed: 30K/day | Start Time: 0-10 min | Refill: No|187.1424|100|10000|2 hours and 5 minutes
1496|TikTok Likes | Quality: Pakistani Mixed Likes | Speed: 50K/day | Start Time: 0-10 min | Refill: No|435.0240|50|50000|25 minutes

# TikTok Likes - Pakistani
2234|Pakistani TikTok Likes | Real Pakistani Accounts | Non Drop | Speed: 100K/Day | Refill: No | Start Time: 0-5 Minutes|254.0160|5|100000|1 hour and 24 minutes
2233|Pakistani TikTok Likes | Real Sponsor | Non Drop | Speed: 500 to 1K Per Day | Start Time: 0-5 Minute|418.8319|100|10000000|14 minutes

# TikTok Followers - Cheapest
2980|TikTok Followers | LQ Accounts | Cancel Enable | Refill: No | Instant Start | Speed: Day 50K|455.2243|100|10000|55 minutes
2981|TikTok Followers | LQ Accounts | Cancel Enable | Refill: No | Instant Start | Speed: Day 100K|455.2243|100|20000|5 hours and 44 minutes

# TikTok Followers - Real Accounts
2648|TikTok Followers - Real Users with Profile Pics & Videos | Refill No | Speed: 10K/day | Start: 0-15 min|507.5136|10|10000|2 hours and 10 minutes
2650|TikTok Followers - Real Users with Profile Pics & Videos | Non Drop | Refill No | Speed: 50K/day | Start: 0-15 min|912.3840|10|5000000|145 hours and 24 minutes
2652|TikTok Followers - Real Users with Profile Pics & Videos | Non Drop | Refill 30 Days | Speed: 100K/day | Start: 0-15 min|1270.0800|10|100000|1 hour and 3 minutes

# TikTok Followers - Best Speed
2965|TikTok Followers | 100% Real & Active Accounts (10-20 Videos) | Refill: No | Cancel Enable | Instant Start | Speed: 10K/Day | Recommended|484.4448|100|5000|2 hours and 58 minutes
2724|TikTok Followers | 100% Real & Active Accounts (10-20 Videos) | Refill: No | Cancel Enable | Instant Start | Speed: 100K/Day | Recommended|516.7411|100|100000|1 hour and 11 minutes

# TikTok Followers - Lifetime
2568|TikTok Followers | 100% Real & Active Accounts | Non Drop | Refill: Lifetime | Speed: 10K/Day | Start Time: 0-1 Hour|1425.6000|100|10000|1 hour and 6 minutes
2567|TikTok Followers | Pakistani + Mixed | High-Quality Accounts (10-20) | Non Drop | Refill: Lifetime | Speed: 20K/Day | Start Time: 0-1 Hour|1886.9760|100|20000|3 hours and 5 minutes

# TikTok Followers - Non Drop New
2982|TikTok Followers [Max 10K] | Currently No Drop | Cancel Enable | Refill: No | Instant Start | Speed: 20K/Day|976.7347|100|10000|1 hour and 10 minutes
2983|TikTok Followers [Max 10K] | Currently No Drop | Cancel Enable | Refill: 30 Days | Instant Start | Speed: 20K/Day|1235.8656|100|10000|1 hour and 31 minutes
2984|TikTok Followers [Max 10K] | Currently No Drop | Cancel Enable | Refill: Lifetime | Instant Start | Speed: 20K/Day|1544.8320|100|10000|39 minutes

# TikTok Followers - 100% Non Drop
2970|TikTok Followers | 100% Real & Active Accounts | 100% Non Drop | Refill: No | Cancel Enable | Instant Start | Speed: 250/Day | Recommended|1596.6720|50|50000|24 hours and 6 minutes
2971|TikTok Followers | 100% Real & Active Accounts | 100% Non Drop | Refill: 30 Days | Cancel Enable | Instant Start | Speed: 250/Day | Recommended|2280.9600|50|50000|33 hours and 35 minutes

# TikTok Followers - 100% Non Drop Premium
2340|TikTok Followers | Premium Quality | Active Accounts (10-20 Videos) | Speed: UpTo 1K/Day | 100% Non Drop | Refill: No | Start Time: 0-24 Hours|2177.2800|10|50000|3 hours and 25 minutes
2787|TikTok Followers | Premium Quality | Active Accounts (10-20 Videos) | Speed: UpTo 1K/Day | 100% Non Drop | Refill: Lifetime | Start Time: 0-24 Hours|2821.9590|10|50000|288 hours and 7 minutes

# TikTok Followers - Pakistan + Mixed
1577|TikTok Followers | Pakistani + Mixed | High-Quality Accounts (10-20 Videos) | Speed: 10K/day | Start: 0-15 min|881.2109|10|5000|50 minutes
1580|TikTok Followers | Pakistani + Mixed | High-Quality Accounts (10-20 Videos) | Speed: 20K/day | Start: 0-5 min|921.2659|10|100000|9 hours and 2 minutes
1578|TikTok Followers | Pakistani + Mixed | High-Quality Accounts (10-20 Videos) | Speed: 100K/day | Start: 0-5 min|1166.4000|50|1000000|1 hour and 22 minutes
1581|TikTok Followers | Pakistani + Mixed | High-Quality Accounts (10-20 Videos) | Speed: 50K/day | Start: 0-5 min|1119.7440|10|1000000|5 hours and 43 minutes

# TikTok Video - Shares / Favorites
2286|TikTok Video Saves | No Drop | Start Time: 0-1 Hour | Speed: 50K/Day | Lifetime Refill|4.9421|100|217545811|21 minutes
1597|TikTok Video Favorite | No Drop | Start Time: Instant | Speed: 50K/Day | Lifetime Refill|51.8400|10|100000000|17 minutes
2072|TikTok Video Shares | No Drop | Start Time: 0-1 Hour | Speed: 20K/Day | Lifetime Refill|87.7410|10|2147483647|20 minutes

# TikTok Video - Pakistan Shares / Favorites
2287|TikTok Save [Pakistan] | Start Time: 0-10 Minute | Speed: 50K/Day | Lifetime Refill|93.3120|10|100000000|37 minutes
2288|TikTok Shares [Pakistan] | Start Time: 0-10 Minute | Speed: 50K/Day | Lifetime Refill|93.3120|10|100000|34 minutes

# TikTok Comments - Fast Speed
2920|TikTok Random Comments | 100% Real Accounts | Start Time: Instant | Speed: 100K/Day | Fast Complete | Refill: No|1828.9152|10|10000|41 minutes
2921|TikTok Emoji Comments | 100% Real Accounts | Start Time: Instant | Speed: 100K/Day | Fast Complete | Refill: No|1933.2205|10|10000|18 minutes

# TikTok Comments
2279|TikTok Custom Comments | High Quality | Instant Start | Speed: 10K/Day|1933.2205|10|50000|2 hours and 48 minutes
2634|TikTok Custom Comments | High Quality | Instant Start | Speed: 50K/Day|1828.9152|10|10000|1 hour and 52 minutes
2636|TikTok Random Comments | High Quality | Instant Start | Speed: 50K/Day|1920.3610|1|1000|13 minutes
2635|TikTok Emoji Comments | High Quality | Instant Start | Speed: 50K/Day|1920.3610|10|1000|45 minutes
2632|TikTok Pakistani Custom Comments | Standard Quality | Instant Start | Speed: 50K/Day|1185.4080|10|50000|41 minutes
2633|TikTok Pakistani Custom Comments | Premium Quality | Instant Start | Speed: 50K/Day|1219.2768|10|1000000|53 minutes

# TikTok Comments - Pakistani
2944|Pakistani TikTok Custom Comments | 100% Real Traffic | Refill: Lifetime | Speed: 5K/Day | Start Time: 1 Hour|1493.6141|10|1000|2 hours and 21 minutes
2945|Pakistani TikTok Custom Comments | 100% Real Traffic | Refill: Lifetime | Speed: 10K/Day | Start Time: 1 Hour|1657.9116|10|100|8 hours and 21 minutes

# TikTok Repost / Share
1738|TikTok Repost | HQ Accounts Repost | Speed: 50K/Day | Refill: No | Start Time: Instant|738.2016|100|100000000|154 hours and 27 minutes
1739|TikTok Repost | Real Accounts Repost | Speed: 1000/Day | Guarantee: 30 Days | Start Time: 0-1 hour|1848.9600|1|5000|149 hours and 43 minutes
`;