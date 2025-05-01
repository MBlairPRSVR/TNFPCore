import React, { useEffect, useState } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';
import './StaffDashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [labels, setLabels] = useState(['January', 'February', 'March']);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  const addPie = () => {
    const newData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [200, 150, 100],
          backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
          hoverBackgroundColor: ['#ef4444', '#3b82f6', '#eab308'],
        },
      ],
    };
    setPieData([...pieData, newData]);
  };

  const addLine = () => {
    const newData = {
      labels,
      datasets: [
        {
          label: 'Visitors',
          data: labels.map(() => Math.floor(Math.random() * 100)),
          borderColor: '#60a5fa',
          fill: false,
        },
      ],
    };
    setLineData([...lineData, newData]);
  };

  const updateLabels = (e) => {
    setLabels(e.target.value.split(','));
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h2>📊 Staff Dashboard</h2>
        <span className="clock">{time}</span>
      </div>

      <div className="controls">
        <input
          type="text"
          value={labels.join(',')}
          onChange={updateLabels}
          placeholder="Edit chart labels (comma separated)"
          className="input-field"
        />
        <div className="button-group">
          <button onClick={addPie} className="button add-chart-btn">+ Add Pie Chart</button>
          <button onClick={addLine} className="button add-chart-btn">+ Add Line Chart</button>
        </div>
      </div>

      <div className="chart-grid">
        {pieData.map((chart, index) => (
          <div key={`pie-${index}`} className="chart-card">
            <Pie data={chart} height={200} width={200} />
          </div>
        ))}

        {lineData.map((chart, index) => (
          <div key={`line-${index}`} className="chart-card">
            <Line data={chart} height={200} width={200} />
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="button-section">
        <button className="button print-btn" onClick={() => window.print()}>Print Files</button>
        <button className="button media-forum-btn" onClick={() => navigate('/mediaforum')}>Go to Media Forum</button>
      </div>
    </div>
  );
};

export default StaffDashboard;
