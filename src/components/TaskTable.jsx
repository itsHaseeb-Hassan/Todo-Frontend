import React from 'react';
import FormButton from './FormButton';
const TaskTable = ({ todos, handleDelete, handleUpdate, handleComplete }) => {
    return (
        <div className='mt-5 mb-10'>
        <table className=" w-[60%] mx-5 bg-white md:mx-auto  md:w-[40%] ">
            <thead>
                <tr>
                    <th className="py-2  bg-gray-200 border-b-2 border-gray-300 text-center">Id</th>
                    <th className="py-2  bg-gray-200 border-b-2 border-gray-300 text-center">Task</th>
                    <th className="py-2  bg-gray-200 border-b-2 border-gray-300 text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos?.map((todo, index) => (
                    <tr className="hover:bg-gray-100" key={index}>
                        <td className="py-2 px-4 border-b border-gray-300">{index+1}</td>
                        <td className={`${todo?.completed ? 'line-through text-red-500' : ''} py-2 text-center border-b border-gray-300`}>{todo?.task}</td>
                        <td className="py-2 px-4 border-b border-gray-300">
                            <div className="flex space-x-2">
                                <FormButton text="Delete" color="#e8331a" onClick={() => handleDelete(todo._id)} />
                                <FormButton text="Update" color="#234376" onClick={() => handleUpdate(todo)} />
                                <FormButton text="Complete" color="#d7ff33" onClick={() => handleComplete(todo)} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default TaskTable;
