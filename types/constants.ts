export const campaignStatusValues = [
    "draft",
    "parsing",
    "searching",
    "enriching",
    "scoring",
    "awaiting_approval",
    "sending",
    "completed",
    "failed",
    "cancelled",
] as const;

export type CampaignStatusValue = (typeof campaignStatusValues)[number];

export const prospectStatusValues = [
    "discovered",
    "website_found",
    "crawled",
    "scored",
    "skipped",
    "approved",
    "sent",
    "failed",
] as const;

export type ProspectStatusValue = (typeof prospectStatusValues)[number];

export const outreachEmailStatusValues = [
    "draft",
    "edited",
    "approved",
    "skipped",
    "queued",
    "sent",
    "failed",
] as const;

export type OutreachEmailStatusValue = (typeof outreachEmailStatusValues)[number];

export const outreachLanguageValues = ["de", "fr", "it", "en"] as const;
export type OutreachLanguageValue = (typeof outreachLanguageValues)[number];

export const emailToneValues = ["professional", "friendly", "formal"] as const;
export type EmailToneValue = (typeof emailToneValues)[number];

/** How an address came onto the do-not-contact list: added by hand, or from an outreach email ("doNotContact"). */
export const suppressionSourceValues = ["manual", "outreach_email"] as const;
export type SuppressionSourceValue = (typeof suppressionSourceValues)[number];

export const pipelineLogLevelValues = ["debug", "info", "warn", "error"] as const;
export type PipelineLogLevelValue = (typeof pipelineLogLevelValues)[number];

export const swissCantonCodes = [
    "AG", "AI", "AR", "BE", "BL", "BS", "FR", "GE", "GL", "GR", "JU", "LU",
    "NE", "NW", "OW", "SG", "SH", "SO", "SZ", "TG", "TI", "UR", "VD", "VS", "ZG", "ZH",
] as const;

export type SwissCantonCode = (typeof swissCantonCodes)[number];

/**
 * Each canton's official name in its own language (the first one for bilingual cantons), as Swiss registers list
 * them: proper names shown the same in every UI language. No dot in them, since a select option label with a dot is
 * read as a language key.
 */
export const swissCantonNames: Record<SwissCantonCode, string> = {
    AG: "Aargau", AI: "Appenzell Innerrhoden", AR: "Appenzell Ausserrhoden", BE: "Bern", BL: "Basel-Landschaft",
    BS: "Basel-Stadt", FR: "Fribourg", GE: "Genève", GL: "Glarus", GR: "Graubünden", JU: "Jura", LU: "Luzern",
    NE: "Neuchâtel", NW: "Nidwalden", OW: "Obwalden", SG: "Sankt Gallen", SH: "Schaffhausen", SO: "Solothurn",
    SZ: "Schwyz", TG: "Thurgau", TI: "Ticino", UR: "Uri", VD: "Vaud", VS: "Valais", ZG: "Zug", ZH: "Zürich",
};
