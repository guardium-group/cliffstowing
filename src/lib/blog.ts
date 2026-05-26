import { siteConfig } from "@/lib/site";

export interface BlogSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  sections: BlogSection[];
  takeaway: string;
  relatedService?: { label: string; href: string };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-do-after-a-car-accident-in-edmonton",
    title: "What to do after a car accident in Edmonton",
    description:
      "A practical post-collision checklist for Edmonton drivers, including safety, documentation, insurance, towing, and where to move your vehicle.",
    excerpt:
      "A calm, step-by-step checklist for drivers after a collision on Edmonton roads.",
    category: "Accident recovery",
    publishedAt: "2026-05-03",
    updatedAt: "2026-05-11",
    readingTime: "5 min read",
    image: "/images/hero/cliffs500rotator.jpg",
    imageAlt: "Cliff's Towing heavy recovery truck ready for accident recovery",
    keywords: [
      "car accident Edmonton",
      "accident towing Edmonton",
      "what to do after collision Edmonton",
      "vehicle recovery Edmonton",
    ],
    sections: [
      {
        heading: "Start with safety, not the vehicle",
        body: [
          "After a collision, the first priority is people. Check yourself and passengers for injuries, turn on hazard lights if you can do so safely, and move away from active traffic when conditions allow.",
          "If anyone is hurt, if there is a dangerous road hazard, or if the crash blocks traffic, call emergency services first. The tow can wait until the scene is safe.",
        ],
      },
      {
        heading: "Document the scene before the vehicle moves",
        body: [
          "Photos help insurers, repair shops, and towing operators understand what happened. Capture the vehicles, licence plates, damage, road position, nearby signs, weather conditions, and any debris field.",
          "If police or emergency crews ask you to move, follow their direction. Safety and traffic control come before perfect documentation.",
        ],
        list: [
          "Driver licence and insurance details",
          "Plate numbers and vehicle makes",
          "Photos from several angles",
          "Names and phone numbers for witnesses",
          "Police report or file number if one is issued",
        ],
      },
      {
        heading: "Choose where the vehicle goes",
        body: [
          "A damaged vehicle can usually be taken to your preferred body shop, dealership, storage yard, or another safe destination. You do not have to guess at the roadside. Dispatch can help you think through the next practical stop.",
          "If the vehicle has suspension, steering, wheel, or undercarriage damage, ask for the tow method that keeps the vehicle stable and avoids more damage during loading.",
        ],
      },
      {
        heading: "Call a towing company that can explain the job",
        body: [
          `When you call ${siteConfig.name}, dispatch will ask for the location, vehicle type, visible damage, preferred destination, and whether police or insurance are already involved.`,
          "Clear answers help send the right truck and reduce delays. If you are unsure, describe what you can see rather than trying to diagnose the damage yourself.",
        ],
      },
    ],
    takeaway:
      "After a crash, make people safe, document the scene, decide where the vehicle should go, and call dispatch with clear details.",
    relatedService: { label: "Accident towing & recovery", href: "/services/accident-recovery" },
  },
  {
    slug: "edmonton-winter-roadside-emergency-kit",
    title: "What Edmonton drivers should keep in a winter roadside kit",
    description:
      "A practical winter roadside kit checklist for Edmonton drivers, built around cold weather, low visibility, dead batteries, snowbanks, and long waits.",
    excerpt:
      "A cold-weather checklist that helps Edmonton drivers stay safer while waiting for roadside help.",
    category: "Roadside safety",
    publishedAt: "2026-04-21",
    updatedAt: "2026-05-11",
    readingTime: "4 min read",
    image: "/images/hero/recoverysnow1024x681.jpg",
    imageAlt: "Recovery truck working in Edmonton winter conditions",
    keywords: [
      "Edmonton winter roadside kit",
      "roadside assistance Edmonton winter",
      "dead battery Edmonton",
      "winter towing Edmonton",
    ],
    sections: [
      {
        heading: "Prepare for cold and visibility first",
        body: [
          "Edmonton weather can turn a short wait into a serious problem. A useful winter kit should keep you warm, visible, and able to communicate your location clearly.",
          "Store the kit where you can reach it from inside the vehicle if the trunk is blocked by snow or collision damage.",
        ],
        list: [
          "Warm gloves, toque, and blanket",
          "Reflective triangles or road flares",
          "Phone charging cable and power bank",
          "Flashlight with fresh batteries",
          "Small shovel and traction sand",
        ],
      },
      {
        heading: "Dead batteries are not always simple",
        body: [
          "Cold weather exposes weak batteries. If your vehicle clicks, lights flicker, or accessories turn on but the engine will not start, a boost may solve it.",
          "If the vehicle starts and then dies again, or if the battery is swollen, leaking, or frozen, stop trying to boost it and call for help.",
        ],
      },
      {
        heading: "Do not stand between traffic and your vehicle",
        body: [
          "Flat tires and snowbank recoveries often happen close to moving traffic. If you can safely exit away from traffic, do that. If you cannot, stay belted in with hazard lights on until help arrives.",
          "Give dispatch cross streets, direction of travel, nearby exits, business names, or GPS pins. The faster the operator can find you, the faster the situation gets under control.",
        ],
      },
    ],
    takeaway:
      "A good winter kit keeps you warm, visible, and reachable while dispatch sends the right roadside assistance.",
    relatedService: { label: "Roadside assistance", href: "/services/roadside-assistance" },
  },
  {
    slug: "flatbed-towing-awd-ev-vehicles",
    title: "When flatbed towing is the right choice for AWD, 4WD, and EV vehicles",
    description:
      "Learn why flatbed towing is often the safest option for AWD, 4WD, lowered, damaged, and electric vehicles in Edmonton.",
    excerpt:
      "Why some vehicles should stay fully off the road during a tow, especially AWD, 4WD, EV, and damaged vehicles.",
    category: "Flatbed towing",
    publishedAt: "2026-04-08",
    updatedAt: "2026-05-11",
    readingTime: "5 min read",
    image: "/images/hero/decktruckoldcar1024x693.jpg",
    imageAlt: "Flatbed truck carrying a passenger vehicle",
    keywords: [
      "flatbed towing Edmonton",
      "AWD towing Edmonton",
      "EV towing Edmonton",
      "4WD tow truck Edmonton",
    ],
    sections: [
      {
        heading: "The tow method matters",
        body: [
          "Some vehicles cannot be safely pulled with two wheels on the ground. Drivetrain design, ground clearance, wheel damage, and manufacturer guidance all affect the safest tow method.",
          "Flatbed towing keeps all four wheels off the road, reducing drivetrain stress and helping prevent secondary damage during transport.",
        ],
      },
      {
        heading: "Vehicles that often need a flatbed",
        body: [
          "Flatbeds are commonly used when wheel movement may damage the vehicle or when the vehicle cannot roll safely onto a conventional tow setup.",
        ],
        list: [
          "AWD and 4WD vehicles",
          "Many electric vehicles",
          "Lowered cars and classic vehicles",
          "Vehicles with suspension or steering damage",
          "Vehicles with severe undercarriage damage",
        ],
      },
      {
        heading: "Tell dispatch what changed after the breakdown",
        body: [
          "A vehicle that drove normally before the breakdown may not be safe to tow the same way afterward. Mention warning lights, leaking fluids, locked wheels, bent suspension, or unusual noises.",
          "These details help dispatch decide whether to send a flatbed, wheel-lift, heavy unit, or recovery equipment.",
        ],
      },
    ],
    takeaway:
      "If drivetrain, clearance, or wheel damage is uncertain, a flatbed is often the safer towing choice.",
    relatedService: { label: "Flatbed towing", href: "/services/flatbed-towing" },
  },
  {
    slug: "heavy-equipment-transport-edmonton",
    title: "How to prepare equipment for transport in Edmonton",
    description:
      "A job-site checklist for moving forklifts, small machinery, sheds, attachments, and specialty equipment with a towing and transport operator.",
    excerpt:
      "A practical checklist for site managers and owners before moving equipment across Edmonton or Alberta.",
    category: "Equipment transport",
    publishedAt: "2026-03-19",
    updatedAt: "2026-05-11",
    readingTime: "6 min read",
    image: "/images/hero/decktruckequipment31024x695.jpg",
    imageAlt: "Deck truck carrying heavy equipment",
    keywords: [
      "equipment transport Edmonton",
      "forklift transport Edmonton",
      "heavy towing Edmonton",
      "deck truck Edmonton",
    ],
    sections: [
      {
        heading: "Measure before you call",
        body: [
          "Transport planning starts with size, weight, and access. Dispatch needs practical details before choosing a truck or confirming that a job can be moved safely.",
          "If exact numbers are unavailable, provide make, model, photos, and any plate or manual details you can find.",
        ],
        list: [
          "Approximate weight",
          "Length, width, and height",
          "Pickup and drop-off addresses",
          "Loading surface and clearance",
          "Whether the equipment runs or rolls",
        ],
      },
      {
        heading: "Clear the path",
        body: [
          "The operator needs room to position the truck, load safely, and secure the equipment. Move parked vehicles, loose materials, snow piles, bins, and overhead obstacles before the truck arrives when possible.",
          "If the site is tight, send photos from the street, loading area, and destination. A few photos can prevent the wrong equipment from being dispatched.",
        ],
      },
      {
        heading: "Secure loose parts and attachments",
        body: [
          "Buckets, forks, doors, panels, hoses, chains, and small attachments should be secured or removed before transport. Loose parts can shift, damage the load, or create road hazards.",
          "If the equipment has leaks, weak brakes, dead batteries, locked controls, or disabled steering, tell dispatch before the truck is sent.",
        ],
      },
    ],
    takeaway:
      "Good equipment transport starts with dimensions, access photos, and clear details about whether the load runs, rolls, or needs recovery support.",
    relatedService: { label: "Equipment transport", href: "/services/equipment-transport" },
  },

  {
    slug: "towing-cost-edmonton",
    title: "How much does towing cost in Edmonton?",
    description:
      "A straightforward breakdown of towing costs in Edmonton, including base rates, per-kilometre charges, after-hours fees, and what affects the final bill.",
    excerpt:
      "What Edmonton drivers actually pay for a tow — and the factors that change the number.",
    category: "Towing tips",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-26",
    readingTime: "5 min read",
    image: "/images/hero/cliffs500rotator.jpg",
    imageAlt: "Cliff's Towing truck on an Edmonton road",
    keywords: [
      "towing cost Edmonton",
      "how much does towing cost Edmonton",
      "tow truck prices Edmonton",
      "Edmonton towing rates",
    ],
    sections: [
      {
        heading: "The base rate and per-kilometre charge",
        body: [
          "Most towing operators in Edmonton use a two-part pricing model: a base hook-up fee plus a per-kilometre rate. The hook-up fee covers dispatch, arrival, and the work of securing your vehicle. The per-kilometre rate covers the distance from the pickup location to the delivery destination.",
          "In Edmonton, base rates for a standard light duty tow typically start in the $75–$120 range, and per-kilometre rates generally fall between $3 and $6 per kilometre depending on the company and vehicle type. A short in-city tow of 10–15 km often lands between $100 and $180 all-in for a passenger vehicle. Longer hauls, specialty equipment, or difficult recovery conditions change the calculation.",
        ],
      },
      {
        heading: "What drives the cost higher",
        body: [
          "Several factors push the final bill above the base estimate. Time of day matters — most operators charge after-hours premiums for calls between midnight and 6am, and many add weekend or holiday surcharges. Waiting time matters too: if EPS has the scene locked down for an hour before the tow can proceed, some operators bill a standby rate.",
          "The type of vehicle affects both the equipment required and the rate. Flatbed towing costs more than wheel-lift because the truck is more expensive to run. Heavy duty towing — semis, buses, loaded trailers — involves larger equipment and is priced per job rather than per kilometre.",
          "Recovery complexity also matters. A vehicle stuck in a ditch, lodged against a guardrail, or needing a winch pull before it can be loaded is a recovery, not just a tow. Recovery work is typically billed at a separate rate from the transport portion.",
        ],
        list: [
          "After-hours and statutory holiday premiums",
          "Standby or waiting time at the scene",
          "Flatbed or heavy duty equipment surcharges",
          "Winching, recovery, or off-road extraction fees",
          "Long-haul distance beyond city limits",
        ],
      },
      {
        heading: "Insurance, roadside programs, and direct pay",
        body: [
          "Many Edmonton drivers have towing coverage through their auto insurance policy, credit card benefits, or a roadside assistance program. Towing coverage on an auto policy typically reimburses a fixed dollar amount or a certain number of kilometres per year — check your policy documents to understand your limit before you're in a situation where it matters.",
          "If you're paying directly, ask for an estimate before authorizing the tow. A reputable operator will give you a clear breakdown of the rate structure before the vehicle is loaded. If a quote sounds unusually vague or changes significantly at delivery, that's worth questioning.",
        ],
      },
    ],
    takeaway:
      "Expect $100–$180 for a standard short tow within Edmonton, with flatbed, after-hours, and recovery work all pushing the cost higher. Ask for a rate breakdown before authorizing.",
    relatedService: { label: "Light duty & flatbed towing", href: "/services/light-duty-towing" },
  },

  {
    slug: "alberta-towing-laws",
    title: "Towing laws in Alberta: what drivers need to know",
    description:
      "An overview of Alberta's towing regulations, your rights as a vehicle owner, how rotation towing works, and what to do if you dispute a tow.",
    excerpt:
      "Alberta towing is regulated. Here's what the rules mean for you when your vehicle is towed.",
    category: "Towing tips",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-26",
    readingTime: "6 min read",
    image: "/images/hero/decktruckoldcar1024x693.jpg",
    imageAlt: "Tow truck loading a vehicle on an Edmonton road",
    keywords: [
      "Alberta towing laws",
      "towing regulations Alberta",
      "rotation towing Alberta",
      "vehicle owner rights towing Alberta",
    ],
    sections: [
      {
        heading: "Your right to choose your towing provider",
        body: [
          "In Alberta, you have the right to choose your own towing company. When police attend a collision or breakdown scene and dispatch a tow under the rotation system, you are not obligated to use that provider if you prefer to call your own company. Rotation towing exists to ensure a tow is available when a driver doesn't have a preference — it is not a mandatory system.",
          "To exercise your right, contact your preferred towing company before the rotation truck loads your vehicle. Once a vehicle is hooked up and moved, the situation becomes more complicated and fees may already apply. Act quickly if you want to choose your provider.",
        ],
      },
      {
        heading: "How rotation towing works in Edmonton",
        body: [
          "The Edmonton Police Service and RCMP maintain lists of towing operators who take turns responding to calls when no preference is stated. These rotations are designed to give all participating operators access to police-dispatched calls fairly. The operator on the rotation is expected to arrive within a reasonable time and charge regulated rates.",
          "Rotation towing operators in Alberta are subject to the Traffic Safety Act and accompanying regulations, which set out requirements for how they operate, what they can charge, and how they must handle vehicles. If a rotation operator charges rates that seem inconsistent with regulated maximums, you can dispute the invoice.",
        ],
      },
      {
        heading: "Towing fees and disputes in Alberta",
        body: [
          "Alberta sets maximum towing and storage rates through regulation. If you believe a towing company has overcharged you, you can dispute the invoice in writing to the company first. If that doesn't resolve it, the Vehicle Impoundment Consumer Protection Program and the Consumer Investigation Unit of Service Alberta can receive complaints about unlicensed or predatory towing practices.",
          "For collision-related tows, keep all documentation — the dispatch record, the invoice, the delivery address, and any photos of your vehicle before and after the tow. Your insurance adjuster will use this documentation during the claims process.",
        ],
        list: [
          "Keep the dispatch record and invoice from any tow",
          "Note the licence plate and company name of the tow truck",
          "Take photos of your vehicle condition before it is loaded",
          "Ask for a written rate breakdown before authorizing",
          "Contact Service Alberta if you suspect unlicensed or predatory towing",
        ],
      },
    ],
    takeaway:
      "Alberta drivers have the right to choose their tow provider. Act before the rotation truck loads your vehicle, keep all documentation, and dispute invoices through regulated channels if needed.",
    relatedService: { label: "Accident recovery towing", href: "/services/accident-recovery" },
  },

  {
    slug: "heavy-duty-vs-light-duty-towing",
    title: "Heavy duty vs. light duty towing — what's the difference?",
    description:
      "Understand the difference between light duty and heavy duty towing, which vehicles require each, and why sending the wrong truck costs time and money.",
    excerpt:
      "Not every breakdown needs the same truck. Here's how towing companies classify loads and why it matters.",
    category: "Towing tips",
    publishedAt: "2026-05-08",
    updatedAt: "2026-05-26",
    readingTime: "5 min read",
    image: "/images/hero/decktruckequipment31024x695.jpg",
    imageAlt: "Heavy duty tow truck on an Edmonton highway",
    keywords: [
      "heavy duty towing Edmonton",
      "light duty towing Edmonton",
      "semi truck towing Edmonton",
      "commercial vehicle towing Edmonton",
    ],
    sections: [
      {
        heading: "How the industry defines light, medium, and heavy duty",
        body: [
          "Towing classifications follow the same weight categories used for commercial vehicles. Light duty generally covers passenger cars, minivans, SUVs, and light pickups — vehicles under 4,500 kg (10,000 lbs) GVWR. Medium duty covers larger pickups, cargo vans, straight trucks, and vehicles in the 4,500–11,000 kg range. Heavy duty starts above that — semi-trucks, tanker trailers, buses, and heavy equipment.",
          "The equipment required scales with the weight. A light duty wrecker handling a passenger car has a very different hydraulic capacity than a heavy duty rotator needed to upright an overturned semi. Sending a light duty truck to a heavy duty job doesn't just fail — it can be dangerous for the operator and can cause additional damage to the vehicle if the equipment is forced beyond its rating.",
        ],
      },
      {
        heading: "When you need heavy duty towing in Edmonton",
        body: [
          "Heavy duty towing in Edmonton most commonly involves semi-trucks and tandem axles broken down on the Henday, Yellowhead, or QEII corridor; commercial buses or coach vehicles; heavy equipment being moved between job sites; and vehicles that have rolled over or jackknifed and need rotator recovery before they can be transported.",
          "A key indicator is weight. If the disabled vehicle exceeds roughly 4,500 kg or is a tandem, tri-axle, or tractor-trailer configuration, it's a heavy duty job. If you're unsure, describe the vehicle to dispatch — make, model, axle count, and whether it's a tractor only or tractor-trailer unit. Dispatch will determine the right equipment.",
        ],
        list: [
          "Semi-trucks, tandem axles, and tri-axles",
          "Buses and coach vehicles",
          "Loaded trailers and tankers",
          "Rollover and jackknife recovery",
          "Heavy equipment requiring rotator or underlift",
        ],
      },
      {
        heading: "Light duty covers most passenger calls",
        body: [
          "For most Edmonton drivers — passenger cars, crossovers, light trucks, minivans — light duty towing is the correct category. The majority of breakdown calls, flat tires, battery failures, lockouts, and minor collisions involve light duty vehicles and can be handled by a standard wheel-lift or flatbed unit.",
          "If your vehicle is an AWD, EV, or has sustained collision damage, light duty still applies to the vehicle weight — but the tow method (flatbed vs. wheel-lift) changes based on the drivetrain and damage type. Dispatch will ask about both vehicle type and condition to send the right configuration.",
        ],
      },
    ],
    takeaway:
      "Weight and vehicle type determine the tow class. When in doubt, describe the vehicle to dispatch and let them choose the right equipment.",
    relatedService: { label: "Heavy duty towing", href: "/services/heavy-duty-towing" },
  },

  {
    slug: "ev-towing-guide-edmonton",
    title: "EV towing in Edmonton: what Tesla, Rivian, and Ford Lightning owners need to know",
    description:
      "Why electric vehicles require special towing considerations, what manufacturers say about towing EVs, and how to get a safe flatbed in Edmonton.",
    excerpt:
      "Electric vehicles can't be towed like a regular car. Here's what EV owners in Edmonton need to know.",
    category: "Flatbed towing",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-26",
    readingTime: "5 min read",
    image: "/images/hero/decktruckoldcar1024x693.jpg",
    imageAlt: "Flatbed truck carrying an electric vehicle",
    keywords: [
      "EV towing Edmonton",
      "Tesla towing Edmonton",
      "electric vehicle towing Edmonton",
      "flatbed tow EV Edmonton",
    ],
    sections: [
      {
        heading: "Why EVs can't be towed like a regular car",
        body: [
          "Most electric vehicles use permanent magnet motors directly connected to the driven wheels. When those wheels rotate — as they do when a vehicle is pulled with one end lifted off the ground — the motor generates electricity through a process similar to regenerative braking. Depending on the vehicle and state of the battery, this can cause the battery management system to receive uncontrolled charge, potentially damaging battery cells, inverters, or motor controllers.",
          "Some EVs have a way to enable a 'transport mode' that puts the drivetrain in a neutral-like state and reduces this risk, but not all models support it, and enabling it requires the 12V system to be functional — which may not be the case in a complete breakdown situation. The safest universal approach for most EVs is flatbed transport with all four wheels off the ground.",
        ],
      },
      {
        heading: "What the manufacturers say",
        body: [
          "Tesla's owner manuals specify flatbed transport for most Model 3, Model Y, Model S, and Model X scenarios. The manuals note that wheel-lift towing with front or rear wheels on the ground risks motor damage and explicitly recommends against it in most situations. Similar guidance appears in the owner documentation for Rivian R1T and R1S, Ford F-150 Lightning, Hyundai IONIQ 5 and IONIQ 6, Kia EV6, and most BMW i-series models.",
          "The Chevrolet Bolt is one of the few EVs where the manufacturer permits short-distance wheel-lift towing under specific conditions, but flatbed remains the manufacturer-recommended option. When in doubt, the manufacturer's guidance is the safe default.",
        ],
        list: [
          "Tesla Model 3, Y, S, X — flatbed required",
          "Rivian R1T, R1S — flatbed required",
          "Ford F-150 Lightning — flatbed required",
          "Hyundai IONIQ 5 & 6, Kia EV6 — flatbed recommended",
          "Chevrolet Bolt — flatbed preferred; limited wheel-lift conditions exist",
        ],
      },
      {
        heading: "Getting a flatbed for your EV in Edmonton",
        body: [
          "When you call Cliff's Towing for an EV breakdown in Edmonton, mention the make, model, and that it's electric. We dispatch flatbed automatically for EV calls and don't apply a premium for identifying the vehicle type. Response time within Edmonton city limits is typically under 25 minutes for a flatbed request.",
          "If your EV has a low 12V auxiliary battery — which controls door locks, the screen, and the ability to put the vehicle in transport mode — let dispatch know. This affects how the vehicle gets loaded and whether we need to access internal components before moving it. A completely dead 12V system doesn't prevent flatbed loading, but it does change the process.",
        ],
      },
    ],
    takeaway:
      "Most EVs require flatbed transport to avoid motor and battery damage. Tell dispatch it's an EV and the make — we'll send the right truck.",
    relatedService: { label: "Flatbed towing", href: "/services/flatbed-towing" },
  },

  {
    slug: "how-to-choose-towing-company-edmonton",
    title: "How to choose a towing company in Edmonton",
    description:
      "What to look for when choosing a towing company in Edmonton, including licensing, equipment, response time transparency, and red flags to avoid.",
    excerpt:
      "Most people don't think about their towing company until they need one. Here's what to look for before that moment arrives.",
    category: "Towing tips",
    publishedAt: "2026-04-26",
    updatedAt: "2026-05-26",
    readingTime: "5 min read",
    image: "/images/hero/cliffs500rotator.jpg",
    imageAlt: "Cliff's Towing dispatcher taking a call",
    keywords: [
      "choose towing company Edmonton",
      "best towing company Edmonton",
      "reliable tow truck Edmonton",
      "Edmonton towing reviews",
    ],
    sections: [
      {
        heading: "Check licensing and insurance before you need them",
        body: [
          "In Alberta, towing operators working on public roads are subject to licensing and insurance requirements under the Traffic Safety Act. A reputable company will have commercial liability insurance and operators who hold the relevant certifications for the type of recovery work they do. Heavy duty operators have additional certification requirements beyond standard light duty work.",
          "You can often verify a company's standing by checking if they appear on police rotation lists for Edmonton Police Service or RCMP jurisdictions — companies on rotation lists have passed basic vetting requirements. That said, rotation listing is not the only indicator of quality; some reputable operators focus on direct-call business rather than police dispatch work.",
        ],
      },
      {
        heading: "Response time transparency matters most at 2am",
        body: [
          "A company that quotes vague ETAs or refuses to give an estimate is one that won't communicate well when you're stranded. A good towing company will ask for your location, confirm they have a unit available, and give you a realistic arrival window before you authorize the call.",
          "Edmonton's geography means response times vary. A company dispatching from the south side will take longer to reach a breakdown on the Henday near Manning Drive than one with central dispatch. Ask where the nearest unit is coming from. If the answer is evasive, that tells you something about how they'll handle the rest of the job.",
        ],
        list: [
          "Ask for a specific ETA before authorizing",
          "Ask where the nearest available unit is dispatching from",
          "Confirm the truck type being sent matches your vehicle type",
          "Ask for a rate estimate before the truck is sent",
          "Get the company name and phone number for the record",
        ],
      },
      {
        heading: "Red flags to avoid",
        body: [
          "Predatory towing exists. Signs include: refusing to give a rate estimate before loading; dramatically changing the price at delivery; threatening to hold the vehicle unless you pay an inflated amount; using high-pressure language to rush you into authorizing; or claiming police 'sent them' when you didn't contact them. In Alberta, you have the right to a written invoice and the right to dispute charges through regulated channels.",
          "A company that has been operating in Edmonton for a long time — with a local address, verifiable history, and reviews from real customers — is a much lower risk than an operator you can't verify. Long-standing operators have a reputation to protect.",
        ],
      },
    ],
    takeaway:
      "Choose a towing company before you need one. Look for licensed operators, transparent pricing, honest ETAs, and a verifiable local presence.",
    relatedService: { label: "24/7 dispatch & roadside assistance", href: "/services/roadside-assistance" },
  },

  {
    slug: "winching-vs-towing-edmonton",
    title: "Winching vs. towing — when you need recovery, not just a hook",
    description:
      "The difference between a standard tow and a winch recovery, when each applies, and why calling it right saves time and money on Edmonton roads.",
    excerpt:
      "A stuck vehicle in a ditch or snowbank is a recovery job, not a standard tow. Here's the difference.",
    category: "Towing tips",
    publishedAt: "2026-04-15",
    updatedAt: "2026-05-26",
    readingTime: "4 min read",
    image: "/images/hero/recoverysnow1024x681.jpg",
    imageAlt: "Cliff's Towing winch recovery truck on Edmonton road",
    keywords: [
      "winching recovery Edmonton",
      "stuck in ditch Edmonton",
      "vehicle recovery Edmonton",
      "snowbank recovery Edmonton",
    ],
    sections: [
      {
        heading: "What makes a job a recovery instead of a tow",
        body: [
          "A standard tow starts with a vehicle that is on solid ground, accessible to the truck, and in a position where it can be hooked up or loaded onto a flatbed without extraction work. A recovery job starts with a vehicle that can't be reached directly — stuck in a ditch, buried in a snowbank, off the road into a field, lodged against a barrier, or in a position that prevents standard loading.",
          "The distinction matters because recovery requires different equipment and technique. Winching — using a cable or chain under tension to pull a vehicle back to accessible ground — involves managing load angles, anchor points, and the risk of additional vehicle movement. It's not just a tow with extra steps; it's a different job.",
        ],
      },
      {
        heading: "Common recovery situations in Edmonton",
        body: [
          "Edmonton and the surrounding region generates a consistent volume of recovery calls every winter. Snowbanks on subdivision streets and parking lots catch drivers who slide into them, embedding the vehicle up to its axles. Ice on the Henday, Whitemud, and the ring road interchanges produces off-road excursions. Rural roads south and east of Edmonton — on the way to Nisku, Leduc, Beaumont, and Strathcona County — see regular ditch calls where vehicles slide off during winter driving.",
          "Spring thaw adds a different recovery scenario: soft shoulders on rural roads and unpaved lanes that look solid but aren't, swallowing vehicles that pull too far off the pavement. Summer recovery calls often involve off-road trips that went further than the vehicle could handle.",
        ],
        list: [
          "Snowbank and winter ditch extractions",
          "Ice-related off-road excursions on ring roads",
          "Soft shoulder recovery during spring thaw",
          "Vehicles lodged against barriers or guardrails",
          "Off-road and field recovery",
        ],
      },
      {
        heading: "What to do while waiting for recovery",
        body: [
          "If your vehicle is off the road and you're safe, stay with the vehicle with hazard lights on. Do not attempt to rev out of a ditch or snowbank — spinning tires dig the vehicle in further and can damage drivetrain components. In cold weather, running the engine for heat is reasonable if the exhaust pipe is clear and you can crack a window; a blocked exhaust is a carbon monoxide risk.",
          "Give dispatch as specific a location as possible — highway number, direction of travel, nearest kilometre marker or cross street, and a description of where the vehicle is relative to the road. For rural or off-highway calls, a GPS pin from your phone is the fastest way to get the recovery truck to the right spot.",
        ],
      },
    ],
    takeaway:
      "If your vehicle is off the road and can't be reached for a standard hookup, it's a recovery job. Don't spin the tires — call dispatch with your exact location.",
    relatedService: { label: "Winching & off-road recovery", href: "/services/winching-recovery" },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts(limit = 3) {
  return blogPosts.slice(0, limit);
}
