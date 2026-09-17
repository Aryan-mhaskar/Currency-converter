
# 💱 Currency Converter

A responsive and user-friendly currency converter built using **React.js and Tailwind CSS**. This application allows users to convert currencies using real-time exchange rates fetched from a currency exchange API.

## 📸 Screenshot

![alt text](./public/image.png)

## ✨ Features

- 🌍 Convert between multiple currencies.
- 🔄 Swap source and target currencies.
- 💱 Fetch exchange rates using an API.
- ⚡ Real-time currency rate updates.
- 📱 Responsive user interface.
- 🎨 Modern design using Tailwind CSS.
- 🧩 Reusable React components.
- 🪝 Custom React Hook for fetching currency data.

## 🛠️ Technologies Used

- **React.js** – Frontend library for building the user interface.
- **JavaScript (ES6+)** – Application logic and functionality.
- **Tailwind CSS** – Styling and responsive design.
- **Vite** – Development and build tool.
- **Exchange Rate API** – Fetching currency exchange rates.
- **React Hooks** – useState, useEffect, and custom hooks.

## 📂 Project Structure

```text
currency-converter/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Input.jsx
│   │   └── index.js
│   │
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Aryan-mhaskar/Currency-converter.git
```

### 2. Navigate to the project directory

```bash
cd Currency-converter
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Open the local URL provided by Vite, usually:

```text
http://localhost:5173/
```

## 🔄 How It Works

1. Select the source currency.
2. Enter the amount to convert.
3. Select the target currency.
4. Click the **Convert** button.
5. View the converted amount.
6. Use the **Swap** button to switch currencies.

## 🔌 API Used

This project uses the following currency exchange API:

🔗 [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api)

### API Endpoint

```javascript
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
```

The currency code is dynamically replaced based on the selected source currency.

## 📚 React Concepts Practiced

- Functional Components
- Props
- State Management
- useState Hook
- useEffect Hook
- Custom Hooks
- API Fetching
- Conditional Data Handling
- Component Reusability

## 🔮 Future Improvements

- Add loading indicators.
- Improve error handling.
- Add currency search functionality.
- Display historical exchange rates.
- Add dark mode.
- Deploy the application online.

## 👨‍💻 Author

**Aryan Mhaskar**

BSc IT Student | Aspiring Full Stack Developer

- GitHub: [Aryan-mhaskar](https://github.com/Aryan-mhaskar)

## 📄 License

This project is created for educational and learning purposes.
