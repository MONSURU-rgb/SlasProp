import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const tasks = [
  {
    status: "completed",
    taskID: "356464335",
    date: "10-12-2023",
    time: "15:45 PM",
    updatedDate: "11-12-2023",
    updateTime: "11:24 AM",
  },

  {
    status: "pending",
    taskID: "356164335",
    date: "10-12-2023",
    time: "15:45 PM",
    updatedDate: "11-12-2023",
    updateTime: "11:24 AM",
  },
];

const statusColors = {
  completed: "#2BA40E",
  pending: "#F6a192",
};

const Tasks = () => {
  const [status, setStatus] = useState("");

  const handleChange = (event: Record<string, any>) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <FormControl size="small" sx={{ mt: 2, float: "right", minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label" sx={{ fontSize: "12px" }}>
          Select Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Parent Role"
          onChange={handleChange}
          style={{ height: 30 }}>
          <MenuItem value={10}>Completed</MenuItem>
          <MenuItem value={20}>Pending</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ mt: 4 }}>
        {tasks.map((task) => (
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography
              sx={{
                backgroundColor:
                  statusColors[task.status as "pending" | "completed"] ??
                  "grey",
                textTransform: "capitalize",
                color: "white",
                maxWidth: 150,
                fontSize: 14,
                p: 1,
              }}>
              Status: {task.status}
            </Typography>
            <Box sx={{ border: "1px solid lightgrey", display: "flex" }}>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "12px",
                  mt: 1,
                  pl: 2,
                  pr: 15,
                  borderRight: "2px solid lightgrey",
                }}>
                Task ID
                <Typography
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "black",
                    fontSize: "12px",
                  }}>
                  {task.taskID}
                </Typography>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  mt: 1,
                  fontSize: "12px",
                  pl: 2,
                  pr: 15,
                  borderRight: "2px solid lightgrey",
                }}>
                Date & Time
                <Typography
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "black",
                    fontSize: "12px",
                  }}>
                  {task.date} | {task.time}
                </Typography>
              </Typography>

              <Typography
                sx={{ color: "grey", mt: 1, fontSize: "12px", pl: 2, pr: 15 }}>
                Updated Date & Time
                <Typography
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "black",
                    fontSize: "12px",
                  }}>
                  {task.updatedDate} | {task.updateTime}
                </Typography>
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Tasks;
