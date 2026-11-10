import type {OutreachLanguageValue} from "../types/constants";

export const JOB_PARSE_SYSTEM_PROMPT = `You are a Swiss B2B market research assistant.
Given a job description, extract structured search metadata for finding registered Swiss companies.
Return ONLY valid JSON with keys:
industry, companyTypes, synonyms, germanEquivalents, frenchEquivalents, italianEquivalents, nogaCategories, keywords.
Do not invent company names. Prefer concise keyword lists useful for commercial-register search.`;

export function buildJobParseUserPrompt(jobDescription: string, language: string): string {
    return `Job description language preference: ${language}

Job description:
${jobDescription}`;
}

export const COMPANY_SUMMARY_SYSTEM_PROMPT = `You summarize Swiss companies for quotation outreach.
Write at most 150 words covering: what they do, specialties, likely size, and target market.
Use only evidence from the provided website/crawl text. No marketing fluff or invented claims.
Return plain text only.`;

export function buildCompanySummaryUserPrompt(input: {
    companyName: string;
    legalForm?: string;
    canton?: string;
    websiteText: string;
    services: string[];
}): string {
    return `Company: ${input.companyName}
Legal form: ${input.legalForm || "unknown"}
Canton: ${input.canton || "unknown"}
Detected services: ${input.services.join(", ") || "none"}
Website/crawl text:
${input.websiteText.slice(0, 8000)}`;
}

export const EMAIL_COMPOSE_SYSTEM_PROMPT = `You write personalized quotation-request emails for Swiss B2B outreach.
Requirements:
- professional, concise, personalized
- no fake claims, no exaggerated marketing
- include greeting, introduction, project description, request for quotation, contact details, closing
- write entirely in the requested language
- identify the sender clearly
- end the body with the given opt-out sentence, word for word
Return ONLY valid JSON: {"subject":"...","body":"..."}`;

/**
 * The sentence every outreach email ends with, in its language: the recipient can reply to stop, and the company then
 * puts the address on its do-not-contact list.
 */
export const OUTREACH_OPT_OUT_LINES: Record<OutreachLanguageValue, string> = {
    de: "Falls Sie keine weiteren Nachrichten von uns wünschen, antworten Sie bitte kurz mit «Stopp» – wir kontaktieren Sie dann nicht mehr.",
    fr: "Si vous ne souhaitez plus recevoir de messages de notre part, répondez simplement « stop » – nous ne vous contacterons plus.",
    it: "Se non desidera ricevere altri messaggi da parte nostra, risponda semplicemente «stop»: non la contatteremo più.",
    en: "If you would rather not hear from us again, just reply \"stop\" and we will not contact you again.",
};

export function buildEmailComposeUserPrompt(input: {
    language: OutreachLanguageValue;
    emailTone: string;
    jobDescription: string;
    companySummary: string;
    services: string[];
    companyName: string;
    senderCompanyName: string;
    senderName: string;
    senderEmail: string;
    senderPhone?: string;
    senderWebsite?: string;
    additionalNotes?: string;
}): string {
    return `Language: ${input.language}
Tone: ${input.emailTone}
Recipient company: ${input.companyName}
Company summary: ${input.companySummary}
Services: ${input.services.join(", ") || "unknown"}
Original job/project:
${input.jobDescription}
Sender company: ${input.senderCompanyName}
Sender name: ${input.senderName}
Sender email: ${input.senderEmail}
Sender phone: ${input.senderPhone || ""}
Sender website: ${input.senderWebsite || ""}
Additional notes: ${input.additionalNotes || ""}
Opt-out sentence: ${OUTREACH_OPT_OUT_LINES[input.language]}`;
}
