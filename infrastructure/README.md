# Infrastructure

Infrastructure-as-code and deployment configurations for the cloud gaming service.

## Quick Start - Local Development

### Prerequisites
- Docker Desktop
- 8GB+ RAM

### Start All Services

```bash
docker-compose up -d
```

### Access Services

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **PostgreSQL**: localhost:5432 (user: gaming_user, password: secure_password)
- **Redis**: localhost:6379

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Stop Services

```bash
docker-compose down
```

## Kubernetes Deployment

See `kubernetes/deployment.yaml` for production Kubernetes manifests:
- 3 backend replicas with health checks
- LoadBalancer service
- Horizontal Pod Autoscaler (3-10 replicas)
- Resource limits and requests

### Setup

```bash
# Create namespace
kubectl create namespace cloud-gaming

# Create secrets
kubectl create secret generic cloud-gaming-secrets \
  --from-literal=database-url="postgresql://..." \
  --from-literal=redis-url="redis://..." \
  --from-literal=jwt-secret="your-secret" \
  -n cloud-gaming

# Deploy
kubectl apply -f kubernetes/deployment.yaml -n cloud-gaming
```

## Production Deployment

See `../docs/DEPLOYMENT.md` for:
- AWS EKS deployment
- GCP Cloud Run / GKE
- Azure AKS
- Production checklist
- Monitoring & troubleshooting

## Architecture

- **Frontend**: React.js with Vite
- **Backend**: Express.js REST API
- **Database**: PostgreSQL
- **Cache**: Redis
- **Streaming**: GPU-accelerated (separate service)
- **Load Balancing**: Kubernetes / AWS ALB
- **Container Registry**: ECR / GCR / ACR

## Network Architecture

```
                    Internet
                       ↓
                  Load Balancer
                       ↓
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
    Backend1      Backend2      Backend3
        │              │              │
        └──────────────┼──────────────┘
                       ↓
              ┌────────┴────────┐
              ↓                 ↓
         PostgreSQL         Redis Cluster
```

## Supported Platforms

- ✅ AWS (EKS, RDS, ElastiCache)
- ✅ Google Cloud (GKE, Cloud SQL, Memorystore)
- ✅ Azure (AKS, Azure Database, Azure Cache)
- ✅ Local Docker Compose
- ✅ On-premises Kubernetes

## Environment Variables

### Backend

```
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:5432/db
REDIS_URL=redis://host:6379
JWT_SECRET=your_secret_here
PORT=3000
```

### Frontend

```
VITE_API_URL=https://api.yourdomain.com
```

## Support

For deployment issues:
1. Check `../docs/DEPLOYMENT.md`
2. Review service logs: `docker-compose logs`
3. Verify environment variables
4. Check database connectivity
5. Review Kubernetes events: `kubectl get events`
