# Post-Launch Checklist

**Ziel:** Produktion vollständig verifizieren bevor WordPress abgeschaltet wird.

---

## Domain & Redirects

- [ ] https://www.achtsam-bleiben.de/ lädt korrekt
- [ ] http://achtsam-bleiben.de/ → 308 → https://www.achtsam-bleiben.de/
- [ ] https://achtsam-bleiben.de/ → 308 → https://www.achtsam-bleiben.de/
- [ ] SSL-Zertifikat gültig (kein Browser-Warning)

---

## Hauptseiten

- [ ] / — Homepage, Hero-Bild, 4 Service-Buttons sichtbar
- [ ] /meditationswissen/ — Karten-Layout korrekt
- [ ] /kontakt/ — Kontaktinfos + Google Maps geladen
- [ ] /ueber-mich/
- [ ] /meditationstermine-in-frankfurt/
- [ ] /meine-philosophie-beim-meditieren/
- [ ] /resilienz-training-fuer-unternehmen/
- [ ] /achtsamkeitstraining-fuer-unternehmen/
- [ ] /persoenlichkeits-coaching-in-frankfurt/
- [ ] /resilienz-coaching-in-frankfurt/
- [ ] /rueckmeldungen/
- [ ] /impressum/
- [ ] /datenschutzerklaerung/

---

## Blog-Artikel (Stichproben)

- [ ] Mindestens 3 Artikel aufrufen und Layout prüfen
- [ ] Bilder in Artikeln laden korrekt

---

## Mobile

- [ ] Homepage auf Mobile (Navigation, Hero, Buttons)
- [ ] Eine Unterseite auf Mobile
- [ ] Navigation Hamburger-Menü funktioniert

---

## Assets & Bilder

- [ ] Hero-Bild lädt (mediation-fuer-firmen.jpg)
- [ ] Adress-Bild auf /impressum/ und /datenschutzerklaerung/ sichtbar
- [ ] Keine broken image icons auf irgendeiner Seite
- [ ] Browser DevTools → Network: keine 404-Fehler für Assets

---

## Technisches

- [ ] /sitemap.xml erreichbar und befüllt
- [ ] /robots.txt erreichbar
- [ ] /wp-admin/ → 410 (WordPress-URLs blockiert)
- [ ] /wp-login.php → 410

---

## WordPress Shutdown (letzter Schritt)

Erst abhaken wenn alle obigen Punkte erledigt:

- [ ] Alle Checks oben abgeschlossen
- [ ] Keine offenen visuellen Bugs
- [ ] WordPress / Hetzner Server deaktivieren
