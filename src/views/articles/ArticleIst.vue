<template>
    <h2 class="font-bold text-5xl md:text-6xl"> <span class="color-accent-2">Infections</span> : symptômes, dépistage, transmission, conséquences </h2>
    
    <h3 class="mt-10 font-medium text-4xl md:text-5xl"> Le VIH, c'est quoi ? </h3>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        Le virus de l'immunodéficience humaine est un virus qui <b>s'attaque aux défenses immunitaires</b>, et, s'il n'est pas 
        traité à temps, déclenche le syndrome d'immunodéficience acquise ( SIDA ), pathologie qui détruit le système immunitaire du sujet touché.
        <br /><br /> 
        Cette maladie ne tue pas en elle-même, mais rend des maladies « anodines » difficiles à traiter et dangereuses, pouvant entraîner la mort 
        car le corps n'est plus en mesure de se défendre.
    </p>

    <h3 class="mt-10 font-medium text-4xl md:text-5xl"> Comment se transmet-il ? </h3>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        Comment se transmet-il ? Le VIH ne se transmet PAS par des gestes comme la bise, la poignée de main, ni par voie aérienne. Il est contenu 
        dans les fluides corporels : sang, lait maternel, sécrétions séminales.
        <br /><br />
        <b>Les personnes séropositives souffrent de discrimination</b>, d'abord à caractère homophobe car le SIDA a fait des ravages dans la communauté 
        homosexuelle masculine au moment de la crise sanitaire du VIH. 
        <br /><br />
        <b>Toucher une personne atteinte du VIH ne transmet absolument pas le SIDA !</b>
        <br /><br />
        Des personnes séropositives traitées ne peuvent d'ailleurs pas du tout transmettre le virus, même lors de rapports sexuels. Le préservatif 
        reste la meilleure option pour s'en prémunir si l'on n'est pas testé.e.
        <br /><br />
        <b>Le dépistage du VIH est répandu, accessible et nécessaire</b> pour une sexualité sereine.
    </p>

    <h3 class="mt-10 font-medium text-4xl md:text-5xl"> Hépatites A, B et C </h3>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        Les <b>hépatites A, B et C</b> sont une <b>inflammation du foie</b> et sont causées par une infection virale. 
        <br /><br />
        L'hépatite B est le type le plus fréquent et le plus mortel d'hépatite virale. Il est extrêmement contagieux et se transmet lors de rapports 
        sexuels non protégés. Le principal risque lié à l'hépatite est qu'elle devienne chronique, mais elle peut favoriser le développement de 
        cirrhoses et de cancers du foie.
    </p>

    <h3 class="mt-10 font-medium text-4xl md:text-5xl"> Les papillomavirus </h3>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        Les papillomavirus sont des virus très communs dont il existe plus de 150 types. Ces virus provoquent des lésions cutanées pouvant 
        être bénignes ( inoffensives ) ou malignes ( agressives ) et peuvent être à l'origine de verrues et favoriser le <b>développement de 
        cancers</b> dans certains cas ( cancers de la peau, du col de l'utérus ).
    </p>

    <h3 class="mt-10 font-medium text-4xl md:text-5xl"> La syphilis </h3>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        La syphilis, ou vérole, est une maladie vénérienne pouvant dégénérer en formes graves si non traitée, mais qui trouve un adversaire 
        efficace dans les antibiotiques.
    </p>

    <h3 class="mt-10 font-medium text-4xl md:text-5xl"> Les chlamydioses </h3>

    <p class="flex-1 mt-10 text-2xl md:text-3xl">
        Les chlamydioses sont une cause majeure <b>d'infertilité féminine</b>. Infection induite par chlamydies, la chlamydiose est fréquente chez 
        les femmes de moins de 25 ans. Chez l'homme, les complications peuvent être une inflammation de la prostate ou des testicules.
    </p>

    <div class="m-auto flex mt-16">
        <router-link to="/games/ist">
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