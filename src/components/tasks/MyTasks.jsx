import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedTask, usersTask } from "../../redux/features/tasks/taskSlice";
import TaskDetailsModal from "./TaskDetailsModal";

const MyTasks = () => {
  const { userTask, task } = useSelector((state) => state.taskSlice);
  const { name: userName } = useSelector((state) => state.userSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(null);
  console.log(taskId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersTask(userName));
  }, [dispatch, userName, task]);

  const togglerOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleModal = (id) => {
    setTaskId(id);
    togglerOpen();
  };

  return (
    <div>
      <h1 className="my-3 text-xl">My Task</h1>
      <div className=" h-[750px] space-y-3 overflow-auto">
        {userTask.map((item) => (
          <div
            key={item.id}
            className="flex justify-between rounded-md bg-secondary/10 p-3"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleModal(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="h-5 w-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updatedTask({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
        <TaskDetailsModal
          isOpen={isOpen}
          togglerOpen={togglerOpen}
          taskId={taskId}
        ></TaskDetailsModal>
      </div>
    </div>
  );
};

export default MyTasks;
