import { create } from 'zustand'
import { type Question } from '../types.d'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => void
  selectAnswer: (questionId: number, answerId: number) => void
  goToNextQuestion: () => void
  goToPrevQuestion: () => void
  resetGame: () => void
}

export const useQuestions = create<State>()(persist((set, get) => {
  return {

    questions: [],
    currentQuestion: 0,

    fetchQuestions: (limit: number) => {
      fetch('http://localhost:5173/data.json')
        .then(r => r.json())
        .then(data => {
          console.log(data)
          set({ questions: data.sort(() => Math.random() - 0.5).slice(0, limit) })
        })
        .catch(e => { console.error(e) })
    },

    selectAnswer (questionId, answerId) {
      const questions = get().questions
      const newQuestions = structuredClone(questions)

      const questionIndex = newQuestions.findIndex(q => q.id === questionId)
      const questionInfo = newQuestions[questionIndex]

      const isCorrectAnswer = questionInfo.correctAnswer === answerId
      if (isCorrectAnswer) confetti()

      newQuestions[questionIndex] = {
        ...questionInfo,
        userSelectedAnswer: answerId,
        isCorrectAnswer
      }

      set({ questions: newQuestions })
    },

    goToNextQuestion () {
      const currentQuestion = get().currentQuestion
      if (currentQuestion < get().questions.length - 1) {
        set({ currentQuestion: currentQuestion + 1 })
      }
    },

    goToPrevQuestion () {
      const currentQuestion = get().currentQuestion
      if (currentQuestion > 0) {
        set({ currentQuestion: currentQuestion - 1 })
      }
    },

    resetGame () {
      set({ questions: [], currentQuestion: 0 })
    }
  }
}, { name: 'questions' }))
