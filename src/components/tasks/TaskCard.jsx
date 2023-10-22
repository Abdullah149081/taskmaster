import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  removeTask,
  updateStatus,
} from "../../redux/features/tasks/tasksSlice";

const TaskCard = ({ tasks }) => {
  const dispatch = useDispatch();

  let updatedStatus;

  if (tasks?.status === "pending") {
    updatedStatus = "running";
  } else if (tasks?.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }

  return (
    <div className="rounded-md bg-secondary/10 p-5">
      <h1
        className={`mb-3 text-lg font-semibold  ${
          tasks?.priority === "high" ? "text-red-500" : ""
        } ${tasks?.priority === "medium" ? "text-yellow-500" : ""} ${
          tasks?.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {tasks?.title}
      </h1>
      <p className="mb-3">{tasks?.description}</p>
      <p className="text-sm">Assigned to - {tasks?.assignedTo}</p>
      <div className="mt-3 flex justify-between">
        <p>{tasks?.date}</p>
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(removeTask(tasks?.id))}
            title="Delete"
          >
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({ id: tasks.id, status: updatedStatus }))
            }
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
