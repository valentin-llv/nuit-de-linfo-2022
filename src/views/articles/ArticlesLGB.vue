<template>
    <h2 class="font-bold text-5xl md:text-6xl"> <span class="color-accent-2">LGBTQIA+</span>&nbsp;&nbsp;: quésaco ? </h2>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        Mais, LGBTQIA+, qu'est-ce que ça veut dire ? Chaque lettre correspond à une partie de la communauté : L pour Lesbiennes 
        ( personnes non-hommes aimant d'autres personnes non-hommes )
        <br /><br />
        G pour Gay ( personnes non-femmes aimant d'autres personnes non-femmes )
        <br /><br />
        B pour Bisexuel.le.s ( personnes aimant des personnes de plusieurs genres différents, et pouvant préférer certains genres à d'autres )
        <br /><br />
        T pour Transgenres ( personnes non-cisgenres, donc qui ne se reconnaissent pas dans le genre affilié à leur sexe biologique 
        ( la transidentité est un spectre, les personnes trans peuvent être binaires ou non-binaires ))
        <br /><br />
        Q pour Queer ( terme désignant l'ensemble des personnes en-dehors des cadres de l'hétérosexualité et de la cisidentité )
        <br /><br />
        I pour Intersexes ( personnes nées avec des caractéristiques physiques des deux sexes féminin et masculin, à différents degrés de mélange )
        <br /><br />
        A pour Aro-Ace ( Aromantiques : personnes ne ressentant pas d'attirance romantique, Asexuel.le.s : personnes ne ressentant pas d'attirance 
        sexuelle et / ou de plaisir lors de rapports sexuels ) et Agenres ( personnes ne se reconnaissant dans aucune identité marquée de genre 
        ( pas des filles, pas des garçons, pas entre les deux, pas autre chose )
        <br /><br />
        Toutes ces orientations et identités sont évidemment valides et ne peuvent être remises en cause ou occasionner de discriminations.
        L'orientation sexuelle est une expérience intime et unique. Comme le genre, l'orientation sexuelle est un spectre, il en existe une 
        infinité, toutes sont valides et les étiquettes ne sont pas obligatoires. 
        <br /><br />
        L'émancipation sexuelle est au centre de la question LGBTQIA+. Les relations homosexuelles sont historiquement source de questionnements et 
        de discriminations, avec une reproduction forte des préjugés sexistes. La fétichisation des relations lesbiennes et la stigmatisation 
        des relations gay sont le reflet des rôles de genre attribués par la société.
        <br /><br />
        Il est important, pour comprendre la transidentité, de différencier le sexe biologique, l'identité de genre et l'expression de genre.
        L'identité de genre n'est en rien liée au sexe biologique. Le vécu individuel prime sur les aspects physiques extérieurs. L'expression de genre est l'ensemble des caractéristiques genrées exprimées à travers les vêtements, le langage corporel, du maquillage, des coiffures... bien que ces caractéristiques ne soient idéalement pas genrées, dans les faits la société les rattache fortement à un genre en particulier, et l'expression de genre n'est liée ni au sexe biologique, ni à l'identité de genre. Un homme transgenre ( né dans un corps féminin ) peut tout à fait avoir une expression de genre féminine et rester un homme malgré tout. Les caractéristiques physiques, choisies ou non, ne définissent absolument pas le vécu du genre par une personne.
        Quid des pronoms ?
        <br /><br />
        Vous avez probablement remarqué l'émergence de pronoms innovants ( appelés néopronoms et xenopronoms ). Le plus connu est « iel » et 
        fait régulièrement l'objet de polémiques, mais ces pronoms sont valides et légitimes et expriment la volonté profonde de la personne, 
        transgenre ou non. Il est essentiel de les respecter, pour le bien-être de chacun.e.
        <br /><br />
        « deadname » : le deadname est le nom de naissance d'une personne ( souvent transgenre ) qui s'est choisi un prénom qui lui correspond 
        au cours de sa vie. L'usage de ce nom est à proscrire, et il est particulièrement malvenu de le demander à quelqu'un.
        <br /><br />
        L'intersexuation est, comme dit plus haut, le fait de naître avec des caractéristiques physiques des deux sexes, ou leur développement à 
        la puberté. L'enjeu des luttes des personnes intersexes est d'ordre sanitaire, car ces personnes sont victimes de violences médicales 
        quasi-systématiques, avec des opérations lourdes pratiquées sur des bébés incapables de consentir dans le but de les faire correspondre 
        aux normes de la société. 
        <br /><br />
        Le terme « hermaphrodite » initialement très répandu est à connotation négative et est considéré comme une insulte 
        par la communauté intersexe. Par conséquent, il est à proscrire.
        <br /><br />
        La représentation est un enjeu central de la cause LGBTQIA+, car le manque de cette représentation entraîne la méconnaissance et le mépris 
        de ces identités, ce qui alimente les discriminations.
    </p>

    <div class="m-auto flex mt-16">
        <router-link to="/games/lgb">
            <div class="mb-6 rounded-full duration-100 hover:scale-105 p-7 flex flex-row bg-accent-2">
                <p class="text-2xl md:text-3xl color-100-fix"> Tester vos connaissances </p>
                <ArrowRight class="m-auto ml-5 h-8 w-8" />
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
    import ArrowRight from '@/icons/ArrowRight.vue';
</script>

<style scoped>

</style>