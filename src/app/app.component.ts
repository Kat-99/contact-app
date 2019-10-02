/**
 * Pour déclarer une classe comme composant de notre applicaztion, on importe "component" via @angular/core
 */

import { Component } from '@angular/core';
import {ContactStructure} from './models/FichierContactStructure'; // importer la class leContactStructure (parce qu'on l'a déplacé,
                                                                   // et on a besoin de l'utiliser

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

  contactActif : ContactStructure;

// --Tableau de contacts

mesContacts: ContactStructure[] = [ // De base ContactStructure est un simple objet. Il n'est pas dans un tableau. Donc pour préciser
  {                                 // que le type ContactStructure est dans un tableau, il faudra mettre des crochets après ContactStructure.
    id: 1,                          // Comme ça : ContactStructure[].
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

// Permet d'afficher le profil d'un contact
  displayProfile(ContactCliqueParMonUtilisateur) {
    console.log (ContactCliqueParMonUtilisateur);
    this.contactActif = ContactCliqueParMonUtilisateur; // Pour sortir la valeur de displayProfile de la scope la fonction,
                                                        // on la met dans une variable à l'extérieur. On va ainsi pouvoir la réutiliser
                                                        // ailleur, entre autre dans le Jumbotron.

    // le this permet de désigner la class où nous sommes, à savoir AppComponent.
  }

  //le nouveau contact qui est récupéré depuis le composant New Comp

  addContact(nouveauContactSortiDuNewComposant: any) {
    this.mesContacts.push (nouveauContactSortiDuNewComposant);
  }
}
