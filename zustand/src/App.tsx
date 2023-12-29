import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import JavaScriptLogo from './components/icons/JavaScriptLogo'
import Start from './components/Start'
import { useQuestions } from './store/questions'
import { Game } from './components/Game'

function App () {
  const questions = useQuestions(state => state.questions)

  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            JavaScript Quizz
          </Typography>
        </Stack>
      </Container>

      {questions.length === 0 && <Start />}
      {questions.length > 0 && <Game />}
    </main>
  )
}

export default App
