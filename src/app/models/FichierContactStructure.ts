export class ContactStructure { // en rajoutant le export devant la class, on va pouvoir accéder à ces données depuis l'extérieur,
                                // depuis d'autres fichiers ts. PS: C'est seulement devant les class typescript qu'on est obligé de
                                // rajouter export pour pouvoir les utiliser ailleurs.
  id: number;
  name: string;
  username: string;
  email: string;
  adress?: object; // Les points d'interrogation indiquent à Angular que ce n'est pas grave si ces informations là ne sont pas renseignées
  phone?: number;  // plus bas. Si on ne les mettait pas, L'éditeur m'aurait affiché une erreur (m'aurait souligné unContact (en bas)) pour
  website?: string; // me notifier qu'il manque ces informations.
  company?: object;
}
