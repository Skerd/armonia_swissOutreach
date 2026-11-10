import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {
    CampaignStatusValue,
    EmailToneValue,
    OutreachLanguageValue,
    SwissCantonCode,
} from "../../../../types/constants";
import type {ParsedJob} from "../../../../types/parsedJob";

export type CampaignStats = {
    found: number;
    enriched: number;
    scored: number;
    approved: number;
    sent: number;
    failed: number;
};

export type Campaign = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    /** Rows created before campaigns had a name carry their sender company name here. */
    name: string;
    jobDescription: string;
    country: string;
    cantons: SwissCantonCode[];
    maxCompanies: number;
    language: OutreachLanguageValue;
    emailTone: EmailToneValue;
    sendAutomatically: boolean;
    senderCompanyName: string;
    senderName: string;
    senderEmail: string;
    senderPhone?: string;
    senderWebsite?: string;
    additionalNotes?: string;
    status: CampaignStatusValue;
    parsedJob?: ParsedJob;
    stats: CampaignStats;
    lastError?: string;
};
