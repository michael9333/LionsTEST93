# LionsTEST93 – Playbook Football Américain (React + TypeScript)

## Installation
```bash
npm install
npm start
```

## Build production
```bash
npm run build
```

## Fonctionnalités
- Déplacement joueurs (drag)
- Dessin de routes (types normal / dashed / block)
- Motions
- Free drawing
- Annotations
- Undo / Redo
- Sauvegarde formations & jeux (localStorage)
- Export / Import JSON
- Export JPEG (html2canvas)
- Animation (routes / motions / all) + vitesse
- Mode plein écran
- Calques défensifs (Cover 2 / Cover 3)

## Structure
```
public/
src/
  index.tsx
  styles.css
  constants/
  types/
  utils/
  components/
```

## Personnalisation
- Modifier `INITIAL_PLAYERS` dans `src/constants/index.ts`
- Ajouter d’autres couvertures défensives
- Remplacer ou adapter la logique d’animation si besoin

Bon dev !