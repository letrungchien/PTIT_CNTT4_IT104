// import { useDispatch, useSelector } from 'react-redux';
// import FilterControls from './componets/FilterControls';
// import TaskForm from './componets/TaskForm';
// import TaskItem from './componets/TaskItem';
// import { useEffect, useState } from 'react';
// import { getAllTask } from './store/slices/taskSlice';
// import type { RootState, AppDispatch } from './store/store'; // nhớ import từ store

// const App = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const tasks = useSelector((state: RootState) => state.task.tasks); // lấy từ Redux

//   const [filters, setFilters] = useState({
//     status: 'all',
//     priority: 'all',
//     search: '',
//   });

//   useEffect(() => {
//     dispatch(getAllTask()); // gọi API khi load App
//   }, [dispatch]);

//   const filteredTasks = tasks.filter((t) => {
//     const matchStatus =
//       filters.status === 'all' ||
//       (filters.status === 'completed' && t.completed) ||
//       (filters.status === 'active' && !t.completed);

//     const matchPriority =
//       filters.priority === 'all' || t.priority === filters.priority;

//     const matchSearch = t.title.toLowerCase().includes(filters.search.toLowerCase());

//     return matchStatus && matchPriority && matchSearch;
//   });

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

//       {/* Form thêm task mới (sẽ dispatch lên Redux) */}
//       <TaskForm />

//       {/* Bộ lọc */}
//       <FilterControls
//         status={filters.status}
//         priority={filters.priority}
//         search={filters.search}
//         onStatusChange={(status) => setFilters({ ...filters, status })}
//         onPriorityChange={(priority) => setFilters({ ...filters, priority })}
//         onSearchChange={(search) => setFilters({ ...filters, search })}
//       />

//       {/* Danh sách task */}
//       <div>
//         {filteredTasks.map((task) => (
//           <TaskItem
//             key={task.id}
//             {...task}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import TaskManager from './componets/TaskManager'

export default function App() {
  return (
    <div>
      <TaskManager></TaskManager>
    </div>
  )
}
