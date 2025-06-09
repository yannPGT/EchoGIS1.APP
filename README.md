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
 ┣ 📂 data/               # Fichiers JSON (Q/R extraites, configuration)
 ┣ 📂 assets/             # Icônes, images, logos
 ┣ 📂 components/         # Composants HTML/JS
 ┣ 📂 styles/             # Fichiers CSS ou Tailwind
 ┣ 📜 index.html          # Point d’entrée
 ┣ 📜 main.js             # Script principal
 ┣ 📜 extract.js          # Extraction Q/R depuis PV
 ┣ 📜 README.md           # Ce fichier
 ┣ 📜 .gitignore
 ┗ 📜 LICENSE

## 🔄 Réinitialisation et import des données

1. **Réinitialiser** :
   - Ouvrez les outils développeur de votre navigateur (F12).
   - Dans la console, exécutez `localStorage.removeItem('echogis1-data');` puis rechargez la page.

2. **Importer des données** :
   - Dans le panneau administrateur, onglet « Import/Export », cliquez sur *Choisir un fichier*.
   - Sélectionnez une sauvegarde JSON ou un fichier Word/PDF contenant les questions.
   - Validez pour mettre à jour la base locale.
