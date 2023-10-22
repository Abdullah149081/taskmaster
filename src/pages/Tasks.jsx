import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import AddTaskModal from "../components/tasks/AddTaskModal";

import MyTasks from "../components/tasks/MyTasks";
import TaskCard from "../components/tasks/TaskCard";
import MenuDropdown from "../components/ui/MenuDropdown";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useSelector((state) => state?.tasksSlice);

  const runningTask = tasks.filter((item) => item.status === "running");
  const paddingTask = tasks.filter((item) => item.status === "pending");
  const doneTask = tasks.filter((item) => item.status === "done");

  const togglerOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="grid h-screen grid-cols-12">
      <div className="col-span-9 px-10 pt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Tasks</h1>
          </div>
          <div className="flex gap-5">
            <button className="grid h-10 w-10 place-content-center rounded-xl border-2 border-secondary/20  text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="grid h-10 w-10 place-content-center rounded-xl border-2 border-secondary/20 text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white">
              <BellIcon className="h-6 w-6" />
            </button>
            <button onClick={togglerOpen} className="btn btn-primary">
              Add Task
            </button>
            <AddTaskModal isOpen={isOpen} togglerOpen={togglerOpen} />
            <MenuDropdown>
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
              </MenuDropdown>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-5">
          <div className="relative h-[800px] overflow-auto">
            <div className="sticky top-0 mb-3 flex justify-between rounded-md bg-[#D3DDF9] p-5">
              <h1>Up Next</h1>
              <p className="grid h-6 w-6 place-content-center rounded-md bg-primary text-white">
                {paddingTask.length || 0}
              </p>
            </div>
            <div className="space-y-3">
              {paddingTask.map((item) => (
                <TaskCard key={item.id} tasks={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="sticky top-0 mb-3 flex justify-between rounded-md bg-[#D3DDF9] p-5">
              <h1>In Progress</h1>
              <p className="grid h-6 w-6 place-content-center rounded-md bg-primary text-white">
                {runningTask.length || 0}
              </p>
            </div>
            <div className="space-y-3">
              {runningTask.map((item) => (
                <TaskCard key={item.id} tasks={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="sticky top-0 mb-3 flex justify-between rounded-md bg-[#D3DDF9] p-5">
              <h1>Up Next</h1>
              <p className="grid h-6 w-6 place-content-center rounded-md bg-primary text-white">
                {doneTask.length || 0}
              </p>
            </div>
            <div className="space-y-3">
              {doneTask.map((item) => (
                <TaskCard key={item.id} tasks={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-10">
        <div>
          <h1 className="text-xl">Members</h1>
          <div className="mt-3 flex gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
          </div>
        </div>
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;
