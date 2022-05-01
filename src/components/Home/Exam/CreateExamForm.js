import React, {useState, useEffect} from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../../../redux/actions/questionAction'
import { clearCreateExam, createExam } from '../../../redux/actions/schoolAction'


const CreateExamForm = (props) => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const exam  = useSelector((state) => state.createExam) 
    const [startTime, setstartTime] = useState('23:59')
    const [endTime, setendTime] = useState('12:59')

    useEffect(() => {
      let today = new Date();
      let time = today.getHours() + ":" + today.getMinutes()
      console.log(time) 
      setstartTime(time)
    }, [])
    
    useEffect(()=>{
        console.log(exam)
        if(exam.loading === false){
            if(exam.error !== "" && exam.status === ""){
                alert.error(exam.error)
            }
            else if (exam.error === "" && exam.status !== "") {
                alert.success("Exam Created Successfully")
            }
        }
    }, [exam])

    const createExamClicked = async () => {
        // console.log(startTime, endTime)
        // console.log(startTime.substring(0,2))
        // console.log(startTime.substring(3,5))
        // console.log(endTime.substring(0,2))
        // console.log(endTime.substring(3,5))
        let today = new Date();
        // console.log(today.getHours())
        let startTimeHours = parseInt(startTime.substring(0,2)) - today.getHours()
        let startTimeMin =  parseInt(startTime.substring(3,5)) - today.getMinutes()
        let endTimeHours = parseInt(endTime.substring(0,2)) - today.getHours()
        let endTimeMin = parseInt(endTime.substring(3,5)) - today.getMinutes() 
        if(startTimeMin < 0) {
            startTimeHours -= 1
            startTimeMin += 60
        }

        if(endTimeMin) {
            endTimeHours-=1
            endTimeMin += 60
        }

        console.log(startTimeHours, startTimeMin, endTimeHours, endTimeMin)
        await dispatch(createExam(startTimeHours, startTimeMin, endTimeHours, endTimeMin))
        props.toggle()
        await dispatch(getQuestions());
        await dispatch(clearCreateExam())
    }

  return (
    <>
        <div>
            <div className="p-2">
                <h2 className='text-bold text-2xl text-center my-4'>
                    Create Exam
                </h2>
                <div className='flex justify-around'>
                    <div className='flex items-center justify-around p-2 border-2 border-black rounded-md'>
                        <p className='mx-2 text-bold text-lg'>Start Time</p>
                        <input className='cursor-pointer' type="time" placeholder='Start Time' value={startTime} onChange={(e)=>{setstartTime(e.target.value)}}/>
                    </div>
                    <div className='flex items-center justify-around p-2 border-2 border-black rounded-md'>
                        <p className='mx-2 text-bold text-lg'>End Time</p>
                        <input className='cursor-pointer' type="time" placeholder='End Time' value={endTime} onChange={(e)=>{setendTime(e.target.value)}}/>
                    </div>
                </div>
                <div className='flex justify-center my-2'>
                    <h1 className='text-bold text-lg'>No of Questions:- 10</h1>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-blue-400 rounded-md p-2 my-2 text-white hover:bg-blue-600' onClick={createExamClicked}>Create Exam</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateExamForm