import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';

interface Tool {
  name: string;
  description: string;
  path: string;
  category: string;
}

const tools: Tool[] = [
  { name: 'Date Tool', description: 'Date calculations and formatting.', path: '/datetool', category: 'Time' },
  { name: 'Base64 Decoder', description: 'Decode Base64 strings into readable text.', path: '/base64decoder', category: 'Converters' },
  { name: 'UUID Generator', description: 'Generate unique version 4 UUIDs.', path: '/uuid', category: 'Generators' },
  { name: 'Hash Generator', description: 'Create various hashes from text.', path: '/generator', category: 'Generators' },
  { name: 'Unit Converter', description: 'Convert data sizes and time units.', path: '/converter', category: 'Converters' },
  { name: 'JSON Formatter', description: 'Format and validate JSON structures.', path: '/json', category: 'Formatters' },
  { name: 'XML Formatter', description: 'Beautify and check XML documents.', path: '/xml', category: 'Formatters' },
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentTools, setRecentTools] = useState<Tool[]>([]);
  const [stats, setStats] = useState({
    ip: 'Loading...',
    isoDate: new Date().toISOString().split('T')[0],
    unixTime: Math.floor(Date.now() / 1000)
  });

  useEffect(() => {
    // Load recent tools from localStorage
    const savedRecents = localStorage.getItem('recentTools');
    if (savedRecents) {
      try {
        setRecentTools(JSON.parse(savedRecents));
      } catch (e) {
        console.error('Failed to parse recent tools', e);
      }
    }

    // Fetch IP Address
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setStats(prev => ({ ...prev, ip: data.ip })))
      .catch(() => setStats(prev => ({ ...prev, ip: 'Unavailable' })));

    // Update time every second
    const timer = setInterval(() => {
      setStats(prev => ({
        ...prev,
        unixTime: Math.floor(Date.now() / 1000)
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleToolClick = (tool: Tool) => {
    const updatedRecents = [tool, ...recentTools.filter(t => t.path !== tool.path)].slice(0, 3);
    setRecentTools(updatedRecents);
    localStorage.setItem('recentTools', JSON.stringify(updatedRecents));
  };

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold">Developer Utilities</h1>
          <p className="lead text-muted">A central place for your daily tools.</p>
        </header>

        {/* Quick-Access Bar (Search) */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-lg-6">
            <div className="input-group input-group-lg shadow-sm">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                placeholder="Search for tools (e.g. 'uuid', 'json')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Statistical Overview */}
        <div className="row g-3 mb-5 text-center">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3">
              <small className="text-muted text-uppercase fw-bold">Your IP Address</small>
              <div className="h4 mb-0 mt-1">{stats.ip}</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3">
              <small className="text-muted text-uppercase fw-bold">Today's Date (ISO)</small>
              <div className="h4 mb-0 mt-1">{stats.isoDate}</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3">
              <small className="text-muted text-uppercase fw-bold">Current Unix Time</small>
              <div className="h4 mb-0 mt-1 font-monospace">{stats.unixTime}</div>
            </div>
          </div>
        </div>

        {/* Recently Used */}
        {recentTools.length > 0 && !searchTerm && (
          <div className="mb-5">
            <h3 className="h5 mb-3 text-muted">Recently Used</h3>
            <div className="row g-3">
              {recentTools.map((tool) => (
                <div key={`recent-${tool.path}`} className="col-md-4">
                  <Link 
                    to={tool.path} 
                    onClick={() => handleToolClick(tool)}
                    className="text-decoration-none"
                  >
                    <div className="card border-0 shadow-sm h-100 border-start border-primary border-4 hover-shadow">
                      <div className="card-body py-2 px-3 d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-0 text-dark">{tool.name}</h6>
                          <small className="text-muted">{tool.category}</small>
                        </div>
                        <i className="bi bi-chevron-right text-muted"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="row g-4">
          {filteredTools.map((tool) => (
            <div key={tool.path} className="col-md-6 col-lg-4">
              <Link 
                to={tool.path} 
                onClick={() => handleToolClick(tool)}
                className="text-decoration-none h-100"
              >
                <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title mb-0 text-dark">{tool.name}</h5>
                      <span className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill">
                        {tool.category}
                      </span>
                    </div>
                    <p className="card-text text-muted flex-grow-1">
                      {tool.description}
                    </p>
                    <div className="text-primary mt-2 small fw-bold">
                      Open Tool <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {filteredTools.length === 0 && (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No tools found matching "{searchTerm}"</p>
            </div>
          )}
        </div>

        <footer className="mt-5 pt-4 text-center text-muted border-top">
          <p>
            Utils V 0.1.1 &bull; 
            <a href="https://github.com/yorps/utils" target="_blank" rel="noopener noreferrer" className="ms-1 text-decoration-none">
              <i className="bi bi-github"></i> GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
