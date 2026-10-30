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
          "Photos help insurers, repair shops, and towing operators understand what happened (our guide to [towing and insurance in Alberta](/blog/towing-and-insurance-alberta) covers what to keep). Capture the vehicles, licence plates, damage, road position, nearby signs, weather conditions, and any debris field.",
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
          "A damaged vehicle handled through our [accident towing and recovery](/services/accident-recovery) service can usually be taken to your preferred body shop, dealership, storage yard, or another safe destination. You do not have to guess at the roadside. Dispatch can help you think through the next practical stop.",
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
          "If the vehicle starts and then dies again, or if the battery is swollen, leaking, or frozen, stop trying to boost it and call for help. Our [battery boost](/services/battery-boost) service and our guide to a [dead battery on a cold morning](/blog/dead-battery-cold-morning-edmonton) cover this in more detail.",
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
    imageAlt: "Cliff's Towing flatbed carrying a classic car strapped down at all four wheels",
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
          "[Flatbed towing](/services/flatbed-towing) keeps all four wheels off the road, reducing drivetrain stress and helping prevent secondary damage during transport.",
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
          "These details help dispatch decide whether to send a flatbed, wheel-lift (see [how each tow method works](/blog/tow-methods-flatbed-wheel-lift-dolly)), heavy unit, or recovery equipment.",
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
    imageAlt: "Cliff's deck truck hauling a tractor with a sweeper attachment, chained down for transport",
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
          "Transport planning for [equipment transport](/services/equipment-transport) starts with size, weight, and access. Dispatch needs practical details before choosing a truck or confirming that a job can be moved safely.",
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
          "If the site is tight, send photos from the street, loading area, and destination. A few photos can prevent the wrong equipment from being dispatched. For heavier fleet vehicles, see [what size tow truck your fleet needs](/blog/fleet-towing-guide-edmonton).",
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
    imageAlt: "Cliff's heavy recovery rotator tow truck with the Edmonton skyline behind it",
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
          "The type of vehicle affects both the equipment required and the rate. Flatbed towing costs more than wheel-lift because the truck is more expensive to run. [Heavy duty towing](/services/heavy-duty-towing) — semis, buses, loaded trailers — involves larger equipment and is priced per job rather than per kilometre.",
          "Recovery complexity also matters. A vehicle stuck in a ditch, lodged against a guardrail, or needing a winch pull before it can be loaded is a recovery, not just a tow. Recovery work is typically billed at a separate rate from the transport portion; see [winching vs. towing](/blog/winching-vs-towing-edmonton) for the difference.",
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
          "Many Edmonton drivers have towing coverage through their auto insurance policy, credit card benefits, or a roadside assistance program. See also [Towing and insurance in Alberta](/blog/towing-and-insurance-alberta). Towing coverage on an auto policy typically reimburses a fixed dollar amount or a certain number of kilometres per year — check your policy documents to understand your limit before you're in a situation where it matters.",
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
          "For collision-related tows, keep all documentation — the dispatch record, the invoice, the delivery address, and any photos of your vehicle before and after the tow. Your insurance adjuster will use this documentation during the claims process, and our [accident towing and recovery](/services/accident-recovery) team can help, as can our guide to [towing and insurance in Alberta](/blog/towing-and-insurance-alberta).",
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
          "Towing classifications follow the same weight categories used for commercial vehicles. Light duty generally covers passenger cars, minivans, SUVs, and light pickups — vehicles under 4,500 kg (10,000 lbs) GVWR. Medium duty covers larger pickups, cargo vans, straight trucks, and vehicles in the 4,500–11,000 kg range. Heavy duty starts above that — semi-trucks, tanker trailers, buses, and heavy equipment, which is where [heavy duty towing](/services/heavy-duty-towing) comes in.",
          "The equipment required scales with the weight. A light duty wrecker handling a passenger car has a very different hydraulic capacity than a heavy duty rotator needed to upright an overturned semi. Sending a light duty truck to a heavy duty job doesn't just fail — it can be dangerous for the operator and can cause additional damage to the vehicle if the equipment is forced beyond its rating.",
        ],
      },
      {
        heading: "When you need heavy duty towing in Edmonton",
        body: [
          "Heavy duty towing in Edmonton most commonly involves semi-trucks and tandem axles broken down on the Henday, Yellowhead, or QEII corridor; commercial buses or coach vehicles; heavy equipment being moved between job sites; and vehicles that have rolled over or jackknifed and need rotator recovery before they can be transported.",
          "A key indicator is weight. If the disabled vehicle exceeds roughly 4,500 kg or is a tandem, tri-axle, or tractor-trailer configuration, it's a heavy duty job. If you're unsure, describe the vehicle to dispatch — make, model, axle count, and whether it's a tractor only or tractor-trailer unit. Dispatch will determine the right equipment. Fleet coordinators may also want our guide to [fleet towing in Edmonton](/blog/fleet-towing-guide-edmonton).",
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
          "Some EVs have a way to enable a 'transport mode' that puts the drivetrain in a neutral-like state and reduces this risk, but not all models support it, and enabling it requires the 12V system to be functional — which may not be the case in a complete breakdown situation. The safest universal approach for most EVs is [flatbed towing](/services/flatbed-towing) with all four wheels off the ground; our post on [how each tow method works](/blog/tow-methods-flatbed-wheel-lift-dolly) explains why.",
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
          "When you call Cliff's Towing for an EV breakdown in Edmonton, mention the make, model, and that it's electric. We dispatch flatbed automatically for EV calls and don't apply a premium for identifying the vehicle type. Response time within Edmonton city limits is about 30 minutes on average, depending on weather, traffic and road conditions.",
          "If your EV has a low 12V auxiliary battery — which controls door locks, the screen, and the ability to put the vehicle in transport mode — let dispatch know (a [dead 12V battery](/blog/dead-battery-cold-morning-edmonton) is a common cause of cold-weather no-starts). This affects how the vehicle gets loaded and whether we need to access internal components before moving it. A completely dead 12V system doesn't prevent flatbed loading, but it does change the process.",
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
          "In Alberta, towing operators working on public roads, including those offering [roadside assistance](/services/roadside-assistance), are subject to licensing and insurance requirements under the Traffic Safety Act. A reputable company will have commercial liability insurance and operators who hold the relevant certifications for the type of recovery work they do. Heavy duty operators have additional certification requirements beyond standard light duty work.",
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
          "Predatory towing exists, and our guide to [towing laws in Alberta](/blog/alberta-towing-laws) explains your rights. Signs include: refusing to give a rate estimate before loading; dramatically changing the price at delivery; threatening to hold the vehicle unless you pay an inflated amount; using high-pressure language to rush you into authorizing; or claiming police 'sent them' when you didn't contact them. In Alberta, you have the right to a written invoice and the right to dispute charges through regulated channels.",
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
          "The distinction matters because recovery requires different equipment and technique. Winching — using a cable or chain under tension to pull a vehicle back to accessible ground — involves managing load angles, anchor points, and the risk of additional vehicle movement. It's not just a tow with extra steps; it's a different job, and it is the core of our [winching and recovery](/services/winching-recovery) service.",
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
          "Our [winter roadside kit checklist](/blog/edmonton-winter-roadside-emergency-kit) helps while you wait. Give dispatch as specific a location as possible — highway number, direction of travel, nearest kilometre marker or cross street, and a description of where the vehicle is relative to the road. For rural or off-highway calls, a GPS pin from your phone is the fastest way to get the recovery truck to the right spot.",
        ],
      },
    ],
    takeaway:
      "If your vehicle is off the road and can't be reached for a standard hookup, it's a recovery job. Don't spin the tires — call dispatch with your exact location.",
    relatedService: { label: "Winching & off-road recovery", href: "/services/winching-recovery" },
  },

  {
    slug: "towing-and-insurance-alberta",
    title: "Towing and insurance in Alberta: what's usually covered and what to ask",
    description:
      "A general guide to how towing and auto insurance interact in Alberta, what many policies include, and the questions to ask your insurer before you need a tow.",
    excerpt:
      "Many Alberta drivers assume a tow is covered, then find out at the roadside that it depends. Here is what to check ahead of time.",
    category: "Accident recovery",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "6 min read",
    image: "/images/hero/cliffs500rotator.jpg",
    imageAlt: "Cliff's heavy recovery rotator tow truck with the Edmonton skyline behind it",
    keywords: [
      "towing insurance Alberta",
      "does insurance cover towing Alberta",
      "accident towing insurance Edmonton",
      "roadside coverage Alberta",
    ],
    sections: [
      {
        heading: "Why towing and insurance get confusing",
        body: [
          "Towing sits in an awkward spot between your insurance policy, your roadside program, and your own wallet. A tow after a collision is often handled very differently from a tow after a simple breakdown, and the paperwork can differ too. Many drivers never read the towing section of their policy until they are standing on the shoulder in the cold.",
          "The good news is that a few minutes of reading and one phone call to your insurer can remove most of the uncertainty. Nothing in this article is a substitute for your actual policy wording. Coverage varies between insurers, between policy types, and between add-ons, so treat what follows as a list of things to check rather than a promise of what you will get.",
          "It also helps to separate two ideas that are easy to mix up: who pays for the tow, and who decides which company does it. Your insurer may be involved in the first question, but in most situations the second is still largely your call. Keeping those two questions apart makes phone calls with your insurer and with dispatch much simpler.",
          "If you carry more than one source of coverage, for example a policy add-on and a roadside membership, ask which one applies first and whether you can use both. Knowing that in advance can save a confusing conversation when you are cold, tired, and waiting on the shoulder.",
        ],
      },
      {
        heading: "Where towing coverage can come from",
        body: [
          "There are several places a tow might be covered, and you may have more than one. It is worth knowing which apply to you before you need them, because the first call you make at the roadside can depend on the answer.",
        ],
        list: [
          "Your auto insurance policy, either built in or as an optional add-on",
          "A roadside assistance program through an auto club, a dealership, or a vehicle manufacturer",
          "Benefits that come with some credit cards or memberships",
          "Your own payment, if none of the above applies or the limit has been used up",
        ],
      },
      {
        heading: "Collision tows versus breakdown tows",
        body: [
          "Many policies treat a tow after a covered collision as part of the claim, while a tow after a mechanical breakdown or a flat battery may only be covered if you have a specific roadside or towing add-on. Some policies cap the distance, the number of tows per year, or the type of service. Check your policy or ask your insurer how your coverage treats each situation.",
          "After a crash, your first priorities are safety and documentation, which our [post-accident checklist](/blog/what-to-do-after-a-car-accident-in-edmonton) walks through. Once the scene is safe, you can decide where the vehicle should go. Our [accident towing and recovery](/services/accident-recovery) team can help you think through whether to head to a body shop, a storage yard, or home.",
        ],
      },
      {
        heading: "Your right to choose, and how that fits with claims",
        body: [
          "In Alberta, you generally have the right to choose your own towing company, even when police have called a rotation truck. We cover this in more detail in [Towing laws in Alberta](/blog/alberta-towing-laws). Insurers sometimes have preferred providers, but many drivers are still free to use their own, so ask your insurer how they handle that choice and whether they will reimburse or pay directly.",
          "Whichever route you take, keep the paperwork. The dispatch record, the invoice, the pickup and drop-off locations, and photos of the vehicle before it was loaded all help your adjuster. If you are paying first and claiming later, ask for a clear written rate breakdown before authorizing the tow, and see our guide to [what towing costs in Edmonton](/blog/towing-cost-edmonton) for the factors that move the final number.",
          "If you are towed from a collision scene to a temporary yard, ask where the vehicle is, what the storage arrangements are, and how long you have before daily storage charges might start. Moving the vehicle promptly to a body shop or your preferred location often keeps those costs down. Ask your insurer whether they want to inspect the vehicle before repairs begin.",
        ],
      },
      {
        heading: "Questions to ask your insurer",
        body: [
          "A short call to your insurer or broker can answer most of this. Write the answers down and keep them in your glovebox or phone notes so you are not searching for them in an emergency.",
        ],
        list: [
          "Does my policy include towing, and does it differ for collisions and breakdowns?",
          "Is there a distance limit, a dollar limit, or a limit on how many tows I can claim?",
          "Do I pay the tow company first and get reimbursed, or can the insurer pay directly?",
          "Can I choose my own towing company, and what if the vehicle goes to a different yard first?",
          "Does storage at a yard count, and for how many days?",
          "What do I need to submit afterward, such as the invoice, photos, or a police file number?",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Will my insurance cover a tow? It depends on your policy, whether the tow follows a collision or a breakdown, and whether you carry a towing or roadside add-on. Check your policy documents or ask your insurer.",
          "Should I call my insurer before the tow truck loads my vehicle? If you can do so safely, it often helps, because they can tell you what they need and whether they have preferred arrangements. If the vehicle is blocking traffic or the scene is unsafe, safety comes first and the call can wait.",
          `What if I am not sure whether a tow is covered? Ask for a rate estimate from the towing company, keep every document, and confirm with your insurer afterward. You can reach dispatch any time at ${siteConfig.phone.display} to talk through what to expect.`,
        ],
      },
    ],
    takeaway:
      "Know where your towing coverage comes from before you need it, keep every document from the tow, and check your policy or ask your insurer when something is unclear.",
    relatedService: { label: "Accident towing & recovery", href: "/services/accident-recovery" },
  },

  {
    slug: "fleet-towing-guide-edmonton",
    title: "What size tow truck does your fleet need? A guide for Edmonton fleet managers",
    description:
      "A guide for Edmonton fleet coordinators: vehicle weight classes, what to tell dispatch, and how to set up a smoother towing relationship.",
    excerpt:
      "Knowing your vehicles' weight classes and having the right details ready makes a fleet breakdown call faster and less stressful.",
    category: "Heavy duty towing",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "6 min read",
    image: "/images/hero/HeavyTowing1024x680.jpg",
    imageAlt: "Heavy duty tow truck towing a large truck",
    keywords: [
      "fleet towing Edmonton",
      "commercial vehicle towing Edmonton",
      "tow truck size by weight",
      "fleet breakdown plan Alberta",
    ],
    sections: [
      {
        heading: "Why fleets need a towing plan, not just a phone number",
        body: [
          "When a single driver breaks down, the problem is one vehicle. When a fleet vehicle breaks down, the problem also includes a missed delivery, a stranded load, a driver waiting on the shoulder, and a dispatcher trying to keep the rest of the day on schedule. The difference between a smooth recovery and a long one often comes down to how much the coordinator already knows about the vehicle before the call.",
          "This guide is written for fleet managers, dispatchers, and operations coordinators around Edmonton. If you are an individual driver trying to work out what kind of truck you need, our post on [heavy duty vs. light duty towing](/blog/heavy-duty-vs-light-duty-towing) is a better starting point. Here, we focus on the fleet side of the conversation.",
          "A simple plan has three parts: a list of the vehicles you run and their weight classes, a short call script for drivers and dispatchers, and a known contact at the towing company. None of this is complicated, but it needs to be written down before the day something goes wrong. A page in a shared folder beats memory every time.",
        ],
      },
      {
        heading: "Weight classes in general terms",
        body: [
          "Towing equipment is matched to vehicle weight, and the common shorthand is based on gross vehicle weight rating, or GVWR. This is the maximum loaded weight the manufacturer rates the vehicle for, and it is usually printed on a label inside the driver's door or in the owner's manual. The categories below are general; the equipment that is right for a specific job depends on the vehicle, its condition, and where it is.",
        ],
        list: [
          "Light duty: passenger cars, SUVs, minivans, and light pickups, generally under about 4,500 kg GVWR",
          "Medium duty: larger pickups, cargo vans, cube vans, and straight trucks, generally between about 4,500 and 11,000 kg GVWR",
          "Heavy duty: tractor-trailers, tandem and tri-axle trucks, buses, tankers, and heavy equipment, generally above that range",
        ],
      },
      {
        heading: "Why the loaded weight changes the answer",
        body: [
          "GVWR is only part of the picture. A cube van that is empty is a very different tow from the same van loaded to its limit. A tractor pulling a loaded trailer is a different job than a bobtail tractor with no trailer. When you call, give dispatch the vehicle's weight rating and then tell them what is actually on board.",
          "Condition matters as well. A vehicle that is still rolling and steering is straightforward compared with one that has locked brakes, a failed drivetrain, or damage after a collision. If a truck has left the roadway or tipped over, it moves into recovery territory, and our [heavy truck recovery explainer](/blog/heavy-truck-recovery-edmonton) describes what that involves. Our [heavy duty towing](/services/heavy-duty-towing) service covers the larger end of the range.",
        ],
      },
      {
        heading: "What to have ready before you call dispatch",
        body: [
          "Keep a short sheet for each vehicle in your fleet, in your phone or in a shared document that drivers can open from the cab. When a breakdown happens, whoever makes the call can read the details instead of guessing.",
        ],
        list: [
          "Unit number, make, model, and year",
          "GVWR and number of axles",
          "Tractor only, straight truck, or tractor with trailer, and whether the trailer is loaded",
          "Type of cargo, and anything hazardous or temperature sensitive",
          "Exact location, direction of travel, and nearest exit or cross street",
          "What happened: engine, brakes, tire, electrical, collision, or off the road",
          "Where the vehicle should go, and who at your company is authorizing the work",
        ],
      },
      {
        heading: "Setting up a fleet relationship before you need it",
        body: [
          `The best time to talk to a towing provider is on a quiet day. Call dispatch at ${siteConfig.phone.display} and ask what information they need to keep on file for your fleet, who the authorized callers are, and how invoices should be handled. A short conversation about your usual routes, yards, and shops helps everyone move faster when it matters.`,
          "Ask about after-hours handling too. Fleet breakdowns do not stick to business hours, and it helps to know who at your company dispatch should reach at 3 a.m. and who can approve a tow if the usual person is unavailable.",
        ],
      },
      {
        heading: "Documentation worth keeping",
        body: [
          "Keep the dispatch record, the invoice, pickup and drop-off locations, and the time stamps for every fleet tow. If a collision is involved, add photos and any police file number. This helps with insurance, maintenance records, and your own review of which units are breaking down most often. For a general overview of how towing rules and paperwork work in the province, see [Towing laws in Alberta](/blog/alberta-towing-laws).",
          "Consider a simple log with one row per event: the date, the unit, the location, what failed, who authorized the tow, where the vehicle went, and the invoice number. After a few months, patterns show up. A unit that is towed twice in a season for the same issue may deserve a closer look, and a route that produces repeated tire calls may be worth a conversation with your drivers.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Do I need to know the exact weight of the vehicle? An accurate GVWR and axle count is ideal, but if you do not have it, give the make, model, year, and what the vehicle is carrying and dispatch can work from there.",
          "Can a light duty truck handle a medium duty vehicle? Not safely if the vehicle is outside the equipment's rating. Matching the truck to the weight protects your vehicle, the operator, and everyone else on the road.",
          "Should every driver have the dispatch number? Yes. Put it on a card in the cab and save it in each driver's phone so the first call goes to the right place.",
        ],
      },
    ],
    takeaway:
      "Know each vehicle's weight class, keep a one-page info sheet per unit, and talk to a towing provider before the breakdown so the call itself takes minutes, not an hour.",
    relatedService: { label: "Heavy duty towing", href: "/services/heavy-duty-towing" },
  },

  {
    slug: "heavy-truck-recovery-edmonton",
    title: "How heavy truck and semi recovery works on Edmonton highways",
    description:
      "How heavy truck and semi recovery works: scene safety, traffic control, rigging, uprighting, load transfer, and why it can take hours.",
    excerpt:
      "A rolled or jackknifed semi is not a quick tow. Here is what actually happens between the call and the road reopening.",
    category: "Heavy duty towing",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "6 min read",
    image: "/images/hero/cliffs500rotator.jpg",
    imageAlt: "Cliff's heavy recovery rotator tow truck with the Edmonton skyline behind it",
    keywords: [
      "semi truck recovery Edmonton",
      "rollover recovery Alberta",
      "heavy truck recovery",
      "rotator tow truck Edmonton",
    ],
    sections: [
      {
        heading: "Why heavy recovery is a different job",
        body: [
          "Most people only see the end of a heavy recovery: a stretch of highway with flashing lights, a long delay, and eventually a tow truck pulling away. What happens in between is a planned, step-by-step operation. This is a general explainer of how it typically works, not an account of any specific incident, and the details always change with the vehicle, the load, and the location.",
          "Heavy recovery usually involves tractor-trailers, buses, tankers, or other large vehicles that are off the road, on their side, jackknifed, or too damaged to roll. If you want to understand where heavy duty starts and stops, see our post on [heavy duty vs. light duty towing](/blog/heavy-duty-vs-light-duty-towing). Typical Edmonton corridors for this kind of work include the QEII, the Anthony Henday, and the Yellowhead, where traffic volumes and speeds make scene safety especially important.",
        ],
      },
      {
        heading: "Step one: make the scene safe",
        body: [
          "Before anyone touches the vehicle, the scene has to be safe. Police, fire, and paramedics deal with injuries and immediate hazards first. Traffic control is set up so that approaching drivers are warned and lanes are closed or redirected. Tow operators work with those crews and follow their direction, because an operator who is hit by passing traffic is not helping anyone.",
          "Fuel leaks, spilled cargo, and downed lines can change the plan entirely. If hazardous materials are involved, specialized crews may need to deal with them before recovery can begin. This is one of the main reasons a heavy recovery cannot simply be rushed.",
        ],
      },
      {
        heading: "Step two: assess the load and plan the rigging",
        body: [
          "The operator walks the scene and looks at how the vehicle is resting, what it is carrying, where the weight sits, and what is bent or broken. A loaded trailer on its side behaves very differently from an empty one. The plan covers where to attach, which direction to pull or lift, and what could shift once the vehicle starts to move.",
          "Rigging is the careful connection of chains, straps, and cables to structural points on the vehicle. Rigging in the wrong place can tear a part off, shift the load, or whip a line under tension. Experienced operators take their time here because mistakes cost far more than minutes.",
          "Ground conditions matter too. Soft shoulders, ditches, ice, or wet pavement all change how a vehicle will behave under load, and where the recovery equipment can safely be positioned. In winter, an operator may need extra time to set up on a slippery surface so that the recovery truck itself does not move while it is working.",
        ],
      },
      {
        heading: "Uprighting versus towing",
        body: [
          "A vehicle on its side usually has to be brought upright before it can be towed. Heavy rotators and winches work together to roll the vehicle back onto its wheels in a controlled way, often using multiple lines to keep it from swinging or dropping. Once it is upright, the operator checks the axles, brakes, and frame to decide whether it can be towed with an underlift, a wheel-lift, or whether more work is needed.",
          "If the vehicle is only off the roadway and not on its side, the job may be a winching recovery to bring it back onto solid ground. Our [winching and recovery](/services/winching-recovery) service covers that type of work, and our [winching vs. towing guide](/blog/winching-vs-towing-edmonton) explains the difference.",
        ],
      },
      {
        heading: "Load transfer and cleanup",
        body: [
          "If the cargo has shifted or the trailer is too damaged to pull while loaded, the freight may have to be moved to other trailers before the vehicle can be recovered. This is slow, manual, and sometimes requires forklifts or cranes on site. Once the vehicle is removed, debris and any spilled material are cleared so the road can reopen safely.",
        ],
        list: [
          "Scene safety and traffic control",
          "Assessment of the vehicle, the load, and the surface",
          "Rigging and, if needed, uprighting",
          "Load transfer if the cargo cannot stay on board",
          "Towing or transport to a secure location",
          "Debris and cleanup before the road reopens",
        ],
      },
      {
        heading: "Why it can take hours",
        body: [
          "A heavy recovery can feel slow from a car stuck in the queue. In practice, every step has a reason: police investigations may need the scene preserved, crews may be waiting for specialized equipment, and the operator needs to avoid causing further damage or injury. Weather, road surface, and darkness add more time.",
          `If you are a driver involved in a heavy truck incident, stay in a safe place, follow emergency crews' direction, and give dispatch clear information. Call ${siteConfig.name} dispatch at ${siteConfig.phone.display} with the location, the type of vehicle, and what happened. Our [heavy duty towing](/services/heavy-duty-towing) service is built for this kind of job.`,
          "Heavy recovery is also affected by what happens before the tow operator arrives. Crews may need to confirm that a vehicle is stable, that fuel and other fluids are controlled, and that the scene can be worked on without putting anyone at risk. Drivers who are stuck in the queue can help by staying patient, following traffic control, and not trying to squeeze past the scene.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Why can't the truck just be dragged off the road? Dragging a heavy vehicle can damage it, spill its load, and put the operator and other drivers at risk. A planned recovery is usually faster in the end than a rushed one.",
          "Who decides when the road reopens? Police and traffic control crews decide, once the vehicle and debris are cleared and the scene is safe.",
          "What should I tell dispatch if my truck is involved? Give your location, the vehicle type, whether it is loaded, what the cargo is, and whether anyone is injured.",
        ],
      },
    ],
    takeaway:
      "Heavy recovery is a sequence of safety, planning, rigging, and cleanup steps. Patience on the scene is what keeps operators, crews, and other drivers safe.",
    relatedService: { label: "Heavy duty towing", href: "/services/heavy-duty-towing" },
  },

  {
    slug: "car-lockout-edmonton",
    title: "Locked out of your car in Edmonton? What to do, step by step",
    description:
      "Locked out of your vehicle in Edmonton? Cold-weather safety, what to tell dispatch, and what to expect when help arrives.",
    excerpt:
      "Locked out in the cold is stressful. Here is a calm order of steps, and the one situation where you should call 911 first.",
    category: "Roadside safety",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "5 min read",
    image: "/images/hero/recoverysnow1024x681.jpg",
    imageAlt: "Recovery truck working in snowy conditions",
    keywords: [
      "car lockout Edmonton",
      "locked keys in car Edmonton",
      "lockout service Edmonton",
      "roadside assistance lockout",
    ],
    sections: [
      {
        heading: "First, check whether anyone is inside",
        body: [
          "If a child or a pet is inside the vehicle, call 911 first. This is true in any season, but in an Edmonton winter or on a hot summer afternoon a closed vehicle can become dangerous quickly. Do not wait for a lockout service when someone's safety is at risk. Emergency crews can decide whether the situation calls for forced entry.",
          "If nobody is inside, you can slow down and work through the steps below. Most lockouts are an inconvenience, not an emergency, and a calm start helps you give clear information to the person who is coming to help.",
        ],
      },
      {
        heading: "Quick checks before you call",
        body: [
          "A few simple things are worth trying before you call. They take a minute and sometimes solve the problem. Be careful not to force anything, since forcing a door, window seal, or handle can cause damage that costs more than the lockout itself.",
          "Think too about whether the lock problem is really a lockout. A dead key fob battery, a frozen door seal, or a vehicle with a flat battery can all look like a lockout at first. If the doors will not open and the fob has been unreliable lately, mention that to dispatch, because it may change what the operator brings and what the fix looks like. In very cold weather, a frozen door can sometimes be freed with gentle pressure and a bit of patience, but never force a handle or pour hot water on glass or a lock.",
        ],
        list: [
          "Try every door and the trunk or hatch, including the passenger side",
          "Check whether a spare key is with a family member, a roommate, or a coworker nearby",
          "If you have a vehicle app or a connected-services account, see whether it offers a remote unlock",
          "Look for a spare key you may have stored at home or with a trusted contact",
          "Check whether your roadside program or insurance covers lockouts",
        ],
      },
      {
        heading: "Stay safe while you wait, especially in the cold",
        body: [
          "Edmonton cold is not something to take lightly. If you are in a parking lot or on a quiet street, step into a nearby business or building if you can. Staying warm matters more than staying next to the car. If you must wait outside, keep your phone charged, put on whatever layers you have, and stay out of traffic lanes.",
          "If you are locked out on a busy road, stay away from moving traffic and, if your vehicle is still running and in view, avoid standing between the car and traffic. Our [winter roadside kit checklist](/blog/edmonton-winter-roadside-emergency-kit) covers what to keep in the vehicle, and it is worth remembering to keep a spare key somewhere other than inside the car.",
        ],
      },
      {
        heading: "What to tell dispatch",
        body: [
          `When you call ${siteConfig.name} at ${siteConfig.phone.display}, a few details help dispatch send the right help and give you a realistic plan. Our [roadside assistance](/services/roadside-assistance) service handles lockouts as part of its regular work.`,
        ],
        list: [
          "Your exact location, with cross streets, a landmark, or a GPS pin",
          "The make, model, year, and colour of the vehicle",
          "Whether the keys are inside, whether the engine is running, and whether any lights or the radio are on",
          "Whether anyone or any pet is inside",
          "Anything unusual, such as a damaged lock, frozen door, or a keyless entry fob that is not working",
        ],
      },
      {
        heading: "What to expect when help arrives",
        body: [
          "The operator will usually confirm who you are and that the vehicle is yours before opening it. You may be asked to show ID or registration, or to describe something about the vehicle that only the owner would know. This is a normal precaution that protects you as well, so keep your documents handy if you can. If the keys are visible inside the vehicle or the engine is still running, mention that up front so the operator can plan the approach.",
          "Modern vehicles have many different lock designs, and the right method depends on the vehicle. A professional will use tools made for the job and take care around door seals, wiring, and side airbags. If a lockout turns out to be a dead key fob battery or a dead vehicle battery, the fix may be different. See our post on [dead batteries in cold weather](/blog/dead-battery-cold-morning-edmonton) for that case.",
          "Once the vehicle is open, take a moment to check that you have the keys, your phone, and any wallet or documents before the door closes again. Ask whether the operator noticed anything about the lock or door that should be repaired, and consider getting a spare key made so the same thing does not happen again.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Will unlocking damage my car? A trained operator uses methods designed to avoid damage. Forcing the door yourself is what usually causes harm, so it is best to wait for help.",
          "What if I do not have ID with me? Explain this to dispatch. You may be asked for other ways to confirm the vehicle is yours, such as registration or details only the owner would know.",
          "Can I avoid this next time? Keep a spare key somewhere safe but not inside the vehicle, and consider giving a trusted person a copy.",
        ],
      },
    ],
    takeaway:
      "If a child or pet is inside, call 911 first. Otherwise, stay warm, give dispatch your exact location and vehicle details, and keep your ID or registration handy.",
    relatedService: { label: "Roadside assistance", href: "/services/roadside-assistance" },
  },

  {
    slug: "dead-battery-cold-morning-edmonton",
    title: "Dead battery on a cold Edmonton morning: what to try before you call",
    description:
      "What to check when your car will not start on a cold Edmonton morning, when it is safe to boost, when it is not, and how a block heater can help.",
    excerpt:
      "A slow crank or a click on a minus-30 morning is common. Here is what to check, and when to stop and call for help.",
    category: "Roadside safety",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "5 min read",
    image: "/images/hero/recoverysnow1024x681.jpg",
    imageAlt: "Recovery truck working in snowy conditions",
    keywords: [
      "dead battery Edmonton",
      "car won't start cold Edmonton",
      "battery boost Edmonton",
      "block heater Edmonton",
    ],
    sections: [
      {
        heading: "Why cold weather exposes weak batteries",
        body: [
          "A battery produces less power as the temperature drops, while a cold engine needs more power to turn over because its oil is thicker. A battery that worked fine in October can suddenly struggle in January. In Edmonton, that combination catches a lot of drivers off guard on the coldest mornings of the year.",
          "The symptoms are familiar. The engine cranks slowly, you hear a rapid clicking, the dash lights are dim, or nothing happens at all. These can also point to other problems, so it helps to run through a few safe checks before you decide what to do.",
          "Short trips make the problem worse. A vehicle that is only driven a few minutes at a time, especially in the cold, may never fully recharge its battery, and the shortfall adds up over weeks. If your commute is brief, an occasional longer drive helps the charging system catch up. Heavy accessory use, such as seat heaters, defrosters, and a block heater cord left unplugged, also puts more demand on an aging battery.",
        ],
      },
      {
        heading: "Safe things to check first",
        body: [
          "Take a minute to look at what the vehicle is telling you. None of these checks require tools, and you should stop and call for help if anything seems unsafe or you are not comfortable.",
        ],
        list: [
          "Turn off the radio, heater fan, seat warmers, and lights, then try again",
          "Check whether the dash lights and interior lights are bright or dim",
          "Listen for a rapid clicking, a slow crank, or complete silence",
          "Look at the battery terminals if you can see them, and note any heavy corrosion",
          "Confirm the vehicle is in park or neutral with the parking brake set",
          "Wait a few minutes between attempts so you do not drain what is left",
        ],
      },
      {
        heading: "When not to boost",
        body: [
          "Not every dead battery should be jump-started. If the battery case looks cracked, swollen, or bulging, if it is leaking, or if it appears frozen, do not attempt a boost. A damaged or frozen battery can be dangerous when connected to another power source. Move away from the vehicle and call for help.",
          "Also stop if you smell rotten eggs, see sparks or smoke, or the cables are damaged. A vehicle that starts and then dies again after a boost, or one that will not hold a charge, may have an alternator or electrical problem that a boost will not fix. In those cases, a tow may be the safer choice, and our [flatbed towing](/services/flatbed-towing) service can move the vehicle to a shop. For more on this scenario, see our [winter roadside kit](/blog/edmonton-winter-roadside-emergency-kit) post.",
        ],
      },
      {
        heading: "Block heaters and other cold-weather habits",
        body: [
          "Many vehicles sold in Alberta have a block heater, which warms the engine so it starts more easily in extreme cold. Check your owner's manual for how long it should be plugged in; many drivers use a timer so it runs for a couple of hours before departure. Inspect the cord for cracks and make sure it is plugged into a working outdoor outlet.",
          "Other habits help too. Park in a garage when you can, keep the battery terminals clean, and have a weak battery tested before winter rather than after it fails. A battery that is several years old is worth testing, especially if the vehicle has been slow to start.",
          "If you park outside, a battery blanket or a battery tender can also help in extreme cold, and a fully charged battery resists freezing far better than a discharged one. Ask a shop about the age and condition of your battery during your regular maintenance visits, so that it is replaced on your schedule rather than on the coldest morning of the year.",
        ],
      },
      {
        heading: "When to call for a boost",
        body: [
          `If the quick checks do not help and the battery looks normal, a professional boost is often the quickest fix. Our [battery boost](/services/battery-boost) service can get many vehicles started where they are parked. Call ${siteConfig.name} dispatch at ${siteConfig.phone.display} and tell them where you are, the make and model, and what the vehicle is doing.`,
          "Tell dispatch if the vehicle is an electric or hybrid, since the 12V system behaves differently, and if it is in a tight underground parkade where access matters. After a boost, let the vehicle run for a while or drive it so the charging system can work, and get the battery tested soon after.",
          "After a boost, avoid shutting the engine off right away at a gas station or a store, since a weak battery may not start again. Plan to go straight to a place that can test the battery and charging system, and replace the battery if it is near the end of its life.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Can I just keep trying to start it? A few short attempts are fine, but repeated cranking can drain the battery further and, in some vehicles, damage the starter. Wait between tries.",
          "Is it safe to boost from another car? It can be, if both vehicles and the cables are in good condition and the steps in the owner's manual are followed. If you are unsure, call for help.",
          "How long should I drive after a boost? Longer is better than a short hop. If it will not start again afterwards, the battery or charging system likely needs replacing.",
        ],
      },
    ],
    takeaway:
      "Check the simple things first, do not boost a cracked, swollen, leaking, or frozen battery, and call for a professional boost when the vehicle just needs a start.",
    relatedService: { label: "Battery boost", href: "/services/battery-boost" },
  },

  {
    slug: "tow-methods-flatbed-wheel-lift-dolly",
    title: "Flatbed, wheel-lift, or dollies: how each tow method works",
    description:
      "How flatbed, wheel-lift, and dolly towing work mechanically, what each one does to your vehicle, and the trade-offs that help decide the right method.",
    excerpt:
      "Three common ways to move a vehicle, and why the method matters as much as the truck.",
    category: "Flatbed towing",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "6 min read",
    image: "/images/hero/decktruckoldcar1024x693.jpg",
    imageAlt: "Flatbed carrying a classic car, strapped down",
    keywords: [
      "flatbed vs wheel lift towing",
      "tow dollies explained",
      "how tow trucks work",
      "towing methods Edmonton",
    ],
    sections: [
      {
        heading: "Three methods, three different loads on your vehicle",
        body: [
          "When a vehicle needs to be moved, the method of towing decides which parts of the car carry the load and which wheels touch the road. Flatbeds, wheel-lifts, and dollies each approach that differently, and none of them is the single best answer for every vehicle. The right choice depends on the drivetrain, the condition of the vehicle, the distance, and the surface.",
          "This post explains how each method works mechanically and what the trade-offs are. If your main question is which vehicles need a flatbed, such as AWD, 4WD, and electric vehicles, we cover that separately in [When flatbed towing is the right choice](/blog/flatbed-towing-awd-ev-vehicles).",
        ],
      },
      {
        heading: "Flatbed: all four wheels off the road",
        body: [
          "A flatbed, also called a deck truck or rollback, has a long platform behind the cab. The bed tilts and slides back to the ground, and the vehicle is pulled up by a winch or driven on if it is able. Once it is on the deck, the operator secures it with straps or chains at the wheels or at the frame, depending on the vehicle.",
          "The advantage is that no part of the vehicle touches the road during transport. That reduces wear on drivetrains, protects damaged suspensions, and avoids rolling wheels that are locked or broken. The trade-offs are practical: a flatbed needs room to tilt and load, it can be harder in tight spaces or low-clearance parkades, and the longer deck is a larger and heavier piece of equipment. Our [flatbed towing](/services/flatbed-towing) service covers this method.",
          "Flatbeds are also helpful for vehicles that cannot be driven at all. A car that has no power, no steering, or damaged wheels can be winched up the bed without relying on the vehicle's own systems. In winter, a flatbed also keeps the vehicle from sliding on ice during transport, since nothing is rolling on the road.",
        ],
      },
      {
        heading: "Wheel-lift: two wheels up, two wheels down",
        body: [
          "A wheel-lift, sometimes called a self-loader, uses a steel yoke that slides under the front or rear wheels and raises that end of the vehicle off the ground. The raised wheels are held by the yoke while the other two roll on the road. The method is compact, which makes it useful for tight parking lots, garages, and parallel parked cars.",
          "Because two wheels stay on the ground, the method depends on that axle being safe to roll. A front-wheel-drive car lifted at the front is a common example, since the driven wheels are off the ground. A vehicle with power going to all four wheels, with damaged steering, or with a frozen wheel can be harmed this way. The tow operator will ask about the drivetrain and condition before choosing.",
          "A wheel-lift tow also depends on the driveline. If the driven wheels stay on the road, the transmission may be spinning without lubrication, which can cause damage over distance. This is one reason operators ask whether the vehicle is front-, rear-, or all-wheel drive, and why distance is part of the decision.",
        ],
      },
      {
        heading: "Dollies: wheels on small carriers",
        body: [
          "Tow dollies are small wheeled platforms that sit under one or both of a vehicle's wheels. They are often used with a wheel-lift or hook so the vehicle can be moved with its wheels turning on the dollies instead of on the road. They can help when a wheel is locked, a tire is flat, or the vehicle needs to be moved a short distance out of a tight spot.",
          "Dollies add steps and have limits. They need a firm, level surface, and they are not intended for long-distance travel at highway speed. They also work with certain steering and drivetrain setups only, so the operator has to judge whether they are suitable for the vehicle in front of them.",
          "Dollies are most often a tool for the final few metres, such as moving a car out of a garage, a tight stall, or an awkward lot onto a spot where it can be loaded properly. Operators use their judgment about whether a dolly or a different method is the safer choice, and they will tell you if a different approach is better for your vehicle.",
        ],
      },
      {
        heading: "How operators decide",
        body: [
          "A good operator looks at the vehicle before choosing. The questions below are the ones they commonly ask, and your answers on the phone help dispatch send the right equipment the first time.",
          "Distance and speed matter too. A short move across a lot is a different job than a highway trip across the city, and some methods are better suited to one than the other. The operator weighs all of these factors together, and you can help by answering questions as accurately as you can.",
        ],
        list: [
          "Is it front-, rear-, all-, or four-wheel drive, and is it electric or hybrid?",
          "Can the wheels roll, steer, and brake normally?",
          "Is there collision, suspension, or undercarriage damage?",
          "How low is the vehicle, and is the surface clear and level?",
          "How far does it need to go?",
          "Is the pickup in a tight space such as a parkade or narrow lane?",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Is a flatbed always better? It is often the safest option, but not always necessary, and in a tight space a wheel-lift may be the practical choice. The operator's judgment matters.",
          "Can I request a specific method? Yes, and tell dispatch why, such as a manufacturer's guidance or damage. Dispatch will tell you what is possible.",
          `Who should I call if I am unsure? ${siteConfig.name} dispatch at ${siteConfig.phone.display} can talk through what to expect based on your vehicle.`,
        ],
      },
    ],
    takeaway:
      "Flatbed, wheel-lift, and dollies each load the vehicle differently. Share the drivetrain, condition, and location with dispatch so the right method is chosen.",
    relatedService: { label: "Flatbed towing", href: "/services/flatbed-towing" },
  },

  {
    slug: "classic-lowered-car-towing-edmonton",
    title: "Towing a classic, lowered, or modified car in Edmonton",
    description:
      "How to prepare a classic, lowered, or modified car for towing in Edmonton, including clearance, strapping, what to tell dispatch, and seasonal storage moves.",
    excerpt:
      "Low clearance, delicate bodywork, and aftermarket parts all change how a car should be loaded. Here is what to plan for.",
    category: "Flatbed towing",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "6 min read",
    image: "/images/hero/decktruckoldcar1024x693.jpg",
    imageAlt: "Flatbed carrying a classic car, strapped down",
    keywords: [
      "classic car towing Edmonton",
      "lowered car tow Edmonton",
      "modified car towing",
      "car storage move Edmonton",
    ],
    sections: [
      {
        heading: "Why these cars need extra care",
        body: [
          "A stock sedan can usually be loaded with little thought. A classic, a lowered car, or a heavily modified build is different. Low front lips, long overhangs, fragile paint, custom wheels, and one-off parts can all be damaged by a rushed or poorly planned load. The vehicle might also be worth more to you than its book value suggests, which makes preparation worthwhile.",
          "This guide covers the practical side: clearance, strapping, aftermarket parts, what to tell dispatch, and planning seasonal storage moves. For general guidance on which kinds of vehicles benefit from a flatbed, see [When flatbed towing is the right choice](/blog/flatbed-towing-awd-ev-vehicles).",
        ],
      },
      {
        heading: "Ground clearance and approach angles",
        body: [
          "A flatbed ramp is a slope, and a low car has to climb it. The angle where the ramp meets the ground, and where it meets the deck, can catch a front splitter, a lowered bumper, or an exhaust. Operators manage this by adjusting the bed angle, using longer ramps or blocks, and loading from a direction that suits the vehicle.",
          "You can help by describing how low the car is and where it tends to scrape, such as at the front lip, the sides, or the exhaust. If it has scraped on a steep driveway or parkade ramp before, mention that. Photos from the side and the front are useful, and a flat, clear loading spot makes a big difference.",
          "Weather matters as well. Wet or icy ramps change how a low car behaves on the deck, and snow packed around the wheels can hide the very obstacles you are trying to avoid. If you can, clear the area in front of the car, brush off snow, and make sure the surface is as level as possible. A loading spot with room for the truck to line up straight with the car is much safer than a crowded street.",
        ],
      },
      {
        heading: "Straps, wheel nets, and tie-down points",
        body: [
          "How a car is secured matters as much as how it is loaded. Chains attached to a frame or suspension can mark or damage delicate parts, so many operators use soft straps and wheel nets, which hold the tire rather than the car's structure. This is a common way to protect alloy wheels, classic bodywork, and vehicles with no obvious tie-down points.",
          "Tell dispatch if your vehicle needs a particular approach. Examples include a unibody with fragile sills, a frame-off restoration, or a wheel setup with unusual offsets. Our [flatbed towing](/services/flatbed-towing) service uses the deck as the safest platform for vehicles like these.",
          "It also helps to tell the operator whether the car is a manual or automatic, whether it can be put in neutral, and whether the parking brake releases. A classic whose brakes have been sitting for months may not roll freely, and the operator needs to know before positioning the winch. If the car has no keys, a locked steering column, or a seized wheel, mention that when you call so the right equipment and extra time are planned for.",
        ],
      },
      {
        heading: "Aftermarket parts and what to disclose",
        body: [
          "Modified cars often have parts that a standard tow does not account for. Disclose them up front so the operator can plan around them.",
        ],
        list: [
          "Lowered suspension, air ride, or coilovers, and whether the air system can be raised",
          "Front splitters, side skirts, and low-hanging exhaust",
          "Wide or oversized wheels and low-profile tires",
          "Locked, seized, or removed drivetrain parts",
          "Roll cages, wings, and other items that change the vehicle's shape or weight",
          "Anything loose or not securely fastened inside or on the vehicle",
        ],
      },
      {
        heading: "Planning a seasonal storage move",
        body: [
          "Many Edmonton owners put classics away for winter and bring them out in spring. A planned move is easier than an emergency one. Schedule it for daylight, make sure the vehicle is clean enough to be inspected, and photograph its condition before it is loaded. Confirm the storage facility's access, door height, and the surface the truck will use.",
          `If the car does not run, say so, and mention whether the steering and brakes work. You can reach ${siteConfig.name} dispatch at ${siteConfig.phone.display} to describe the car and the move. For a broader look at how Alberta rules and paperwork apply, see [Towing laws in Alberta](/blog/alberta-towing-laws).`,
          "Think about the destination too. Check that the storage door is tall and wide enough, that there is a clear path inside, and that someone will be there to open it. If the car will sit for months, consider disconnecting the battery, filling the tank, and covering the car after it is placed, so spring is a simpler start.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Should I tell dispatch if the car is lowered? Yes, always. It changes the equipment and the loading plan.",
          "Can I be there when the car is loaded? It is usually a good idea, since you can point out delicate parts and approve the plan. Stay clear of the truck while it is working.",
          "Should I take photos? Take them before loading. They help if there is any question about the car's condition afterward.",
        ],
      },
    ],
    takeaway:
      "For classic, lowered, and modified cars, tell dispatch about clearance and parts up front, ask for soft straps or wheel nets, and take photos before loading.",
    relatedService: { label: "Flatbed towing", href: "/services/flatbed-towing" },
  },

  {
    slug: "minor-collision-do-you-need-a-tow",
    title: "After a minor fender-bender: when do you actually need a tow?",
    description:
      "A decision guide for Edmonton drivers after a minor collision: the warning signs that a vehicle is not safe to drive, and when it is reasonable to drive away.",
    excerpt:
      "Not every fender-bender needs a tow truck, but some look minor and are not. Here is how to decide.",
    category: "Accident recovery",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "5 min read",
    image: "/images/hero/HeavyTowing1024x680.jpg",
    imageAlt: "Heavy duty tow truck towing a large truck",
    keywords: [
      "fender bender tow Edmonton",
      "is my car safe to drive after accident",
      "minor collision towing",
      "accident towing Edmonton",
    ],
    sections: [
      {
        heading: "The question after a small collision",
        body: [
          "After a low-speed bump, most drivers want to know whether they can simply drive home. The answer depends on what you can see, hear, and feel. A car that looks fine can have hidden damage to the steering, suspension, or cooling system, and driving it can make the damage worse or put you at risk on the road.",
          "This guide is a decision aid for minor collisions only. For the full sequence of steps at the scene, such as safety, photos, and information, use our [post-accident checklist](/blog/what-to-do-after-a-car-accident-in-edmonton) rather than relying on this post alone.",
        ],
      },
      {
        heading: "Signs your vehicle is not safe to drive",
        body: [
          "If you see any of the following, treat the vehicle as unsafe and arrange a tow. These are warning signs, not a full inspection, and when in doubt it is better to be cautious.",
          "A quick walk-around helps. Crouch and look under the vehicle for wet spots, check that each tire is rounded and holding air, and look at the gaps around the hood, doors, and bumpers. Then sit in the car, start it, and watch the dash for lights. If you need to do this in traffic or on a narrow shoulder, move to a safe place first or skip the inspection and call for help.",
        ],
        list: [
          "Fluid leaking under the vehicle, such as coolant, oil, or fuel",
          "Warning lights on the dash, or a temperature gauge climbing",
          "A bent, cracked, or flat tire, or a wheel that looks out of line",
          "The vehicle pulls to one side, the steering feels loose, or the wheel is off-centre",
          "Grinding, scraping, or rubbing noises when the vehicle moves",
          "Airbags that have deployed",
          "A hood that will not latch, or hanging bumpers and panels that touch the tires",
          "Broken headlights or taillights that you need to drive safely",
          "Any smell of fuel, smoke, or burning",
        ],
      },
      {
        heading: "When it may be reasonable to drive",
        body: [
          "If damage is limited to cosmetic scuffs, the lights work, there are no leaks, no warning lights, no pull, and no new noises, driving a short distance to a shop or home can be reasonable. Walk around the vehicle and look carefully at the tires and under the bumper first. If anything seems off, trust that feeling.",
          "Even then, it is smart to have the vehicle inspected soon. Some damage, particularly to alignment or frame components, does not show up immediately. If you are uncertain, a tow is cheaper than a second collision.",
          "Weather and location matter too. A short drive in daylight on a quiet street is very different from a highway trip in snow at night. If the vehicle's lights, wipers, or defrost do not work properly after the collision, that alone can be a reason not to drive. Remember that adrenaline can make you feel more ready to drive than you are, so give yourself a minute to settle before you decide.",
        ],
      },
      {
        heading: "Reporting a collision in Alberta",
        body: [
          "In Alberta, collisions that involve injuries or damage above a set threshold generally have to be reported to police, and you may also need to report to your insurer. Rules and thresholds can change, so check the current requirements with Alberta's official sources or your insurer rather than relying on a number you have heard. If anyone is hurt or the road is blocked, call 911.",
          "Your insurer can also tell you what they need and whether a tow is part of the claim. See [Towing and insurance in Alberta](/blog/towing-and-insurance-alberta) for questions to ask, and [Towing laws in Alberta](/blog/alberta-towing-laws) for your right to choose your own provider.",
          "Even when a collision seems minor, exchange driver and insurance information with the other party and take photos of both vehicles. If you are unsure whether a report is required, it is generally safer to ask police or your insurer than to guess. Keep your notes, because small details are easy to forget after the stress of the moment passes.",
        ],
      },
      {
        heading: "Calling for a tow after a collision",
        body: [
          `If you decide a tow is the safest option, call ${siteConfig.name} dispatch at ${siteConfig.phone.display}. Tell them where you are, what vehicle you have, what damage you can see, and whether police are on scene. Our [accident towing and recovery](/services/accident-recovery) service can help you choose where the vehicle goes, whether that is a body shop, a storage yard, or home.`,
          "Ask for the tow method that suits the damage. A car with a bent wheel or steering damage is usually better on a flatbed than on a wheel-lift. Keep the invoice and dispatch details for your records.",
          "Before the tow leaves, confirm the destination, take photos of the vehicle from several angles, and take note of the operator's name and the truck's company markings. Ask for a written invoice and keep it with your accident paperwork. If you are unsure where the vehicle should go, dispatch can talk through the practical options with you.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Can I drive if the only damage is a dented bumper? Possibly, if the lights work, nothing is leaking, nothing rubs the tires, and the car drives normally. Have it inspected soon.",
          "Should I wait for police before I move the vehicle? If anyone is injured or the vehicle is a hazard, call 911 and follow instructions. Otherwise, move to a safe place if you can do so, after taking photos.",
          "What if I am not sure? Call dispatch and describe what you see. It is better to ask than to drive on damage you cannot assess.",
        ],
      },
    ],
    takeaway:
      "Leaks, warning lights, tire or wheel damage, a pull in the steering, deployed airbags, or new noises all mean the vehicle should be towed, not driven.",
    relatedService: { label: "Accident towing & recovery", href: "/services/accident-recovery" },
  },

  {
    slug: "anthony-henday-breakdown-guide",
    title: "Broken down on the Anthony Henday: what to do and what dispatch needs to know",
    description:
      "Broken down on the Anthony Henday? How to describe your location, stay safe on the shoulder, and what dispatch needs to know.",
    excerpt:
      "A breakdown on a ring road with fast traffic is stressful. Here is how to stay safe and give dispatch what they need.",
    category: "Roadside safety",
    publishedAt: "2026-10-29",
    updatedAt: "2026-10-29",
    readingTime: "6 min read",
    image: "/images/hero/recoverysnow1024x681.jpg",
    imageAlt: "Recovery truck working in snowy conditions",
    keywords: [
      "Anthony Henday breakdown",
      "Henday roadside assistance",
      "broken down Edmonton ring road",
      "tow truck Anthony Henday",
    ],
    sections: [
      {
        heading: "Why the Henday needs extra care",
        body: [
          "The Anthony Henday Drive circles Edmonton and carries fast, heavy traffic, including trucks, commuters, and long-distance drivers. Shoulders can be narrow in places, and interchanges come up quickly. A breakdown there can feel more exposed than one on a city street, so the first goal is simply to stay safe.",
          "This guide is general advice for Edmonton drivers. Conditions on the day, such as weather, traffic, and construction, can change what is possible, so use your judgment and call 911 if there is any immediate danger.",
        ],
      },
      {
        heading: "First steps when the vehicle slows or stops",
        body: [
          "If the vehicle is losing power, turn on your hazard lights early and try to coast to the right shoulder or the nearest exit, if you can reach it safely. Getting off the ring road entirely, onto a ramp or a side street, is usually safer than stopping alongside fast traffic.",
          "Once stopped, put the vehicle in park, apply the parking brake, and keep the hazards on. Turn your wheels away from the road if you are on a shoulder, so that if the vehicle is struck it does not roll into traffic.",
          "If you get a warning light, a loss of power, or a strange noise before you stop, do not wait. Signal, check your mirrors, and move toward the shoulder or the next exit while you still have some control. A vehicle that stops in a live lane is much more dangerous than one that has had a little time to coast to the side, and every extra second of planning helps.",
        ],
      },
      {
        heading: "Stay in the vehicle or get out?",
        body: [
          "There is no single answer, but the principle is to stay out of traffic. If you can exit away from traffic, for example on the passenger side with a barrier or ditch behind you and plenty of distance from the lane, moving well away from the vehicle can be safest. If you cannot exit safely, stay belted in with hazards on until help arrives.",
          "Do not stand between your vehicle and traffic, and do not try to change a tire or work under the hood on a busy shoulder. If conditions are poor, such as ice, snow, or low visibility, staying belted in is usually the safer choice. Our [winter roadside kit checklist](/blog/edmonton-winter-roadside-emergency-kit) covers items that help you wait comfortably.",
          "In winter, staying belted in with the engine off or only briefly running makes sense when it is safe. If you do run the engine for heat, make sure the exhaust is clear of snow. In summer, heat is the concern, so crack a window and keep water on hand. Either way, keep your phone charged and your hazard lights on so approaching drivers can see you from a distance.",
        ],
      },
      {
        heading: "How to describe your location",
        body: [
          `When you call ${siteConfig.name} dispatch at ${siteConfig.phone.display}, a clear location is the most useful thing you can give. On a ring road, say which way you are heading, such as north, south, east, or west, or clockwise or counter-clockwise, and name the last interchange you passed and the next one coming up. Our [roadside assistance](/services/roadside-assistance) team can use that to find you quickly.`,
          "Well-known cross routes make good reference points. If you are near a recognizable interchange, name it. If you can, also share a GPS pin from your phone's maps app, which can be more precise than a description.",
        ],
        list: [
          "Whitemud Drive",
          "Yellowhead Trail",
          "Stony Plain Road",
          "Calgary Trail or Gateway Boulevard",
          "23 Avenue",
          "Baseline Road",
          "137 Avenue",
        ],
      },
      {
        heading: "What else dispatch needs to know",
        body: [
          "Beyond location, tell dispatch what the vehicle is, what happened, and whether anyone is hurt. If you are on the shoulder or in a live lane, say so. If the vehicle is a truck, a trailer, or an unusual size, that changes which equipment is sent, as explained in our guide to [heavy duty vs. light duty towing](/blog/heavy-duty-vs-light-duty-towing).",
        ],
        list: [
          "Make, model, colour, and whether it is a car, SUV, truck, or larger vehicle",
          "What happened, such as a flat tire, an engine problem, a collision, or no power",
          "Whether you are on the shoulder, in a lane, or on a ramp",
          "How many people are in the vehicle, and whether anyone is hurt",
          "Your phone number and a backup contact",
        ],
      },
      {
        heading: "The move-over rule and staying visible",
        body: [
          "In Alberta, drivers must slow down and move over for stopped emergency vehicles and tow trucks with flashing lights. Check current rules for the exact requirements. When a tow truck arrives, follow the operator's instructions and stay clear of the lane while they work.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Should I call 911 or a tow company? Call 911 if anyone is hurt or you are in immediate danger. Call a tow company or roadside provider if the situation is a breakdown with no injuries.",
          "Can I walk to the next exit? Generally no, because walking along a high-speed road is dangerous. Stay with the vehicle unless it is unsafe to do so.",
          "What if I have no cell signal? Stay safe, stay visible, and try again from a spot with coverage if it is safe to do so. A passing driver may also be able to call for you.",
        ],
      },
    ],
    takeaway:
      "On the Henday, get off the road if you safely can, otherwise stay belted in with hazards on, and give dispatch your direction of travel and nearest interchanges.",
    relatedService: { label: "Roadside assistance", href: "/services/roadside-assistance" },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts(limit = 3) {
  return blogPosts.slice(0, limit);
}
