// Egna recept till Matsedeln (ES5, iOS 12).
// Samma format som RECEPT i index.html, plus:
//   bild:  sökväg till eget foto i mappen bilder/
//   kalla: var receptet kommer ifrån (visas diskret i receptet)
// Egna recept visas under sin kategori i biblioteket, märkta "Eget".
// Varor som inte redan finns i index.html läggs i EGNA_VAROR så att de hamnar
// i rätt avdelning i inköpslistan.

var EGNA_VAROR = {
  gront: ['butternutpumpa'],
  kryddor: ['Panamat']
};

var EGNA_RECEPT = [
  { id: 'e1', kat: 'kott', namn: 'Kryddiga pannbiffar med rostad butternutpumpa och couscous', tid: 40,
    bild: 'bilder/e1.jpg', kalla: 'HelloFresh',
    ing: [[450, 'g', 'nötfärs'], [8, 'g', 'Panamat'], [2, 'st', 'ägg'], [2, 'msk', 'vetemjöl'],
          [1, 'st', 'butternutpumpa'], [2, 'st', 'röd paprika', 'röda paprikor'], [2, 'st', 'rödlök'],
          [2, 'tsk', 'spiskummin'], [3, 'dl', 'couscous'], [1.5, 'dl', 'turkisk yoghurt'],
          [2, 'klyftor', 'vitlök'], [1, 'knippe', 'persilja'], [2, 'msk', 'olivolja'],
          [0, '', 'salt'], [0, '', 'peppar']],
    steg: ['Sätt ugnen på 240° (220° varmluft). Skala pumpan, gröp ur kärnorna och tärna den i 2 cm stora bitar. Tärna paprikan och skär löken i klyftor.',
           'Lägg grönsakerna på en plåt med bakplåtspapper och blanda med en skvätt olivolja, spiskummin, 1 tsk salt och lite peppar. Rosta 20–30 minuter tills de är gyllene och mjuka. Ta två plåtar om det blir trångt.',
           'Koka upp 4½ dl vatten med ½ tsk salt. Rör i couscousen, ta kastrullen från värmen och låt stå under lock i 5 minuter. Rör om med en gaffel.',
           'Blanda färs, Panamat, ägg, mjöl, 1 tsk salt och lite peppar i en skål.',
           'Hetta upp olivolja i en stor stekpanna på medelhög värme. Klicka ut biffar med en sked, 3 per person, och platta till dem. Stek 2–3 minuter per sida tills de är genomstekta.',
           'Hacka persiljan. Blanda yoghurten med pressad vitlök och en nypa salt och peppar.',
           'Rör ner de rostade grönsakerna, persiljan och lite salt i couscousen. Servera med pannbiffarna och vitlöksyoghurten.'] }
];
