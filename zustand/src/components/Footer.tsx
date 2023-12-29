import { Button } from '@mui/material'
import useQuestionsData from '../hooks/useQuestionsData'
import { useQuestions } from '../store/questions'

const Footer = () => {
  const resetGame = useQuestions(state => state.resetGame)
  const { correctAnswers, incorrectAnswers, unansweredQuestions } = useQuestionsData()

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correctAnswers} - ❌ ${incorrectAnswers} - ❔ ${unansweredQuestions}`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => { resetGame() }}>Reset Game</Button>
      </div>
    </footer>
  )
}

export default Footer
