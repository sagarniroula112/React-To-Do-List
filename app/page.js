"use client"
import React, {useState} from 'react'

export default function Home() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mainTask, setMainTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();        // this prevents the page from reloading and form submitting
        setMainTask([...mainTask, {title, desc}]);

        console.log(mainTask);
        console.log(title);
        console.log(desc);
        setTitle("");     // these will clear the input boxes after submitting
        setDesc("");
    }

    const deleteHandler = (e) => {
        let copyTask = [...mainTask]
        copyTask.splice(e, 1)
        setMainTask(copyTask);
    }


    let renderTask = <h2 className={'text-lg'}>No Task Available 😒</h2>

    if(mainTask.length>0){
        renderTask = mainTask.map((t, i)=>{
            return (
                <li key={i} className={'flex items-center justify-between mb-6'}>
                    <div className={'flex items-center justify-between mb-5 w-2/3'}>
                        <h5 className = 'text-xl font-semibold'>{t.title}</h5>
                        <h6 className = 'text-lg font-medium'>{t.desc}</h6>
                    </div>
                    <button
                         onClick={()=>{
                             deleteHandler(i);
                         }}
                        className={'bg-red-400 text-white px-4 rounded font-bold'}>Delete</button>
                </li>
            )
        })
    }

  return (
      <>
          <h1 className={'bg-black text-white text-4xl text-center p-5 font-sans'}>My To-do List</h1>
            <form onSubmit={submitHandler}>
                <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter
                     title'
                    value = {title}
                    onChange = {(e) => {
                        setTitle(e.target.value);
                }
                }/>
                <input type="text" className={'text-2xl border-zinc-800 border-4 m-5 px-4 py-2'} placeholder={'Enter' +
                    ' description'}
                    value = {desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }

                }/>
                <button className={'bg-black text-white border-2 text-1.5xl font-bold border-black rounded-lg' +
                    ' px-3' +
                    ' py-3' +
                    ' m-2'}>Add task</button>
            </form>
          <hr/>
          <div className={'p-8 bg-slate-200'}>
                <ul>
                    {renderTask}
                </ul>
          </div>
      </>
  )
}

// #taskdone
