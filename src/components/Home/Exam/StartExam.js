import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { sendAnswers, takeExam } from '../../../redux/actions/schoolAction'
import DisplayQuestions from './DisplayQuestions'

const StartExam = () => {
  const { examId } = useParams()
  const dispatch = useDispatch()
  const exam = useSelector((state) => state.takeExam)

  const [answers, setAnswers] = useState([])

  const submitAnswers = async (e) => {
    e.preventDefault()
    console.log("hula", answers)
    // sendAnswers
    await dispatch(sendAnswers(answers, examId))
  }

  useEffect(async () => {
    await dispatch(takeExam(examId))
  }, [])

  useEffect(() => {
    console.log(exam)
  }, [exam])


  return (
    <>
      <form>
        {exam?.status?.questions?.map((item, index) => {
          return (<DisplayQuestions setAnswers={setAnswers} answers={answers} question={item} index={index} />)
        })}
        <div className='flex justify-center'>
          <button onClick={submitAnswers} className='bg-blue-400 p-2 rounded-md text-white hover:bg-blue-600'>Send Answers</button>
        </div>
      </form>
    </>
  )
}

export default StartExam