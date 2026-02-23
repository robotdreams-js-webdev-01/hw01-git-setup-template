# 1. házi – Git & GitHub setup

## Kontextus

**Kapcsolódó óra:** 2. óra – VSCode, Git, GitHub, Markdown

---

## Tanulási célok

- Node.js 22 LTS, Git, VSCode telepítése és konfigurálása
- `git add` / `commit` / `push` alapok, értelmes commit üzenetek (Conventional Commits)
- GitHub profil tudatos kialakítása
- Markdown írás alapjai

---

## Részletes feladatleírás

### 1. Toolchain telepítése

Telepítsd az alábbi eszközöket, és ellenőrizd, hogy működnek:

- **Node.js 22 LTS** – [nodejs.org](https://nodejs.org/)
- **Git** – [git-scm.com](https://git-scm.com/)
- **VSCode** – [code.visualstudio.com](https://code.visualstudio.com/)
- VSCode extensionök: **ESLint**, **Prettier**, **GitLens**, **GitHub Copilot**

A **student/README.md**-ben (vagy a repó README-jében) jelezd, hogy ezek telepítve vannak (pl. egy rövid felsorolásban).

### 2. GitHub profil kialakítása

Hozd létre vagy frissítsd a GitHub profilodat:

- Tölts fel egy **avatart** (saját fotó vagy egy stílusos placeholder)
- Írj egy rövid **bio-t** (1–2 mondat, ki vagy, mit tanulsz)
- Adj meg egy **linket** (LinkedIn, portfólió, vagy bármilyen releváns oldal)

### 3. GitHub Classroom assignment elfogadása

Fogadd el a GitHub Classroom assignment linket (az oktatótól kapod meg)!
Ez automatikusan létrehozza a **privát repódat** a `robotdreams-js-webdev-01` szervezeten belül.

### 4. Git repository klónozása

Klónozd le a repot a saját gépedre (ha Windowst használsz, akkor WSL-re) a `git clone` parancs segítségével!
Használhatod a HTTPS és az SSH módot is, de az SSH az ajánlott. Ehhez segítséget [itt](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux) és [itt](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) találsz.

### 5. Dependenciák

Futtasd le az `npm install` parancsot a repon belül!
Látni fogod, hogy a git fel akarja ezeket a változtatásokat venni, de erre nincs szükség, hiszen minden fontos információt a `package.json` már tartalmaz.

### 5. .gitignore

A repó gyökerében legyen **.gitignore** fájl, amely tartalmazza a **node_modules/** sort (és esetleg más, nem feltöltendő fájlokat).
Ez fogja megakadályozni, hogy a git fel akarja tölteni az akár nagyra is növekvő `node_modules` mappát.

### 6. Saját README létrehozása a student mappában

Hozd létre a **student/README.md** fájlt a `student/README-example.md` mintája alapján, a **saját adataiddal**. A fájl tartalmazzon:

- **Bemutatkozás** szakaszt (2–3 mondat: ki vagy, miért tanulsz programozni)
- **Kurzuscélok** szakaszt legalább **3 bullet ponttal** (mit szeretnél megtanulni/elérni)
- Legalább **két szintű fejlécet** (pl. `## Bemutatkozás`, `## Kurzuscélok`)
- Opcionálisan: kapcsolat / LinkedIn / portfólió link

A minta csak segítség – ne másold szó szerint, alakítsd a saját szövegedre.

### 7. Commitok

Legalább **2 commitot** hozz létre értelmes üzenetekkel. Használd a Conventional Commits konvenciót:

```
feat: add personal bio to README
docs: add course goals section
chore: add .gitignore
```

---

## Minimum elvárások

- A **student/README.md** létezik és a fenti tartalmi követelményeknek megfelel
- A **.gitignore** tartalmazza a node_modules kizárását
- Legalább 1 komolyabb (nem üres, nem „first commit”) commit üzenet

---

## Pontozás

- **Automatikus pont (CI tesztek):** max 10 p
- **Manuális pont (commit üzenetek, profil, README minőség – az oktató adja):** max 5 p
- **Összesen:** 15 pont

---

## Futtatás

Ehhez a házihoz **csak Git és npm szükséges**.

---

## Tippek

> 💡 Nézd vissza a **2. óra diasorát** –
> Git alapok, commit üzenetek konvenciói, GitHub profil kialakítás!
