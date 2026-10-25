// Format: ID|Service|Rate per 1000 (Rs) - already x1.8 applied|Min|Max   ( # = category )
const RAW = `
# TikTok Views - Cheapest
2536|TikTok Video Views | Cancel Enable | Instant Start | 10M/Day|1.7487|100|2147483647
2862|TikTok Video Views | High Quality | Cancel Enable | Instant | 10M/Day|3.0413|100|2147483647
2566|TikTok Video Views | Cancel Enable | Instant | 100K/Day|1.5898|1000|100000
2835|TikTok Video Views | Max Unlimited | Instant | 100M/Day | Recommended|2.758|100|2147483647
2864|TikTok Video Views | High Quality | Refill 30 Days | 100M/Day|4.9421|100|200000
2865|TikTok Video Views | High Quality | Refill 365 Days | 100M/Day|5.7024|100|200000
2866|TikTok Video Views | High Quality | Refill Lifetime | 100M/Day|7.223|100|200000
# TikTok Views - 100% Non Drop
2711|TikTok Views | Non Drop | 1M/Day | No Refill | Super Fast|29.7562|100|2147483647
2712|TikTok Views | Non Drop | 1M/Day | Refill 30 Days | Super Fast|31.7952|100|2147483647
2713|TikTok Views | Non Drop | 1M/Day | Refill Lifetime | Super Fast|33.385|100|2147483647
# TikTok Views - Non Drop Pakistan
2215|TikTok Views | Non Drop | Pakistan | Ultra Fast | No Refill|28.3392|100|1000000
2213|TikTok Views | Non Drop | Pakistan | Ultra Fast | Refill 30 Days|31.7952|100|1000000
2214|TikTok Views | Non Drop | Pakistan | Ultra Fast | Refill Lifetime|34.9747|100|1000000
# TikTok Views - Monetization
16|TikTok Monetization Views | Worldwide | Min 100K | 20K/Day|14.2609|100000|100000
17|TikTok Monetization Views | Worldwide | Min 50K | 20K/Day|20.736|50000|50000
18|TikTok Monetization Views | Worldwide | Min 25K | 20K/Day|17.6117|10000|100000
15|TikTok Monetization Views | Worldwide | Min 10K | 20K/Day|16.2571|5000|1000000
# TikTok Organic Views (Real For You Ads)
2031|TikTok Real Sponsor Ad | Normal Results | For You | Monetization | Video Code Needed | 24 Hours|156.2112|10000|1000000
2030|TikTok Real Sponsor Ad | VIP Results | For You | Monetization | Video Code Needed | 24 Hours|199.4803|10000|1000000
# TikTok Likes - HQ Cheapest
2891|TikTok Likes | HQ Profiles | 10K/Day | Cancel Enable | Instant | No Refill|62.0698|100|10000
2892|TikTok Likes | HQ Profiles | 20K/Day | Cancel Enable | Instant | No Refill|68.2767|100|20000
# TikTok Likes - Always Working
2811|TikTok Likes | HQ Profiles | 10K/Day | Cancel Enable | Start 1 Hour|61.6896|100|10000
2853|TikTok Likes | HQ Profiles | 10K/Day | Cancel Enable | Start 1 Hour|64.6272|100|10000
2854|TikTok Likes | HQ Profiles | 30K/Day | Cancel Enable | Start 1 Hour|124.6925|100|30000
2855|TikTok Likes | 100% Real Profiles | 100K/Day | Start 5 Min | Fast|137.1618|100|100000
# TikTok Likes - HQ Profiles
2616|TikTok Likes | HQ & Real | Low Drop | Instant | No Refill | 25K/Day|58.752|10|25000
2617|TikTok Likes | HQ & Real | Low Drop | Instant | Refill 30 Days | 25K/Day|81.0778|10|25000
2618|TikTok Likes | HQ & Real | Low Drop | Instant | Refill Lifetime | 25K/Day|83.4624|10|25000
# TikTok Likes - Real Profiles
2627|TikTok Likes | 100% Real Accounts (With Videos) | Low Drop | No Refill | 50K/Day|72.576|10|50000
2628|TikTok Likes | 100% Real Accounts (With Videos) | Low Drop | Refill 30 Days | 50K/Day|102.6432|10|50000
2629|TikTok Likes | 100% Real Accounts (With Videos) | Low Drop | Refill Lifetime | 50K/Day|128.5632|10|50000
# TikTok Likes - Fast Speed
2206|TikTok Likes | HQ Profiles | Instant | Cancel Enable | No Refill | 25K/Day|124.6925|10|25000
2845|TikTok Likes | HQ Profiles | Instant | Cancel Enable | No Refill | 25K/Day|130.0147|50|20000
2796|TikTok Likes | HQ Profiles | Instant | 30K/Day | Refill Lifetime|97.9776|50|100000
2209|TikTok Likes | HQ Profiles | Instant | 75K/Day | Refill Lifetime | Ultrafast|97.9776|10|75000
# TikTok Likes - Non Drop (New)
2977|TikTok Likes | Non Drop | 50K/Day | Cancel Enable | No Refill|123.1718|100|50000
2978|TikTok Likes | Non Drop | 50K/Day | Cancel Enable | Refill 30 Days|161.7408|100|50000
2979|TikTok Likes | Non Drop | 50K/Day | Cancel Enable | Refill Lifetime|190.4256|100|50000
# TikTok Likes - 100% Non Drop
2857|TikTok Likes | 100% Real | Non Drop | 10K/Day | Cancel Enable | No Refill|106.749|10|1000000
2858|TikTok Likes | 100% Real | Non Drop | 10K/Day | Cancel Enable | Refill 30 Days|174.1824|5|3000000
2859|TikTok Likes | 100% Real | Non Drop | 10K/Day | Cancel Enable | Refill Lifetime|196.992|5|3000000
# TikTok Real Likes - Never Drop
19|TikTok Likes | Premium | 100% Real | Worldwide | Never Drop | Lifetime Refill | 5K/Day|232.6968|10|50000
# TikTok Likes - Pakistan Sponsored Ads
2943|PK TikTok Likes + Bonus Views | For You Page | Min 1K | Real Sponsor Ads | Non Drop | Lifetime Refill | Start 1-24 Hours|590.976|1000|100000
# TikTok Likes - Pakistan Mixed
1386|TikTok Likes | Pakistani Mixed | 30K/day | Start 0-10 min | No Refill|187.1424|100|10000
1496|TikTok Likes | Pakistani Mixed | 50K/day | Start 0-10 min | No Refill|287.28|50|50000
# TikTok Likes - Pakistani
2234|Pakistani TikTok Likes | Real Pakistani Accounts | Non Drop | 100K/Day | No Refill | Start 0-5 Min|254.016|5|100000
2233|Pakistani TikTok Likes | Real Sponsor | Non Drop | 500-1K/Day | Start 0-5 Min|418.8319|100|10000000
# TikTok Followers - Cheapest
2980|TikTok Followers | LQ Accounts | Cancel Enable | No Refill | Instant | 50K/Day|455.2243|100|10000
2981|TikTok Followers | LQ Accounts | Cancel Enable | No Refill | Instant | 100K/Day|455.2243|100|20000
# TikTok Followers - Real Accounts
2648|TikTok Followers | Real Users with Pics & Videos | No Refill | 10K/day | Start 0-15 min|507.5136|10|10000
2650|TikTok Followers | Real Users with Pics & Videos | Non Drop | No Refill | 50K/day|912.384|10|5000000
2652|TikTok Followers | Real Users with Pics & Videos | Non Drop | Refill 30 Days | 100K/day|1270.08|10|100000
# TikTok Followers - Best Speed (Recommended)
2965|TikTok Followers | 100% Real & Active (10-20 Videos) | No Refill | Instant | 10K/Day | Recommended|484.4448|100|5000
2724|TikTok Followers | 100% Real & Active (10-20 Videos) | No Refill | Instant | 100K/Day | Recommended|516.7411|100|100000
# TikTok Followers - Lifetime Refill
2568|TikTok Followers | 100% Real & Active | Non Drop | Refill Lifetime | 10K/Day | Start 0-1 Hour|1425.6|100|10000
2567|TikTok Followers | Pakistani + Mixed | HQ (10-20 Videos) | Non Drop | Refill Lifetime | 20K/Day|1886.976|100|20000
# TikTok Followers - Non Drop (New)
2982|TikTok Followers [Max 10K] | Currently No Drop | No Refill | Instant | 20K/Day|938.9952|100|10000
2983|TikTok Followers [Max 10K] | Currently No Drop | Refill 30 Days | Instant | 20K/Day|1199.3702|100|10000
2984|TikTok Followers [Max 10K] | Currently No Drop | Refill Lifetime | Instant | 20K/Day|1499.2128|100|10000
# TikTok Followers - 100% Non Drop
2970|TikTok Followers | 100% Real & Active | 100% Non Drop | No Refill | 250/Day | Recommended|1596.672|50|50000
2971|TikTok Followers | 100% Real & Active | 100% Non Drop | Refill 30 Days | 250/Day | Recommended|2280.96|50|50000
2340|TikTok Followers | Premium | Active (10-20 Videos) | Up to 1K/Day | 100% Non Drop | No Refill|2177.28|10|50000
2787|TikTok Followers | Premium | Active (10-20 Videos) | Up to 1K/Day | 100% Non Drop | Refill Lifetime|2821.959|10|50000
# TikTok Followers - Pakistan + Mixed
1577|TikTok Followers | Pakistani + Mixed | HQ (10-20 Videos) | 10K/day | Start 0-15 min|881.2109|10|5000
1580|TikTok Followers | Pakistani + Mixed | HQ (10-20 Videos) | 20K/day | Start 0-5 min|921.2659|10|100000
1578|TikTok Followers | Pakistani + Mixed | HQ (10-20 Videos) | 100K/day | Start 0-5 min|1166.4|50|1000000
1581|TikTok Followers | Pakistani + Mixed | HQ (10-20 Videos) | 50K/day | Start 0-5 min|1119.744|10|1000000
# TikTok Video - Shares / Saves / Favorites
2286|TikTok Video Saves | No Drop | Start 0-1 Hour | 50K/Day | Lifetime Refill|4.9421|100|217545811
1597|TikTok Video Favorite | No Drop | Instant | 50K/Day | Lifetime Refill|51.84|10|100000000
2072|TikTok Video Shares | No Drop | Start 0-1 Hour | 20K/Day | Lifetime Refill|87.741|10|2147483647
2287|TikTok Save [Pakistan] | Start 0-10 Min | 50K/Day | Lifetime Refill|93.312|10|100000000
2288|TikTok Shares [Pakistan] | Start 0-10 Min | 50K/Day | Lifetime Refill|93.312|10|100000
# TikTok Comments
2920|TikTok Random Comments | 100% Real Accounts | Instant | 100K/Day | No Refill|1828.9152|10|10000
2921|TikTok Emoji Comments | 100% Real Accounts | Instant | 100K/Day | No Refill|1933.2205|10|10000
2279|TikTok Custom Comments | High Quality | Instant | 10K/Day|1933.2205|10|50000
2634|TikTok Custom Comments | High Quality | Instant | 50K/Day|1828.9152|10|10000
2636|TikTok Random Comments | High Quality | Instant | 50K/Day|1920.361|1|1000
2635|TikTok Emoji Comments | High Quality | Instant | 50K/Day|1920.361|10|1000
2632|TikTok Pakistani Custom Comments | Standard Quality | Instant | 50K/Day|1185.408|10|50000
2633|TikTok Pakistani Custom Comments | Premium Quality | Instant | 50K/Day|1219.2768|10|1000000
2944|Pakistani TikTok Custom Comments | 100% Real Traffic | Lifetime Refill | 5K/Day|1493.6141|10|1000
2945|Pakistani TikTok Custom Comments | 100% Real Traffic | Lifetime Refill | 10K/Day|1657.9116|10|100
# TikTok Repost
1738|TikTok Repost | HQ Accounts | 50K/Day | No Refill | Instant|738.2016|100|100000000
1739|TikTok Repost | Real Accounts | 1000/Day | Guarantee 30 Days | Start 0-1 hour|1848.96|1|5000
`;
