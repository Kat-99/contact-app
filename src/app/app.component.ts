/**
 * Pour déclarer une classe comme composant de notre applicaztion, on importe "component" via @angular/core
 */

import { Component } from '@angular/core';

/**
 * @component est ce qu'on appel un décorateur. Il va nous permettre de définir 3 paramètres essentiels à notre application
 */

@Component({    // Décorateur
  selector: 'app-root',

  templateUrl: './app.component.html',

  /**
   * "templateUrl" ou "template" est la partie visible de notre composant.
   * C'est ce qui s'affiche à l'écran lorsque le composant est utilisé
   */

  styleUrls: ['./app.component.scss']

  /**
   * Déclarer les styles. NB: C'est un tableau
   */
})
export class AppComponent {

  /**
   * La class contient les données du composant, mais aussi son comportement.
   * Dans notre contexte MVVM, notre class correspond au Model
   */

  // --Déclaration d'une variable
  title = 'Gestion de contact';

  unContact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugoliegeard',
    email: 'wf3@hl-media.fr'
  };

// --Tableau de contacts

mesContacts = [
  {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugoliegeard',
    email: 'wf3@hl-media.fr'
  },
  {
    id: 2,
    name: 'Nia VITALIS',
    username: 'niavitalis',
    email: 'nia971@gmail.com'
  },
  {
    id: 3,
    name: 'Astrid JONATHAN',
    username: 'astridjonathan',
    email: 'astrid.j@gmail.com'
  },

];

}
