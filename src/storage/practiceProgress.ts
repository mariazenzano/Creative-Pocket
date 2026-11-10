import AsyncStorage from "@react-native-async-storage/async-storage";

import type { PracticeProgress, PracticeRecord } from "../types/practice";

const PRACTICE_PROGRESS_KEY = "@creative-pocket/practice-progress";

const emptyProgress: PracticeProgress = {
  records: [],
};

function isPracticeRecord(value: unknown): value is PracticeRecord {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.practiceId === "string" &&
    typeof record.bestScore === "number" &&
    typeof record.totalQuestions === "number" &&
    typeof record.attempts === "number" &&
    typeof record.lastAttemptAt === "string"
  );
}

export async function getPracticeProgress(): Promise<PracticeProgress> {
  try {
    const storedProgress = await AsyncStorage.getItem(PRACTICE_PROGRESS_KEY);

    if (!storedProgress) {
      return emptyProgress;
    }

    const parsedProgress: unknown = JSON.parse(storedProgress);

    if (
      typeof parsedProgress === "object" &&
      parsedProgress !== null &&
      "records" in parsedProgress &&
      Array.isArray(parsedProgress.records) &&
      parsedProgress.records.every(isPracticeRecord)
    ) {
      return {
        records: parsedProgress.records,
      };
    }

    return emptyProgress;
  } catch (error) {
    console.error("Error loading practice progress:", error);
    return emptyProgress;
  }
}

async function savePracticeProgress(progress: PracticeProgress): Promise<void> {
  await AsyncStorage.setItem(PRACTICE_PROGRESS_KEY, JSON.stringify(progress));
}

export async function getCompletedPracticeIds(): Promise<string[]> {
  const progress = await getPracticeProgress();

  return progress.records.map((record) => record.practiceId);
}

export async function savePracticeResult(
  practiceId: string,
  score: number,
  totalQuestions: number,
): Promise<PracticeRecord> {
  if (
    !practiceId ||
    !Number.isInteger(score) ||
    !Number.isInteger(totalQuestions) ||
    totalQuestions <= 0 ||
    score < 0 ||
    score > totalQuestions
  ) {
    throw new Error("Invalid practice result.");
  }

  const progress = await getPracticeProgress();

  const existingRecord = progress.records.find(
    (record) => record.practiceId === practiceId,
  );

  const updatedRecord: PracticeRecord = {
    practiceId,
    bestScore: Math.max(existingRecord?.bestScore ?? 0, score),
    totalQuestions,
    attempts: (existingRecord?.attempts ?? 0) + 1,
    lastAttemptAt: new Date().toISOString(),
  };

  const updatedRecords = existingRecord
    ? progress.records.map((record) =>
        record.practiceId === practiceId ? updatedRecord : record,
      )
    : [...progress.records, updatedRecord];

  await savePracticeProgress({
    records: updatedRecords,
  });

  return updatedRecord;
}
