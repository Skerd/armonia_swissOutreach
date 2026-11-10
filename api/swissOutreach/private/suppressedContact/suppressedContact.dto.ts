import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SuppressionSourceValue} from "../../../../types/constants";

export type SuppressedContact = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    email?: string;
    domain?: string;
    reason?: string;
    source: SuppressionSourceValue;
};
