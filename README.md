Primissimo esercizio utilizzando Vue.js da cdn nel quale, utilizzando lo snippet iniziale fornitoci dal sito ufficiale, inserire un'immagine e la scritta 'CIAO MONDO'.
A seguire ci sono delle domande che poi sarebbero state fatte la mattina dopo a lezione e delle definizioni su quello che è e che si può fare con Vue.js

- cosa sono gli sfc o componenti a singolo file e come si implementano?
- cosa e' un virtual DOM?
- vulnerabilita' XSS cosa sono?
- cosa sono gli argomenti dinamici?
- cosa significa restricted global access?
- modificatori cosa sono e come si usano

- Quindi vue.js e' un framework che si implementa all'html e css permettendoti di creare dinamicamente oggetti nel DOM utilizando 2 tipi di approcci che sono option e composition riferito al tipo di API.
L'approccio option e' improntato per avvicinarsi a questo tipo di framework per chi proviene gia' da una programmazione ad oggetti.
Utilizzato principalmente a scopo didattico o per ambienti di sviluppo a bassa complessita'
Nel caso dell'approccio composition invece e' piu' indirizzato alla generazione di app piu' complesse infatti viene utilizzato in ambienti di sviluppo insieme agli sfc per creare app complete

- vue.js per comunicare dinnamicamente con il dom utilizza l'interpolazione del testo che equivale ad esempio a inserire del testo in un tag html preso da un oggetto destrutturato nel documento js utilizzando la seguente sintassi : {{ esempio }}.
Per cambiare attributi o aggiungere argomenti ai tag si utilizzano delle direttive che iniziano tutte con v-,
ad esmpio v-bind,v-if,v-for e altre che facilitano la scrittura del javascript e l'implementazione nel DOM 
per cambiare gli attributi di un tag invece utilizza una direttiva chiamata v-bind 