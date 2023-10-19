import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateStatus, userTasks } from "../../redux/features/tasks/tasksSlice";
import TaskDetailsModal from "./TaskDetailsModal";

const MyTasks = () => {
  const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice);
  const { name } = useSelector((state) => state.userSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userTasks(name));
  }, [dispatch, name, tasks]);

  const handleDetails = (id) => {
    setTaskId(id);
    togglerOpen(false);
  };
  const togglerOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      <TaskDetailsModal
        isOpen={isOpen}
        togglerOpen={togglerOpen}
        taskId={taskId}
      />
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className=" h-[750px] space-y-3 overflow-auto">
        {userSpecificTasks?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between rounded-md bg-secondary/10 p-3"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleDetails(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="h-5 w-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
