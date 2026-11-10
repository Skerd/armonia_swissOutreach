import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

/** The dashboard's counts, for the whole company or one campaign. */
export function dashboardSummaryFormSchema(languageCode: string, form: any = null) {
    return z.object({
        campaignId: isObjectIdZod(form?.["campaignIdLabel"] ?? "campaignId", languageCode).optional(),
    });
}

export type DashboardSummaryFormType = z.infer<ReturnType<typeof dashboardSummaryFormSchema>>;
