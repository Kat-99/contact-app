import {Component, Input, OnInit} from '@angular/core';
import { ContactStructure } from '../models/FichierContactStructure';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input() contactProfil: ContactStructure;

  /**
   * Au moment ou Angular va charger notre composant? nous pouvons lui demander d'initialiser certaines valeurs.
   */

  /**
   * Le contstructeur est la première méthode à être exécutée au chargement de notre composant. Il va nous permettre d'initialiser
   * un certain nombre de données. C'est comme document ready dans jQuery.
   */

  constructor() { }

  /**
   * Après le constructor, au moment du chargement du composant, ngOnInit() est exécuté.
   */

  ngOnInit() {
  }

}
