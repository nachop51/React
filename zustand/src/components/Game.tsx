import { Card, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import { useQuestions } from '../store/questions'
import { type Question as QuestionType } from '../types.d'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Footer from './Footer'

const getBackgroundColor = (info: QuestionType, answerIndex: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  if (userSelectedAnswer == null) return 'transparent'

  if (answerIndex === correctAnswer) return '#4caf50'
  if (answerIndex === userSelectedAnswer) return '#f44336'

  return 'transparent'
}

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestions(state => state.selectAnswer)

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <Card variant='outlined' sx={{ textAlign: 'left', bgcolor: '#222', p: 2 }}>
      <Typography variant='h5'>
        {info.question}
      </Typography>

      <SyntaxHighlighter language='javascript' style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333', p: 2 }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              onClick={createHandleClick(index)}
              sx={{ bgcolor: getBackgroundColor(info, index) }}
              disabled={info.userSelectedAnswer != null}
            >
              <ListItemText primary={answer} sx={{ textAlign: 'center', fontWeight: '700' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export const Game = () => {
  const questions = useQuestions(state => state.questions)
  const currentQuestion = useQuestions(state => state.currentQuestion)
  const goToNextQuestion = useQuestions(state => state.goToNextQuestion)
  const goToPrevQuestion = useQuestions(state => state.goToPrevQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <IconButton onClick={goToPrevQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant='h5'>
          {currentQuestion + 1} / {questions.length}
        </Typography>
        <IconButton onClick={goToNextQuestion} disabled={currentQuestion >= questions.length - 1}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  )
}
