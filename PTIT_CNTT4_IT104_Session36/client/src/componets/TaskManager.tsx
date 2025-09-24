import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "../store/slices/taskSlice";
import { useEffect } from "react";
import type { Task } from "../utils/types";

export default function TaskManager() {
     const result =useSelector((data:any)=>{
        console.log("Data",data);
        return data.task.tasks
        
    })
    const dispatch:any=useDispatch();
    useEffect(()=>{
  dispatch(getAllTask());
    },[]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[600px] bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Tiêu đề */}
        <h1 className="text-xl font-bold text-center flex items-center justify-center gap-2">
          <span>📑</span> Task Manager
        </h1>

        {/* Thêm công việc */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Công việc mới"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border rounded-lg px-3 py-2">
            <option>Thấp</option>
            <option>Trung bình</option>
            <option>Cao</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            THÊM
          </button>
        </div>

        {/* Bộ lọc */}
        <div className="flex gap-2">
          <select className="flex-1 border rounded-lg px-3 py-2">
            <option>Tất cả</option>
            <option>Hoàn thành</option>
            <option>Chưa hoàn thành</option>
          </select>
          <select className="flex-1 border rounded-lg px-3 py-2">
            <option>Tất cả</option>
            <option>Thấp</option>
            <option>Trung bình</option>
            <option>Cao</option>
          </select>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Danh sách công việc */}
        <div className="space-y-3">
            {result.map((item:Task)=>{
                return  <div className="flex items-center justify-between border rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="line-through text-gray-500">{item.taskName}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                {item.priority}
              </span>
              <button className="text-red-500 hover:text-red-700">🗑</button>
              <button className="text-blue-500 hover:text-blue-700">✏</button>
            </div>
          </div>
            })}
          {/* Item 1 */}
          <div className="flex items-center justify-between border rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="line-through text-gray-500">Học Redux Toolkit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                HIGH
              </span>
              <button className="text-red-500 hover:text-red-700">🗑</button>
              <button className="text-blue-500 hover:text-blue-700">✏</button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between border rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-gray-800">Làm bài tập T5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                MEDIUM
              </span>
              <button className="text-red-500 hover:text-red-700">🗑</button>
              <button className="text-blue-500 hover:text-blue-700">✏</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
