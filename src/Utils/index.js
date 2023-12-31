import { getTokenFromCookie, writeCookie } from "../Common";

export const authCheck = async (jwt) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/family/authCheck`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const findFamilyMembers = async () => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/member/familyMembers`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginFamily = async (username, password) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/family/login`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    const data = await response.json();
    if (
      data.message !== "Invalid username." &&
      data.message !== "Unauthorised Login!"
    ) {
      writeCookie("jwt_token", data.family.token, 7);
      return data;
    }
    if (data.message === "Invalid username.") {
      return { message: "Invalid username", data };
    }
    if (data.message === "Unauthorised Login!") {
      return { message: "Invalid password", data };
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerFamily = async (username, email, password) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/family/register`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          isAdmin: false,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUsername = async (username, newUsername) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/family/account/updateUsername`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          newUsername: newUsername,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (password, newPassword, username) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/family/account/updatePassword`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          newPassword: newPassword,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFamily = async (username) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/family/account/delete`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addMember = async (name, url, addAdmin, colour, totalPoints) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/member`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        url: url,
        admin: addAdmin,
        colour: colour,
        totalPoints: totalPoints,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const deleteMember = async (id) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/member`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFamilyTasks = async (user) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/task/getFamilyTasks/${user.id}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addFamilyTask = async (taskname, points) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/task`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        taskname: taskname,
        points: parseInt(points),
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePoints = async (user, points, totalPoints, FamilyId) => {
  try {
    const newTotalPoints = totalPoints + points;
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/member/pointsUpdate`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FamilyId: FamilyId,
          id: user,
          newTotalPoints: newTotalPoints,
        }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const assignMember = async (MemberId, taskid, action) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/task/assignMember`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          MemberId: MemberId,
          taskid: taskid,
          action: action,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editTaskDetails = async (id, taskname, points) => {
  try {
    console.log("YOYOYO", id, taskname, points);
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/task/editTask`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id,
          taskname: taskname,
          points: parseInt(points),
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/task/deleteTask`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRewards = async () => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/reward`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addFamilyReward = async (tier, rewardPoints) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/reward`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        tier: tier,
        rewardPoints: parseInt(rewardPoints),
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteReward = async (id) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/reward`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editReward = async (id, tier, rewardPoints) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/reward`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: id,
        tier: tier,
        rewardPoints: parseInt(rewardPoints),
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
