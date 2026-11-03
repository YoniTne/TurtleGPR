# Calculs antenne LPDA-MAX

## Variables et unités

| Symbole | Signification | Unité |
|---|---|---|
| c | Vitesse de la lumière dans le vide | m/ns (0,3 m/ns = 300 000 km/s) |
| εr | Permittivité relative du sable (sa capacité à ralentir l'onde) | sans unité |
| v | Vitesse de l'onde dans le sable | m/ns |
| B | Bande passante = fmax - fmin | GHz (700 MHz = 0,7 GHz) |
| ΔR | Résolution : plus petite distance entre 2 objets qu'on peut séparer | m (converti en cm) |
| d | Profondeur de la cible | m |
| t | Temps aller-retour de l'onde (descente + remontée) | ns |
| N | Nombre de points de mesure du VNA | sans unité |
| Rmax | Profondeur max mesurable sans erreur | m |
| S | Espacement entre l'antenne TX et l'antenne RX | m |

## Hypothèses

- Bande : 300 - 1000 MHz, donc B = 700 MHz
- c = 0,3 m/ns
- Sable sec : εr = 4, sable humide : εr = 10

## 1. Vitesse dans le sable

v = c / √εr

| Sable | v |
|---|---|
| Sec | 0,15 m/ns |
| Humide | 0,095 m/ns |

## 2. Résolution en distance

ΔR = v / (2 × B)

| Sable | ΔR |
|---|---|
| Sec | 0,15 / (2 × 0,7) = 10,7 cm |
| Humide | 0,095 / (2 × 0,7) = 6,8 cm |

Un nid fait 20 à 30 cm, donc il est détectable avec 1 écho de début
et 1 écho de fin.

## 3. Profondeur

d = v × t / 2

Temps aller-retour pour 1 m :

| Sable | t |
|---|---|
| Sec | 2 / 0,15 = 13,3 ns |
| Humide | 2 / 0,095 = 21 ns |

Atténuation : 0,1 dB/m en sable sec, 2,6 dB/m en sable humide.

Selon (Turkozan 2000, Chelonian Conservation and Biology, et Nova Southeastern)

La Profondeur réelle d'un nid de Caretta caretta : environ 30 à 60 cm (à confirmer)

## 4. Nombre de points du VNA

Rmax = v × (N - 1) / (2 × B)

Avec 201 points en sable humide : 0,095 × 200 / 1,4 = 13,5 m. suffisant pour 1 m.

Avec 21 points : 1,4 m seulement, trop juste.

## 5. Espacement TX / RX

S = 2 × d / √(εr - 1), pour d = 1 m

| Sable | S |
|---|---|
| Sec | 2 / √3 = 1,15 m |
| Humide | 2 / 3 = 0,67 m |

L'antenne fait 40 cm de large, donc 40 cm minimum entre les centres.

## Résumé

| Paramètre | Valeur |
|---|---|
| Bande (B) | 300 - 1000 MHz |
| Résolution (ΔR) | 7 à 11 cm |
| Profondeur visée (d) | 1 m |
| Points VNA | 201 |
| Espacement TX/RX | 40 cm |

Les valeurs de εr sont théoriques, à vérifier avec des mesures / outils sur le vrai sable.

