import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaUserTie } from 'react-icons/fa';

const DashboardOverview = () => {
  // Sample data for the overview boxes
  const overviewData = [
    { title: 'Teachers', count: 50, icon: <FaChalkboardTeacher />, color: '#007bff' },
    { title: 'Students', count: 1000, icon: <FaUserGraduate />, color: '#28a745' },
    { title: 'Courses', count: 30, icon: <FaBook />, color: '#ffc107' },
    { title: 'Administrators', count: 10, icon: <FaUserTie />, color: '#dc3545' },
  ];

  // Sample data for charts
  const attendanceData = [
    { name: 'Mon', attendance: 95 },
    { name: 'Tue', attendance: 98 },
    { name: 'Wed', attendance: 92 },
    { name: 'Thu', attendance: 96 },
    { name: 'Fri', attendance: 94 },
  ];

  const classPerformanceData = [
    { name: 'Class A', performance: 85 },
    { name: 'Class B', performance: 78 },
    { name: 'Class C', performance: 92 },
    { name: 'Class D', performance: 88 },
    { name: 'Class E', performance: 76 },
  ];

  const subjectPerformanceData = [
    { name: 'Math', value: 30 },
    { name: 'Science', value: 25 },
    { name: 'English', value: 20 },
    { name: 'History', value: 15 },
    { name: 'Art', value: 10 },
  ];
  const schoolPerformanceData = [
    { name: 'Math', value: 30 },
    { name: 'Science', value: 25 },
    { name: 'English', value: 20 },
    { name: 'History', value: 15 },
    { name: 'Art', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <Container fluid className="p-3">
      <Row className="mb-4">
        {overviewData.map((item, index) => (
          <Col key={index} xs={12} sm={6} lg={3} className="mb-3">
            <Card className="h-100 rounded-3 shadow-sm">
              <Card.Body className="d-flex align-items-center justify-content-between">
                <div 
                  className="rounded-circle p-3 me-3" 
                  style={{ backgroundColor: item.color, color: 'white' }}
                >
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <div className="text-end">
                  <Card.Title className="mb-0 fs-6">{item.title}</Card.Title>
                  <Card.Text className="mb-0 fw-bold fs-4">{item.count}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-4">
        <Col lg={6} className="mb-4">
          <Card className="h-100 rounded-3 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4">Attendance Report</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={attendanceData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="attendance" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="mb-4">
          <Card className="h-100 rounded-3 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4">Class Performance</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={classPerformanceData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="performance" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="mb-4">
          <Card className="h-100 rounded-3 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4">Subject Performance</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <Pie
                    data={subjectPerformanceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {subjectPerformanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardOverview;