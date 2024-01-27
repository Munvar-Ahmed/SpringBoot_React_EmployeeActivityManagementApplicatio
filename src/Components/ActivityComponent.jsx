import { useEffect, useState } from "react";
import {
  addActivity,
  getActivity,
  updateActivity,
} from "../service/ActivityService";
import { useNavigate, useParams } from "react-router-dom";

const ActivityComponent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const { id } = useParams();

  const saveActivity = (e) => {
    e.preventDefault();

    const activity = { title, description, completed };

    if (id) {
      console.log(id);
      updateActivity(id, activity)
        .then((response) => {
          console.log(response.data);
          navigate("/activities");
        })
        .catch((error) => console.log(error));
    } else {
      addActivity(activity)
        .then((response) => {
          console.log(response.data);
          navigate("/activities");
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    if (id) {
      getActivity(id)
        .then((response) => {
          console.log(id);
          setTitle(response.data.title);
          setCompleted(response.data.completed);
          setDescription(response.data.description);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Update Activity</h2>;
    } else {
      return <h2 className="text-center">Add Activity</h2>;
    }
  };

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 mb-5">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Activity Title:</label>
                <input
                  type="text"
                  placeholder="Enter Title..."
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Activity Description:</label>
                <input
                  type="text"
                  placeholder="Enter description..."
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Activity Completed:</label>
                <select
                  className="form-control"
                  value={completed}
                  onChange={(e) => setCompleted(e.target.value)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </form>
            <button
              className="btn btn-success"
              onClick={(e) => saveActivity(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityComponent;
