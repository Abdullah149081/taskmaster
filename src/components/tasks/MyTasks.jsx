import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersTask } from "../../redux/features/tasks/taskSlice";

const MyTasks = () => {
  const { userTask, task } = useSelector((state) => state.taskSlice);
  const { name: userName } = useSelector((state) => state.userSlice);

  console.log(userTask);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersTask(userName));
  }, [dispatch, userName, task]);

  return (
    <div>
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className=" h-[750px] space-y-3 overflow-auto">
        {userTask.map((item) => (
          <div
            key={item.id}
            className="flex justify-between rounded-md bg-secondary/10 p-3"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="h-5 w-5 text-primary" />
              </button>
              <button className="grid place-content-center" title="Done">
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
