import { airtableFetch } from "./airtableClient";

const SESSIONS = process.env.AIRTABLE_FEAR_SCAN_SESSIONS_TABLE!;
const RESPONSES = process.env.AIRTABLE_FEAR_SCAN_RESPONSES_TABLE!;
const INSIGHTS = process.env.AIRTABLE_FEAR_SCAN_INSIGHTS_TABLE!;

export const createScanSession = async ({ sessionId, userId, loopZone }) => {
  return airtableFetch(SESSIONS, "POST", {
    records: [
      {
        fields: {
          Session_ID: sessionId,
          User: userId ? [userId] : undefined,
          LoopZone: loopZone,
          Started_At: new Date().toISOString(),
          Status: "in_progress",
          Version: "v1",
        },
      },
    ],
  });
};

export const saveResponse = async ({ sessionRecordId, questionIndex, dimensionKey, answer }) => {
  return airtableFetch(RESPONSES, "POST", {
    records: [
      {
        fields: {
          Response_ID: `${sessionRecordId}-${questionIndex}`,
          Session: [sessionRecordId],
          Question_Index: questionIndex,
          Dimension_Key: dimensionKey,
          Answer_Value: answer,
          Answered_At: new Date().toISOString(),
        },
      },
    ],
  });
};

export const saveInsight = async ({
  sessionRecordId,
  phase,
  title,
  readout,
  interpretation,
  takeaway,
  pull,
}) => {
  return airtableFetch(INSIGHTS, "POST", {
    records: [
      {
        fields: {
          Insight_ID: `${sessionRecordId}-phase-${phase}`,
          Session: [sessionRecordId],
          Phase: phase,
          Title: title,
          Readout_Line: readout,
          Interpretation: interpretation,
          System_Takeaway: takeaway,
          Pull_Line: pull,
          Created_At: new Date().toISOString(),
        },
      },
    ],
  });
};

export const completeScanSession = async (sessionRecordId) => {
  return airtableFetch(SESSIONS, "PATCH", {
    records: [
      {
        id: sessionRecordId,
        fields: {
          Completed_At: new Date().toISOString(),
          Status: "complete",
        },
      },
    ],
  });
};
