# Frontend - Cloud Gaming Client

Web and mobile clients for streaming games from the cloud gaming service.

## Features

- Responsive web interface
- Game library browsing
- Low-latency streaming player (WebRTC)
- Input handling (keyboard, mouse, gamepad)
- User authentication
- Session management

## Technologies

- **Framework**: React.js 18
- **Streaming**: WebRTC
- **Build Tool**: Vite
- **UI**: Material-UI / Tailwind CSS

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page views
├── services/      # API & streaming services
├── store/         # State management
├── hooks/         # Custom React hooks
└── App.jsx        # Main app component
```

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`

## Key Components

1. **GameLibrary** - Browse and search available games
2. **StreamPlayer** - WebRTC video player with controls
3. **InputHandler** - Capture keyboard, mouse, gamepad input
4. **SessionManager** - Manage active gaming sessions
5. **AuthComponent** - User login and registration
