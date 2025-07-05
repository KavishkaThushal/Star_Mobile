import { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import api from "../../config/axiosInterceptor.js";
import { toast } from "react-toastify";
import "./appointment.css";

function AppointmentTable() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await api.get("/appointment/get-user-appointments"); // Adjust API path if needed
                if (response.data && response.data.data) {
                    setAppointments(response.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch appointments:", error);
            }
        };

        if (localStorage.getItem("accessToken")) {
            fetchAppointments();
        }
    }, []);

    const handleCancel = async (appointmentId, appointDate) => {
        const appointmentDate = new Date(appointDate);
        const now = new Date();

        if (appointmentDate <= now) {
            message.error("Cannot cancel past appointments.");
            return;
        }

        try {
            const res = await api.delete(`/appointment/cancel-appointment/${appointmentId}`);

            if(res.status === 200) {
                toast.success("Appointment canceled successfully");
                window.location.reload();
            }

            setAppointments((prev) =>
                prev.filter((appt) => appt._id !== appointmentId)
            );
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
                    <span style={{ color: statusColor[status] || "black", fontWeight: "bold" }}>
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

    return (
        <div className="appointment-wrapper">
            {localStorage.getItem("accessToken") ? (
                <div style={{marginTop: 40}}>
                    <h2 style={{textAlign: "center", marginBottom: 20}}>Your Appointments</h2>
                    <Table
                        dataSource={appointments}
                        columns={columns}
                        rowKey={(record) => record._id}
                        pagination={{pageSize: 5}}
                    />
                </div>
            ) : (
                <p>Please log in to see your appointments.</p>
            )}
        </div>
    );
}

export default AppointmentTable;
