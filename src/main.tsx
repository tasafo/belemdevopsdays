
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Update metadata for SEO
document.title = "DevOpsDays Belém 2025 - O maior evento de DevOps da região Norte";

// Add meta description for SEO
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'DevOpsDays Belém 2025 - Evento para profissionais de tecnologia compartilharem conhecimentos sobre DevOps, automação, cloud e TI moderna. Acontece dia 7 de junho de 2025 em Belém do Pará.';
document.head.appendChild(metaDescription);

// Add viewport meta tag for responsive design
const viewport = document.createElement('meta');
viewport.name = 'viewport';
viewport.content = 'width=device-width, initial-scale=1.0';
document.head.appendChild(viewport);

// Add open graph tags for social sharing
const ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = 'DevOpsDays Belém 2025';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.content = 'O maior evento de DevOps da região Norte. Palestras, networking e muito conhecimento.';
document.head.appendChild(ogDescription);

const ogType = document.createElement('meta');
ogType.setAttribute('property', 'og:type');
ogType.content = 'website';
document.head.appendChild(ogType);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
