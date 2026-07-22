import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {ProspectStatusValue} from "../../../../types/constants";

export type ProspectCompany = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    campaignId: string;
    companyName: string;
    uid?: string;
    canton?: string;
    legalForm?: string;
    registerUrl?: string;
    website?: string;
    websiteConfidence?: number;
    emails: string[];
    phones: string[];
    city?: string;
    postalCode?: string;
    languages: string[];
    summary?: string;
    services: string[];
    score?: number;
    scoreReason?: string;
    status: ProspectStatusValue;
    dedupeKey: string;
};
