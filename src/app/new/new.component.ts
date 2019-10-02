import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactStructure} from '../models/FichierContactStructure';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  @Output() newContactEvent = new EventEmitter(); //on a déclaré un nouveau événement.
  nouveauContact: ContactStructure = new ContactStructure();
  // ↑ je précise juste le type de ma variable (vu qu'on est en Type Script) avant de mettre le = . Mis
  // à part cela, la syntaxe reste la même.
  constructor() {
  }

  ngOnInit() {
  }

  submitcontact() {
    // C'est la fonction qui est appelée après la soumission du formulaire.
    console.log(this.nouveauContact);

    this.newContactEvent.emit(this.nouveauContact);
    this.nouveauContact= new ContactStructure();
    /**
     *Lorsque mon formulaire est soumis, j'émet un événement qui sera écouté
     *par mon application et qui récupérera les données du nouveau contact.
     */
  }

}
