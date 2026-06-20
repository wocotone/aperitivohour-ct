const CT_BARS = [
  // NEW HAVEN
  { id:1,  name:"Ordinary",            neighborhood:"New Haven",     type:"Cocktail Bar",   rating:4.9, lat:41.3083, lng:-72.9279, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$10 cocktails, $6 drafts, $8 wine" },
  { id:2,  name:"Zinc",                neighborhood:"New Haven",     type:"Restaurant Bar", rating:4.8, lat:41.3059, lng:-72.9311, happyHour:{days:"Mon-Fri",start:17,end:19}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:3,  name:"116 Crown",           neighborhood:"New Haven",     type:"Wine Bar",       rating:4.8, lat:41.3048, lng:-72.9265, happyHour:{days:"Mon-Thu",start:17,end:19}, deals:"$9 wine, $8 cocktails, cheese board $12" },
  { id:4,  name:"The Owl Shop",        neighborhood:"New Haven",     type:"Dive Bar",       rating:4.7, lat:41.3071, lng:-72.9300, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 drafts, $5 well drinks" },
  { id:5,  name:"The Spot",            neighborhood:"New Haven",     type:"Bar",            rating:4.5, lat:41.3100, lng:-72.9250, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  // HARTFORD
  { id:6,  name:"Plan B Burger Bar",   neighborhood:"Hartford",      type:"Bar & Grill",    rating:4.5, lat:41.7658, lng:-72.6851, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $5 wine" },
  { id:7,  name:"Black Bear Saloon",   neighborhood:"Hartford",      type:"Sports Bar",     rating:4.4, lat:41.7637, lng:-72.6822, happyHour:{days:"Daily",  start:16,end:19}, deals:"$3 domestics, $6 wells, $5 wine" },
  { id:8,  name:"Salute",              neighborhood:"Hartford",      type:"Italian Bar",    rating:4.8, lat:41.7654, lng:-72.6833, happyHour:{days:"Mon-Fri",start:17,end:19}, deals:"$9 cocktails, $7 wine, $5 beer" },
  { id:9,  name:"Firebox",             neighborhood:"Hartford",      type:"Cocktail Bar",   rating:4.8, lat:41.7670, lng:-72.6840, happyHour:{days:"Mon-Fri",start:17,end:19}, deals:"$9 cocktails, $7 wine, $5 drafts" },
  // MYSTIC
  { id:10, name:"The Whalers Inn",     neighborhood:"Mystic",        type:"Hotel Bar",      rating:4.6, lat:41.3543, lng:-71.9665, happyHour:{days:"Daily",  start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine" },
  { id:11, name:"Bravo Bravo",         neighborhood:"Mystic",        type:"Cocktail Bar",   rating:4.7, lat:41.3548, lng:-71.9671, happyHour:{days:"Mon-Sat",start:17,end:19}, deals:"$9 cocktails, $6 beer, apps 25% off" },
  // OTHER
  { id:12, name:"Bar Bouchée",         neighborhood:"Madison",       type:"Bistro Bar",     rating:4.8, lat:41.2795, lng:-72.5984, happyHour:{days:"Mon-Fri",start:17,end:18,sat:true,satStart:15,satEnd:17}, deals:"$8 cocktails, $7 wine, $5 beer" },
  { id:13, name:"Crown & Hammer",      neighborhood:"Putnam",        type:"Pub",            rating:4.7, lat:41.9148, lng:-71.9109, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails" },
  { id:14, name:"Half Door",           neighborhood:"Glastonbury",   type:"Irish Pub",      rating:4.6, lat:41.7120, lng:-72.6087, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails" },
  { id:16, name:"Oasis Pub",           neighborhood:"Bridgeport",    type:"Pub",            rating:4.3, lat:41.1865, lng:-73.1952, happyHour:{days:"Daily",  start:16,end:19}, deals:"$4 beers, $5 wells, $6 cocktails" },
  { id:18, name:"Vazzano's Two Stone", neighborhood:"Woodbridge",    type:"Restaurant Bar", rating:4.7, lat:41.3454, lng:-72.9989, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$6 drafts, $9 cocktails, $7 wine" },

  // ── MILFORD ──
  { id:20, name:"Bar 3 Thirty Three",  neighborhood:"Milford",       type:"Beer Bar",       rating:4.6, lat:41.2265, lng:-73.0579, happyHour:{days:"Mon-Sat",start:15,end:19}, deals:"Craft beer & cocktail specials 3:33–7pm" },
  { id:21, name:"Bonfire Grille",      neighborhood:"Milford",       type:"Bar & Grill",    rating:4.5, lat:41.2240, lng:-73.0570, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 margaritas, $6 drafts, house wine & sangria $6" },
  { id:22, name:"Flipside Burgers & Bar",neighborhood:"Milford",     type:"Bar & Grill",    rating:4.5, lat:41.2225, lng:-73.0587, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, bar bites" },
  { id:23, name:"The Blind Rhino",     neighborhood:"Milford",       type:"Sports Bar",     rating:4.4, lat:41.2218, lng:-73.0595, happyHour:{days:"Daily",  start:15,end:18}, deals:"$4 drafts, $5 wells, $6 cocktails" },
  { id:24, name:"Anchor Social",       neighborhood:"Milford",       type:"Cocktail Bar",   rating:4.5, lat:41.2230, lng:-73.0560, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine" },
  { id:25, name:"Stonebridge Restaurant",neighborhood:"Milford",     type:"Restaurant Bar", rating:4.6, lat:41.2350, lng:-73.0610, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 drafts, $6 wine" },
  { id:26, name:"SBC Restaurant & Beer", neighborhood:"Milford",     type:"Beer Bar",       rating:4.4, lat:41.2210, lng:-73.0555, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails" },
  { id:27, name:"Liberty Rock Tavern", neighborhood:"Milford",       type:"Bar & Grill",    rating:4.5, lat:41.2198, lng:-73.0620, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 wells, bar bites" },
  { id:28, name:"Citrus Restaurant",   neighborhood:"Milford",       type:"Restaurant Bar", rating:4.5, lat:41.2242, lng:-73.0540, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$1 off all drinks · Apps: spring rolls $7, calamari $7, loaded fries $6, flatbread $7, pork dumplings $7, shrimp cocktail $7, grilled cheese $4" },

  // ── STAMFORD ──
  { id:30, name:"Sign of the Whale",   neighborhood:"Stamford",      type:"Bar",            rating:4.5, lat:41.0553, lng:-73.5413, happyHour:{days:"Mon-Fri",start:15,end:19}, deals:"$2 off beer & wine, $1 off mixed drinks, $2 off small plates" },
  { id:31, name:"Barcelona Wine Bar",  neighborhood:"Stamford",      type:"Wine Bar",       rating:4.7, lat:41.0542, lng:-73.5401, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"50% off sparkling wine, beer & cocktail specials, tapas $3.50–$8.50" },
  { id:32, name:"Bradford's Grill & Tavern", neighborhood:"Stamford",type:"Sports Bar",     rating:4.4, lat:41.0528, lng:-73.5388, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"Drink & food specials daily 4–7pm" },
  { id:33, name:"FISH Restaurant & Bar",neighborhood:"Stamford",     type:"Restaurant Bar", rating:4.6, lat:41.0537, lng:-73.5395, happyHour:{days:"Mon-Fri",start:15,end:18,sat:true,satStart:15,satEnd:17}, deals:"$5 beer, $6-7 cocktails & wine, $1.25 oysters, apps $4-7" },
  { id:34, name:"Fortina",             neighborhood:"Stamford",      type:"Italian Bar",    rating:4.7, lat:41.0549, lng:-73.5420, happyHour:{days:"Mon-Thu",start:16,end:19}, deals:"$5 beer, wine & sangria; $10 cocktails; apps $5–10" },
  { id:35, name:"Blackstone Steakhouse",neighborhood:"Stamford",     type:"Steakhouse Bar", rating:4.6, lat:41.0531, lng:-73.5375, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $8 wine, $8 cocktails, bar bites $12–20" },
  { id:36, name:"Hudson Social",       neighborhood:"Stamford",      type:"Cocktail Bar",   rating:4.6, lat:41.0555, lng:-73.5407, happyHour:{days:"Tue-Fri", start:16,end:18}, deals:"Discounted cocktails, drafts & small plates" },
  { id:37, name:"Harlan Publick",      neighborhood:"Stamford",      type:"Beer Hall",      rating:4.6, lat:41.0531, lng:-73.5410, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 craft beers, $8 cocktails" },
  { id:38, name:"Cask Republic",       neighborhood:"Stamford",      type:"Beer Bar",       rating:4.7, lat:41.0556, lng:-73.5392, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$1 off all drafts, $7 wine, $8 cocktails" },
  { id:39, name:"Amore Cucina & Bar",  neighborhood:"Stamford",      type:"Italian Bar",    rating:4.5, lat:41.0562, lng:-73.5381, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"Food & drink specials, $7 cocktails" },
  { id:40, name:"Kashi Restaurant",    neighborhood:"Stamford",      type:"Japanese Bar",   rating:4.6, lat:41.0544, lng:-73.5430, happyHour:{days:"Mon-Sat",start:16,end:18}, deals:"$5 beer, $6 wine, $8 cocktails, $5 sushi rolls" },
  { id:41, name:"Bobby V's Sports Bar",neighborhood:"Stamford",      type:"Sports Bar",     rating:4.3, lat:41.0520, lng:-73.5365, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$3 drafts, $5 mixed drinks, $6 wine, $5 nachos" },
  { id:42, name:"Washington Prime",    neighborhood:"Stamford",      type:"Restaurant Bar", rating:4.6, lat:41.0538, lng:-73.5400, happyHour:{days:"Daily",  start:16,end:18}, deals:"50% off apps, raw bar, wine, beer & signature cocktails" },

  // ── WEST HAVEN ──
  { id:50, name:"Duffy's Tavern",      neighborhood:"West Haven",    type:"Pub",            rating:4.5, lat:41.2707, lng:-72.9680, happyHour:{days:"Wed-Fri",start:16,end:18}, deals:"$4 drafts, $5 wells, $6 cocktails" },
  { id:51, name:"Jimmies of Savin Rock",neighborhood:"West Haven",   type:"Restaurant Bar", rating:4.4, lat:41.2650, lng:-72.9720, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $6 wine, $7 cocktails" },
  { id:52, name:"The Bistro at the Inn",neighborhood:"West Haven",   type:"Hotel Bar",      rating:4.4, lat:41.2720, lng:-72.9650, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $6 wine, $8 cocktails" },
  { id:53, name:"Westside Tavern",      neighborhood:"West Haven",   type:"Sports Bar",     rating:4.3, lat:41.2690, lng:-72.9700, happyHour:{days:"Daily",  start:15,end:19}, deals:"$1 off all beers & wine, $5 wells" },
  { id:54, name:"Savin Rock Bar & Grille",neighborhood:"West Haven", type:"Bar & Grill",    rating:4.3, lat:41.2640, lng:-72.9730, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$4 domestics, $6 cocktails, bar bites" },

  // ── FAIRFIELD ──
  { id:60, name:"Barcelona Wine Bar",  neighborhood:"Fairfield",     type:"Wine Bar",       rating:4.8, lat:41.1480, lng:-73.2630, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"50% off sparkling wine, tapas specials, beer & cocktails" },
  { id:61, name:"Bodega Taco Bar",     neighborhood:"Fairfield",     type:"Mexican Bar",    rating:4.5, lat:41.1435, lng:-73.2580, happyHour:{days:"Tue-Fri",start:16,end:18}, deals:"$8 margaritas, $3.75 tacos, $6 sliders, $9 duck nachos" },
  { id:62, name:"Brick Walk Tavern",   neighborhood:"Fairfield",     type:"Pub",            rating:4.4, lat:41.1450, lng:-73.2610, happyHour:{days:"Tue-Fri",start:15,end:17}, deals:"$2 off draft beers & well drinks" },
  { id:63,  name:"Geronimo Tequila Bar", neighborhood:"Fairfield",     type:"Mexican Bar",    rating:4.5, lat:41.1460, lng:-73.2590, happyHour:{days:"Mon-Fri",start:15,end:17}, deals:"½ price margaritas (cucumber/spicy), ½ price sangria & wine, $5 High Life · Food $8: wings, birria taquitos, jalapeño poppers, croquettes, empanadas, frito pie" },
  { id:630, name:"Geronimo Tequila Bar", neighborhood:"New Haven",      type:"Mexican Bar",    rating:4.5, lat:41.3062, lng:-72.9308, happyHour:{days:"Mon-Fri",start:15,end:17}, deals:"½ price margaritas (cucumber/spicy), ½ price sangria & wine, $5 High Life · Food $8: wings, birria taquitos, jalapeño poppers, croquettes, empanadas, frito pie" },
  { id:631, name:"Geronimo Tequila Bar", neighborhood:"Westport",       type:"Mexican Bar",    rating:4.5, lat:41.1422, lng:-73.3596, happyHour:{days:"Mon-Fri",start:15,end:17}, deals:"½ price margaritas (cucumber/spicy), ½ price sangria & wine, $5 High Life · Food $8: wings, birria taquitos, jalapeño poppers, croquettes, empanadas, frito pie" },
  { id:64, name:"Old Post Tavern",     neighborhood:"Fairfield",     type:"Tavern",         rating:4.5, lat:41.1440, lng:-73.2555, happyHour:{days:"Daily",  start:15,end:18}, deals:"2-for-1 drinks, $3 appetizers" },
  { id:65, name:"The Sinclair",        neighborhood:"Fairfield",     type:"Restaurant Bar", rating:4.6, lat:41.1418, lng:-73.2601, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"6 wines by the glass $5, half-price bottles Mondays" },
  { id:66, name:"The Chelsea",         neighborhood:"Fairfield",     type:"Wine Bar",       rating:4.6, lat:41.1425, lng:-73.2620, happyHour:{days:"Mon-Mon",start:17,end:22}, deals:"50% off wine bottles under $100 every Monday" },
  { id:67, name:"Gabagool Wine Bar",   neighborhood:"Fairfield",     type:"Wine Bar",       rating:4.7, lat:41.1430, lng:-73.2635, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, cheese & charcuterie specials" },
  { id:68, name:"Ryebird",             neighborhood:"Fairfield",     type:"Cocktail Bar",   rating:4.6, lat:41.1445, lng:-73.2598, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$8 cocktails, $5 beer, $6 wine, apps $5–10" },
  { id:69, name:"The Blind Rhino",     neighborhood:"Fairfield",     type:"Sports Bar",     rating:4.4, lat:41.1455, lng:-73.2575, happyHour:{days:"Daily",  start:15,end:18}, deals:"$4 drafts, $5 wells, wings specials" },
  { id:70, name:"Blackstones Grille",  neighborhood:"Fairfield",     type:"Bar & Grill",    rating:4.5, lat:41.1390, lng:-73.2545, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"Bar only: $5 beer, $8 wine, $8 cocktails, bar bites" },

  // ── WESTPORT ──
  { id:80, name:"Bartaco Westport",    neighborhood:"Westport",      type:"Mexican Bar",    rating:4.5, lat:41.1415, lng:-73.3580, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 tacos, $7 margaritas, $5 beer" },
  { id:81, name:"Black Duck Cafe",     neighborhood:"Westport",      type:"Bar & Grill",    rating:4.5, lat:41.1390, lng:-73.3560, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"Drink & food specials 4–6:30pm" },
  { id:82, name:"The Whelk",           neighborhood:"Westport",      type:"Seafood Bar",    rating:4.7, lat:41.1398, lng:-73.3545, happyHour:{days:"Tue-Sat",start:16,end:17}, deals:"Seafood bites & cocktail specials, oysters" },
  { id:83, name:"Don Memo",            neighborhood:"Westport",      type:"Mexican Bar",    rating:4.6, lat:41.1422, lng:-73.3595, happyHour:{days:"Tue-Fri",start:16,end:18}, deals:"$8 margaritas, taco specials, $5 beer" },
  { id:84, name:"Pink Sumo",           neighborhood:"Westport",      type:"Japanese Bar",   rating:4.5, lat:41.1408, lng:-73.3570, happyHour:{days:"Daily",  start:15,end:18}, deals:"Reduced sushi rolls, apps & drinks daily 3–6pm" },
  { id:85, name:"Kawa Ni",             neighborhood:"Westport",      type:"Japanese Bar",   rating:4.7, lat:41.1432, lng:-73.3588, happyHour:{days:"Tue-Fri",start:16,end:18}, deals:"$8 cocktails, small plates 50% off, $5 beer" },
  { id:86, name:"Spotted Horse Tavern",neighborhood:"Westport",      type:"Pub",            rating:4.5, lat:41.1412, lng:-73.3575, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:87, name:"Tarry Lodge",         neighborhood:"Westport",      type:"Italian Bar",    rating:4.6, lat:41.1418, lng:-73.3565, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$10 wine & cocktails, small plates $5" },
  { id:88, name:"Bistro B at Westport Inn", neighborhood:"Westport", type:"Hotel Bar",      rating:4.4, lat:41.1402, lng:-73.3601, happyHour:{days:"Mon-Fri",start:17,end:19}, deals:"$1 oysters, $5 wines" },
  { id:89, name:"Little Pub Westport", neighborhood:"Westport",      type:"Pub",            rating:4.5, lat:41.1428, lng:-73.3583, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$5 drafts, $6 wine, pub specials" },
  // ── SHELTON ──
  { id:100, name:"Bar 140",              neighborhood:"Shelton",      type:"Cocktail Bar",   rating:4.6, lat:41.3165, lng:-73.0746, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 craft drafts, top-shelf selection" },
  { id:1000, name:"Chaplin's",           neighborhood:"Shelton",      type:"Steakhouse Bar", rating:4.8, lat:41.3162, lng:-73.0758, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails (Rum Old Fashioned, Chaplin Smash, Godfather, Nue Spritz) · ½ price bottle wine, $7 wine by glass · $3 beer · Raw bar: $1.50 oysters, $1 clams · Apps: truffle fries $6, mac & cheese $6, pork belly bites $7, broiled clams $8" },
  { id:102, name:"Caloroso Eatery & Bar",neighborhood:"Shelton",      type:"Restaurant Bar", rating:4.6, lat:41.3180, lng:-73.0740, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 drafts, bar bites" },
  { id:103, name:"Pier 131 Kitchen + Bar",neighborhood:"Shelton",     type:"Restaurant Bar", rating:4.5, lat:41.3158, lng:-73.0770, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine, waterfront views" },
  { id:104, name:"Little Barn",          neighborhood:"Shelton",      type:"Beer Bar",       rating:4.5, lat:41.3175, lng:-73.0750, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails" },
  { id:105, name:"Matto Wine Bar",       neighborhood:"Shelton",      type:"Wine Bar",       rating:4.6, lat:41.3162, lng:-73.0755, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $9 cocktails, charcuterie specials" },
  { id:106, name:"Center Street Social", neighborhood:"Shelton",      type:"Bar & Grill",    rating:4.4, lat:41.3168, lng:-73.0748, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 wine, $7 cocktails" },

  // ── SEYMOUR ──
  { id:110, name:"Pub 67",              neighborhood:"Seymour",       type:"Pub",            rating:4.5, lat:41.3987, lng:-73.0776, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"25 craft taps, $5 drafts, $6 cocktails" },
  { id:111, name:"Boland's",            neighborhood:"Seymour",       type:"Bar & Grill",    rating:4.4, lat:41.3998, lng:-73.0760, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 domestics, $6 cocktails, live music nights" },

  // ── OXFORD ──
  { id:115, name:"Sitting Duck Tavern", neighborhood:"Oxford",        type:"Tavern",         rating:4.6, lat:41.4282, lng:-73.1121, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$6 drafts, $8 cocktails, farm-fresh bites" },

  // ── GREENWICH ──
  { id:120, name:"JHouse Restaurant",   neighborhood:"Greenwich",     type:"Hotel Bar",      rating:4.7, lat:41.0534, lng:-73.6352, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $8 wine, $10 cocktails, $1.50 oysters, apps $7-12" },
  { id:121, name:"Southbay Greenwich",  neighborhood:"Greenwich",     type:"Restaurant Bar", rating:4.6, lat:41.0270, lng:-73.6282, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"Drink & food specials daily 4–6pm" },
  { id:122, name:"Barcelona Greenwich", neighborhood:"Greenwich",     type:"Wine Bar",       rating:4.7, lat:41.0265, lng:-73.6275, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"50% off sparkling wine, tapas $3.50–8.50, cocktail specials" },
  { id:123, name:"Méli-Mélo",          neighborhood:"Greenwich",     type:"French Bar",     rating:4.6, lat:41.0268, lng:-73.6270, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, French small plates" },

  // ── DARIEN ──
  { id:130, name:"The Granola Bar",     neighborhood:"Darien",        type:"Bar & Grill",    rating:4.5, lat:41.0787, lng:-73.4736, happyHour:{days:"Wed-Sat",start:15,end:18}, deals:"$5 beer, $7 wine, $10 cocktails, bar snacks $5-8" },
  { id:131, name:"Bodega Darien",       neighborhood:"Darien",        type:"Mexican Bar",    rating:4.5, lat:41.0769, lng:-73.4720, happyHour:{days:"Tue-Fri",start:16,end:18}, deals:"$8 margaritas, $3.75 tacos, $6 sliders, $9 duck nachos" },

  // ── NORWALK ──
  { id:140, name:"Tablao Wine Bar",     neighborhood:"Norwalk",       type:"Wine Bar",       rating:4.7, lat:41.1002, lng:-73.4221, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, half-price bottles Wed & Sun, sangria & paella Thu" },
  { id:141, name:"The Spread",          neighborhood:"Norwalk",       type:"Cocktail Bar",   rating:4.6, lat:41.0908, lng:-73.4198, happyHour:{days:"Daily",  start:15,end:17}, deals:"2 tacos for $10, $10 margaritas, patio vibes" },
  { id:142, name:"Spacecat Brewing",    neighborhood:"Norwalk",       type:"Brewery",        rating:4.6, lat:41.1025, lng:-73.4240, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 pints, brewery atmosphere" },
  { id:143, name:"Greer Southern Table",neighborhood:"Norwalk",       type:"Restaurant Bar", rating:4.6, lat:41.0985, lng:-73.4205, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, Southern comfort bites" },
  { id:144, name:"Barcelona Norwalk",   neighborhood:"Norwalk",       type:"Wine Bar",       rating:4.8, lat:41.1010, lng:-73.4215, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"50% off sparkling wine, tapas specials, cocktails" },
  { id:145, name:"BJ Ryan's Banc House",neighborhood:"Norwalk",       type:"Bar & Grill",    rating:4.4, lat:41.0995, lng:-73.4225, happyHour:{days:"Mon-Thu",start:15,end:16}, deals:"$1 oysters, $.75 clams, $2 shrimp cocktail, beer specials" },
  { id:146, name:"Lazy Sister",         neighborhood:"Norwalk",       type:"Cocktail Bar",   rating:4.6, lat:41.0970, lng:-73.4190, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $6 wine, $5 beer" },

  // ── RIDGEFIELD ──
  { id:150, name:"Lounsbury House",     neighborhood:"Ridgefield",    type:"Restaurant Bar", rating:4.6, lat:41.2804, lng:-73.4985, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, apps discounted" },
  { id:151, name:"Caffe Mirage",        neighborhood:"Ridgefield",    type:"Italian Bar",    rating:4.5, lat:41.2812, lng:-73.4978, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 wine, $9 cocktails, Italian bites" },
  { id:152, name:"Barolo Ristorante",   neighborhood:"Ridgefield",    type:"Wine Bar",       rating:4.6, lat:41.2798, lng:-73.4990, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, half-price antipasti" },

  // ── DANBURY ──
  { id:160, name:"J. Law Kitchen & Bar",neighborhood:"Danbury",       type:"Cocktail Bar",   rating:4.6, lat:41.3948, lng:-73.4540, happyHour:{days:"Tue-Fri",start:15,end:18}, deals:"$8 cocktails, $6 drafts, artisan pizzas & apps half off" },
  { id:161, name:"Stanziato's",         neighborhood:"Danbury",       type:"Restaurant Bar", rating:4.7, lat:41.3960, lng:-73.4555, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, wood-fired pizza specials" },
  { id:162, name:"Square One Bar & Grill",neighborhood:"Danbury",     type:"Bar & Grill",    rating:4.4, lat:41.3935, lng:-73.4530, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, wings & bar bites" },
  { id:163, name:"Terra Danbury",       neighborhood:"Danbury",       type:"Restaurant Bar", rating:4.6, lat:41.3955, lng:-73.4545, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, seasonal small plates" },
  { id:164, name:"Rosy Tomorrows",      neighborhood:"Danbury",       type:"Cocktail Bar",   rating:4.5, lat:41.3942, lng:-73.4535, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:165, name:"Barbarie's Black Angus",neighborhood:"Danbury",     type:"Steakhouse Bar", rating:4.5, lat:41.3970, lng:-73.4560, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"Prime time menu, $6 drafts, $8 cocktails" },

  // ── NEWTOWN ──
  { id:170, name:"Newtown Village Pub", neighborhood:"Newtown",       type:"Pub",            rating:4.4, lat:41.4148, lng:-73.3032, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 wine, $7 cocktails" },
  { id:171, name:"Market Place Kitchen",neighborhood:"Newtown",       type:"Restaurant Bar", rating:4.5, lat:41.4155, lng:-73.3025, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine, apps discounted" },

  // ── SOUTHBURY ──
  { id:175, name:"Market Place Kitchen Southbury", neighborhood:"Southbury", type:"Restaurant Bar", rating:4.5, lat:41.4820, lng:-73.2168, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:176, name:"Plum Tree Restaurant",neighborhood:"Southbury",     type:"Asian Bar",      rating:4.5, lat:41.4812, lng:-73.2175, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, sushi specials" },

  // ── WOODBURY ──
  { id:178, name:"Good News Café",      neighborhood:"Woodbury",      type:"Restaurant Bar", rating:4.6, lat:41.5398, lng:-73.2048, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, locally sourced bites" },

  // ── MIDDLEBURY ──
  { id:179, name:"Middlebury Tavern",   neighborhood:"Middlebury",    type:"Tavern",         rating:4.3, lat:41.5337, lng:-73.1210, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 domestics, $5 wells, $6 cocktails" },

  // ── AVON ──
  { id:180, name:"Market Place Kitchen Avon", neighborhood:"Avon",    type:"Restaurant Bar", rating:4.5, lat:41.8057, lng:-72.8348, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine, apps half off" },
  { id:181, name:"Seasons Restaurant",  neighborhood:"Avon",          type:"Restaurant Bar", rating:4.5, lat:41.8065, lng:-72.8340, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, seasonal small plates" },

  // ── SOUTHINGTON ──
  { id:185, name:"Aqua Turf Club",      neighborhood:"Southington",   type:"Restaurant Bar", rating:4.5, lat:41.6012, lng:-72.8748, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:186, name:"The Cornerstone",     neighborhood:"Southington",   type:"Bar & Grill",    rating:4.3, lat:41.5998, lng:-72.8760, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 domestics, $6 cocktails, pub bites" },

  // ── BRIDGEPORT ──
  { id:190, name:"Tiago's Bar & Grill", neighborhood:"Bridgeport",    type:"Bar & Grill",    rating:4.4, lat:41.1795, lng:-73.1894, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:191, name:"Two Boots",           neighborhood:"Bridgeport",    type:"Cocktail Bar",   rating:4.4, lat:41.1820, lng:-73.1905, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$8 cocktails, $5 beer, $6 wine, apps discounted" },
  { id:192, name:"Black Rock Castle",   neighborhood:"Bridgeport",    type:"Irish Pub",      rating:4.5, lat:41.1780, lng:-73.2020, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $5 wells, Irish pub fare" },

  // ── MIDDLETOWN ──
  { id:200, name:"Harrie's Jailhouse",  neighborhood:"Middletown",    type:"Bar & Grill",    rating:4.5, lat:41.5615, lng:-72.6506, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:201, name:"Celtic Cavern",       neighborhood:"Middletown",    type:"Irish Pub",      rating:4.5, lat:41.5623, lng:-72.6512, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$4 pints, $6 cocktails, pub grub specials" },
  { id:202, name:"Tate's",              neighborhood:"Middletown",    type:"Cocktail Bar",   rating:4.6, lat:41.5608, lng:-72.6498, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 drafts" },
  { id:203, name:"Esca Restaurant",     neighborhood:"Middletown",    type:"Wine Bar",       rating:4.6, lat:41.5630, lng:-72.6520, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 wine, $10 cocktails, Italian small plates" },
  { id:204, name:"Conspiracy Bar",      neighborhood:"Middletown",    type:"Cocktail Bar",   rating:4.4, lat:41.5598, lng:-72.6490, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, creative mixology" },

  // ── NEW BRITAIN ──
  { id:210, name:"Sparky's Bar & Grill",neighborhood:"New Britain",   type:"Bar & Grill",    rating:4.3, lat:41.6612, lng:-72.7795, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$4 domestics, $6 wells, $5 wine" },
  { id:211, name:"Roosevelt's",         neighborhood:"New Britain",   type:"Pub",            rating:4.4, lat:41.6625, lng:-72.7808, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, pub bites" },
  { id:212, name:"Burtons Grill",       neighborhood:"New Britain",   type:"Restaurant Bar", rating:4.5, lat:41.6598, lng:-72.7780, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $8 cocktails, apps discounted" },

  // ── MANCHESTER ──
  { id:220, name:"Audacity British Pub",neighborhood:"Manchester",    type:"British Pub",    rating:4.7, lat:41.7768, lng:-72.5218, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, proper fish & chips" },
  { id:221, name:"The Main Pub",        neighborhood:"Manchester",    type:"Pub",            rating:4.5, lat:41.7755, lng:-72.5210, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:222, name:"Market Grille",       neighborhood:"Manchester",    type:"Restaurant Bar", rating:4.5, lat:41.7780, lng:-72.5230, happyHour:{days:"Mon-Fri",start:15,end:18,sat:true,satStart:15,satEnd:21}, deals:"$5.50 cocktails, sangria specials, sliders & wings" },
  { id:223, name:"Urban Lodge Brewing", neighborhood:"Manchester",    type:"Brewery",        rating:4.6, lat:41.7762, lng:-72.5225, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft pints, brewery taproom specials" },
  { id:224, name:"Pearl Sports Bar",    neighborhood:"Manchester",    type:"Sports Bar",     rating:4.3, lat:41.7748, lng:-72.5215, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 domestics, $6 wells, game-day specials" },

  // ── NEW LONDON ──
  { id:230, name:"Muddy Waters Café",   neighborhood:"New London",    type:"Bar & Grill",    rating:4.4, lat:41.3558, lng:-72.1017, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:231, name:"Bank Street Tavern",  neighborhood:"New London",    type:"Pub",            rating:4.4, lat:41.3565, lng:-72.1022, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, waterfront vibes" },
  { id:232, name:"El N'Toro",          neighborhood:"New London",    type:"Mexican Bar",    rating:4.3, lat:41.3550, lng:-72.1010, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$7 margaritas, $5 tacos, $4 domestics" },
  { id:233, name:"Recovery Room Bar",   neighborhood:"New London",    type:"Dive Bar",       rating:4.2, lat:41.3572, lng:-72.1030, happyHour:{days:"Daily",  start:16,end:19}, deals:"$3 domestics, $5 wells, classic dive bar" },

  // ── OLD SAYBROOK ──
  { id:240, name:"Liv's Oyster Bar",    neighborhood:"Old Saybrook",  type:"Seafood Bar",    rating:4.7, lat:41.2921, lng:-72.3748, happyHour:{days:"Tue-Fri",start:16,end:17}, deals:"Oyster & cocktail specials, seafood bites" },
  { id:241, name:"Sip Wine Bar",        neighborhood:"Old Saybrook",  type:"Wine Bar",       rating:4.6, lat:41.2932, lng:-72.3755, happyHour:{days:"Tue-Sun",start:14,end:17}, deals:"Wine flights, $8 glass, cheese & charcuterie" },
  { id:242, name:"Penny Lane Pub",      neighborhood:"Old Saybrook",  type:"British Pub",    rating:4.5, lat:41.2915, lng:-72.3742, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, pub classics" },
  { id:243, name:"Little Pub Old Saybrook", neighborhood:"Old Saybrook", type:"Pub",         rating:4.5, lat:41.2928, lng:-72.3750, happyHour:{days:"Tue-Fri",start:15,end:18}, deals:"$5 drafts, $6 wine, pub bites" },
  { id:244, name:"Cuckoo's Nest",       neighborhood:"Old Saybrook",  type:"Mexican Bar",    rating:4.5, lat:41.2938, lng:-72.3760, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 margaritas, $5 tacos, $5 beer" },

  // ── STORRS ──
  { id:250, name:"Huskies Sports Bar",  neighborhood:"Storrs",        type:"Sports Bar",     rating:4.3, lat:41.8084, lng:-72.2495, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$4 domestics, $5 wells, game-day specials" },
  { id:251, name:"The Cellar",          neighborhood:"Storrs",        type:"Dive Bar",       rating:4.2, lat:41.8076, lng:-72.2488, happyHour:{days:"Daily",  start:16,end:19}, deals:"$3 domestics, $5 cocktails, college classics" },
  { id:252, name:"Willimantic Brewing", neighborhood:"Storrs",        type:"Brewery",        rating:4.5, lat:41.8090, lng:-72.2502, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft pints, brewery specials" },

  // ── WATERTOWN ──
  { id:260, name:"Watertown Tavern",    neighborhood:"Watertown",     type:"Tavern",         rating:4.3, lat:41.6048, lng:-73.1140, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 drafts, $6 wells, $5 wine" },
  { id:261, name:"Black Rabbit Grille", neighborhood:"Watertown",     type:"Bar & Grill",    rating:4.4, lat:41.6055, lng:-73.1132, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, burger & wings specials" },

  // ── WEST HARTFORD ──
  { id:270, name:"Whiskey Thieves",     neighborhood:"West Hartford", type:"Whiskey Bar",    rating:4.6, lat:41.7648, lng:-72.7420, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 whiskey pours, $5 drafts, $8 cocktails" },
  { id:271, name:"The Vine Restaurant", neighborhood:"West Hartford", type:"Wine Bar",       rating:4.6, lat:41.7655, lng:-72.7430, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, tapas specials" },
  { id:272, name:"Treva",               neighborhood:"West Hartford", type:"Cocktail Bar",   rating:4.7, lat:41.7660, lng:-72.7415, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, small plates" },
  { id:273, name:"Plan B West Hartford",neighborhood:"West Hartford", type:"Bar & Grill",    rating:4.5, lat:41.7642, lng:-72.7425, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $5 wine" },

  // ── ESSEX / SHORELINE ──
  { id:280, name:"The Griswold Inn",    neighborhood:"Essex",         type:"Historic Tavern", rating:4.6, lat:41.3523, lng:-72.3910, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $8 wine, $10 cocktails, historic atmosphere" },
  { id:281, name:"Black Seal",          neighborhood:"Essex",         type:"Pub",            rating:4.5, lat:41.3530, lng:-72.3905, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, New England bites" },

  // ── SIMSBURY ──
  { id:285, name:"Simsbury 1820 House", neighborhood:"Simsbury",      type:"Hotel Bar",      rating:4.6, lat:41.8768, lng:-72.8098, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 drafts" },
  { id:286, name:"Abigail's Grille",    neighborhood:"Simsbury",      type:"Restaurant Bar", rating:4.5, lat:41.8775, lng:-72.8105, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, apps half off" },

  // ── NEW CANAAN ──
  { id:290, name:"Barrique Wine & Market", neighborhood:"New Canaan", type:"Wine Bar",       rating:4.6, lat:41.1468, lng:-73.4950, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, charcuterie specials" },
  { id:291, name:"Vine Wine Bar",        neighborhood:"New Canaan",   type:"Wine Bar",       rating:4.6, lat:41.1475, lng:-73.4958, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 wine by the glass, $10 cocktails" },

  // ── WILTON ──
  { id:295, name:"Trattoria Vivolo",    neighborhood:"Wilton",        type:"Italian Bar",    rating:4.5, lat:41.1972, lng:-73.4395, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $9 cocktails, Italian apps" },

  // ── STRATFORD ──
  { id:300, name:"Housatonic Café",     neighborhood:"Stratford",     type:"Bar & Grill",    rating:4.3, lat:41.1843, lng:-73.1338, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 wine, $7 cocktails" },
  { id:301, name:"Marnick's Restaurant",neighborhood:"Stratford",     type:"Restaurant Bar", rating:4.4, lat:41.1850, lng:-73.1345, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, waterfront views" },

  // ── TRUMBULL ──
  { id:305, name:"Black Bear Saloon Trumbull", neighborhood:"Trumbull", type:"Sports Bar",  rating:4.3, lat:41.2434, lng:-73.2001, happyHour:{days:"Daily",  start:16,end:19}, deals:"$4 domestics, $6 wells, $5 wine" },
  { id:306, name:"Trumbull Marriott Bar",neighborhood:"Trumbull",     type:"Hotel Bar",      rating:4.4, lat:41.2440, lng:-73.1995, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },

  // ── ORANGE ──
  { id:310, name:"Orange Ale House",    neighborhood:"Orange",        type:"Pub",            rating:4.2, lat:41.2789, lng:-73.0270, happyHour:{days:"Mon-Fri",start:15,end:20}, deals:"$1 off all drinks, $3 Shocktop drafts Wed" },
  { id:311, name:"Ola Restaurant",      neighborhood:"Orange",        type:"Restaurant Bar", rating:4.5, lat:41.2798, lng:-73.0260, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Latin-inspired bites" },
  { id:312, name:"Puerto Vallarta",     neighborhood:"Orange",        type:"Mexican Bar",    rating:4.4, lat:41.2780, lng:-73.0255, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 margaritas, $5 beer, $6 wine" },
  { id:313, name:"Gabriele Ristorante", neighborhood:"Orange",        type:"Italian Bar",    rating:4.6, lat:41.2792, lng:-73.0275, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $9 cocktails, Italian apps" },
  { id:314, name:"744 West Bar & Grill",neighborhood:"Orange",        type:"Bar & Grill",    rating:4.4, lat:41.2775, lng:-73.0248, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, bar bites" },
  { id:315, name:"Dive Bar & Restaurant",neighborhood:"Orange",       type:"Dive Bar",       rating:4.3, lat:41.2783, lng:-73.0265, happyHour:{days:"Daily",  start:15,end:18}, deals:"$4 drafts, $5 wells, $6 cocktails" },

  // ── WEST HARTFORD ──
  { id:400, name:"Boqueria West Hartford",  neighborhood:"West Hartford", type:"Spanish Bar",     rating:4.7, lat:41.7660, lng:-72.7440, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"Half-price margaritas, sangria & wine, $1 off cocktails, tapas specials" },
  { id:401, name:"Vinted Wine Bar",          neighborhood:"West Hartford", type:"Wine Bar",        rating:4.6, lat:41.7662, lng:-72.7432, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, small plates" },
  { id:402, name:"Zohara",                   neighborhood:"West Hartford", type:"Mediterranean Bar",rating:4.7, lat:41.7668, lng:-72.7428, happyHour:{days:"Tue-Sat",start:15,end:18}, deals:"$7 cocktails, $5 beer, mezze specials" },
  { id:403, name:"Fork & Fire",              neighborhood:"West Hartford", type:"Restaurant Bar",  rating:4.5, lat:41.7644, lng:-72.7422, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 drafts, $6 wine" },
  { id:404, name:"Max's Oyster Bar",         neighborhood:"West Hartford", type:"Seafood Bar",     rating:4.7, lat:41.7650, lng:-72.7418, happyHour:{days:"Mon-Sat",start:16,end:18,sat:true,satStart:15,satEnd:18}, deals:"$6 cocktails, $5 beer, raw bar specials" },
  { id:405, name:"Restaurant Bricco",        neighborhood:"West Hartford", type:"Italian Bar",     rating:4.7, lat:41.7655, lng:-72.7435, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, Italian bites" },
  { id:406, name:"Arugula Bistro",           neighborhood:"West Hartford", type:"European Bar",    rating:4.6, lat:41.7658, lng:-72.7426, happyHour:{days:"Tue-Sat",start:16,end:18}, deals:"$7 cocktails, $5 beer, Mediterranean mezze" },
  { id:407, name:"Union Kitchen",            neighborhood:"West Hartford", type:"Bar & Grill",     rating:4.5, lat:41.7648, lng:-72.7442, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, bar bites" },
  { id:408, name:"Harvest Wine Bar",         neighborhood:"West Hartford", type:"Wine Bar",        rating:4.6, lat:41.7652, lng:-72.7430, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, cheese & charcuterie" },
  { id:409, name:"Savoy Pizzeria & Craft Bar",neighborhood:"West Hartford",type:"Beer Bar",        rating:4.5, lat:41.7640, lng:-72.7438, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails, pizza specials" },

  // ── HARTFORD (more) ──
  { id:410, name:"Trumbull Kitchen",         neighborhood:"Hartford",      type:"Cocktail Bar",    rating:4.6, lat:41.7640, lng:-72.6845, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 tapas, $6 cocktails, $5 wine, $4 beer" },
  { id:411, name:"Parkville Market Bar",     neighborhood:"Hartford",      type:"Food Hall Bar",   rating:4.5, lat:41.7548, lng:-72.7025, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$4-6 beer, $5 wine, $6 cocktails across all bars" },
  { id:412, name:"Little River Restoratives",neighborhood:"Hartford",      type:"Cocktail Bar",    rating:4.7, lat:41.7632, lng:-72.6860, happyHour:{days:"Tue-Sat",start:16,end:18}, deals:"$9 craft cocktails, $6 wine, seasonal specials" },
  { id:413, name:"Pig's Eye Pub",            neighborhood:"Hartford",      type:"Pub",             rating:4.4, lat:41.7618, lng:-72.6872, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$3 drafts, $4 house cocktails, pub grub specials" },
  { id:414, name:"Max Downtown",             neighborhood:"Hartford",      type:"Steakhouse Bar",  rating:4.7, lat:41.7635, lng:-72.6855, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$6 cocktails, $5 beer, raw bar, apps $5-10" },
  { id:415, name:"Boqueria Hartford",        neighborhood:"Hartford",      type:"Spanish Bar",     rating:4.6, lat:41.7645, lng:-72.6848, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"Half-price sangria, wine & select cocktails, tapas" },
  { id:416, name:"Fogata Mexican",           neighborhood:"Hartford",      type:"Mexican Bar",     rating:4.4, lat:41.7628, lng:-72.6858, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$7 margaritas, $5 beer, Mexican apps" },
  { id:417, name:"Max's Tavern",             neighborhood:"Hartford",      type:"Restaurant Bar",  rating:4.5, lat:41.7638, lng:-72.6850, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$6 cocktails, $4 beer, bar bites" },

  // ── EAST HARTFORD ──
  { id:420, name:"Wood 'n Tap East Hartford",neighborhood:"East Hartford",  type:"Bar & Grill",    rating:4.5, lat:41.7648, lng:-72.6198, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 sangria & cocktails, $6 wine, $5 beer, apps $3-6" },
  { id:421, name:"The Brickyard",            neighborhood:"East Hartford",  type:"Sports Bar",     rating:4.3, lat:41.7635, lng:-72.6210, happyHour:{days:"Daily",  start:16,end:19}, deals:"$4 domestics, $6 cocktails, $5 wine" },
  { id:422, name:"Okonomi",                  neighborhood:"East Hartford",  type:"Japanese Bar",   rating:4.5, lat:41.7628, lng:-72.6188, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, sushi rolls specials" },
  { id:423, name:"Maple & Motor",            neighborhood:"East Hartford",  type:"Bar & Grill",    rating:4.4, lat:41.7640, lng:-72.6202, happyHour:{days:"Mon-Fri",start:15,end:19}, deals:"Mon & Sun all day, Tue-Sat 3-7PM, $5 specials" },

  // ── ROCKY HILL ──
  { id:430, name:"Rooster",                  neighborhood:"Rocky Hill",     type:"Restaurant Bar", rating:4.6, lat:41.6665, lng:-72.6498, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 drafts, farm-to-table bites" },
  { id:431, name:"Sayulita",                 neighborhood:"Rocky Hill",     type:"Mexican Bar",    rating:4.5, lat:41.6658, lng:-72.6490, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$7 margaritas, $5 beer, tacos & apps" },
  { id:432, name:"Wood 'n Tap Rocky Hill",   neighborhood:"Rocky Hill",     type:"Bar & Grill",    rating:4.5, lat:41.6672, lng:-72.6505, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 sangria & cocktails, $6 wine, $5 beer" },
  { id:433, name:"The Flying Monkey Grill",  neighborhood:"Rocky Hill",     type:"Bar & Grill",    rating:4.4, lat:41.6650, lng:-72.6480, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, monkey apps" },

  // ── WETHERSFIELD ──
  { id:440, name:"Carbone's Kitchen & Bar",  neighborhood:"Wethersfield",   type:"Italian Bar",    rating:4.6, lat:41.7148, lng:-72.6518, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:441, name:"Main & Crown",             neighborhood:"Wethersfield",   type:"Restaurant Bar", rating:4.5, lat:41.7155, lng:-72.6510, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },

  // ── NEWINGTON ──
  { id:445, name:"Wood 'n Tap Newington",    neighborhood:"Newington",      type:"Bar & Grill",    rating:4.5, lat:41.6985, lng:-72.7198, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $6 wine, $5 beer, apps $3-6" },
  { id:446, name:"The Olympian Diner Bar",   neighborhood:"Newington",      type:"Bar & Grill",    rating:4.3, lat:41.6972, lng:-72.7185, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 cocktails, $5 wine" },

  // ── FARMINGTON ──
  { id:450, name:"Wood 'n Tap Farmington",   neighborhood:"Farmington",     type:"Bar & Grill",    rating:4.5, lat:41.7198, lng:-72.8338, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $6 wine, $5 beer, apps $3-6" },
  { id:451, name:"Arch Restaurant",          neighborhood:"Farmington",     type:"Restaurant Bar", rating:4.7, lat:41.7205, lng:-72.8345, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer, apps $6-10" },
  { id:452, name:"The Grist Mill",           neighborhood:"Farmington",     type:"Tavern",         rating:4.5, lat:41.7188, lng:-72.8328, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },

  // ── ENFIELD ──
  { id:455, name:"Bond 124",                 neighborhood:"Enfield",        type:"Bar & Grill",    rating:4.5, lat:41.9758, lng:-72.5948, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:456, name:"Wood 'n Tap Enfield",      neighborhood:"Enfield",        type:"Bar & Grill",    rating:4.5, lat:41.9768, lng:-72.5958, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $6 wine, $5 beer, apps $3-6" },
  { id:457, name:"The Yarde Tavern",         neighborhood:"Enfield",        type:"Tavern",         rating:4.4, lat:41.9748, lng:-72.5940, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 drafts, $5 wells, $6 cocktails" },
  { id:458, name:"Buona Vita Enfield",       neighborhood:"Enfield",        type:"Italian Bar",    rating:4.5, lat:41.9775, lng:-72.5965, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },

  // ── VERNON / ROCKVILLE ──
  { id:460, name:"Spare Time Vernon",        neighborhood:"Vernon",         type:"Bar & Grill",    rating:4.4, lat:41.8398, lng:-72.4708, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 short drafts, $4 house wine, $5 cocktails, $5 apps" },
  { id:461, name:"Rocking Horse Bar & Grill",neighborhood:"Vernon",         type:"Bar & Grill",    rating:4.4, lat:41.8388, lng:-72.4698, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 cocktails, wings specials" },
  { id:462, name:"Wood 'n Tap Vernon",       neighborhood:"Vernon",         type:"Bar & Grill",    rating:4.5, lat:41.8405, lng:-72.4715, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $6 wine, $5 beer, apps $3-6" },
  { id:463, name:"Murphy's Pub Vernon",      neighborhood:"Vernon",         type:"Irish Pub",      rating:4.4, lat:41.8378, lng:-72.4688, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, pub grub" },

  // ── SOUTH WINDSOR ──
  { id:465, name:"b Restaurants South Windsor",neighborhood:"South Windsor",type:"Restaurant Bar", rating:4.5, lat:41.8215, lng:-72.6088, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$9 apps, draft beer, wine & cocktail specials" },
  { id:466, name:"Red Heat Tavern",          neighborhood:"South Windsor",  type:"Bar & Grill",    rating:4.4, lat:41.8205, lng:-72.6078, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, tavern bites" },

  // ── WINDSOR ──
  { id:468, name:"Elmo's Dockside",          neighborhood:"Windsor",        type:"Waterfront Bar", rating:4.5, lat:41.8525, lng:-72.6428, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, waterfront views" },
  { id:469, name:"Mill on the River",        neighborhood:"Windsor",        type:"Restaurant Bar", rating:4.5, lat:41.8538, lng:-72.6438, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, riverside apps" },

  // ── TORRINGTON ──
  { id:470, name:"Poutine Kitchen & Bar",    neighborhood:"Torrington",     type:"Bar & Grill",    rating:4.4, lat:41.8008, lng:-73.1218, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $6 cocktails, poutine specials" },
  { id:471, name:"Nardelli's Grinder Shoppe",neighborhood:"Torrington",     type:"Bar & Grill",    rating:4.3, lat:41.8018, lng:-73.1228, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 domestics, $6 cocktails, $5 wine" },
  { id:472, name:"Torrington Country Club Bar",neighborhood:"Torrington",   type:"Restaurant Bar", rating:4.4, lat:41.8028, lng:-73.1238, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $7 cocktails, $6 wine" },
  { id:473, name:"Wood 'n Tap Southington",  neighborhood:"Southington",    type:"Bar & Grill",    rating:4.5, lat:41.6002, lng:-72.8780, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $6 wine, $5 beer, apps $3-6" },

  // ── MERIDEN ──
  { id:480, name:"Eli's on Whitney",         neighborhood:"Meriden",        type:"Restaurant Bar", rating:4.5, lat:41.5388, lng:-72.7968, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:481, name:"Alforno Trattoria",        neighborhood:"Meriden",        type:"Italian Bar",    rating:4.5, lat:41.5398, lng:-72.7978, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:482, name:"Black Bear Saloon Meriden",neighborhood:"Meriden",        type:"Sports Bar",     rating:4.3, lat:41.5378, lng:-72.7958, happyHour:{days:"Daily",  start:16,end:19}, deals:"$4 domestics, $6 wells, $5 wine" },
  { id:483, name:"Luna Restaurant",         neighborhood:"Meriden",         type:"Restaurant Bar", rating:4.5, lat:41.5408, lng:-72.7988, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, seasonal apps" },

  // ── WALLINGFORD ──
  { id:485, name:"Zingarella",               neighborhood:"Wallingford",    type:"Italian Bar",    rating:4.6, lat:41.4568, lng:-72.8228, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:486, name:"Kelsey's Restaurant",      neighborhood:"Wallingford",    type:"Restaurant Bar", rating:4.5, lat:41.4578, lng:-72.8238, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:487, name:"Prime 16 Wallingford",     neighborhood:"Wallingford",    type:"Bar & Grill",    rating:4.6, lat:41.4558, lng:-72.8218, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $8 cocktails, burger & app specials" },

  // ── CHESHIRE ──
  { id:490, name:"Mix Restaurant",           neighborhood:"Cheshire",       type:"Restaurant Bar", rating:4.5, lat:41.4998, lng:-72.9008, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:491, name:"Burtons Grill Cheshire",   neighborhood:"Cheshire",       type:"Restaurant Bar", rating:4.5, lat:41.5008, lng:-72.9018, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $8 cocktails, apps discounted" },

  // ── HAMDEN ──
  { id:495, name:"Amato's Toy Box",          neighborhood:"Hamden",         type:"Cocktail Bar",   rating:4.5, lat:41.3958, lng:-72.9008, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine" },
  { id:496, name:"Prime 16 Hamden",          neighborhood:"Hamden",         type:"Bar & Grill",    rating:4.6, lat:41.3948, lng:-72.8998, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $8 cocktails, burgers & apps" },
  { id:497, name:"Tavern on State",          neighborhood:"Hamden",         type:"Tavern",         rating:4.4, lat:41.3968, lng:-72.9018, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:498, name:"Eli Cannon's",             neighborhood:"Hamden",         type:"Beer Bar",       rating:4.6, lat:41.3978, lng:-72.9028, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, local brews, bar bites" },

  // ── NORTH HAVEN ──
  { id:500, name:"Aunt Chilada's",           neighborhood:"North Haven",    type:"Mexican Bar",    rating:4.4, lat:41.3908, lng:-72.8608, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 margaritas, $5 beer, Mexican apps" },
  { id:501, name:"Pasta Cosi North Haven",   neighborhood:"North Haven",    type:"Italian Bar",    rating:4.5, lat:41.3918, lng:-72.8618, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },

  // ── BRANFORD ──
  { id:504, name:"New England Brewing (Branford)", neighborhood:"Branford", type:"Brewery", rating:4.7, lat:41.2948, lng:-72.8128, happyHour:{days:"Thu-Sat",start:14,end:18}, deals:"$5 pints, Sea Hag IPA, NEBCO Craft Kitchen seafood bites, waterfront taproom" },
  { id:506, name:"Lenny's Indian Head Inn",  neighborhood:"Branford",       type:"Seafood Bar",    rating:4.5, lat:41.2938, lng:-72.8118, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, seafood apps" },
  { id:507, name:"Anchor Bar Branford",      neighborhood:"Branford",       type:"Dive Bar",       rating:4.3, lat:41.2958, lng:-72.8138, happyHour:{days:"Daily",  start:15,end:18}, deals:"$4 domestics, $5 wells, $6 cocktails" },

  // ── EAST HAVEN ──
  { id:510, name:"Bella Notte",              neighborhood:"East Haven",     type:"Italian Bar",    rating:4.5, lat:41.2878, lng:-72.8688, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:511, name:"Snooker's",               neighborhood:"East Haven",      type:"Sports Bar",     rating:4.3, lat:41.2868, lng:-72.8678, happyHour:{days:"Daily",  start:16,end:19}, deals:"$4 domestics, $6 wells, sports specials" },

  // ── GUILFORD ──
  { id:515, name:"Bishop's Orchards Winery", neighborhood:"Guilford",       type:"Wine Bar",       rating:4.6, lat:41.2838, lng:-72.6748, happyHour:{days:"Fri-Sat",start:16,end:18}, deals:"$6 wine flights, $8 wine by the glass" },
  { id:516, name:"Stone House Restaurant",   neighborhood:"Guilford",       type:"Restaurant Bar", rating:4.5, lat:41.2848, lng:-72.6738, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:517, name:"Cilantro Mexican Grille",  neighborhood:"Guilford",       type:"Mexican Bar",    rating:4.4, lat:41.2828, lng:-72.6728, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$7 margaritas, $5 beer, tacos & apps" },

  // ── DERBY / ANSONIA / NAUGATUCK ──
  { id:520, name:"THC The Hops Company",     neighborhood:"Derby",          type:"Beer Bar",       rating:4.6, lat:41.3228, lng:-73.0858, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, tap specials, beer flights" },
  { id:521, name:"Relish Wine Bar Derby",    neighborhood:"Derby",          type:"Wine Bar",       rating:4.6, lat:41.3238, lng:-73.0868, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, cheese board specials" },
  { id:522, name:"Chasers Bar & Lounge",     neighborhood:"Ansonia",        type:"Bar & Lounge",   rating:4.3, lat:41.3448, lng:-73.0798, happyHour:{days:"Daily",  start:15,end:19}, deals:"$5 drafts, $6 cocktails, $5 wine" },
  { id:523, name:"Copper City Bar & Grill",  neighborhood:"Ansonia",        type:"Bar & Grill",    rating:4.4, lat:41.3458, lng:-73.0808, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 domestics, $6 wells, burger specials" },
  { id:524, name:"Mint Kitchen & Cocktails", neighborhood:"Ansonia",        type:"Cocktail Bar",   rating:4.5, lat:41.3438, lng:-73.0788, happyHour:{days:"Wed-Sat",start:16,end:19}, deals:"$8 cocktails, $6 wine, fresh-ingredients bites" },
  { id:525, name:"Naugatuck Tavern",         neighborhood:"Naugatuck",      type:"Tavern",         rating:4.3, lat:41.4858, lng:-73.0508, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 domestics, $6 wells, $5 wine" },
  { id:526, name:"Rubber City Brewing",      neighborhood:"Naugatuck",      type:"Brewery",        rating:4.5, lat:41.4868, lng:-73.0518, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$5 pints, brewery specials" },

  // ── COLCHESTER / HEBRON / COLUMBIA ──
  { id:530, name:"Hayward's Restaurant",     neighborhood:"Colchester",     type:"Restaurant Bar", rating:4.5, lat:41.5758, lng:-72.3318, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:531, name:"Colchester Ale House",     neighborhood:"Colchester",     type:"Pub",            rating:4.4, lat:41.5748, lng:-72.3308, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 cocktails, pub specials" },

  // ── GROTON / NEW LONDON AREA ──
  { id:535, name:"The Recovery Room",        neighborhood:"Groton",         type:"Dive Bar",       rating:4.2, lat:41.3538, lng:-72.0828, happyHour:{days:"Daily",  start:16,end:19}, deals:"$3 domestics, $5 wells, classic dive bar" },
  { id:536, name:"Olio Restaurant",          neighborhood:"Groton",         type:"Restaurant Bar", rating:4.5, lat:41.3548, lng:-72.0838, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:537, name:"The Hanafin's",            neighborhood:"Groton",         type:"Irish Pub",      rating:4.4, lat:41.3528, lng:-72.0818, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, pub grub" },
  { id:538, name:"Latitude 41",             neighborhood:"New London",      type:"Seafood Bar",    rating:4.5, lat:41.3578, lng:-72.0998, happyHour:{days:"Tue-Fri",start:16,end:18}, deals:"$8 cocktails, oyster specials, $5 beer" },
  { id:539, name:"Captain Scott's",         neighborhood:"New London",      type:"Seafood Bar",    rating:4.4, lat:41.3568, lng:-72.1008, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, lobster rolls" },

  // ── NORWICH ──
  { id:545, name:"The Tap House Norwich",    neighborhood:"Norwich",        type:"Beer Bar",       rating:4.5, lat:41.5238, lng:-72.0758, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails, tap specials" },
  { id:546, name:"Prima Pasta",             neighborhood:"Norwich",         type:"Italian Bar",    rating:4.5, lat:41.5248, lng:-72.0768, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:547, name:"The Harp & Dragon",       neighborhood:"Norwich",         type:"Irish Pub",      rating:4.4, lat:41.5228, lng:-72.0748, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, Irish pub fare" },
  { id:548, name:"Taftville Pub",           neighborhood:"Norwich",         type:"Pub",            rating:4.3, lat:41.5218, lng:-72.0738, happyHour:{days:"Daily",  start:15,end:19}, deals:"$4 domestics, $5 wells, $6 cocktails" },

  // ── EAST LYME / NIANTIC ──
  { id:550, name:"The Flanders Fish Market", neighborhood:"East Lyme",      type:"Seafood Bar",    rating:4.5, lat:41.3658, lng:-72.2238, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $7 cocktails, seafood specials" },
  { id:551, name:"Seasons on the Sound",    neighborhood:"East Lyme",       type:"Restaurant Bar", rating:4.6, lat:41.3668, lng:-72.2248, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Sound views" },

  // ── WESTBROOK / CLINTON / MADISON SHORELINE ──
  { id:555, name:"Water's Edge Resort Bar",  neighborhood:"Westbrook",      type:"Hotel Bar",      rating:4.5, lat:41.2938, lng:-72.4548, happyHour:{days:"Daily",  start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine, shoreline views" },
  { id:556, name:"Westbrook Lobster",        neighborhood:"Clinton",        type:"Seafood Bar",    rating:4.5, lat:41.2788, lng:-72.5278, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $7 cocktails, $1.50 oysters" },
  { id:557, name:"Hammonasset Beach Bar",    neighborhood:"Madison",        type:"Beach Bar",      rating:4.4, lat:41.2688, lng:-72.5638, happyHour:{days:"Daily",  start:15,end:18}, deals:"$5 drafts, $7 cocktails, beachside apps" },
  { id:558, name:"Friends & Company",        neighborhood:"Madison",        type:"Bar & Grill",    rating:4.5, lat:41.2798, lng:-72.5988, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },

  // ── CHESTER / DEEP RIVER / ESSEX AREA ──
  { id:560, name:"River Tavern",             neighborhood:"Chester",        type:"Restaurant Bar", rating:4.7, lat:41.4028, lng:-72.4488, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, farm-fresh apps" },
  { id:561, name:"Deep River Tavern",        neighborhood:"Deep River",     type:"Tavern",         rating:4.4, lat:41.3818, lng:-72.4378, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:562, name:"Turtle Shell Brewery",     neighborhood:"Deep River",     type:"Brewery",        rating:4.5, lat:41.3828, lng:-72.4388, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$5 pints, flights $8, brewery specials" },
  { id:563, name:"Ivoryton Playhouse Bar",   neighborhood:"Essex",          type:"Hotel Bar",      rating:4.4, lat:41.3598, lng:-72.3828, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },

  // ── CROMWELL / PORTLAND ──
  { id:565, name:"Plan B Cromwell",          neighborhood:"Cromwell",       type:"Bar & Grill",    rating:4.5, lat:41.5958, lng:-72.6498, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $5 wine" },
  { id:566, name:"Riverhouse at Goodspeed",  neighborhood:"Haddam",         type:"Restaurant Bar", rating:4.5, lat:41.4688, lng:-72.4598, happyHour:{days:"Tue-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, river views" },

  // ── SANDY HOOK / NEWTOWN AREA ──
  { id:570, name:"Andiamo Ristorante",       neighborhood:"Newtown",        type:"Italian Bar",    rating:4.6, lat:41.4165, lng:-73.3038, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"Half-price wine & beer, $8 cocktails, apps" },
  { id:571, name:"Stonebridge Restaurant",   neighborhood:"Sandy Hook",     type:"Restaurant Bar", rating:4.6, lat:41.4175, lng:-73.2858, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$7 cocktails, $5 beer, $6 wine, apps specials" },

  // ── BROOKFIELD / NEW MILFORD / NEW FAIRFIELD ──
  { id:575, name:"Brookfield Social",        neighborhood:"Brookfield",     type:"Sports Bar",     rating:4.4, lat:41.4738, lng:-73.4028, happyHour:{days:"Wed-Thu",start:16,end:18}, deals:"$4 domestics, $6 cocktails, bar bites" },
  { id:576, name:"Rosy Mound Taproom",       neighborhood:"New Milford",    type:"Brewery",        rating:4.5, lat:41.5768, lng:-73.4088, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$5 craft pints, brewery specials" },
  { id:577, name:"The Still",                neighborhood:"New Milford",    type:"Cocktail Bar",   rating:4.5, lat:41.5778, lng:-73.4078, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:578, name:"Vinology Wine Bar",        neighborhood:"New Fairfield",  type:"Wine Bar",       rating:4.5, lat:41.4688, lng:-73.4868, happyHour:{days:"Wed-Thu",start:16,end:18}, deals:"$8 wine, charcuterie boards, wine flights" },

  // ── MONROE / TRUMBULL / EASTON ──
  { id:580, name:"Craft 260",                neighborhood:"Monroe",         type:"Beer Bar",       rating:4.5, lat:41.3348, lng:-73.2028, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails" },
  { id:581, name:"The Margarita Factory",    neighborhood:"Monroe",         type:"Mexican Bar",    rating:4.4, lat:41.3338, lng:-73.2018, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 margaritas, $5 beer, tacos & apps" },

  // ── SUFFIELD / GRANBY ──
  { id:585, name:"The Copper Beech Inn",     neighborhood:"Suffield",       type:"Hotel Bar",      rating:4.5, lat:41.9858, lng:-72.6498, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:586, name:"Salmon Brook Brewing",     neighborhood:"Granby",         type:"Brewery",        rating:4.5, lat:41.9588, lng:-72.8368, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$5 pints, $8 flights, brewery specials" },

  // ── COVENTRY / HEBRON ──
  { id:590, name:"The Lion's Den",           neighborhood:"Coventry",       type:"Pub",            rating:4.4, lat:41.7798, lng:-72.3428, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, pub grub" },
  { id:591, name:"Ellington Brewing Co",     neighborhood:"Ellington",      type:"Brewery",        rating:4.5, lat:41.8998, lng:-72.4538, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$5 pints, flights & brewery specials" },

  // ── STAFFORD / STAFFORD SPRINGS ──
  { id:595, name:"Stafford Springs Tavern",  neighborhood:"Stafford Springs",type:"Tavern",        rating:4.3, lat:41.9538, lng:-72.2988, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 drafts, $5 wells, $6 cocktails" },

  // ── LITCHFIELD / KENT ──
  { id:600, name:"West Street Grill Bar",    neighborhood:"Litchfield",     type:"Restaurant Bar", rating:4.7, lat:41.7468, lng:-73.1858, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, upscale small plates" },
  { id:601, name:"Bohemian Pizza Bar",       neighborhood:"Litchfield",     type:"Bar & Grill",    rating:4.4, lat:41.7478, lng:-73.1848, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, pizza specials" },
  { id:602, name:"Kent Falls Brewing",       neighborhood:"Kent",           type:"Brewery",        rating:4.7, lat:41.7278, lng:-73.4768, happyHour:{days:"Fri-Sat",start:14,end:17}, deals:"$5 pints, flights & growler fills" },
  { id:603, name:"Fife 'n Drum",             neighborhood:"Kent",           type:"Restaurant Bar", rating:4.6, lat:41.7268, lng:-73.4758, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, colonial-inspired bites" },

  // ── SHARON / CORNWALL / SALISBURY ──
  { id:605, name:"Sage Boulangerie",         neighborhood:"Sharon",         type:"Bistro Bar",     rating:4.5, lat:41.8778, lng:-73.4758, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$8 wine, $9 cocktails, French bistro bites" },
  { id:606, name:"White Hart Inn Bar",       neighborhood:"Salisbury",      type:"Hotel Bar",      rating:4.6, lat:41.9868, lng:-73.4238, happyHour:{days:"Daily",  start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer, historic inn" },

  // ── ADDITIONAL SHORELINE / COASTAL ──
  { id:610, name:"Dock & Dine",              neighborhood:"Old Saybrook",   type:"Seafood Bar",    rating:4.5, lat:41.2818, lng:-72.3608, happyHour:{days:"Daily",  start:15,end:18}, deals:"$5 beer, $7 cocktails, dock views" },
  { id:611, name:"Pat's Kountry Kitchen",    neighborhood:"Old Saybrook",   type:"Dive Bar",       rating:4.3, lat:41.2908, lng:-72.3718, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$4 drafts, $5 wells, casual dive" },

  // ── ADDITIONAL NEW HAVEN ──
  { id:615, name:"Elm City Social",          neighborhood:"New Haven",      type:"Cocktail Bar",   rating:4.6, lat:41.3088, lng:-72.9258, happyHour:{days:"Tue-Sat",start:15,end:18,sat:true,satStart:15,satEnd:20.5}, deals:"$5 beer & wine, sangria & house martinis, draft flights, small plates" },
  { id:616, name:"Bar New Haven",            neighborhood:"New Haven",      type:"Beer Bar",       rating:4.5, lat:41.3078, lng:-72.9248, happyHour:{days:"Daily",  start:16,end:18}, deals:"$4 drafts, $5 wells, New Haven-style pizza" },
  { id:617, name:"Prime 16 New Haven",       neighborhood:"New Haven",      type:"Bar & Grill",    rating:4.6, lat:41.3068, lng:-72.9238, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $8 cocktails, burger specials" },
  { id:618, name:"Anchor Spa New Haven",     neighborhood:"New Haven",      type:"Dive Bar",       rating:4.4, lat:41.3058, lng:-72.9228, happyHour:{days:"Mon-Fri",start:17,end:19}, deals:"$5 cocktails & apps from $8, bar area only" },
  { id:619, name:"Te Amo Tequila Bar",       neighborhood:"New Haven",      type:"Mexican Bar",    rating:4.5, lat:41.3098, lng:-72.9268, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 tequila cocktails, $5 beer, taco specials" },
  { id:620, name:"Atelier Florian",          neighborhood:"New Haven",      type:"Wine Bar",       rating:4.7, lat:41.3108, lng:-72.9278, happyHour:{days:"Tue-Sat",start:17,end:19}, deals:"Belgian-inspired wines & cocktails, refined apps" },

  // ── ADDITIONAL STAMFORD ──
  { id:625, name:"The Capital Grille Stamford",neighborhood:"Stamford",     type:"Steakhouse Bar", rating:4.7, lat:41.0548, lng:-73.5398, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$9 cocktails, $7 wine, $5 beer, bar bites" },
  { id:626, name:"Fortina Bar Stamford",     neighborhood:"Stamford",       type:"Italian Bar",    rating:4.6, lat:41.0542, lng:-73.5408, happyHour:{days:"Mon-Thu",start:16,end:19}, deals:"$5 beer & wine & sangria, $10 cocktails, apps $5-10" },
  { id:627, name:"Zaza New American Bistro", neighborhood:"Stamford",       type:"Cocktail Bar",   rating:4.5, lat:41.0525, lng:-73.5385, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$8 cocktails, $6 wine, $5 drafts" },
  { id:628, name:"L'escale Restaurant",      neighborhood:"Greenwich",      type:"French Bar",     rating:4.7, lat:41.0178, lng:-73.6268, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$10 cocktails, $8 wine, waterfront apps" },
  { id:629, name:"Elm Street Oyster House",  neighborhood:"Greenwich",      type:"Seafood Bar",    rating:4.6, lat:41.0268, lng:-73.6278, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $8 wine, $1.50 oysters, apps discounted" },

  // ── ADDITIONAL HARTFORD COUNTY ──
  { id:635, name:"b Restaurants Hartford",   neighborhood:"Hartford",       type:"Restaurant Bar", rating:4.5, lat:41.7632, lng:-72.6865, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$9 apps, draft beer, wine & cocktail specials" },
  { id:636, name:"b Restaurants Glastonbury",neighborhood:"Glastonbury",    type:"Restaurant Bar", rating:4.5, lat:41.7138, lng:-72.6038, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$9 apps, $5 drafts, $6 wine, $7 cocktails" },
  { id:638, name:"Rooftop 120",              neighborhood:"Hartford",       type:"Rooftop Bar",    rating:4.5, lat:41.7628, lng:-72.6878, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$8 cocktails, $5 beer, rooftop views of Hartford" },

  // ── ADDITIONAL LOWER FAIRFIELD ──
  { id:640, name:"Bartaco Greenwich",        neighborhood:"Greenwich",      type:"Mexican Bar",    rating:4.5, lat:41.0272, lng:-73.6285, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 tacos, $7 margaritas, $5 beer" },
  { id:641, name:"Polpo Restaurant",         neighborhood:"Greenwich",      type:"Italian Bar",    rating:4.6, lat:41.0258, lng:-73.6272, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, Italian small plates" },
  { id:642, name:"Terrain Cafe Westport",    neighborhood:"Westport",       type:"Restaurant Bar", rating:4.6, lat:41.1420, lng:-73.3590, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, seasonal farm-fresh apps" },
  { id:643, name:"Jesup Hall",               neighborhood:"Westport",       type:"Cocktail Bar",   rating:4.5, lat:41.1435, lng:-73.3578, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:644, name:"Tavern on the Main",       neighborhood:"Westport",       type:"Pub",            rating:4.4, lat:41.1440, lng:-73.3572, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:645, name:"Rothbard Ale & Larder",    neighborhood:"Fairfield",      type:"Beer Hall",      rating:4.5, lat:41.1422, lng:-73.2588, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails, charcuterie" },
  { id:646, name:"Artisan Restaurant",       neighborhood:"Southport",      type:"Restaurant Bar", rating:4.6, lat:41.1288, lng:-73.2898, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$8 cocktails, $6 wine, farm-to-table apps" },
  { id:647, name:"Ash Creek Saloon",         neighborhood:"Bridgeport",     type:"Saloon",         rating:4.3, lat:41.1872, lng:-73.2028, happyHour:{days:"Daily",  start:15,end:19}, deals:"$4 domestics, $6 wells, saloon specials" },
  { id:648, name:"El Canario Latino",        neighborhood:"Bridgeport",     type:"Latin Bar",      rating:4.3, lat:41.1858, lng:-73.1962, happyHour:{days:"Fri-Sat",start:17,end:20}, deals:"$6 cocktails, $5 beer, Latin apps & dancing" },

  // ── MORE HARTFORD METRO ──
  { id:700, name:"Vito's By the Park",       neighborhood:"Hartford",       type:"Italian Bar",    rating:4.5, lat:41.7665, lng:-72.6828, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, Italian apps" },
  { id:701, name:"Timothy's",                neighborhood:"Hartford",       type:"Bar & Grill",    rating:4.4, lat:41.7622, lng:-72.6882, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$4 drafts, $6 cocktails, pub specials" },
  { id:702, name:"The Angry Barista",        neighborhood:"Hartford",       type:"Cocktail Bar",   rating:4.4, lat:41.7618, lng:-72.6835, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine" },
  { id:703, name:"Toro Restaurant",          neighborhood:"Hartford",       type:"Spanish Bar",    rating:4.6, lat:41.7642, lng:-72.6852, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, tapas specials" },
  { id:704, name:"City Steam Brewery",       neighborhood:"Hartford",       type:"Brewery",        rating:4.5, lat:41.7632, lng:-72.6842, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 pints, flights $9, brewery pub specials" },
  { id:706, name:"Peppercorn's Grill",       neighborhood:"Hartford",       type:"Italian Bar",    rating:4.6, lat:41.7648, lng:-72.6840, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, Italian small plates" },
  { id:707, name:"Trumbull 21",              neighborhood:"Hartford",       type:"Cocktail Bar",   rating:4.5, lat:41.7638, lng:-72.6856, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 drafts" },
  { id:708, name:"Vaughan's Public House",   neighborhood:"Hartford",       type:"Irish Pub",      rating:4.4, lat:41.7628, lng:-72.6876, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$4 pints, $6 cocktails, Irish pub classics" },
  { id:709, name:"Black Bear Hartford",      neighborhood:"Hartford",       type:"Sports Bar",     rating:4.3, lat:41.7618, lng:-72.6866, happyHour:{days:"Daily",  start:16,end:19}, deals:"$3 domestics, $6 wells, $5 wine" },

  // ── MORE WEST HARTFORD ──
  { id:710, name:"Bricco Trattoria",         neighborhood:"West Hartford",  type:"Italian Bar",    rating:4.5, lat:41.7645, lng:-72.7448, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:711, name:"The Place 2 Be",           neighborhood:"West Hartford",  type:"Bar & Grill",    rating:4.4, lat:41.7635, lng:-72.7445, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:712, name:"Wood 'n Tap Hartford",     neighborhood:"Hartford",       type:"Bar & Grill",    rating:4.5, lat:41.7625, lng:-72.6895, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $6 wine, $5 beer, apps $3-6" },
  { id:713, name:"Barcelona West Hartford",  neighborhood:"West Hartford",  type:"Wine Bar",       rating:4.7, lat:41.7668, lng:-72.7438, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"50% sparkling wine, tapas, cocktail specials" },
  { id:714, name:"Vinted Wine Bar W Hartford",neighborhood:"West Hartford", type:"Wine Bar",       rating:4.6, lat:41.7658, lng:-72.7426, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, cheese & charcuterie" },

  // ── MORE STAMFORD ──
  { id:720, name:"Match Stamford",           neighborhood:"Stamford",       type:"Restaurant Bar", rating:4.6, lat:41.0545, lng:-73.5395, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, apps 50% off" },
  { id:721, name:"Mango's Restaurant",       neighborhood:"Stamford",       type:"Bar & Grill",    rating:4.4, lat:41.0522, lng:-73.5372, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:722, name:"The Melting Pot Stamford", neighborhood:"Stamford",       type:"Restaurant Bar", rating:4.4, lat:41.0535, lng:-73.5385, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, fondue specials" },
  { id:723, name:"Club Getaway Bar",         neighborhood:"Stamford",       type:"Bar",            rating:4.3, lat:41.0510, lng:-73.5360, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$6 cocktails, $4 beer, $5 wine" },
  { id:724, name:"Taco Loco Stamford",       neighborhood:"Stamford",       type:"Mexican Bar",    rating:4.3, lat:41.0518, lng:-73.5368, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$7 margaritas, $4 tacos, $5 beer" },

  // ── MORE NORWALK / SONO ──
  { id:730, name:"Mecha Noodle Bar",         neighborhood:"South Norwalk",  type:"Asian Bar",      rating:4.5, lat:41.0895, lng:-73.4188, happyHour:{days:"Mon-Fri",start:15,end:17}, deals:"$2 off tacos, $10 margaritas, $10 cocktails" },
  { id:731, name:"Sono Seaport Seafood",     neighborhood:"South Norwalk",  type:"Seafood Bar",    rating:4.4, lat:41.0880, lng:-73.4175, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $7 cocktails, $1 oysters, apps" },
  { id:732, name:"El Segundo",               neighborhood:"South Norwalk",  type:"Mexican Bar",    rating:4.4, lat:41.0912, lng:-73.4198, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$8 margaritas, $5 beer, tacos & apps" },
  { id:733, name:"Washington Prime Norwalk", neighborhood:"Norwalk",        type:"Restaurant Bar", rating:4.5, lat:41.0992, lng:-73.4218, happyHour:{days:"Daily",  start:16,end:18}, deals:"50% off apps, raw bar, wine, beer & cocktails" },
  { id:734, name:"Harvest Supper",           neighborhood:"Norwalk",        type:"Restaurant Bar", rating:4.6, lat:41.1002, lng:-73.4228, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 drafts, seasonal apps" },

  // ── MORE NEW HAVEN ──
  { id:741, name:"Okonomi New Haven",        neighborhood:"New Haven",      type:"Japanese Bar",   rating:4.5, lat:41.3045, lng:-72.9308, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, Japanese small plates" },
  { id:742, name:"The Study at Yale Bar",    neighborhood:"New Haven",      type:"Hotel Bar",      rating:4.5, lat:41.3035, lng:-72.9298, happyHour:{days:"Daily",  start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer, hotel atmosphere" },
  { id:743, name:"Criterion",               neighborhood:"New Haven",       type:"Cocktail Bar",   rating:4.5, lat:41.3025, lng:-72.9288, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $6 wine, upscale apps" },
  { id:745, name:"Basta Trattoria",         neighborhood:"New Haven",       type:"Italian Bar",    rating:4.5, lat:41.3065, lng:-72.9328, happyHour:{days:"Mon-Thu",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:746, name:"Bella's Café",            neighborhood:"New Haven",       type:"Cocktail Bar",   rating:4.4, lat:41.3075, lng:-72.9338, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },

  // ── MORE BRIDGEPORT ──
  { id:750, name:"Harborview Market",        neighborhood:"Bridgeport",     type:"Bar & Grill",    rating:4.4, lat:41.1762, lng:-73.1912, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, harbor views" },
  { id:751, name:"Testo's Restaurant",       neighborhood:"Bridgeport",     type:"Italian Bar",    rating:4.5, lat:41.1772, lng:-73.1922, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:752, name:"Bulldog Tavern",           neighborhood:"Bridgeport",     type:"Sports Bar",     rating:4.3, lat:41.1752, lng:-73.1902, happyHour:{days:"Daily",  start:15,end:19}, deals:"$4 domestics, $6 wells, sports specials" },

  // ── MORE MILFORD ──
  { id:755, name:"John's Best Pizza & Bar",  neighborhood:"Milford",        type:"Bar & Grill",    rating:4.3, lat:41.2215, lng:-73.0600, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 drafts, $5 wells, pizza & apps" },
  { id:756, name:"Gulf Beach Bar",           neighborhood:"Milford",        type:"Beach Bar",      rating:4.4, lat:41.2105, lng:-73.0628, happyHour:{days:"Daily",  start:15,end:18}, deals:"$5 drafts, $7 cocktails, beach views" },
  { id:757, name:"Gathering Milford",        neighborhood:"Milford",        type:"Bar & Grill",    rating:4.5, lat:41.2235, lng:-73.0578, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine, apps" },
  { id:758, name:"Turkish Cuisine Bar",      neighborhood:"Milford",        type:"Restaurant Bar", rating:4.4, lat:41.2245, lng:-73.0568, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, Mediterranean apps" },

  // ── MORE WEST HAVEN ──
  { id:760, name:"Bru Craft & Wurst",        neighborhood:"West Haven",     type:"Beer Hall",      rating:4.5, lat:41.2712, lng:-72.9658, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails, wurst specials" },
  { id:761, name:"Luce Restaurant",          neighborhood:"West Haven",     type:"Italian Bar",    rating:4.5, lat:41.2702, lng:-72.9648, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:762, name:"West River Bar & Grill",   neighborhood:"West Haven",     type:"Bar & Grill",    rating:4.3, lat:41.2692, lng:-72.9638, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $6 wells, $7 cocktails" },

  // ── MORE FAIRFIELD ──
  { id:765, name:"The Penfield Beach Bar",   neighborhood:"Fairfield",      type:"Beach Bar",      rating:4.4, lat:41.1498, lng:-73.2568, happyHour:{days:"Daily",  start:15,end:18}, deals:"$5 drafts, $7 cocktails, beach views" },
  { id:766, name:"Burtons Grill Fairfield",  neighborhood:"Fairfield",      type:"Restaurant Bar", rating:4.5, lat:41.1408, lng:-73.2558, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $8 cocktails, apps discounted" },
  { id:767, name:"Vuli Restaurant Bar",      neighborhood:"Fairfield",      type:"Restaurant Bar", rating:4.5, lat:41.1418, lng:-73.2548, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },

  // ── MORE WESTPORT ──
  { id:770, name:"Pickwick's Pub Westport",  neighborhood:"Westport",       type:"British Pub",    rating:4.4, lat:41.1398, lng:-73.3598, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, British pub classics" },
  { id:771, name:"Café Relish",              neighborhood:"Westport",       type:"Restaurant Bar", rating:4.5, lat:41.1408, lng:-73.3588, happyHour:{days:"Tue-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer, apps" },
  { id:772, name:"Soba Westport",            neighborhood:"Westport",       type:"Japanese Bar",   rating:4.5, lat:41.1418, lng:-73.3578, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, sushi rolls specials" },
  { id:773, name:"The Whelk Bar",            neighborhood:"Westport",       type:"Seafood Bar",    rating:4.7, lat:41.1428, lng:-73.3568, happyHour:{days:"Tue-Sat",start:16.5,end:17.5}, deals:"Oysters, cocktail & beer specials 4:30-5:30PM" },

  // ── MORE DARIEN / NEW CANAAN / GREENWICH ──
  { id:775, name:"Bonda Restaurant",         neighborhood:"Darien",         type:"Restaurant Bar", rating:4.6, lat:41.0775, lng:-73.4728, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer, tapas" },
  { id:776, name:"SBC Darien",               neighborhood:"Darien",         type:"Beer Bar",       rating:4.4, lat:41.0765, lng:-73.4718, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails, apps" },
  { id:777, name:"Orienta Restaurant",       neighborhood:"Greenwich",      type:"French Bar",     rating:4.7, lat:41.0262, lng:-73.6282, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$10 cocktails, $8 wine, French-Asian apps" },
  { id:778, name:"Harvest Greenwich",        neighborhood:"Greenwich",      type:"Restaurant Bar", rating:4.6, lat:41.0252, lng:-73.6272, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, seasonal apps" },
  { id:779, name:"Planet Pizza Bar",         neighborhood:"Greenwich",      type:"Bar & Grill",    rating:4.3, lat:41.0242, lng:-73.6262, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $6 wells, $7 cocktails" },

  // ── MORE DANBURY ──
  { id:780, name:"Craft 260 Danbury",        neighborhood:"Danbury",        type:"Beer Bar",       rating:4.5, lat:41.3952, lng:-73.4548, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails" },
  { id:781, name:"Sixty-Six Kitchen",        neighborhood:"Danbury",        type:"Restaurant Bar", rating:4.5, lat:41.3942, lng:-73.4538, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, seasonal apps" },
  { id:782, name:"Tuxedo Junction",          neighborhood:"Danbury",        type:"Bar & Grill",    rating:4.4, lat:41.3932, lng:-73.4528, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, bar bites" },
  { id:783, name:"The Twisted Vine",         neighborhood:"Brookfield",     type:"Wine Bar",       rating:4.5, lat:41.4748, lng:-73.4038, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, cheese & charcuterie" },

  // ── MORE MYSTIC / EASTERN CT ──
  { id:790, name:"Oyster Club",              neighborhood:"Mystic",         type:"Seafood Bar",    rating:4.7, lat:41.3558, lng:-71.9678, happyHour:{days:"Daily",  start:16,end:18}, deals:"$8 cocktails, $5 beer, oyster specials" },
  { id:791, name:"S&P Oyster Co",            neighborhood:"Mystic",         type:"Seafood Bar",    rating:4.5, lat:41.3565, lng:-71.9685, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $7 cocktails, waterfront oysters" },
  { id:792, name:"Engine Room Mystic",       neighborhood:"Mystic",         type:"Bar & Grill",    rating:4.5, lat:41.3550, lng:-71.9672, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine, craft burgers" },
  { id:793, name:"Margarita's Mexican",      neighborhood:"Mystic",         type:"Mexican Bar",    rating:4.3, lat:41.3540, lng:-71.9660, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 margaritas, $5 beer, tacos & apps" },
  { id:794, name:"The Mariner Bar",          neighborhood:"Stonington",     type:"Waterfront Bar", rating:4.5, lat:41.3358, lng:-71.9058, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $7 cocktails, marina views" },
  { id:795, name:"Milagro Cantina",          neighborhood:"Niantic",        type:"Mexican Bar",    rating:4.4, lat:41.3268, lng:-72.2098, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$7 margaritas, $5 beer, Mexican apps" },
  { id:796, name:"Constantine's Niantic",    neighborhood:"Niantic",        type:"Bar & Grill",    rating:4.4, lat:41.3258, lng:-72.2088, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, waterfront views" },

  // ── MORE OLD SAYBROOK / SHORELINE ──
  { id:800, name:"Pizzaworks Bar",           neighborhood:"Old Saybrook",   type:"Bar & Grill",    rating:4.4, lat:41.2925, lng:-72.3745, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 drafts, $6 cocktails, pizza specials" },
  { id:801, name:"Fresh Salt Restaurant",    neighborhood:"Old Saybrook",   type:"Seafood Bar",    rating:4.5, lat:41.2935, lng:-72.3755, happyHour:{days:"Daily",  start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine, river views" },
  { id:802, name:"Breakwater Restaurant",    neighborhood:"Westbrook",      type:"Seafood Bar",    rating:4.5, lat:41.2948, lng:-72.4548, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, seafood apps" },
  { id:803, name:"Sanno Bistro",             neighborhood:"Clinton",        type:"Restaurant Bar", rating:4.5, lat:41.2798, lng:-72.5258, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },

  // ── ADDITIONAL CENTRAL CT ──
  { id:810, name:"Max's Simsbury",           neighborhood:"Simsbury",       type:"Restaurant Bar", rating:4.5, lat:41.8762, lng:-72.8102, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:811, name:"Arugula Bistro Simsbury",  neighborhood:"Simsbury",       type:"European Bar",   rating:4.5, lat:41.8772, lng:-72.8112, happyHour:{days:"Tue-Sat",start:16,end:18}, deals:"$7 cocktails, $5 beer, Mediterranean mezze" },
  { id:812, name:"Hop Meadow Country Club",  neighborhood:"Simsbury",       type:"Country Club Bar",rating:4.5,lat:41.8752, lng:-72.8092, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:813, name:"New England Brewing (Woodbridge)", neighborhood:"Woodbridge", type:"Brewery", rating:4.6, lat:41.3448, lng:-72.9998, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 pints, Sea Hag IPA, Fuzzy Baby Ducks, taproom specials" },
  { id:814, name:"Wood 'n Tap Glastonbury",  neighborhood:"Glastonbury",    type:"Bar & Grill",    rating:4.5, lat:41.7128, lng:-72.6072, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $6 wine, $5 beer, apps $3-6" },
  { id:815, name:"The Mill on the River",    neighborhood:"South Windsor",  type:"Restaurant Bar", rating:4.6, lat:41.8212, lng:-72.6068, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, riverside apps" },
  { id:816, name:"Wethersfield Inn Bar",     neighborhood:"Wethersfield",   type:"Hotel Bar",      rating:4.4, lat:41.7142, lng:-72.6528, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:817, name:"Plan B Glastonbury",       neighborhood:"Glastonbury",    type:"Bar & Grill",    rating:4.5, lat:41.7115, lng:-72.6058, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $5 wine" },
  { id:818, name:"Elmo's Dockside Windsor",  neighborhood:"Windsor",        type:"Waterfront Bar", rating:4.5, lat:41.8538, lng:-72.6448, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, waterfront dining" },

  // ── ADDITIONAL LOWER VALLEY / NAUGATUCK VALLEY ──
  { id:820, name:"BJ Ryan's Ansonia",        neighborhood:"Ansonia",        type:"Irish Pub",      rating:4.3, lat:41.3462, lng:-73.0812, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, pub grub" },
  { id:821, name:"American Steakhouse Derby",neighborhood:"Derby",          type:"Steakhouse Bar", rating:4.4, lat:41.3218, lng:-73.0848, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, steak apps" },
  { id:822, name:"Shelton Tavern",           neighborhood:"Shelton",        type:"Tavern",         rating:4.3, lat:41.3155, lng:-73.0762, happyHour:{days:"Daily",  start:15,end:18}, deals:"$4 domestics, $6 wells, pub specials" },
  { id:823, name:"Harborside Grill Shelton", neighborhood:"Shelton",        type:"Waterfront Bar", rating:4.4, lat:41.3145, lng:-73.0752, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, waterfront views" },
  { id:824, name:"Bistro on Main Seymour",   neighborhood:"Seymour",        type:"Bistro Bar",     rating:4.5, lat:41.4005, lng:-73.0752, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer, bistro apps" },
  { id:825, name:"Naugy's Pub",              neighborhood:"Naugatuck",      type:"Pub",            rating:4.3, lat:41.4875, lng:-73.0525, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$4 drafts, $6 cocktails, pub grub" },

  // ── MORE WATERBURY ──
  { id:830, name:"Pontelandolfo Club Bar",   neighborhood:"Waterbury",      type:"Italian Bar",    rating:4.4, lat:41.5598, lng:-73.0528, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$6 cocktails, $4 beer, Italian apps" },
  { id:831, name:"Dresser Hull Restaurant",  neighborhood:"Waterbury",      type:"Restaurant Bar", rating:4.5, lat:41.5608, lng:-73.0538, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, seasonal apps" },
  { id:832, name:"Irish American Club",      neighborhood:"Waterbury",      type:"Irish Pub",      rating:4.3, lat:41.5618, lng:-73.0548, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, Irish pub fare" },
  { id:833, name:"Diorio Restaurant Bar",    neighborhood:"Waterbury",      type:"Restaurant Bar", rating:4.5, lat:41.5628, lng:-73.0558, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine, apps" },

  // ── MORE TORRINGTON / LITCHFIELD HILLS ──
  { id:840, name:"The Hill Restaurant",      neighborhood:"Torrington",     type:"Restaurant Bar", rating:4.5, lat:41.8038, lng:-73.1248, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, apps specials" },
  { id:841, name:"Cornerstone Cafe Torrington",neighborhood:"Torrington",   type:"Bar & Grill",    rating:4.3, lat:41.8048, lng:-73.1258, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $6 wells, $7 cocktails" },
  { id:842, name:"Noble Hearth Brewing",     neighborhood:"Torrington",     type:"Brewery",        rating:4.5, lat:41.8058, lng:-73.1268, happyHour:{days:"Thu-Fri",start:16,end:19}, deals:"$5 pints, flights $9, fresh-brewed specials" },
  { id:843, name:"Arethusa Farm Dairy Bar",  neighborhood:"Litchfield",     type:"Restaurant Bar", rating:4.6, lat:41.7488, lng:-73.1868, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, farm-fresh apps" },

  // ── MORE EAST LYME / GROTON ──
  { id:850, name:"Mohegan Sun Casino Bar",   neighborhood:"Uncasville",     type:"Casino Bar",     rating:4.4, lat:41.4878, lng:-72.0928, happyHour:{days:"Daily",  start:16,end:19}, deals:"$5 beer, $8 cocktails, casino entertainment" },
  { id:851, name:"Foxwoods Casino Bar",      neighborhood:"Mashantucket",   type:"Casino Bar",     rating:4.3, lat:41.4738, lng:-71.9628, happyHour:{days:"Daily",  start:15,end:18}, deals:"$5 beer, $7 cocktails, gaming atmosphere" },
  { id:852, name:"Seahorse Restaurant",      neighborhood:"Niantic",        type:"Seafood Bar",    rating:4.4, lat:41.3278, lng:-72.2108, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $7 cocktails, shoreline seafood" },
  { id:853, name:"Lenny & Joe's Fish Tale",  neighborhood:"Westbrook",      type:"Seafood Bar",    rating:4.4, lat:41.2958, lng:-72.4558, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $7 cocktails, classic CT seafood" },
  { id:854, name:"Dock & Dine Old Lyme",     neighborhood:"Old Lyme",       type:"Waterfront Bar", rating:4.5, lat:41.3118, lng:-72.3498, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$7 cocktails, $5 beer, river views" },

  // ── NEW BRITAIN / PLAINVILLE ──
  { id:860, name:"Frosty Mug New Britain",   neighborhood:"New Britain",    type:"Beer Bar",       rating:4.3, lat:41.6608, lng:-72.7802, happyHour:{days:"Daily",  start:16,end:18}, deals:"Draft samples, great deals on tap, daily specials" },
  { id:861, name:"Chez Pierre New Britain",  neighborhood:"New Britain",    type:"French Bar",     rating:4.5, lat:41.6618, lng:-72.7812, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, French bistro apps" },
  { id:862, name:"Plainville Brewing Co",    neighborhood:"Plainville",     type:"Brewery",        rating:4.5, lat:41.6738, lng:-72.8588, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$5 pints, $9 flights, brewery specials" },
  { id:863, name:"Cuckoo's Nest Plainville", neighborhood:"Plainville",     type:"Mexican Bar",    rating:4.4, lat:41.6748, lng:-72.8578, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 margaritas, $5 tacos, $5 beer" },

  // ── FINAL PUSH TO 500+ ──
  { id:900, name:"Chuck's Steak House",      neighborhood:"Branford",       type:"Steakhouse Bar", rating:4.4, lat:41.2942, lng:-72.8132, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, steak apps" },
  { id:901, name:"Lena's Restaurant",        neighborhood:"Hamden",         type:"Italian Bar",    rating:4.4, lat:41.3988, lng:-72.9038, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:902, name:"Thali Too",                neighborhood:"New Haven",      type:"Indian Bar",     rating:4.5, lat:41.3042, lng:-72.9272, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, Indian apps" },
  { id:903, name:"Savin Rock Bar",           neighborhood:"West Haven",     type:"Bar & Grill",    rating:4.3, lat:41.2645, lng:-72.9742, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:904, name:"Union League Cafe Bar",    neighborhood:"New Haven",      type:"French Bar",     rating:4.7, lat:41.3052, lng:-72.9282, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, French bistro apps" },
  { id:905, name:"Tikkaway Grille",          neighborhood:"Hamden",         type:"Bar & Grill",    rating:4.4, lat:41.3968, lng:-72.9022, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:906, name:"Bru Craft & Wurst Hamden", neighborhood:"Hamden",         type:"Beer Hall",      rating:4.5, lat:41.3958, lng:-72.9012, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 craft drafts, $7 cocktails, wurst specials" },
  { id:907, name:"Sullivan's on the Green",  neighborhood:"West Hartford",  type:"Restaurant Bar", rating:4.5, lat:41.7672, lng:-72.7452, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 drafts" },
  { id:908, name:"Grano Arso",               neighborhood:"West Hartford",  type:"Italian Bar",    rating:4.6, lat:41.7662, lng:-72.7442, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, rustic Italian apps" },
  { id:909, name:"Prospect Cafe Bar",        neighborhood:"West Hartford",  type:"Cocktail Bar",   rating:4.5, lat:41.7652, lng:-72.7432, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:910, name:"Red Rock Tavern",          neighborhood:"Farmington",     type:"Tavern",         rating:4.4, lat:41.7208, lng:-72.8352, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:911, name:"Plan B Simsbury",          neighborhood:"Simsbury",       type:"Bar & Grill",    rating:4.5, lat:41.8782, lng:-72.8118, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $5 wine" },
  { id:912, name:"The Foundry Kitchen & Bar",neighborhood:"Collinsville",   type:"Restaurant Bar", rating:4.5, lat:41.8228, lng:-72.9228, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:913, name:"Avon Old Farms Inn",       neighborhood:"Avon",           type:"Historic Bar",   rating:4.6, lat:41.8068, lng:-72.8358, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer, historic inn" },
  { id:914, name:"b Restaurants Simsbury",   neighborhood:"Simsbury",       type:"Restaurant Bar", rating:4.5, lat:41.8792, lng:-72.8128, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$9 apps, draft beer, wine & cocktail specials" },
  { id:915, name:"Rizzuto's West Hartford",  neighborhood:"West Hartford",  type:"Italian Bar",    rating:4.6, lat:41.7642, lng:-72.7412, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:916, name:"Firebox Hartford",         neighborhood:"Hartford",       type:"Cocktail Bar",   rating:4.8, lat:41.7672, lng:-72.6842, happyHour:{days:"Mon-Fri",start:17,end:19}, deals:"$9 cocktails, $7 wine, $5 drafts, seasonal apps" },
  { id:917, name:"Costa del Sol Hartford",   neighborhood:"Hartford",       type:"Spanish Bar",    rating:4.5, lat:41.7608, lng:-72.6888, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, tapas specials" },
  { id:918, name:"Onyx Club",                neighborhood:"Hartford",       type:"Cocktail Bar",   rating:4.4, lat:41.7618, lng:-72.6878, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine" },
  { id:919, name:"Rein's NY Style Deli Bar", neighborhood:"Vernon",         type:"Bar & Grill",    rating:4.4, lat:41.8412, lng:-72.4722, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, deli specials" },
  { id:920, name:"Snooker's Manchester",     neighborhood:"Manchester",     type:"Sports Bar",     rating:4.3, lat:41.7758, lng:-72.5222, happyHour:{days:"Daily",  start:16,end:18}, deals:"$4 domestics, $6 wells, sports specials" },
  { id:921, name:"Plan B Manchester",        neighborhood:"Manchester",     type:"Bar & Grill",    rating:4.5, lat:41.7768, lng:-72.5232, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $7 cocktails, $5 wine" },
  { id:922, name:"Cheney Homestead",         neighborhood:"Manchester",     type:"Restaurant Bar", rating:4.4, lat:41.7778, lng:-72.5242, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:923, name:"b Restaurants Manchester", neighborhood:"Manchester",     type:"Restaurant Bar", rating:4.5, lat:41.7748, lng:-72.5212, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$9 apps, draft beer, wine & cocktail specials" },
  { id:924, name:"Murphy's Pub Glastonbury", neighborhood:"Glastonbury",    type:"Irish Pub",      rating:4.4, lat:41.7112, lng:-72.6048, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, pub grub" },
  { id:925, name:"The Village Pub",          neighborhood:"Glastonbury",    type:"Pub",            rating:4.4, lat:41.7122, lng:-72.6058, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 cocktails, pub specials" },
  { id:927, name:"Little City Grille",       neighborhood:"Middletown",     type:"Bar & Grill",    rating:4.5, lat:41.5635, lng:-72.6528, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:928, name:"Down the Hatch",           neighborhood:"Brookfield",     type:"Waterfront Bar", rating:4.4, lat:41.4418, lng:-73.4088, happyHour:{days:"Tue-Sun", start:15,end:18}, deals:"$5 drafts, $7 cocktails, Candlewood Lake views (seasonal May-Sept)" },
  { id:929, name:"Tuscany Grill",            neighborhood:"Middletown",     type:"Italian Bar",    rating:4.5, lat:41.5618, lng:-72.6508, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:930, name:"Catch Seafood Bar",        neighborhood:"New London",     type:"Seafood Bar",    rating:4.5, lat:41.3562, lng:-72.1028, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $7 cocktails, $1.50 oysters" },
  { id:931, name:"Dutch Tavern",             neighborhood:"New London",     type:"Dive Bar",       rating:4.3, lat:41.3552, lng:-72.1018, happyHour:{days:"Daily",  start:15,end:18}, deals:"$4 domestics, $5 wells, classic dive" },
  { id:932, name:"Annex Restaurant Bar",     neighborhood:"New London",     type:"Restaurant Bar", rating:4.4, lat:41.3542, lng:-72.1008, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:933, name:"Whaling City Brewing",     neighborhood:"New London",     type:"Brewery",        rating:4.5, lat:41.3572, lng:-72.1038, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$5 pints, brewery flights & taproom specials" },
  { id:934, name:"Water's Edge Bar",         neighborhood:"Groton",         type:"Waterfront Bar", rating:4.4, lat:41.3542, lng:-72.0838, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $7 cocktails, waterfront views" },
  { id:935, name:"Boatyard Bar",             neighborhood:"Stonington",     type:"Waterfront Bar", rating:4.5, lat:41.3368, lng:-71.9068, happyHour:{days:"Daily",  start:16,end:18}, deals:"$5 beer, $7 cocktails, marina views" },
  { id:936, name:"Pine Point Bar",           neighborhood:"Groton",         type:"Beach Bar",      rating:4.3, lat:41.3348, lng:-72.0658, happyHour:{days:"Daily",  start:15,end:18}, deals:"$4 domestics, $6 cocktails, beach vibes" },
  { id:937, name:"The Rustic Charm",         neighborhood:"Putnam",         type:"Restaurant Bar", rating:4.4, lat:41.9158, lng:-71.9118, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:938, name:"Bugsy's Sports Bar",       neighborhood:"Putnam",         type:"Sports Bar",     rating:4.2, lat:41.9138, lng:-71.9098, happyHour:{days:"Daily",  start:15,end:19}, deals:"$4 domestics, $6 wells, sports specials" },
  { id:939, name:"Guido's Restaurant Bar",   neighborhood:"Stafford Springs",type:"Italian Bar",   rating:4.4, lat:41.9548, lng:-72.2998, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, Italian apps" },
  { id:940, name:"Willimantic Brewing Co",   neighborhood:"Willimantic",    type:"Brewery",        rating:4.6, lat:41.7158, lng:-72.2128, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 pints, brewery specials, pub grub" },
  { id:941, name:"Thai Gardens Bar",         neighborhood:"Willimantic",    type:"Bar & Grill",    rating:4.3, lat:41.7148, lng:-72.2118, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, Asian apps" },
  { id:942, name:"The Warehouse Bar",        neighborhood:"Willimantic",    type:"Bar",            rating:4.3, lat:41.7138, lng:-72.2108, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 drafts, $6 cocktails, $5 wine" },
  { id:943, name:"Outback Steakhouse Bar",   neighborhood:"Enfield",        type:"Steakhouse Bar", rating:4.2, lat:41.9778, lng:-72.5978, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $7 cocktails, $6 wine" },
  { id:944, name:"Chili's Grill Enfield",    neighborhood:"Enfield",        type:"Bar & Grill",    rating:4.2, lat:41.9768, lng:-72.5968, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 beer, $7 cocktails, $5 appetizers" },
  { id:945, name:"Ellington Farms Taproom",  neighborhood:"Ellington",      type:"Brewery",        rating:4.5, lat:41.9008, lng:-72.4548, happyHour:{days:"Thu-Fri",start:16,end:19}, deals:"$5 craft pints, flights & brewery specials" },
  { id:946, name:"Woodstock Inn Bar",        neighborhood:"Woodstock",      type:"Hotel Bar",      rating:4.5, lat:41.9738, lng:-71.9878, happyHour:{days:"Daily",  start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer, inn atmosphere" },
  { id:947, name:"The Harvest Café Bar",     neighborhood:"Pomfret",        type:"Restaurant Bar", rating:4.4, lat:41.8928, lng:-71.9668, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:948, name:"Zip's Diner Bar",          neighborhood:"Dayville",       type:"Bar & Grill",    rating:4.3, lat:41.8588, lng:-71.8768, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $6 cocktails, classic roadside food" },
  { id:949, name:"Roseland Apizza Bar",      neighborhood:"Derby",          type:"Bar & Grill",    rating:4.5, lat:41.3248, lng:-73.0878, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, New Haven-style pizza" },
  { id:950, name:"Olympic Diner Bar",        neighborhood:"Waterbury",      type:"Bar & Grill",    rating:4.2, lat:41.5638, lng:-73.0568, happyHour:{days:"Daily",  start:16,end:18}, deals:"$4 drafts, $5 wells, diner classics" },
  { id:951, name:"Scarpellino's",            neighborhood:"Waterbury",      type:"Italian Bar",    rating:4.5, lat:41.5648, lng:-73.0578, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:952, name:"Tanqueray's Bar",          neighborhood:"Waterbury",      type:"Cocktail Bar",   rating:4.4, lat:41.5658, lng:-73.0588, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine" },
  { id:953, name:"Coachman's",               neighborhood:"Waterbury",      type:"Bar & Grill",    rating:4.3, lat:41.5668, lng:-73.0598, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, bar bites" },
  { id:954, name:"Mulberry Street",          neighborhood:"Shelton",        type:"Bar & Grill",    rating:4.4, lat:41.3185, lng:-73.0775, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:955, name:"Shelton Grille",           neighborhood:"Shelton",        type:"Bar & Grill",    rating:4.4, lat:41.3195, lng:-73.0785, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine" },
  { id:956, name:"Tavern on the Green",      neighborhood:"New Milford",    type:"Tavern",         rating:4.4, lat:41.5788, lng:-73.4098, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, pub grub" },
  { id:957, name:"The Homestead Inn Bar",    neighborhood:"New Milford",    type:"Hotel Bar",      rating:4.4, lat:41.5798, lng:-73.4108, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, $6 wine, country inn" },
  { id:958, name:"Park & Oak Ridgefield",    neighborhood:"Ridgefield",     type:"Restaurant Bar", rating:4.6, lat:41.2822, lng:-73.4982, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, $5 beer, seasonal apps" },
  { id:959, name:"Forty Thieves",            neighborhood:"Ridgefield",     type:"Pub",            rating:4.4, lat:41.2832, lng:-73.4972, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, pub grub" },
  { id:960, name:"Bernard's Restaurant Bar", neighborhood:"Ridgefield",     type:"French Bar",     rating:4.7, lat:41.2842, lng:-73.4962, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$10 cocktails, $8 wine, French apps" },
  { id:961, name:"Wilton Tavern",            neighborhood:"Wilton",         type:"Tavern",         rating:4.3, lat:41.1982, lng:-73.4398, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, tavern specials" },
  { id:962, name:"Little Pub Wilton",        neighborhood:"Wilton",         type:"Pub",            rating:4.5, lat:41.1992, lng:-73.4408, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $6 wine, pub specials" },
  { id:963, name:"Christiano's Wine Bar",    neighborhood:"Trumbull",       type:"Wine Bar",       rating:4.5, lat:41.2445, lng:-73.1998, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 wine, $10 cocktails, Italian apps" },
  { id:965, name:"The Riverhouse at Glastonbury",neighborhood:"Glastonbury",type:"Waterfront Bar", rating:4.6, lat:41.7132, lng:-72.6042, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, riverfront dining" },
  { id:967, name:"Sage American Bar",        neighborhood:"Hartford",       type:"Restaurant Bar", rating:4.5, lat:41.7612, lng:-72.6892, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 drafts, apps" },
  { id:968, name:"Parkville Market Outdoor", neighborhood:"Hartford",       type:"Food Hall Bar",  rating:4.5, lat:41.7555, lng:-72.7028, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$4-6 beer, $5 wine, $6 cocktails, food hall" },
  { id:969, name:"Hops on the Hill",         neighborhood:"Glastonbury",    type:"Brewery",        rating:4.5, lat:41.7118, lng:-72.6062, happyHour:{days:"Thu-Fri",start:16,end:18}, deals:"$5 pints, local craft beer, brewery specials" },
  { id:970, name:"Prohibition Bar",          neighborhood:"New Haven",      type:"Cocktail Bar",   rating:4.4, lat:41.3032, lng:-72.9262, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$8 cocktails, $5 beer, prohibition-era vibes" },

  // ── FINAL 25 TO CROSS 500 ──
  { id:975, name:"Portofino Restaurant Bar", neighborhood:"Hamden",         type:"Italian Bar",    rating:4.5, lat:41.3942, lng:-72.9052, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:976, name:"Christopher Martin's",     neighborhood:"New Haven",      type:"Bar & Grill",    rating:4.4, lat:41.3028, lng:-72.9268, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$5 drafts, $7 cocktails, bar bites" },
  { id:977, name:"Miso Hungry",              neighborhood:"New Haven",      type:"Asian Bar",      rating:4.4, lat:41.3038, lng:-72.9278, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, Asian fusion apps" },
  { id:978, name:"Tomatillo",                neighborhood:"Ridgefield",     type:"Mexican Bar",    rating:4.5, lat:41.2818, lng:-73.4988, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 margaritas, $5 beer, Mexican apps" },
  { id:979, name:"Luca Restaurant Bar",      neighborhood:"Stamford",       type:"Italian Bar",    rating:4.6, lat:41.0552, lng:-73.5402, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, Italian small plates" },
  { id:980, name:"Little Pub Fairfield",     neighborhood:"Fairfield",      type:"Pub",            rating:4.5, lat:41.1432, lng:-73.2612, happyHour:{days:"Mon-Fri",start:16,end:19}, deals:"$5 drafts, $6 wine, pub specials" },
  { id:981, name:"Bullfinch's Restaurant",   neighborhood:"Sudbury",        type:"Restaurant Bar", rating:4.5, lat:41.8548, lng:-72.7528, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, $5 beer" },
  { id:982, name:"Costa Azzurra",            neighborhood:"Cromwell",       type:"Italian Bar",    rating:4.5, lat:41.5968, lng:-72.6488, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:983, name:"Molly Darcy's",            neighborhood:"Southington",    type:"Irish Pub",      rating:4.4, lat:41.6008, lng:-72.8752, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$4 pints, $6 cocktails, Irish pub grub" },
  { id:984, name:"A-Lette's Kitchen",        neighborhood:"New Britain",    type:"Bar & Grill",    rating:4.4, lat:41.6628, lng:-72.7818, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:985, name:"Jack's Bar & Steakhouse",  neighborhood:"Enfield",        type:"Steakhouse Bar", rating:4.4, lat:41.9788, lng:-72.5988, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$7 cocktails, $5 beer, steak apps" },
  { id:986, name:"Trattoria Francesca",      neighborhood:"Simsbury",       type:"Italian Bar",    rating:4.6, lat:41.8762, lng:-72.8128, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $7 wine, rustic Italian apps" },
  { id:988, name:"Fish Face Fish Bar",       neighborhood:"West Hartford",  type:"Seafood Bar",    rating:4.5, lat:41.7662, lng:-72.7418, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $8 cocktails, raw bar specials" },
  { id:989, name:"Habitat Restaurant Bar",   neighborhood:"Glastonbury",    type:"Restaurant Bar", rating:4.5, lat:41.7108, lng:-72.6068, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, locally sourced apps" },
  { id:990, name:"Tails Bar & Grille",       neighborhood:"Branford",       type:"Bar & Grill",    rating:4.3, lat:41.2968, lng:-72.8148, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$5 drafts, $6 cocktails, $5 wine" },
  { id:991, name:"Brass City Brewery",       neighborhood:"Waterbury",      type:"Brewery",        rating:4.5, lat:41.5658, lng:-73.0468, happyHour:{days:"Thu-Fri",start:16,end:19}, deals:"$5 pints, brewery flights & taproom specials" },
  { id:992, name:"La Tavola Ristorante",     neighborhood:"Torrington",     type:"Italian Bar",    rating:4.5, lat:41.8068, lng:-73.1278, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $6 wine, Italian apps" },
  { id:993, name:"Stonewall Bar & Grill",    neighborhood:"Colchester",     type:"Bar & Grill",    rating:4.3, lat:41.5768, lng:-72.3328, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 drafts, $7 cocktails, $6 wine" },
  { id:995, name:"Heritage Oak Brewery",     neighborhood:"Oxford",         type:"Brewery",        rating:4.5, lat:41.4298, lng:-73.1138, happyHour:{days:"Thu-Fri",start:16,end:19}, deals:"$5 pints, seasonal brews, taproom specials" },
  { id:1001,name:"VOLO",                     neighborhood:"Oxford",         type:"Restaurant Bar", rating:4.5, lat:41.4334, lng:-73.1167, happyHour:{days:"Mon-Fri",start:15,end:18}, deals:"$6 brews, $7 wines, $7 cocktails, small bites $7-8, pizzas $10" },
  { id:996, name:"The Fat Cat",              neighborhood:"Norwalk",        type:"Cocktail Bar",   rating:4.5, lat:41.0978, lng:-73.4208, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$8 cocktails, $5 beer, $6 wine" },
  { id:997, name:"Darien Social",            neighborhood:"Darien",         type:"Cocktail Bar",   rating:4.5, lat:41.0778, lng:-73.4738, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$9 cocktails, $7 wine, $5 beer" },
  { id:998, name:"Saltwater Grille",         neighborhood:"Westport",       type:"Seafood Bar",    rating:4.5, lat:41.1418, lng:-73.3578, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $8 cocktails, $6 wine, oysters" },
  { id:999, name:"The Lazy Lobster",         neighborhood:"Fairfield",      type:"Seafood Bar",    rating:4.4, lat:41.1428, lng:-73.2628, happyHour:{days:"Mon-Fri",start:16,end:18}, deals:"$5 beer, $7 cocktails, seafood apps" },

];
