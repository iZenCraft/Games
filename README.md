# Cloud Gaming Service

A scalable cloud gaming platform that allows users to stream and play games from remote servers.

## 🎮 Quick Start - Open Cloud Gaming

### Start the service locally:
```bash
git clone https://github.com/iZenCraft/Games.git
cd Games
docker-compose -f infrastructure/docker-compose.yml up -d
```

### Open Cloud Gaming UI:
🔗 **[OPEN CLOUD GAMING →](http://localhost:5173)**

### Other Services:
- 📡 **Backend API**: [http://localhost:3000](http://localhost:3000)
- 🗄️ **Database**: postgresql://localhost:5432
- 💾 **Cache**: redis://localhost:6379

---

## Project Overview

This platform enables:
- Streaming games from cloud infrastructure
- Low-latency input/output (<50ms)
- Multi-user session management
- Game library management
- User authentication and sessions

## Architecture

```
┌─────────────────────────────────────────────────────┐
│           Cloud Gaming Platform                     │
├─────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐               │
│  │   Frontend   │  │   Backend    │               │
│  │  (Web/App)   │  │   (API)      │               │
│  └──────────────┘  └──────────────┘               │
│         ▲                  ▲                       │
│         └──────────────────┘                       │
│                  │                                 │
│         ┌────────▼────────┐                        │
│         │  Stream Server  │                        │
│         │  (Game Session) │                        │
│         └────────┬────────┘                        │
│    ┌─────────────┼─────────────┐                   │
│    │             │             │                   │
│  ┌─▼──┐       ┌──▼──┐      ┌──▼──┐               │
│  │GPU │       │GPU  │      │GPU  │               │
│  │VM1 │       │VM2  │      │VM3  │               │
│  └────┘       └─────┘      └─────┘               │
└─────────────────────────────────────────────────────┘
```

## Tech Stack

- **Frontend**: React.js 18, WebRTC, Vite
- **Backend**: Express.js, PostgreSQL, Redis, JWT
- **Streaming**: WebRTC, NVIDIA NVENC/AMD VCE
- **Infrastructure**: Docker, Kubernetes, AWS/GCP/Azure
- **Database**: PostgreSQL, Redis

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [📖 ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design, components, latency optimization, security |
| [🚀 DEPLOYMENT.md](docs/DEPLOYMENT.md) | AWS, GCP, Azure deployment guides & production checklist |
| [🔧 Infrastructure README](infrastructure/README.md) | Local development setup with Docker Compose |
| [🎨 Frontend README](frontend/README.md) | React components & WebRTC streaming |
| [⚙️ Backend README](backend/README.md) | REST API endpoints & database schema |
| [📡 Streaming README](streaming/README.md) | GPU encoding, performance tuning |

## 🚀 Deployment Options

### Local Development
```bash
cd infrastructure
docker-compose up -d
# Open: http://localhost:5173
```

### AWS EKS
See [DEPLOYMENT.md - AWS](docs/DEPLOYMENT.md#aws-deployment)

### Google Cloud
See [DEPLOYMENT.md - GCP](docs/DEPLOYMENT.md#gcp-deployment)

### Azure
See [DEPLOYMENT.md - Azure](docs/DEPLOYMENT.md#azure-deployment)

## 📂 Project Structure

```
iZenCraft/Games/
├── frontend/                 # React.js web client
├── backend/                  # Express.js REST API
├── streaming/                # GPU-accelerated streaming server
├── infrastructure/           # Docker Compose & Kubernetes
│   ├── docker-compose.yml
│   └── kubernetes/
│       └── deployment.yaml
├── docs/                     # Documentation
│   ├── ARCHITECTURE.md
│   └── DEPLOYMENT.md
└── README.md
```

## ✨ Key Features

✅ **WebRTC Streaming** - Ultra-low latency (<50ms)  
✅ **GPU Acceleration** - NVIDIA NVENC H.264 encoding  
✅ **Auto-Scaling** - Kubernetes HPA (3-10 replicas)  
✅ **Multi-Cloud** - AWS, GCP, Azure support  
✅ **Production Ready** - Health checks, monitoring, security  
✅ **Well Documented** - Architecture & deployment guides  

## 🔗 Quick Links

- 🌐 **Open Frontend**: [http://localhost:5173](http://localhost:5173)
- 🔌 **API Base URL**: [http://localhost:3000](http://localhost:3000)
- 📊 **GitHub Repository**: [iZenCraft/Games](https://github.com/iZenCraft/Games)

## 📋 Prerequisites

- Docker Desktop
- 8GB+ RAM
- Node.js 18+ (for direct development)

## 🎯 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/iZenCraft/Games.git
   cd Games
   ```

2. **Start all services**
   ```bash
   docker-compose -f infrastructure/docker-compose.yml up -d
   ```

3. **Open in browser**
   - [🎮 Cloud Gaming UI](http://localhost:5173)

4. **View logs**
   ```bash
   docker-compose logs -f backend
   ```

5. **Stop services**
   ```bash
   docker-compose down
   ```

## 🛠️ Development

### Backend Development
```bash
cd backend
npm install
npm run dev
```

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Streaming Server
```bash
cd streaming
docker build -t cloud-gaming-streaming .
docker run --gpus all -e GAME_ID=game1 cloud-gaming-streaming
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login (get JWT token)

### Games
- `GET /api/games` - List available games
- `GET /api/games/:id` - Get game details

### Sessions
- `POST /api/sessions` - Start gaming session
- `GET /api/sessions/:id` - Get session info
- `DELETE /api/sessions/:id` - End session

See [backend/README.md](backend/README.md) for complete API documentation.

## 🔐 Security

- TLS/SSL encryption
- JWT authentication
- Session validation
- Input sanitization
- Rate limiting
- DDoS protection

## 📈 Monitoring & Logs

### View Service Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

### Health Checks
```bash
# Backend health
curl http://localhost:3000/health

# Database connection
docker-compose exec postgres psql -U gaming_user -d cloud_gaming

# Redis
docker-compose exec redis redis-cli ping
```

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Find process using port
lsof -i :5173
# Kill process
kill -9 <PID>
```

### Database Connection Issues
```bash
# Check PostgreSQL
docker-compose exec postgres psql -U gaming_user -d cloud_gaming
```

### Memory Issues
```bash
# Increase Docker memory allocation
# Docker Desktop → Settings → Resources → Memory
```

For more troubleshooting, see [DEPLOYMENT.md](docs/DEPLOYMENT.md#monitoring--troubleshooting).

## 📞 Support

For issues and questions:
1. Check the [troubleshooting guide](docs/DEPLOYMENT.md#monitoring--troubleshooting)
2. Review service logs
3. Open an issue on GitHub

## 📝 License

MIT

## 🙌 Contributors

- iZenCraft

---

**Made with ❤️ for gamers everywhere** 🎮
