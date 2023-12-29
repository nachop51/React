import { Button } from '@mui/material'
import { useQuestions } from '../store/questions'
import { LIMIT_QUESTIONS } from '../constants'

const Start = () => {
  const fetchQuestions = useQuestions(state => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button variant='contained' onClick={handleClick}>
      Start!
    </Button>
  )
}

export default Start
