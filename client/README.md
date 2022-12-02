# Nuit de l'infos 2022

## Présentation

Pour cette nuit 2022 nous avons réalisé un site internet "gamifié".

Le site se découpe en deux grandes parties:
_ les quizs
_ les articles

Nous avons pris le parti de faire des quizs pour les utilisateurs qui ne sont pas très informés sur les sujets de la sexualité afin qu'ils puissent découvrir les points clé des sujets tout en profitant d'une expérience de type jeu.
La partie quiz permet aussi de retenir un public peu attentif et dont il est difficile de capter l'attention.

La deuxième partie permet en revanche de plus approfondir chaque sujet. Les personnes qui connaissent déjà les bases peuvent approfondir leurs conaissances grâce aux articles.
Les articles permettent d'attirer aussi un public un peu informé mais qui souhaite approfondir ses connaissances.

Nous avons créé quatre grandes parties pour les sujets:
_ les ISTs
_ les VSS
_ la puberté
_ LGBTQIA+

## Technologies

Nous avons décidé d'utiliser Vuejs pour la partie front-end. Cela nous a permis de grandement faciliter la création des quizs.
Vuejs est accompagné de Pinia et VueRouter pour la gestion des "stores" globaux et les différentes routes.

Pour les CSS nous avons utilisé TailwindCSS.

## Défis ECO-INDEX

Nous avons optimisé le code et les ressources pour réduire au maximum l'empreinte carbone du site.

Voici la liste de actions que nous avons optimisées:
_ utilisation d'image vectorielle SVG
_ optimisation du nombre de balises HTML et CSS dans la limite du possible
_ proposition d'un mode sombre
_ site internet sous forme de SPA
_ utilisation des pwa et du cache (voir ci-dessous)

Toutes ces optimisations ont porté leurs fruits. Le site atteint un score de 100/100 en performance sur Lighthouse de Google.

### SPA

Ce site est une SPA (Single Page APP). C'est à a dire que toute les données sont chargées lors du premier chargement de page.
Une SPA permet plusieurs avantages:
_ les chagement de pages sont instatené. En effet toute les données sont déjà chargé il n'y à donc pas de ressources à charger à nouveaux
_ il est plus facile d'applique une politique de cache performante (voir PWA)

L'inconvéniens majeur et que le premier chargement est légèrement plus long que pour un site non-SPA et la quantité de données chargé lors du premier chargement et un peu plus importante.

Pour autant, étant données qu'aucune données n'est à nouveau chargé lors de la visite du site, l'empreinte carbone globale de la visite de l'utilisateur est moindre par rapport à une non-SPA.

En effet sur un site non-SPA l'entête de page ainsi que le bas de page sont chargés a chaque changement de page. La somme total des données consommé pour une session d'une utilisateurs et plus importante qu'une SPA.

C'est pour cela que nous avons opté pour un site en SPA.

### PWA

Nous avons utilisé les fonctionnalitées de cache du naviguateur pour limiter les chargements inutiles des ressources.
En effet lors de la première visite du site par l'utilisateur, tous les fichiers du site sont mis en cache. Ainsi si lorsque l'utilisateur revient sur le site (ou s'il recharge la page) les ressources ne sont pas retéléchargées mais simplement récupérées depuis le cache.

Avec cette méthode plus de chargement inutile de ressources !

## Hébergement

Dans la continuité de l'optimisation de l'empreinte carbone, le site est auto-hébergé sur un serveur fonctionnant avec des energies renouvelables.
Le serveur est un Raspberry Pi 4, configuré avec Apache2 comme serveur web.

Nous avons par contre décidé de ne pas acheter un domaine pour le projet, nous avons donc enregistré le site comme un sous-domaine d'un domaine existant.
L'url de notre site: [https://questionsq.valentin-lelievre.com](https://questionsq.valentin-lelievre.com)

## Bonne pratique

Le site répond aux critères de base de l'accessibilité. Les contrastes des textes sont suffisants, il n'y a pas trop d'éléments présents dans le champ de vision de l'utilisateur, le site est responsive et fonctionne donc sur téléphone, tablette et ordinateur.

## Github

Lien du repo Github: https://github.com/valentin-llv/NuitDeLinfos2022/tree/master/client

## Réalisation

Ce projet a été réalisé par:
_ Valentin Le Lièvre
_ Basile Hallouin
_ Adrien Gasquet
_ Benjamin Lamon
_ Amandine Langlais
_ Nicolas Alluchon
_ Alix Léron