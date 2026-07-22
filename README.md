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

## Importer un fichier JSON

Vous pouvez importer une liste de questions/réponses au format JSON via
l'onglet **Import/Export** de l'interface administrateur. Le fichier doit
contenir un tableau d'objets avec les propriétés `question`, `réponse` et
`compagnie` (voir `docs/import.json`). Les entrées importées sont ajoutées
aux FAQ existantes et une sauvegarde automatique est créée.

## Widget Grist — workflow permissions à l'étranger

Un prototype de widget HTML autonome est disponible dans `public/grist-workflow-permissions.html`.

### Utilisation dans Grist

1. Créer une table Grist contenant au minimum les colonnes métier : `numero`, `agent`, `dateInitiation`, `statut`, `etape`, `responsables`, `transmisLe`, `destination`, `dateDepart`, `dateRetour`, `commentaire`.
2. Ajouter un widget personnalisé de type URL ou HTML.
3. Si l'accès GitHub Pages est bloqué, copier-coller le contenu complet de `public/grist-workflow-permissions.html` dans le widget HTML.
4. Autoriser l'accès complet si l'écriture dans la table est souhaitée, puis mapper les colonnes proposées par le widget.

Le fichier fonctionne aussi sans connexion à Grist avec quelques demandes d'exemple, ce qui permet de valider l'affichage auprès des utilisateurs avant de brancher la base réelle.
