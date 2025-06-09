# EchoGIS1.APP

**Plateforme autonome de concertation et de consultation FAQ**  
Développée pour le 1er groupement d'incendie et de secours (BSPP)

---

## 🧭 Objectif du projet

Cette application vise à :
- Centraliser les questions/réponses issues des réunions de concertation
- Permettre leur consultation rapide par mots-clés et filtres
- Extraire automatiquement les Q/R depuis des PV Word ou PDF
- Afficher dynamiquement les dates à venir des réunions de CPUE
- Être utilisée localement sans base de données ni droits administrateur

---

## 📁 Structure du projet

```bash
📦 EchoGIS1.APP/
 ┣ 📂 src/                # Code source React/TypeScript
 ┃ ┣ 📂 components/       # Composants de l’interface
 ┃ ┣ 📂 utils/            # Fonctions utilitaires
 ┃ ┣ 📂 types/            # Définitions de types
 ┃ ┣ 📜 App.tsx
 ┃ ┗ 📜 main.tsx
 ┣ 📂 data/               # Données JSON importées ou générées
 ┣ 📂 assets/             # Logos, icônes, illustrations
 ┣ 📂 styles/             # Fichiers CSS/Tailwind
 ┣ 📂 docs/               # Version compilée pour GitHub Pages
 ┣ 📜 index.html          # Point d’entrée Vite
 ┣ 📜 extract.js          # Script d’analyse des PV Word/PDF
 ┣ 📜 package.json        # Dépendances et scripts
 ┣ 📜 README.md           # Cette documentation
 ┗ 📜 LICENSE.txt         # Licence open source


