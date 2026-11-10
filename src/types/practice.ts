export type PracticeQuestionOption = {
  id: string;
  label: string;
  isCorrect: boolean;
  explanation: string;
};

export type PracticeQuestion = {
  id: string;
  prompt: string;
  options: PracticeQuestionOption[];
};

export type PracticeContent = {
  id: string;
  title: string;
  description: string;
  duration: number;
  baseXP: number;
  bonusXPPerCorrectAnswer: number;
  questions: PracticeQuestion[];
};

export type PracticeRecord = {
  practiceId: string;
  bestScore: number;
  totalQuestions: number;
  attempts: number;
  lastAttemptAt: string;
};

export type PracticeProgress = {
  records: PracticeRecord[];
};
