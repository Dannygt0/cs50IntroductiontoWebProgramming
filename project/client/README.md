# Eye on the World 🌍

**Full Stack Web Application | CS50 Introduction to Computer Science Final Project**

Eye on the World is a high-performance React application that allows users to explore the globe through high-quality photography. By integrating with a custom backend and the Unsplash API, it provides a seamless experience for discovering, saving, and sharing city-specific imagery.

---

### 🚀 Key Features

- **Dynamic City Search:** Real-time photo fetching via custom API endpoints.
- **Persistent Favorites Album:** Users can "capture" moments and save them to a personal album, persisted using **LocalStorage**.
- **Interactive Modal System:** Detailed view for each photo with background scroll locking and UI animations.
- **Social Integration & Downloads:** Direct links to share images on social platforms (X, Facebook, Instagram) and force-download capabilities.
- **Dynamic UI/UX:** Includes heart animations on save, "flash" screen effects, and automated text formatting for photo descriptions.

### 🛠️ Technical Stack

- **Frontend:** React.js (Functional Components & Hooks).
- **State Management:** `useState` for UI flow and `useEffect` for lifecycle events and persistence.
- **Data Fetching:** `Axios` for handling asynchronous HTTP requests to the backend.
- **Styling:** Custom CSS3 with a dark-mode aesthetic and modal overlays.

---

### 📂 Technical Highlights (Code Quality)

- **Persistence:** Implementation of `JSON.parse(localStorage.getItem(...))` to ensure user data survives page refreshes.
- **Clean UI Logic:** Use of `document.body.style.overflow` to manage window scrolling during modal interactions—a mark of attention to UX detail.
- **Error Handling:** Robust try/catch blocks and user-facing alerts for API connectivity issues.

### ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Dannygt0/cs50IntroductiontoWebProgramming.git](https://github.com/Dannygt0/cs50IntroductiontoWebProgramming.git)s