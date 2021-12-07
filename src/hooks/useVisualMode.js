import { useState } from "react"


export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false) {
    if (replace){
      setHistory(prev => [...prev].slice(0, -1))
    } 
    setHistory(prev => [...prev, newMode]);
    setMode(newMode);
  }

  function back() {
    const historyTemp = [...history];
    setMode(historyTemp[historyTemp.length - 1])
    historyTemp.pop();
    setHistory(historyTemp);
  }

  return { mode , transition, back};
}