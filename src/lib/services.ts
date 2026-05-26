import { siteConfig } from "@/lib/site";

export interface ServiceSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  sections: ServiceSection[];
  faqs: Array<{ q: string; a: string }>;
  keywords: string[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "heavy-duty-towing",
    name: "Heavy duty towing",
    title: "Heavy Duty Towing in Edmonton",
    metaDescription:
      "24/7 heavy duty towing in Edmonton for semi-trucks, buses, RVs, and commercial vehicles. Cliff's Towing — 70+ years of heavy recovery experience.",
    heroImage: "/images/hero/HeavyTowing1024x680.jpg",
    heroImageAlt: "Cliff's heavy duty tow truck recovering a semi-truck on an Edmonton highway",
    intro:
      "When a commercial vehicle breaks down or an oversize load needs moving, you need a company with the right equipment and the experience to use it safely. Cliff's Towing has been handling heavy duty towing across Edmonton and the greater Alberta region for over 70 years — from jackknifed semi-trucks on the QEII to broken-down buses in the river valley.",
    sections: [
      {
        heading: "What counts as heavy duty towing?",
        body: [
          "Heavy duty towing covers any vehicle or load too large for a standard wrecker: semi-trucks, tractor-trailers, buses, RVs, large construction equipment, and oversized commercial vehicles. These loads require specialized equipment — rotators, heavy underlift systems, and air cushion recovery gear — that most towing operators simply don't carry.",
          "Cliff's heavy duty fleet is designed for exactly this. Our operators are certified for commercial and highway recovery, trained in multi-point lifts, and equipped to handle axle-down recoveries that require precise rigging to avoid further chassis damage.",
        ],
        list: [
          "Semi-trucks and tractor-trailers",
          "Commercial buses and coaches",
          "RVs and motorhomes over 26 feet",
          "Construction equipment on public roads",
          "Heavy commercial vans and straight trucks",
          "Loaded flatdeck trailers and tankers",
        ],
      },
      {
        heading: "Our heavy duty equipment",
        body: [
          "We run a rotator and heavy underlift trucks capable of uprighting overturned vehicles and extracting loads from tight situations without requiring a full winch-out setup. For highway incidents, our operators carry full traffic management equipment and coordinate with EPS and Alberta Transportation when required.",
          "Coordination with fleet managers is standard practice for us. We understand that when a commercial vehicle goes down, every hour matters — and we treat dispatch, ETAs, and progress updates accordingly.",
        ],
      },
      {
        heading: "Highway and commercial route response",
        body: [
          "Heavy incidents on the QEII, Highway 2, the Henday, or the Whitemud require operators who know how to work around active traffic and coordinate with RCMP or EPS on scene. Cliff's responds to highway heavy duty calls 24 hours a day, seven days a week, including statutory holidays.",
          "We can coordinate delivery to your preferred truck stop, dealership, fleet yard, or repair shop anywhere in the Edmonton region. For loads requiring onward transport after recovery, our deck trucks can stage for pickup once the vehicle is stabilized.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you tow a semi-truck that's jackknifed on the highway?",
        a: "Yes. Jackknifed semi-truck recovery is one of our most common heavy duty calls. We assess the load, set up traffic control if EPS isn't already on scene, and use our rotator or underlift to bring the rig back to a towable position. Every situation is different, but we approach each one methodically to minimize additional damage.",
      },
      {
        q: "Do you work directly with fleet managers and dispatch?",
        a: `Absolutely. We can communicate directly with your fleet coordinator, provide accurate ETAs, and send confirmation once the vehicle is secured and en route. For fleets with recurring needs, we can also discuss priority dispatch arrangements. Call ${siteConfig.phone.display} to talk through what you need.`,
      },
      {
        q: "What's the heaviest load you can move?",
        a: "Our heavy duty rotator and underlift combination can handle most commercial vehicles up to 80,000+ pounds in standard recovery scenarios. For oversize or overweight loads that require permits, we can coordinate with Alberta Transportation. Call dispatch to describe your specific load and we'll confirm capability before committing.",
      },
      {
        q: "Do you tow buses and RVs?",
        a: "Yes. Buses — both transit and coach style — and RVs over 26 feet are heavy duty jobs. Standard wheel-lift or flatbed tow trucks aren't built for these lengths and weights. Our heavy duty fleet handles them properly, with the right attachment points to avoid frame stress during transport.",
      },
      {
        q: "Is heavy duty towing available after hours?",
        a: "Yes. Commercial breakdowns don't follow business hours, and neither do we. Heavy duty dispatch is available 24/7 at the same number as our regular service.",
      },
    ],
    keywords: [
      "heavy duty towing Edmonton",
      "semi truck towing Edmonton",
      "commercial vehicle towing Edmonton",
      "bus towing Edmonton",
      "RV towing Edmonton",
      "heavy recovery Alberta",
      "rotator towing Edmonton",
    ],
    relatedSlugs: ["flatbed-towing", "winching-recovery", "equipment-transport"],
  },

  {
    slug: "flatbed-towing",
    name: "Flatbed towing",
    title: "Flatbed Towing in Edmonton",
    metaDescription:
      "Flatbed towing in Edmonton for AWD, EVs, lowered vehicles, and accident recovery. All four wheels off the ground — zero drivetrain risk. 24/7.",
    heroImage: "/images/hero/decktruckequipment31024x695.jpg",
    heroImageAlt: "Cliff's flatbed tow truck with a vehicle loaded and secured on Whitemud Drive Edmonton",
    intro:
      "Flatbed towing is the safest way to move almost any vehicle, and the only correct method for a growing number of them. If your car is all-wheel drive, electric, lowered, or came out of a serious accident, flatbed is not an upgrade — it's a requirement. Cliff's Towing operates flatbed equipment across Edmonton and the surrounding region, available 24 hours a day.",
    sections: [
      {
        heading: "Why flatbed is the right choice",
        body: [
          "When a vehicle is towed on two wheels, the other two wheels are still in contact with the drivetrain. For most modern all-wheel drive and electric vehicles, that means the transmission, transfer case, or motor is being spun without lubrication — which can cause thousands of dollars in damage over a short tow.",
          "On a flatbed, all four wheels leave the ground the moment the vehicle is loaded. The drivetrain is completely at rest for the entire journey. That's what makes flatbed the recommended — and in many cases, manufacturer-required — method for a wide range of vehicles.",
        ],
      },
      {
        heading: "Vehicles that need flatbed",
        body: [
          "Insurance companies, manufacturers, and dealers increasingly specify flatbed for certain vehicle types. If you're unsure, the answer is almost always: flatbed is the safer choice.",
        ],
        list: [
          "All-wheel drive (AWD) vehicles — Subaru, Audi Quattro, Honda CR-V, Ford Explorer, etc.",
          "4WD trucks and SUVs when not in neutral tow mode",
          "Electric vehicles — Tesla, Rivian, BYD, Ford Lightning, and others",
          "Lowered vehicles with less than 4 inches of ground clearance",
          "Vehicles with severe undercarriage, steering, or suspension damage",
          "Classic and collector vehicles where contact damage is unacceptable",
          "Motorcycles (with appropriate wheel chocks)",
        ],
      },
      {
        heading: "What happens when your vehicle is loaded",
        body: [
          "Our operators position the flatbed at the vehicle, lower the deck to the lowest angle the surface allows, and load the vehicle using a winch system for vehicles that can't drive on, or a wheel-engaging system for vehicles that can. Once on the deck, the vehicle is tied down with proper straps at the frame or manufacturer tie-down points — not at wheel spokes or suspension components.",
          "We can transport to any repair shop, dealership, or storage location you choose in the Edmonton region. If you're dealing with insurance, we can provide the required documentation for your claim.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does my AWD vehicle need flatbed?",
        a: "Yes, in almost all cases. AWD vehicles have a permanently engaged drivetrain — towing on two wheels means the other two are spinning the transfer case and transmission without oil pressure. Most manufacturers explicitly prohibit non-flatbed towing for AWD models. Check your owner's manual, or just ask dispatch and we'll confirm.",
      },
      {
        q: "Can you flatbed an electric vehicle?",
        a: "Yes. EVs should only be transported on a flatbed. The regenerative braking system and electric motor can be damaged by wheel-to-ground contact during towing. We load and secure EVs the same way as any other vehicle — with tie-downs at the proper frame points.",
      },
      {
        q: "How long does flatbed loading take?",
        a: "For a standard vehicle in a parking lot or on a paved surface, loading takes roughly 10 to 15 minutes. Vehicles in awkward positions — partially in a ditch, in a narrow lane, or with significant damage — take longer. We'll give you an honest estimate when we arrive on scene.",
      },
      {
        q: "Is flatbed more expensive than regular towing?",
        a: "Flatbed rates are slightly higher than wheel-lift, but for vehicles that require it, choosing wheel-lift to save money on the tow can result in thousands of dollars in drivetrain repairs. We provide upfront pricing before loading begins.",
      },
      {
        q: "Can you flatbed on the Anthony Henday or other major Edmonton routes?",
        a: "Yes. Our flatbed equipment is fully highway-rated and we respond to calls on all major Edmonton routes including the Henday, Whitemud Drive, Highway 2, and the QEII corridor.",
      },
    ],
    keywords: [
      "flatbed towing Edmonton",
      "AWD towing Edmonton",
      "EV towing Edmonton",
      "electric vehicle towing Edmonton",
      "lowered car towing Edmonton",
      "flatbed tow truck Edmonton",
    ],
    relatedSlugs: ["light-duty-towing", "accident-recovery", "equipment-transport"],
  },

  {
    slug: "accident-recovery",
    name: "Accident recovery",
    title: "Accident Towing & Recovery in Edmonton",
    metaDescription:
      "Post-accident towing in Edmonton with insurance coordination and delivery to your chosen body shop. Available 24/7 on all Edmonton routes and highways.",
    heroImage: "/images/hero/recoverysnow1024x681.jpg",
    heroImageAlt: "Cliff's Towing recovery truck at an Edmonton accident scene in winter conditions",
    intro:
      "Collisions are disorienting. In the moments after an accident, the last thing you need is to figure out towing logistics on your own. Cliff's Towing handles accident recovery across Edmonton and the surrounding communities, working directly with insurance adjusters, providing required documentation, and delivering your vehicle to the body shop or storage location you choose.",
    sections: [
      {
        heading: "What happens after you call us",
        body: [
          "When you call dispatch, we'll ask for your location, a quick description of your vehicle, and whether anyone has been injured. If emergency services haven't been called and someone is hurt, do that first — we'll be on standby. Once the scene is safe and EPS or RCMP have cleared us, we position the tow equipment and load your vehicle.",
          "If your vehicle is in an undriveable position — wedged against a barrier, partially in a ditch, or inverted — we carry the winching and rigging equipment to extract it before loading. You don't need to source a separate recovery company first.",
        ],
      },
      {
        heading: "Working with your insurance company",
        body: [
          "Most major insurers in Alberta — including Intact, TD Insurance, Wawanesa, Belairdirect, and Co-operators — require towing documentation for their claim files. We provide written confirmation of pickup location, condition of the vehicle at time of load, and delivery destination.",
          "We work directly with adjusters when needed and can hold your vehicle in our yard while your claim is being processed. If your insurer has a preferred facility, we can deliver there. If you have a preferred body shop, we deliver there instead — your vehicle goes where you want it.",
        ],
      },
      {
        heading: "Accident recovery on Edmonton highways",
        body: [
          "Highway accident recovery follows a different set of rules than city towing. We carry full traffic management equipment, coordinate with RCMP or EPS on scene, and handle the specific rigging needed for vehicles that have struck barriers or ended up in the median.",
          "Our operators are available 24/7 on all major routes: the QEII, Highway 2, the Henday, the Whitemud, Yellowhead Trail, and surrounding provincial highways. Highway response times vary by traffic and distance from dispatch, but we'll give you a realistic ETA when you call.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I choose my own towing company after an accident?",
        a: "Yes. In Alberta, you have the legal right to choose your own towing provider after a collision. The police or other party cannot require you to use a specific company. If dispatch sends a tow truck you didn't call, you can decline and call Cliff's instead.",
      },
      {
        q: "Do you work directly with insurance adjusters?",
        a: "Yes. We can communicate directly with your adjuster, provide towing documentation, and hold your vehicle in our secure yard while your claim is processed. We've worked with all major Alberta insurers and understand what documentation they need.",
      },
      {
        q: "Can you deliver my vehicle to any body shop?",
        a: "Yes. We deliver to any repair facility, dealership, or storage location you specify in the Edmonton region. If you're unsure which shop to use, your insurer may have a preferred network — but the choice is yours.",
      },
      {
        q: "What if my car can't be driven or rolled?",
        a: "We carry winching and extraction equipment for exactly this situation. If your vehicle needs to be pulled from a ditch, extracted from a tight spot, or has sustained damage to the wheels or steering, we can recover it before loading onto the flatbed or wheel-lift.",
      },
      {
        q: "How quickly can you respond to an accident scene?",
        a: "Within Edmonton city limits, our average response time is under 30 minutes. Sherwood Park, St. Albert, and Spruce Grove are typically 30 to 40 minutes. Highway response times depend on traffic and our nearest available unit. We give you an honest ETA when you call.",
      },
    ],
    keywords: [
      "accident towing Edmonton",
      "post-accident towing Edmonton",
      "insurance towing Edmonton",
      "collision towing Edmonton",
      "accident recovery Edmonton",
      "tow truck after accident Edmonton",
    ],
    relatedSlugs: ["flatbed-towing", "roadside-assistance", "winching-recovery"],
  },

  {
    slug: "roadside-assistance",
    name: "Roadside assistance",
    title: "Roadside Assistance in Edmonton",
    metaDescription:
      "24/7 roadside assistance in Edmonton: lockout service, battery boost, tire changes, and fuel delivery. Fast response across the greater Edmonton region.",
    heroImage: "/images/hero/decktruckoldcar1024x693.jpg",
    heroImageAlt: "Cliff's Towing technician providing roadside assistance on an Edmonton street in winter",
    intro:
      "Not every breakdown ends in a tow. When you're locked out, out of fuel, dealing with a flat tire, or stranded with a dead battery, Cliff's Towing dispatches roadside technicians to get you moving again on the spot. We serve Edmonton and surrounding communities around the clock — including the worst days of an Alberta winter.",
    sections: [
      {
        heading: "Roadside services we provide",
        body: [
          "Our roadside operators carry the equipment to handle the four most common breakdown situations without a tow: lockouts, dead batteries, flat tires, and empty tanks. If we can resolve your situation roadside, we will. If a tow turns out to be necessary, the same operator can arrange it.",
        ],
        list: [
          "Lockout service — slim-jim, air wedge, and long-reach tools for most vehicle types",
          "Battery boost — commercial-grade booster packs for all vehicle classes",
          "Tire change — jack and your spare, on any surface and in any weather",
          "Emergency fuel delivery — gasoline and diesel, up to 10 litres to get you to a station",
        ],
      },
      {
        heading: "Edmonton winters and roadside calls",
        body: [
          "Cold weather is the leading cause of roadside calls in the Edmonton area. At -30°C, batteries that were borderline in October fail completely. Tires can go flat just from the temperature drop causing air loss. Fuel lines can gel in older diesel vehicles.",
          "We're fully equipped for cold-weather operation. Our battery boosters are rated for sub-zero starts, and our operators know how to work in conditions that sideline lesser equipment. If you're stranded in winter, don't wait — call dispatch and we'll tell you our ETA honestly.",
        ],
      },
      {
        heading: "When roadside becomes a tow",
        body: [
          "Sometimes what looks like a roadside job turns out to need a tow. If your tire is beyond changing because the wheel is seized, if your battery won't hold a charge, or if there's something else going on with the vehicle that won't let it run safely, we'll let you know before any additional charges are incurred.",
          "In those cases, the same operator can either call in a tow from our fleet or, depending on equipment, handle it themselves. You won't be left waiting for a second vehicle if we can avoid it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you unlock any make or model of car?",
        a: "We can unlock most standard passenger vehicles using non-destructive methods: air wedge, long-reach tool, or slim-jim for older vehicles. Some newer vehicles with reinforced door seals or specific locking mechanisms may require a locksmith. We'll let you know when we arrive if your vehicle falls into that category.",
      },
      {
        q: "Do you deliver fuel for electric vehicles?",
        a: "We don't deliver charge — that would require a mobile charging unit, which we don't operate. If your EV has run out of charge, we can arrange a flatbed tow to the nearest charging station or a dealership. For hybrid vehicles with a gasoline engine, we deliver fuel as normal.",
      },
      {
        q: "How long does a tire change take?",
        a: "On a paved, reasonably level surface, a tire change takes about 15 to 20 minutes. Icy or uneven surfaces take longer and may require additional safety setup. If your spare is flat, damaged, or missing, we'll need to arrange a tow instead.",
      },
      {
        q: "My battery died in -30°C. Can you boost it?",
        a: "Yes. We carry commercial-grade boosters rated for extreme cold starts. A severely discharged battery in very cold conditions sometimes needs the booster connected for 10 to 15 minutes before attempting a start. If the battery won't hold a charge after boosting, we can recommend towing to a shop for a replacement.",
      },
      {
        q: "Do you provide roadside assistance on highways?",
        a: "Yes, with some limitations. We provide tire changes and fuel delivery on the highway shoulder, but battery boosts and lockouts require us to pull the vehicle to a safer location first when traffic conditions make shoulder work unsafe. Our operators follow AB Highway Traffic Act safety requirements.",
      },
    ],
    keywords: [
      "roadside assistance Edmonton",
      "car lockout Edmonton",
      "battery boost Edmonton",
      "emergency fuel delivery Edmonton",
      "flat tire change Edmonton",
      "24 hour roadside assistance Edmonton",
      "jump start Edmonton",
    ],
    relatedSlugs: ["light-duty-towing", "flatbed-towing", "accident-recovery"],
  },

  {
    slug: "light-duty-towing",
    name: "Light duty towing",
    title: "Light Duty Towing in Edmonton",
    metaDescription:
      "Light and medium duty towing in Edmonton for cars, SUVs, and pickup trucks. 24/7 dispatch, average 30-min response, all makes and models including EVs.",
    heroImage: "/images/hero/decktruckoldcar1024x693.jpg",
    heroImageAlt: "Cliff's light duty tow truck securing a passenger vehicle on an Edmonton street",
    intro:
      "Most towing calls are light duty — cars, SUVs, crossovers, and half-ton trucks that have broken down, been in a minor accident, or need to be moved from a no-parking zone. Cliff's Towing dispatches light duty equipment across Edmonton and surrounding communities 24 hours a day, with an average response time under 30 minutes within city limits.",
    sections: [
      {
        heading: "What we tow",
        body: [
          "Our light duty fleet handles passenger vehicles from compact sedans to full-size pickup trucks. We carry both flatbed and wheel-lift equipment, so we can match the right method to your specific vehicle.",
          "For all-wheel drive and electric vehicles, we dispatch flatbed. For two-wheel drive vehicles without drivetrain damage, wheel-lift towing is faster and equally safe. If you're not sure which applies to your vehicle, call dispatch and we'll sort it out.",
        ],
        list: [
          "Sedans, hatchbacks, and coupes — all makes",
          "SUVs and crossovers, including AWD models",
          "Half-ton and light three-quarter-ton pickup trucks",
          "Electric vehicles (Tesla, Rivian, Ford Lightning, GM EV models)",
          "Minivans and passenger vans",
          "Small commercial vehicles under 10,000 lbs GVWR",
        ],
      },
      {
        heading: "What to expect when we arrive",
        body: [
          "Our operator will confirm the make and model, check whether the vehicle is AWD or FWD/RWD, and determine the best loading method. If you need to leave the scene — for example, your car broke down in a dangerous spot — we can handle everything and send you photos of the loaded vehicle and delivery confirmation.",
          "We can tow to any shop, dealership, or location you specify. If you're dealing with insurance, we'll provide the documentation your adjuster needs.",
        ],
      },
      {
        heading: "Impound, fleet, and commercial light duty",
        body: [
          "Cliff's also handles property management impound towing, municipal contract towing, and fleet vehicle recovery in the Edmonton area. If you manage multiple vehicles or a facility with parking enforcement needs, call dispatch to discuss arrangement options.",
        ],
      },
    ],
    faqs: [
      {
        q: "My car is front-wheel drive. Do I need flatbed?",
        a: "For most FWD vehicles without drivetrain damage, wheel-lift towing — lifting the drive wheels off the ground — is safe and efficient. If your vehicle has sustained front-end damage or has AWD, we'll switch to flatbed. Our operators confirm the right method before loading.",
      },
      {
        q: "Can you tow my Tesla or other EV?",
        a: "Yes, on a flatbed. EVs cannot be safely towed with wheels on the ground — the motor and regenerative braking system can be damaged. We dispatch flatbed for all EV tow requests.",
      },
      {
        q: "How fast do you respond within Edmonton?",
        a: "Our average response time within the Edmonton city limits is under 30 minutes. Surrounding areas — Sherwood Park, St. Albert, Spruce Grove — are typically 30 to 45 minutes depending on traffic and our nearest available unit. We give you a real ETA when you call, not a best-case estimate.",
      },
      {
        q: "What if my car is in a parkade or tight space?",
        a: "We carry slim-profile equipment for parkades and can maneuver in tighter spaces than a standard wrecker. Let dispatch know when you call so we can confirm equipment compatibility for your specific location.",
      },
      {
        q: "Do you work with insurance for light duty towing?",
        a: "Yes. We provide towing documentation for insurance claims and can coordinate directly with your adjuster if needed. We deliver to your preferred shop or your insurer's preferred facility — your choice.",
      },
    ],
    keywords: [
      "light duty towing Edmonton",
      "car towing Edmonton",
      "tow truck Edmonton",
      "SUV towing Edmonton",
      "towing service Edmonton",
      "24 hour tow truck Edmonton",
    ],
    relatedSlugs: ["flatbed-towing", "roadside-assistance", "accident-recovery"],
  },

  {
    slug: "winching-recovery",
    name: "Winching and recovery",
    title: "Winching & Off-Road Recovery in Edmonton",
    metaDescription:
      "Stuck in a ditch, field, or snowbank? Cliff's Towing provides winching and off-road vehicle recovery across Edmonton and Alberta. 24/7 dispatch.",
    heroImage: "/images/hero/HeavyTowing1024x680.jpg",
    heroImageAlt: "Cliff's Towing winching a vehicle out of a ditch near Edmonton in winter conditions",
    intro:
      "Edmonton winters put vehicles in places they were never meant to be. An icy patch on a rural road, a soft shoulder that gives way, a snowbank that swallowed a half-ton — these are situations where towing alone isn't enough. You need a winch, the right rigging, and an operator who knows how to extract a vehicle without making the damage worse. Cliff's Towing handles off-road and ditch recovery across Edmonton and the surrounding region.",
    sections: [
      {
        heading: "When do you need a winch recovery?",
        body: [
          "A winch recovery is needed when a vehicle can't be accessed by a tow truck in its current position. This includes vehicles that have slid off the road into a ditch, become stuck in mud or snow off the travelled surface, rolled partway down an embankment, or ended up in a field or undeveloped area.",
          "The key difference between winching and towing is that winching moves the vehicle to a towable position first. Once we've extracted it to a stable, accessible surface, we can assess whether it can be driven or needs to go on a hook.",
        ],
      },
      {
        heading: "Equipment and technique",
        body: [
          "We carry high-capacity winches on both light and heavy duty trucks, along with the rigging hardware needed for safe multi-point pulls. A single straight-line winch-out isn't always possible — sometimes you need snatch blocks to redirect the pull angle, or multiple anchor points to manage a vehicle on a slope.",
          "Our operators are trained in recovery scenarios, not just winching. They assess the ground conditions, vehicle position, and potential damage before hooking up — because a badly executed pull can cause more damage to the frame, suspension, or undercarriage than the original incident.",
        ],
      },
      {
        heading: "Rural and remote recovery",
        body: [
          "Not all recovery calls happen near a paved road. We respond to rural recovery requests across the greater Edmonton area — including Leduc County, Parkland County, Strathcona County, and Sturgeon County. If your vehicle is stuck on a range road, a farmyard access road, or a lease road in the industrial areas south of Edmonton, we can reach you.",
          "For remote locations, give dispatch as accurate a description of your position as possible — the nearest highway junction, a GPS coordinate if your phone shows it, or any landmarks you can identify. We'll get to you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you recover a vehicle from a ditch on the highway?",
        a: "Yes. Highway ditch recovery is one of our most frequent calls in winter. We set up proper traffic control, coordinate with RCMP or EPS if they're on scene, and execute the winch-out safely from the road shoulder. Highway recovery takes longer than city recovery due to safety setup requirements.",
      },
      {
        q: "Will winching damage my vehicle?",
        a: "Done correctly, winching causes no additional damage. Done incorrectly — wrong attachment points, too much load on a single line, pulling at a bad angle — it can crack frames, tear bumpers, or damage the undercarriage. Our operators assess the situation before connecting the winch to ensure we're rigging it properly.",
      },
      {
        q: "How much does winching cost?",
        a: `Winching rates depend on the complexity of the recovery — how far off the road surface the vehicle is, how many anchor points we need, and how long the extraction takes. We provide upfront pricing before starting. Call ${siteConfig.phone.display} for an estimate based on your specific situation.`,
      },
      {
        q: "Can you recover a commercial truck or semi from a ditch?",
        a: "Yes. Heavy duty winching and recovery for commercial vehicles is a separate operation using our heavy duty equipment and rigging. This includes semi-trucks, dump trucks, and other large commercial vehicles that end up off the road surface.",
      },
      {
        q: "Do you do off-road recovery in rural Alberta?",
        a: "Yes, within the greater Edmonton region including Leduc County, Parkland County, Strathcona County, and Sturgeon County. For locations further afield, call dispatch and we'll confirm coverage based on where you are.",
      },
    ],
    keywords: [
      "winching recovery Edmonton",
      "vehicle stuck in ditch Edmonton",
      "off-road recovery Edmonton",
      "ditch recovery Edmonton",
      "vehicle extraction Edmonton",
      "stuck in snow Edmonton",
      "winter recovery Edmonton",
    ],
    relatedSlugs: ["heavy-duty-towing", "accident-recovery", "flatbed-towing"],
  },

  {
    slug: "equipment-transport",
    name: "Equipment transport",
    title: "Equipment Transport in Edmonton",
    metaDescription:
      "Specialty equipment transport in Edmonton for forklifts, earthmoving equipment, and heavy commercial assets. Cliff's Towing — experienced, 24/7 available.",
    heroImage: "/images/hero/decktruckequipment31024x695.jpg",
    heroImageAlt: "Cliff's deck truck transporting heavy construction equipment on a job site near Edmonton",
    intro:
      "Moving heavy equipment requires more than just a big truck. It requires the right deck configuration, proper tie-down rigging for the load type, and an operator who understands load weight distribution and transport requirements. Cliff's Towing provides equipment transport across Edmonton and Alberta for forklifts, skid steers, excavators, and other heavy commercial assets.",
    sections: [
      {
        heading: "What we transport",
        body: [
          "Our deck trucks are configured for equipment loads that aren't practical to move on a standard flatbed: forklifts, telehandlers, skid steers, mini-excavators, compactors, air compressors, and other wheeled or tracked equipment common on construction sites and industrial yards.",
          "For loads that require float transport or pilot cars — oversized equipment that exceeds standard width or height — we can coordinate permit acquisition and staging through our dispatch team.",
        ],
        list: [
          "Forklifts and reach stackers",
          "Skid steers and compact track loaders",
          "Mini-excavators and compact excavators",
          "Telehandlers and boom lifts",
          "Industrial air compressors and generators",
          "Utility trailers and small equipment trailers",
        ],
      },
      {
        heading: "Safe loading and securing",
        body: [
          "Equipment transport failures are almost always a securing problem, not a weight problem. Loads shift when tie-downs are attached to the wrong points, when chain tension is inconsistent across the load, or when the deck configuration doesn't account for the load's centre of gravity.",
          "Our operators rig equipment to manufacturer-specified tie-down points wherever possible, use appropriate chain grades for the load weight, and do a final tension check before departure. For loads on tracked equipment, we carry rubber mats to protect the deck and proper chain attachment hardware.",
        ],
      },
      {
        heading: "Job site and fleet coordination",
        body: [
          "Equipment transport often needs to coordinate with project timelines. A forklift that has to be on site at 7am for an 8am concrete pour isn't a flexible situation. We work with site managers, general contractors, and fleet coordinators to meet the schedule, and our dispatch team stays reachable throughout.",
          "For recurring transport needs — equipment moving between job sites on a regular schedule — call dispatch to discuss what a standing arrangement would look like.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you transport a forklift?",
        a: "Yes. Forklift transport is one of our most common equipment jobs. We confirm the forklift's weight and mast configuration before dispatch to ensure we're bringing the right deck truck. Most counterbalance forklifts up to 10,000 lbs capacity are handled with our standard equipment.",
      },
      {
        q: "What's the maximum weight you can handle?",
        a: "Our deck trucks handle most equipment transport needs up to approximately 40,000 lbs per load in standard configurations. For loads exceeding this, we can coordinate float transport with the appropriate equipment. Call dispatch with your load specifics and we'll confirm before committing.",
      },
      {
        q: "Do you need permits for equipment transport in Alberta?",
        a: "Permit requirements depend on the width, height, and weight of your load. Many equipment loads fall within standard legal limits and don't require permits. For loads that do — oversized width or over-legal weight — our dispatch team can advise on the process and timeline before we schedule the move.",
      },
      {
        q: "Can you transport equipment after hours or on weekends?",
        a: "Yes. Equipment transport requests are handled by the same 24/7 dispatch as our other services. For jobs that need to happen outside of business hours, book through dispatch and we'll confirm availability and any additional coordination required.",
      },
      {
        q: "Can you move equipment within the Nisku or Acheson industrial areas?",
        a: "Yes. Nisku and Acheson are among our most common equipment transport destinations. We're familiar with both industrial parks, including their access routes and weight restrictions on internal roads.",
      },
    ],
    keywords: [
      "equipment transport Edmonton",
      "forklift transport Edmonton",
      "heavy haul Edmonton",
      "construction equipment transport Alberta",
      "machinery transport Edmonton",
      "Nisku equipment transport",
      "Acheson equipment transport",
    ],
    relatedSlugs: ["heavy-duty-towing", "flatbed-towing", "winching-recovery"],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
