const words = [
    { original: 'hopital', correct: 'hôpital' },
    { original: 'foret', correct: 'forêt' },
    { original: 'ile', correct: 'île' },
    { original: 'hotel', correct: 'hôtel' },
    { original: 'pate', correct: 'pâte' },
    { original: 'maitre', correct: 'maître' },
    { original: 'gateau', correct: 'gâteau' },
    { original: 'sur', correct: 'sûr' },
    { original: 'du', correct: 'dû' },
    { original: 'aout', correct: 'août' },
    { original: 'fenetre', correct: 'fenêtre' },
    { original: 'tete', correct: 'tête' },
    { original: 'cote', correct: 'côte' },
    { original: 'gout', correct: 'goût' },
    { original: 'mat', correct: 'mât' },
    { original: 'age', correct: 'âge' },
    { original: 'chateau', correct: 'château' },
    { original: 'drole', correct: 'drôle' },
    { original: 'pale', correct: 'pâle' },
    { original: 'boite', correct: 'boîte' },
    { original: 'crepe', correct: 'crêpe' },
    { original: 'ane', correct: 'âne' },
    { original: 'fete', correct: 'fête' },
    { original: 'peche', correct: 'pêche' },
    { original: 'crane', correct: 'crâne' },
    { original: 'traineau', correct: 'traîneau' },
    { original: 'rever', correct: 'rêver' },
    { original: 'noel', correct: 'Noël' },
    { original: 'naif', correct: 'naïf' },
    { original: 'ambiguite', correct: 'ambiguïté' },
    { original: 'pere', correct: 'père' },
    { original: 'mere', correct: 'mère' },
    { original: 'frere', correct: 'frère' },
    { original: 'guerre', correct: 'guerre' },
    { original: 'equipe', correct: 'équipe' },
    { original: 'demenager', correct: 'déménager' },
    { original: 'fenetre', correct: 'fenêtre' },
    { original: 'genereux', correct: 'généreux' },
    { original: 'maitresse', correct: 'maîtresse' },
    { original: 'miserable', correct: 'misérable' },
    { original: 'portiere', correct: 'portière' },
    { original: 'premiere', correct: 'première' },
    { original: 'rever', correct: 'rêver' },
    { original: 'repeter', correct: 'répéter' },
    { original: 'regle', correct: 'règle' },
    { original: 'sucre', correct: 'sucre' },
    { original: 'sejour', correct: 'séjour' },
    { original: 'dejeuner', correct: 'déjeuner' },
    { original: 'negliger', correct: 'négliger' },
    { original: 'hebergement', correct: 'hébergement' },
    { original: 'preserver', correct: 'préserver' },
    { original: 'preferer', correct: 'préférer' },
    { original: 'preference', correct: 'préférence' },
    { original: 'premature', correct: 'prématuré' },
    { original: 'necessaire', correct: 'nécessaire' },
    { original: 'proprietaire', correct: 'propriétaire' },
    { original: 'celebrer', correct: 'célébrer' },
    { original: 'federation', correct: 'fédération' },
    { original: 'effet', correct: 'effet' },
    { original: 'reveler', correct: 'révéler' },
    { original: 'serieux', correct: 'sérieux' },
    { original: 'secheresse', correct: 'sécheresse' },
    { original: 'frequenter', correct: 'fréquenter' },
    { original: 'etendre', correct: 'étendre' },
    { original: 'etude', correct: 'étude' },
    { original: 'defendre', correct: 'défendre' },
    { original: 'etre', correct: 'être' },
    { original: 'eleve', correct: 'élève' },
    { original: 'retenir', correct: 'retenir' },
    { original: 'regime', correct: 'régime' },
    { original: 'debuter', correct: 'débuter' },
    { original: 'quete', correct: 'quête' },
    { original: 'relire', correct: 'relire' },
    { original: 'demeurer', correct: 'demeurer' },
    { original: 'tresor', correct: 'trésor' },
    { original: 'treve', correct: 'trêve' },
    { original: 'apres', correct: 'après' },
    { original: 'concret', correct: 'concret' },
    { original: 'cafe', correct: 'café' },
    { original: 'eleve', correct: 'élève' },
    { original: 'ete', correct: 'été' },
    { original: 'ecole', correct: 'école' },
    { original: 'idee', correct: 'idée' },
    { original: 'passe', correct: 'passé' },
    { original: 'controle', correct: 'contrôle' },
    { original: 'cite', correct: 'cité' },
    { original: 'lachete', correct: 'lâcheté' },
    { original: 'equipe', correct: 'équipe' },
    { original: 'etude', correct: 'étude' },
    { original: 'devote', correct: 'dévoté' },
    { original: 'regle', correct: 'règle' },
    { original: 'repete', correct: 'répété' },
    { original: 'ecoute', correct: 'écoute' },
    { original: 'promenade', correct: 'promenade' },
    { original: 'refuge', correct: 'réfugié' },
    { original: 'apres', correct: 'après' },
    { original: 'precedent', correct: 'précédent' },
    { original: 'reseau', correct: 'réseau' },
    { original: 'derniere', correct: 'dernière' },
    { original: 'repetitif', correct: 'répétitif' },
    { original: 'particulier', correct: 'particulier' },
    { original: 'forcee', correct: 'forcée' },
    { original: 'certificat', correct: 'certificat' },
    { original: 'reglement', correct: 'règlement' },
    { original: 'fete', correct: 'fête' },
    { original: 'television', correct: 'télévision' },
    { original: 'degre', correct: 'degré' },
    { original: 'deja', correct: 'déjà' },
    { original: 'proteger', correct: 'protéger' },
    { original: 'egalite', correct: 'égalité' },
    { original: 'ambigue', correct: 'ambiguë' },
    { original: 'desole', correct: 'désolé' },
    { original: 'armee', correct: 'armée' },
    { original: 'egalement', correct: 'également' },
    { original: 'crée', correct: 'créé' },
    { original: 'decharge', correct: 'décharge' },
    { original: 'pere', correct: 'père' },
    { original: 'trainee', correct: 'traînée' },
    { original: 'idee', correct: 'idée' },
    { original: 'echange', correct: 'échange' },
    { original: 'climatise', correct: 'climatisé' },
    { original: 'continuee', correct: 'continuée' },
    { original: 'desirée', correct: 'désirée' },
    { original: 'entree', correct: 'entrée' },
    { original: 'protege', correct: 'protégé' },
    { original: 'nettoye', correct: 'nettoyé' },
    { original: 'recente', correct: 'récente' },
    { original: 'facade', correct: 'façade' },
    { original: 'garcon', correct: 'garçon' },
    { original: 'eleve', correct: 'élève' },
    { original: 'etudiant', correct: 'étudiant' },
    { original: 'universite', correct: 'université' },
    { original: 'lecon', correct: 'leçon' },
    { original: 'medecin', correct: 'médecin' },
    { original: 'secret', correct: 'secret' },
    { original: 'ancien', correct: 'ancien' },
    { original: 'chaud', correct: 'chaud' },
    { original: 'autre', correct: 'autre' },
    { original: 'eclair', correct: 'éclair' },
    { original: 'celebre', correct: 'célèbre' },
    { original: 'eviter', correct: 'éviter' },
    { original: 'depart', correct: 'départ' },
    { original: 'cheminee', correct: 'cheminée' },
    { original: 'francois', correct: 'François' },
    { original: 'laicite', correct: 'laïcité' },
    { original: 'eglise', correct: 'église' },
    { original: 'juin', correct: 'juin' },
    { original: 'idee', correct: 'idée' },
    { original: 'ecriture', correct: 'écriture' },
    { original: 'joie', correct: 'joie' },
    { original: 'heure', correct: 'heure' },
    { original: 'arret', correct: 'arrêt' },
    { original: 'essayer', correct: 'essayer' },
    { original: 'etonnant', correct: 'étonnant' },
    { original: 'commence', correct: 'commencé' },
    { original: 'devant', correct: 'devant' },
    { original: 'dire', correct: 'dire' },
    { original: 'naissance', correct: 'naissance' },
    { original: 'paysan', correct: 'paysan' },
    { original: 'porte', correct: 'porte' },
    { original: 'avenir', correct: 'avenir' },
    { original: 'recherche', correct: 'recherche' },
    { original: 'domaine', correct: 'domaine' },
    { original: 'prix', correct: 'prix' },
    { original: 'droit', correct: 'droit' },
    { original: 'peur', correct: 'peur' },
    { original: 'aider', correct: 'aider' },
    { original: 'vivre', correct: 'vivre' },
    { original: 'vrai', correct: 'vrai' },
    { original: 'enfant', correct: 'enfant' },
    { original: 'amour', correct: 'amour' },
    { original: 'belle', correct: 'belle' },
    { original: 'guerre', correct: 'guerre' },
    { original: 'beau', correct: 'beau' },
    { original: 'nuit', correct: 'nuit' },
    { original: 'question', correct: 'question' },
        { original: 'resolu', correct: 'résolu' },
    { original: 'actuel', correct: 'actuel' },
    { original: 'musee', correct: 'musée' },
    { original: 'naif', correct: 'naïf' },
    { original: 'gracieuse', correct: 'gracieuse' },
    { original: 'garantie', correct: 'garantie' },
    { original: 'courrier', correct: 'courrier' },
    { original: 'cheque', correct: 'chèque' },
    { original: 'produit', correct: 'produit' },
    { original: 'reponse', correct: 'réponse' },
    { original: 'volontaire', correct: 'volontaire' },
    { original: 'branche', correct: 'branche' },
    { original: 'privilege', correct: 'privilège' },
    { original: 'regular', correct: 'régular' },
    { original: 'trop', correct: 'trop' },
    { original: 'signale', correct: 'signalé' },
    { original: 'rapide', correct: 'rapide' },
    { original: 'normal', correct: 'normal' },
    { original: 'instinct', correct: 'instinct' },
    { original: 'monde', correct: 'monde' },
    { original: 'impression', correct: 'impression' },
    { original: 'apprecier', correct: 'apprécier' },
    { original: 'bureau', correct: 'bureau' },
    { original: 'celeste', correct: 'céleste' },
    { original: 'fin', correct: 'fin' },
    { original: 'pomme', correct: 'pomme' },
    { original: 'courage', correct: 'courage' },
    { original: 'gagner', correct: 'gagner' },
    { original: 'sauf', correct: 'sauf' },
    { original: 'societe', correct: 'société' },
    { original: 'profondeur', correct: 'profondeur' },
    { original: 'police', correct: 'police' },
    { original: 'unite', correct: 'unité' },
    { original: 'ensemble', correct: 'ensemble' },
    { original: 'intensite', correct: 'intensité' },
    { original: 'precaution', correct: 'précaution' },
    { original: 'important', correct: 'important' },
    { original: 'calculer', correct: 'calculer' },
    { original: 'explique', correct: 'expliqué' },
    { original: 'imaginer', correct: 'imaginer' },
    { original: 'moral', correct: 'moral' },
    { original: 'reussir', correct: 'réussir' },
    { original: 'danger', correct: 'danger' },
    { original: 'stabiliser', correct: 'stabiliser' },
    { original: 'relaxer', correct: 'relaxer' },
    { original: 'univers', correct: 'univers' },
    { original: 'cacher', correct: 'cacher' },
    { original: 'tenter', correct: 'tenter' },
    { original: 'proposer', correct: 'proposer' },
    { original: 'exposition', correct: 'exposition' },
    { original: 'esperer', correct: 'espérer' },
    { original: 'coute', correct: 'coût' },
    { original: 'emporter', correct: 'emporter' },
    { original: 'recommandation', correct: 'recommandation' },
    { original: 'developper', correct: 'développer' },
    { original: 'occasion', correct: 'occasion' },
    { original: 'prestige', correct: 'prestige' },
    { original: 'gout', correct: 'goût' },
    { original: 'original', correct: 'original' },
    { original: 'situation', correct: 'situation' },
    { original: 'approche', correct: 'approche' },
    { original: 'doute', correct: 'doute' },
    { original: 'question', correct: 'question' },
    { original: 'soutenir', correct: 'soutenir' },
    { original: 'plaisir', correct: 'plaisir' },
    { original: 'vitesse', correct: 'vitesse' },
    { original: 'joie', correct: 'joie' },
    { original: 'retour', correct: 'retour' },
    { original: 'resultat', correct: 'résultat' },
    { original: 'bonheur', correct: 'bonheur' },
    { original: 'rever', correct: 'rêver' },
    { original: 'popularite', correct: 'popularité' },
    { original: 'reponse', correct: 'réponse' },
    { original: 'nouveau', correct: 'nouveau' },
    { original: 'utile', correct: 'utile' },
    { original: 'avancer', correct: 'avancer' },
    { original: 'patience', correct: 'patience' },
    { original: 'lumiere', correct: 'lumière' },
    { original: 'soiree', correct: 'soirée' },
    { original: 'determiner', correct: 'déterminer' },
    { original: 'methode', correct: 'méthode' },
    { original: 'actif', correct: 'actif' },
    { original: 'appareil', correct: 'appareil' },
    { original: 'douleur', correct: 'douleur' },
    { original: 'restaurer', correct: 'restaurer' },
    { original: 'comprendre', correct: 'comprendre' },
    { original: 'temps', correct: 'temps' },
    { original: 'plante', correct: 'plante' },
    { original: 'vertu', correct: 'vertu' },
    { original: 'determine', correct: 'déterminé' },
    { original: 'rire', correct: 'rire' },
    { original: 'guider', correct: 'guider' },
    { original: 'tension', correct: 'tension' },
    { original: 'reconnaissance', correct: 'reconnaissance' },
    { original: 'remise', correct: 'remise' },
    { original: 'pouvoir', correct: 'pouvoir' },
    { original: 'avantage', correct: 'avantage' },
    { original: 'connaissance', correct: 'connaissance' },
    { original: 'discret', correct: 'discret' },
        { original: 'cafe', correct: 'café' },
    { original: 'cote', correct: 'côte' },
    { original: 'liberation', correct: 'libération' },
    { original: 'amical', correct: 'amical' },
    { original: 'voix', correct: 'voix' },
    { original: 'faute', correct: 'faute' },
    { original: 'creer', correct: 'créer' },
    { original: 'tache', correct: 'tâche' },
    { original: 'naif', correct: 'naïf' },
    { original: 'resume', correct: 'résumé' },
    { original: 'francais', correct: 'français' },
    { original: 'economie', correct: 'économie' },
    { original: 'oublier', correct: 'oublier' },
    { original: 'confiance', correct: 'confiance' },
    { original: 'parlez', correct: 'parlez' },
    { original: 'vieux', correct: 'vieux' },
    { original: 'longeur', correct: 'longueur' },
    { original: 'planter', correct: 'planter' },
    { original: 'reine', correct: 'reine' },
    { original: 'floraison', correct: 'floraison' },
    { original: 'processus', correct: 'processus' },
    { original: 'frise', correct: 'frise' },
    { original: 'finir', correct: 'finir' },
    { original: 'etudiant', correct: 'étudiant' },
    { original: 'arriere', correct: 'arrière' },
    { original: 'diriger', correct: 'diriger' },
    { original: 'reglement', correct: 'règlement' },
    { original: 'pensee', correct: 'pensée' },
    { original: 'franc', correct: 'franc' },
    { original: 'garcon', correct: 'garçon' },
    { original: 'complement', correct: 'complément' },
    { original: 'onze', correct: 'onze' },
    { original: 'mignon', correct: 'mignon' },
    { original: 'presente', correct: 'présente' },
    { original: 'decision', correct: 'décision' },
    { original: 'vitesse', correct: 'vitesse' },
    { original: 'relache', correct: 'relâche' },
    { original: 'cloche', correct: 'cloche' },
    { original: 'serieux', correct: 'sérieux' },
    { original: 'objet', correct: 'objet' },
    { original: 'batiment', correct: 'bâtiment' },
    { original: 'explication', correct: 'explication' },
    { original: 'reponse', correct: 'réponse' },
    { original: 'sympathie', correct: 'sympathie' },
    { original: 'pied', correct: 'pied' },
    { original: 'intention', correct: 'intention' },
    { original: 'processus', correct: 'processus' },
    { original: 'nager', correct: 'nager' },
    { original: 'manger', correct: 'manger' },
    { original: 'question', correct: 'question' },
    { original: 'combien', correct: 'combien' },
    { original: 'reussir', correct: 'réussir' },
    { original: 'choisir', correct: 'choisir' },
    { original: 'vivre', correct: 'vivre' },
    { original: 'goutte', correct: 'goutte' },
    { original: 'coeur', correct: 'cœur' },
    { original: 'amour', correct: 'amour' },
    { original: 'plaisir', correct: 'plaisir' },
    { original: 'fou', correct: 'fou' },
    { original: 'spirituel', correct: 'spirituel' },
    { original: 'valise', correct: 'valise' },
    { original: 'determine', correct: 'déterminé' },
    { original: 'sourire', correct: 'sourire' },
    { original: 'paris', correct: 'Paris' },
    { original: 'eclair', correct: 'éclair' },
    { original: 'cicatrice', correct: 'cicatrice' },
    { original: 'tortue', correct: 'tortue' },
    { original: 'chercher', correct: 'chercher' },
    { original: 'pensif', correct: 'pensif' },
    { original: 'espace', correct: 'espace' },
    { original: 'mousse', correct: 'mousse' },
    { original: 'culotte', correct: 'culotte' },
    { original: 'mouvement', correct: 'mouvement' },
    { original: 'regret', correct: 'regret' },
    { original: 'trop', correct: 'trop' },
    { original: 'chapeau', correct: 'chapeau' },
    { original: 'lettre', correct: 'lettre' },
    { original: 'choix', correct: 'choix' },
    { original: 'rechercher', correct: 'rechercher' },
    { original: 'accessoire', correct: 'accessoire' },
    { original: 'chercheur', correct: 'chercheur' },
    { original: 'complement', correct: 'complément' },
    { original: 'rire', correct: 'rire' },
    { original: 'reconnaissance', correct: 'reconnaissance' },
    { original: 'vacance', correct: 'vacance' },
    { original: 'profiter', correct: 'profiter' },
    { original: 'dejeuner', correct: 'déjeuner' },
    { original: 'unequal', correct: 'inégal' },
    { original: 'irriter', correct: 'irriter' },
    { original: 'commencer', correct: 'commencer' },
    { original: 'special', correct: 'spécial' },
    { original: 'coincidence', correct: 'coïncidence' },
    { original: 'histoire', correct: 'histoire' }
];


