import { useEffect, useState } from "react";
import {
  completeActivity,
  deleteActivity,
  getActivities,
  inCompleteActivity,
} from "../service/ActivityService";
import { useNavigate } from "react-router-dom";

const ListActivityComponent = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllActivities();
  }, []);

  const getAllActivities = () => {
    getActivities()
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => console.log(error));
  };

  const editActivity = (id) => {
    navigate(`/update-activity/${id}`);
  };

  const removeActivity = (id) => {
    if (id) {
      deleteActivity(id)
        .then((response) => getAllActivities())
        .catch((error) => console.log(error));
    }
  };

  const checkCompleteActivity = (id) => {
    if (id) {
      completeActivity(id)
        .then((response) => getAllActivities())
        .catch((error) => console.log(error));
    }
  };

  const checkInCompleteActivity = (id) => {
    if (id) {
      inCompleteActivity(id)
        .then((response) => getAllActivities())
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Activities</h2>
      <button
        className="btn btn-primary mb-2"
        onClick={() => navigate("/add-activity")}
      >
        Add Activity
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Activity Title</th>
              <th>Activity Description</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((act) => (
              <tr key={act.id}>
                <td>{act.title}</td>
                <td>{act.description}</td>
                <td>{act.completed ? "YES" : "NO"}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => editActivity(act.id)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => removeActivity(act.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    style={{ marginLeft: "10px" }}
                    onClick={() => checkCompleteActivity(act.id)}
                  >
                    Complete
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: "10px" }}
                    onClick={() => checkInCompleteActivity(act.id)}
                  >
                    In-Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListActivityComponent;
