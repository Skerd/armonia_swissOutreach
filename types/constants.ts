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

export const pipelineLogLevelValues = ["debug", "info", "warn", "error"] as const;
export type PipelineLogLevelValue = (typeof pipelineLogLevelValues)[number];

export const swissCantonCodes = [
    "AG", "AI", "AR", "BE", "BL", "BS", "FR", "GE", "GL", "GR", "JU", "LU",
    "NE", "NW", "OW", "SG", "SH", "SO", "SZ", "TG", "TI", "UR", "VD", "VS", "ZG", "ZH",
] as const;

export type SwissCantonCode = (typeof swissCantonCodes)[number];
