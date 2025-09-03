# Portfolio - Nicola Palo

Questo è il portfolio personale di Nicola Palo, sviluppato con React e TypeScript.

## Deploy su GitHub Pages

Per deployare il sito su GitHub Pages:

1. **Build del progetto:**
   ```bash
   npm run build
   ```

2. **Deploy automatico:**
   ```bash
   npm run deploy
   ```

   Questo comando eseguirà automaticamente il build e pubblicherà il sito su GitHub Pages.

## Struttura del progetto

- `src/` - Codice sorgente React
- `public/` - File statici pubblici
- `build/` - Build di produzione (generato automaticamente)
- `index.html` - File HTML principale per GitHub Pages
- `static/` - File CSS e JS compilati

## Note per GitHub Pages

Il sito è configurato per funzionare su GitHub Pages con il dominio personalizzato `nicolapalo.eu`. 
Tutti i file necessari sono già presenti nella root del repository per il funzionamento su GitHub Pages.

**Importante**: Il sito usa path relativi per essere compatibile con il dominio personalizzato.

## Sviluppo locale

Per avviare il server di sviluppo:

```bash
npm start
```

Il sito sarà disponibile su `http://localhost:3000`
