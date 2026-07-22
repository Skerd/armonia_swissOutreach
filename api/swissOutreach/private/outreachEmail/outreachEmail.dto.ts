import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {OutreachEmailStatusValue, OutreachLanguageValue} from "../../../../types/constants";

export type OutreachEmail = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    campaignId: string;
    prospectCompanyId: string;
    toEmail?: string;
    subject: string;
    body: string;
    language: OutreachLanguageValue;
    status: OutreachEmailStatusValue;
    messageId?: string;
    sentAt?: string;
    attempts: number;
    lastError?: string;
};
