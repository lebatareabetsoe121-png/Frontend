import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Eye, TrendingUp } from "lucide-react";

function Prlmonitor() {
  const lecturerData = [
    { name: "Mr. Thuto", classesHeld: 15, reports: 10, rating: 4.7, performance: 92 },
    { name: "Ms. Mahase", classesHeld: 12, reports: 9, rating: 4.3, performance: 85 },
    { name: "Mr. Thokoana", classesHeld: 14, reports: 13, rating: 4.8, performance: 96 },
    { name: "Ms. Tsebo", classesHeld: 11, reports: 7, rating: 3.9, performance: 72 },
    { name: "Dr. Moyo", classesHeld: 13, reports: 11, rating: 4.5, performance: 89 },
  ];

  return (
    <div className="prlmon-container">
      <div className="prlmon-header">
        <h1><Eye className="prlmon-icon-title" /> Lecturer Performance Monitoring</h1>
        <p>Track lecturer activities, performance ratings, and class delivery consistency.</p>
      </div>

      {/* Chart Section */}
      <div className="prlmon-chart-section">
        <h3><TrendingUp className="prlmon-icon-sub" /> Overall Lecturer Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={lecturerData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2b4045" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f3135", border: "none", color: "#fff" }}
              cursor={{ fill: "#2b4045" }}
            />
            <Bar dataKey="performance" fill="#00bfa6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table Section */}
      <div className="prlmon-table-section">
        <h3>Lecturer Activity Summary</h3>
        <table className="prlmon-table">
          <thead className="prlmon-thead">
            <tr className="prlmon-tr-head">
              <th className="prlmon-th">Name</th>
              <th className="prlmon-th">Classes Held</th>
              <th className="prlmon-th">Reports Submitted</th>
              <th className="prlmon-th">Avg. Rating</th>
              <th className="prlmon-th">Performance (%)</th>
            </tr>
          </thead>
          <tbody className="prlmon-tbody">
            {lecturerData.map((lect, index) => (
              <tr className="prlmon-tr" key={index}>
                <td className="prlmon-td">{lect.name}</td>
                <td className="prlmon-td">{lect.classesHeld}</td>
                <td className="prlmon-td">{lect.reports}</td>
                <td className="prlmon-td">{lect.rating}</td>
                <td className="prlmon-td">{lect.performance}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Prlmonitor;
