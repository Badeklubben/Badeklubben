# How-to med nytt oppsett
Eg har endra oppsettet ein del her (ikkje sikkert det er betre), så denne readme fila er ein liten guide. 


## member
Denne mappa lager dynamiske ruter til kvar bruker (basert på sanity **member.id**), og forsikrer at alle sine sider har samme stil/oppsett. Viss du legg til nye mapper i tillegg til **kontakt**, **meg** etc: legg namnet på den nye mappa til i **paths** i **layout.tsx**. No vil endringar på brukersida gjelde for alle, men eg tenker i alle fall at viss nokon har ein god ide til forbedring går det fint at min vert endra og

## projects
Her kan ein lage prosjekt i kvar si mappe e.g. **lars**.  Det er viktig at namnet på mappa di matcher **member.id** frå sanity (som den gjer for alle no). Når du legg til nye prosjekt i mappa di må du også legge til namnet på prosjektet i **prosjekter/page.tsx**.


## Konklusjon
FUCK **export const runtime = 'edge';**

Prøvde å gjere det smudare men

FUCK **export const runtime = 'edge';**

FUCK **export const runtime = 'edge';**