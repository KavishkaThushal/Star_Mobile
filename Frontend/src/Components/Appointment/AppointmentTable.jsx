import { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import api from "../../config/axiosInterceptor.js";
import { toast } from "react-toastify";
import "./appointment.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../redux/services/fetchAppointmentAPI.ts";

function AppointmentTable() {
  const dispatch = useDispatch();
  const { appointments, loading } = useSelector(
    (state) => state.user.userAppointments
  );
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch(fetchAppointments());
    }
  }, [dispatch]);

  const handleCancel = async (appointmentId, appointDate) => {
    const appointmentDate = new Date(appointDate);
    const now = new Date();

    if (appointmentDate <= now) {
      message.error("Cannot cancel past appointments.");
      return;
    }

    try {
      const res = await api.delete(
        `/appointment/cancel-appointment/${appointmentId}`
      );

      if (res.status === 200) {
        toast.success("Appointment canceled successfully");
        dispatch(fetchAppointments());
      }
    } catch (error) {
      toast.error("Failed to cancel appointment");
      console.error(error);
    }
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Issue",
      dataIndex: "issue",
      key: "issue",
    },
    {
      title: "Appointment Date",
      dataIndex: "appointDate",
      key: "appointDate",
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Status",
      dataIndex: "progress",
      key: "progress",
      render: (status) => {
        const statusColor = {
          pending: "orange",
          completed: "green",
          cancelled: "red",
          InCompleted: "gray",
        };
        return (
          <span
            style={{
              color: statusColor[status] || "black",
              fontWeight: "bold",
            }}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const appointmentDate = new Date(record.appointDate);
        const now = new Date();

        const canCancel = appointmentDate > now;

        return canCancel ? (
          <Popconfirm
            title="Are you sure you want to cancel this appointment?"
            onConfirm={() => handleCancel(record._id, record.appointDate)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="link">
              Cancel
            </Button>
          </Popconfirm>
        ) : (
          <Button disabled type="link">
            Cancel
          </Button>
        );
      },
    },
  ];
  const token = localStorage.getItem("accessToken");
  console.log("token", token);
  return (
    <div className="appointment-wrapper">
      {localStorage.getItem("access_token") ? (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            Your Appointments
          </h2>
          <Table
            dataSource={appointments}
            columns={columns}
            loading={loading}
            rowKey={(record) => record._id}
            pagination={{ pageSize: 5 }}
          />
        </div>
      ) : (
        <p>Please log in to see your appointments.</p>
      )}
    </div>
  );
}

export default AppointmentTable;
