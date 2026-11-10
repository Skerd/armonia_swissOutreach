import {z} from "zod";
import {getValidationMessage} from "../../../../../core/helpers/zodBuilder";
import {swissCantonCodes} from "../../../../types/constants";

const CANTON_CODES: readonly string[] = swissCantonCodes;

/** Shared create/edit rule: every canton is one of the 26 canton codes (`swissCantonCodes`). */
export function refineCampaignCantons(languageCode: string, form: Record<string, unknown> | null = null) {
    return (data: {cantons?: unknown}, ctx: z.RefinementCtx) => {
        if (!Array.isArray(data.cantons)) return;
        data.cantons.forEach((canton, index) => {
            if (typeof canton === "string" && CANTON_CODES.includes(canton)) return;
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["cantons", index],
                message: getValidationMessage("string", "mustBe", [String(form?.["cantonsLabel"] ?? "cantons"), swissCantonCodes.join(", ")], languageCode),
            });
        });
    };
}
