import { useQuestions } from '../store/questions'

const useQuestionsData = () => {
  const questions = useQuestions(state => state.questions)

  let correctAnswers = 0
  let incorrectAnswers = 0
  let unansweredQuestions = 0

  for (const question of questions) {
    if (question.userSelectedAnswer == null) {
      unansweredQuestions += 1
    } else if (question.userSelectedAnswer === question.correctAnswer) {
      correctAnswers += 1
    } else {
      incorrectAnswers += 1
    }
  }

  return { correctAnswers, incorrectAnswers, unansweredQuestions }
}

export default useQuestionsData
