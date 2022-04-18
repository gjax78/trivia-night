
export interface CategoryFetch {
  (category: string): void;
}

export interface CategoriesProps {
  fetchCat: (category: string) => void
}

export interface QuestionsComponent {
  questionsProp: QuestionDataType[];
  addToGame: AddQuestion;
  removeFromGame: RemoveQuestion;
}

export interface QuestionDataType {
  category: string,
  id: string,
  question: string,
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  difficulty?: string,
  type: string,
  tags: Array<string>,
  key?: string
}

export interface AddQuestion {
  (likedQuestion: LikedQuestion): void;
}

export interface RemoveQuestion {
 (id: string): void;
}

export interface QuestionCardProps {
  addToGame: AddQuestion;
  removeFromGame: RemoveQuestion;
  category: string,
  id: string,
  question: string,
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  difficulty?: string,
}

export interface LikedQuestion {
  question: string,
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  difficulty?: string,
  category: string,
  id: string
}

export interface GameProps {
  game: QuestionDataType[] | LikedQuestion[];
  removeFromGame: RemoveQuestion;
}

export interface GameCardProps {
  category: string,
  question: string,
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  difficulty?: string,
  id: string,
  removeFromGame: RemoveQuestion,
}