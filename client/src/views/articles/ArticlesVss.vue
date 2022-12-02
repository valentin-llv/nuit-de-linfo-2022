<template>
    <h2 class="font-bold text-5xl md:text-6xl"> <span class="color-accent-2">Les violences</span> sexistes et sexuelles&nbsp;: tou.te.s touché.e.s, s'éduquer pour les prévenir. </h2>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        Les <b>violences sexistes et sexuelles</b> sont nombreuses et découlent souvent du manque d'éducation sexuelle et sur l'égalité homme / femme.
        <br /><br />
        La <b>notion de consentement</b> est extrêmement importante et souvent sous-estimée ou mal évaluée dans les rapports humains ( et pas
        uniquement sexuels ). Le corps d'autrui est soumis aux lois de son propriétaire et doit être respecté. 
        <br /><br />
        <b>Chacun.e est libre de fixer ses propres limites, et de les modifier à sa guise</b>. De par leur vécu, leur éducation, leur religion, etc, certaines 
        personnes ont plus ou moins d'aisance dans les relations interhumaines. 
        <br /><br />
        Respecter la volonté de l'autre est obligatoire, et particulièrement dans le cadre des relations sexuelles.
        Une règle d'or, qu'on ne répétera jamais assez : <b>si ce n'est pas « oui », c'est non</b>.
        <br /><br />
        Victimes d'atteintes sexuelles, vous n'êtes <b>jamais coupables</b>. Peu importe le comportement que vous avez pu adopter 
        face à l'autre, le non-respect de votre consentement est inacceptable. 
        <br /><br />
        De même, votre comportement après l'atteinte est légitime. Que vous choisissiez de porter plainte ou non, que vous souhaitiez vous 
        confier ou que le choc soit trop grand pour que vous vous sentiez prêt.e à en parler dans l'immédiat, cela ne 
        regarde que vous, vous avez vos raisons et <b>il n'y a pas de « bonne façon » d'être victime</b>.
    </p>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        <b>La question de la contraception et de la protection face aux IST</b> concerne chaque acteur.ice d'un rapport sexuel. Elle est trop souvent 
        considérée comme une affaire de femmes, et cette attente place une pression psychologique et financière supplémentaire sur les femmes.
        <br /><br />
        La sexualité est un nid d'idées reçues sexistes, les hommes subissant <b>la pression de la performance</b> tandis que les femmes sont 
        régulièrement <b>victimes de « slutshaming »</b>, le désir et le plaisir féminins régulièrement niés et la vie sexuelle des femmes commentée et 
        jugée par tou.te.s. 
        <br /><br />
        Le mépris des « préliminaires » participe également à la violence dans les rapports sexuels, niant l'importance de cette 
        étape des rapports impliquant une pénétration, pouvant rendre celle-ci douloureuse et traumatisante. De même, <b>cela induit l'idée que les rapports 
        sans pénétration « ne comptent pas »</b>, invisibilisant la sexualité lesbienne et les rapports sans pénétration.
    </p>

    <div class="m-auto flex mt-16">
        <router-link to="/games/vss">
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