import React, { useEffect, useState } from 'react';
import { Table, Select, Button, message } from 'antd';
import './status.css';
import api from "../../config/axiosInterceptor.js";

const { Option } = Select;

function Status() {
    const [data, setData] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [progressValue, setProgressValue] = useState({});

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const res = await api.get('appointment/fetch/all');
            const formatted = res.data.map((item) => ({
                ...item,
                key: item._id,
                accountUsername: item.userId?.userName || 'N/A',
                fullName: `${item.firstName} ${item.lastName}`,
                date: new Date(item.appointDate).toLocaleDateString(),
                created: new Date(item.createdAt).toLocaleDateString(), // ← Added this
            }));
            setData(formatted);
        } catch (err) {
            message.error('Failed to fetch appointments');
            console.error(err);
        }
    };

    const saveProgress = async (id) => {
        try {
            await api.put(`appointment/progress/${id}`, {
                progress: progressValue[id],
            });
            message.success('Progress updated');
            setEditingRow(null);
            fetchAppointments();
        } catch (err) {
            message.error('Failed to update progress');
        }
    };

    const columns = [
        {
            title: 'Appointment Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Account Username',
            dataIndex: 'accountUsername',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Created At',
            dataIndex: 'created',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'Issue',
            dataIndex: 'issue',
        },
        {
            title: 'Status',
            dataIndex: 'progress',
            render: (text, record) => {
                if (record.progress === 'cancelled') {
                    return <span style={{ color: 'gray' }}>{text}</span>;
                }

                return editingRow === record._id ? (
                    <Select
                        value={progressValue[record._id]}
                        onChange={(value) =>
                            setProgressValue((prev) => ({ ...prev, [record._id]: value }))
                        }
                        style={{ width: 130 }}
                    >
                        <Option value="pending">Pending</Option>
                        <Option value="completed">Completed</Option>
                        <Option value="InCompleted">InCompleted</Option>
                        {/* cancelled not included intentionally */}
                    </Select>
                ) : (
                    <span>{text}</span>
                );
            },
        },
        {
            title: 'Action',
            render: (_, record) => {
                if (record.progress === 'cancelled') {
                    return <span style={{ color: 'gray' }}>Locked</span>;
                }

                return editingRow === record._id ? (
                    <button
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            border: '1px solid #e0e0e0',
                            outline: 'none',
                            marginTop: '1.2rem',
                            background: '#4ecdc4',
                            color: 'white',
                            cursor: 'pointer',
                            fontWeight: '700',
                            transition: 'all 0.4s ease',
                        }}
                        onClick={() => saveProgress(record._id)}
                    >
                        Save
                    </button>

                ) : (
                    <button
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            border: '1px solid #e0e0e0',
                            outline: 'none',
                            marginTop: '1.2rem',
                            background: '#4ecdc4',
                            color: 'white',
                            cursor: 'pointer',
                            fontWeight: '700',
                            transition: 'all 0.4s ease',
                        }}
                        onClick={() => {
                            setEditingRow(record._id);
                            setProgressValue((prev) => ({
                                ...prev,
                                [record._id]: record.progress,
                            }));
                        }}
                    >
                        Edit
                    </button>
                );
            },
        },
    ];

    return (
        <div className="status-wrapper">
            <h2>Appointment Status Management</h2>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    );
}

export default Status;
