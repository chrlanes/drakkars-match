# Cahier des charges — Programme de match digital
> Document destiné au graphiste. Mis à jour : 2026-03-16

---

## Principe général

Le programme de match est publié sur un repo GitHub public dédié.
Dès que tu pousses les fichiers, il est automatiquement visible dans l'application Drakkars pour tous les supporters.

- **Repo GitHub** : `https://github.com/chrlanes/drakkars-match`
- **URL publique** : `https://chrlanes.github.io/drakkars-match/`

---

## Ce que tu fournis pour chaque match

### 1. Le fichier HTML de la publication

Exporte ton programme depuis ton logiciel (InDesign, Affinity Publisher, etc.) en **publication web HTML**.

L'export doit produire cette structure :

```
index.html
publication-web-resources/
    css/
        main.css
        idGeneratedStyles.css
    html/
        publication.html
        publication-1.html
        publication-2.html
        ... (une page par slide)
    image/
        ... (toutes les images)
    script/
        main.js          ← ⚠️ voir note ci-dessous
```

> **⚠️ Important — fichier JavaScript**
> Certains logiciels exportent le script sous le nom `main.j_` (avec underscore).
> Il faut le renommer en `main.js` avant de le pousser sur GitHub, sinon le viewer ne fonctionnera pas.

> **⚠️ Important — affichage mobile (viewport)**
> Les pages HTML de la publication doivent contenir cette balise dans le `<head>` pour s'afficher correctement sur smartphone :
> ```html
> <meta name="viewport" content="width=1080">
> ```
> Certains logiciels ne l'ajoutent pas automatiquement. Si elle est absente, le texte apparaît déformé ou trop grand sur mobile.
> Vérifie sa présence dans chaque fichier `publication-*.html` avant de publier.

---

### 2. Le fichier `meta.json`

Ce fichier dit à l'application si un programme est disponible et pour quel match.
Il doit être à la racine du repo, au même niveau que `index.html`.

**Format :**
```json
{
  "available": true,
  "opponent": "Nom de l'équipe adverse",
  "match_date": "YYYY-MM-DD",
  "updated_at": "YYYY-MM-DDTHH:MM:SSZ"
}
```

**Exemple pour un match vs Épinal le 21 mars 2026 :**
```json
{
  "available": true,
  "opponent": "Épinal",
  "match_date": "2026-03-21",
  "updated_at": "2026-03-20T18:00:00Z"
}
```

> **Note** : `updated_at` déclenche le badge **"Nouveau"** dans l'app pour tous les supporters.
> Mets l'heure à laquelle tu publies le programme (format ISO 8601, heure UTC).

**Pour désactiver le programme après le match :**
```json
{
  "available": false,
  "opponent": "",
  "match_date": "",
  "updated_at": ""
}
```

---

## Workflow avant chaque match

```
1. Crée le programme dans ton logiciel
2. Exporte en publication web HTML
3. Renomme main.j_ → main.js si nécessaire
4. Mets à jour meta.json (available: true + infos du match)
5. Commit et push sur GitHub (branche main)
6. Attends 1-2 minutes → GitHub Pages se met à jour automatiquement
7. Vérifie sur https://chrlanes.github.io/drakkars-match/
```

---

## Workflow après chaque match (facultatif)

Pour masquer le programme dans l'app une fois le match terminé :

1. Mets `"available": false` dans `meta.json`
2. Commit et push

---

## Structure complète du repo à chaque match

```
drakkars-match/
├── index.html                          ← point d'entrée (ne pas modifier)
├── meta.json                           ← à mettre à jour à chaque match
└── publication-web-resources/
    ├── css/
    │   ├── main.css
    │   └── idGeneratedStyles.css
    ├── html/
    │   ├── publication.html
    │   ├── publication-1.html
    │   └── ...
    ├── image/
    │   └── ... (toutes les images du programme)
    └── script/
        └── main.js                     ← ⚠️ bien en .js (pas .j_)
```

---

## Liens et hypertext dans le programme

Tous les liens cliquables dans ton HTML fonctionneront normalement dans l'app.
Les supporters ouvriront le programme dans leur navigateur (Safari/Chrome) intégré à l'application.

---

## Accès au repo GitHub

Tu dois avoir reçu une invitation de collaboration sur `chrlanes/drakkars-match`.
Si ce n'est pas le cas, contacter : christophe.lanes@hockeyclubcaen.fr

**Cloner le repo :**
```bash
git clone https://github.com/chrlanes/drakkars-match.git
```

**Pousser les modifications :**
```bash
git add -A
git commit -m "Programme de match vs [Adversaire] — [Date]"
git push
```

---

## Contact technique

Christophe Lanes — christophe.lanes@hockeyclubcaen.fr
