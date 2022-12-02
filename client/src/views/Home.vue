<template>
    <div class="absolute overflow-auto overflow-x-hidden w-full h-full">
        <TopMenu />
        <MobileMenu />

        <!-- Intro section start -->
        <div class="flex flex-col lg:flex-row mt-24 md:mt-32 home-block-height">
            <div class="flex-1 flex w-full">
                <div class="m-auto max-h-[400px] lg:max-h-[500px] h-full w-full">
                    <div class="relative flex lg:block h-full w-full home-box-easter-egg">
                        <div class="m-auto relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:h-full lg:w-full lg:duration-300">
                            <HomeIllu class="w-full lg:h-full" />
                        </div>

                        <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 h-full w-full duration-300">
                            <HomeIlluNude class="w-full lg:h-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1 grid place-items-center">
                <div class="pl-10 pr-10 lg:p-12 box-border">
                    <h2 class="mt-10 lg:mt-0 z-0 font-bold text-5xl md:text-6xl"><span class="color-accent-2">Questions</span>Q&nbsp;: pour&nbsp;qui&nbsp;? pourquoi&nbsp;?</h2>

                    <p class="text-2xl md:text-3xl mt-8 md:mt-14 max-w-7xl">
                        QuestionsQ, c'est un site d'information à destination de tou.te.s celle.ux qui souhaitent devenir acteur.ice.s 
                        de leur sexualité.
                    </p>

                    <p class="text-2xl md:text-3xl mt-8 md:mt-14 max-w-7xl">
                        Partant du principe que la connaissance est la base d'une sexualité épanouissante, sûre et 
                        saine, QuestionQ regroupe informations, contacts, réponses aux questions courantes, témoignages, destruction 
                        sourcée des idées reçues pour éviter les moments de gêne, les dangers et les angoisses pour mieux profiter, tout simplement.
                    </p>

                    <div class="mt-20 flex flex-row flex-wrap">
                        <div @click=scrollToSec1>
                            <div class="mb-6 bg-accent-1 rounded-full duration-100 hover:scale-105 p-7 flex flex-row">
                                <p class="text-2xl md:text-3xl color-100-fix">Commencer à apprendre&nbsp;!</p>
                                <ArrowRight class="m-auto ml-5 h-8 w-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Intro section end -->

        <!-- Section 1 start -->
        <div ref="sectionIllu1" class="w-full flex flex-col lg:flex-row mt-20 lg:mt-0">
            <SectionBlock 
                title="Quiz sur les Infections Sexuellement Transmisibles (IST)"
                content="Réaliser un quiz sur les IST (Infections Sexuellement Transmisibles) pour tester vos connaissances."
                buttonText="Faire un quiz&nbsp;!"
                link="/games/ist"
                bgClass="bg-accent-3"
                buttonClass="bg-accent-4"
                :icon=SectionIllu1
            />

            <SectionBlock 
                title="Infections : symptômes, dépistage, transmission, conséquences."
                content="Un guide indispensable pour connaître les Infections Sexuellement Transmissibles, et s'en prémunir sans tomber dans la paranoïa. Savoir vers qui se tourner, quand se faire tester, comment les éviter, comment se soigner."
                buttonText="Commencer à apprendre&nbsp;!"
                link="/articles/ist"
                bgClass="bg-accent-4"
                buttonClass="bg-accent-3"
                :icon=SectionIllu2
            />
        </div>
        <!-- Section 1 end -->

        <FeedbackBlock :icon=Feedback1 name="Adrien" age="19" content="Lors de mon premier dépistage, j'apprehendais, mais les professionels de santés ont su me à l'aise et en confiance.Ils m'ont décrits les étapes que j'allais devoir effectuer, simplement uriner dans un pot ainsi que la prise d'une goutte de sang pour le VIH." />

        <!-- Section 2 start -->
        <div class="w-full flex flex-col lg:flex-row">
            <SectionBlock 
                title="Réaliser un quiz sur les VSS (Violences sexistes et sexuelles) pour tester vos connaissances."
                content="Souvent plus insidieuses qu'on pourrait l'imaginer, les violences sexistes et sexuelles touchent l'ensemble de la population et sont souvent liées à un manque de connaissances. S'éduquer, c'est apprendre à ne pas les reproduire et à les reconnaître pour lutter contre elles."
                buttonText="Commencer à apprendre&nbsp;!"
                link="/games/vss"
                bgClass="bg-accent-2"
                buttonClass="bg-accent-1"
                :icon=SectionIllu1
            />

            <SectionBlock 
                title="Les violences sexistes et sexuelles : tou.te.s touché.e.s, s'éduquer pour les prévenir."
                content="Souvent plus insidieuses qu'on pourrait l'imaginer, les violences sexistes et sexuelles touchent l'ensemble de la population et sont souvent liées à un manque de connaissances. S'éduquer, c'est apprendre à ne pas les reproduire et à les reconnaître pour lutter contre elles."
                buttonText="Commencer à apprendre&nbsp;!"
                link="/articles/vss"
                bgClass="bg-accent-1"
                buttonClass="bg-accent-2"
                :icon=SectionIllu2
            />
        </div>
        <!-- Section 2 end -->

        <FeedbackBlock :icon=Feedback2 name="Noémie" age="22" content="Si je devais compter le nombre de fois où j’ai eu peur dans la rue, les fois où j’ai souri lorsqu’on a exigé de moi cette mimique de soumission, ou encore ces innombrables fois où j’ai eu honte de mon corps à cause de toutes les injonctions qui pèsent sur lui ..." />

        <!-- Section 2 start -->
        <div class="w-full flex flex-col lg:flex-row">
            <SectionBlock 
                title="Tester vos connaissance sur la puberté !"
                content="La puberté est souvent méconnue des jeunes mais aussi par leurs parents. Effectuer ce quiz pour évaluer votre niveau de connaissance."
                buttonText="Commencer à apprendre&nbsp;!"
                link="/games/pub"
                bgClass="bg-accent-3"
                buttonClass="bg-accent-4"
                :icon=SectionIllu1
            />

            <SectionBlock 
                title="Adolescence : mon corps change, que faire&nbsp;?"
                content="On l'a dit et redit, mais à raison : la puberté est la période de tous les bouleversements. Le corps évolue parfois ( souvent ) brutalement, des désirs naissent qui peuvent désorienter, l'envie de nouvelles expériences. Cependant, il n'y a pas à en avoir peur, cette transition vers l'état d'adulte est normale et nécessaire et peut s'appréhender avec sérénité grâce à un peu d'apprentissage. Et ça tombe bien, les infos importantes sont compilées dans cet article !"
                buttonText="Commencer à apprendre&nbsp;!"
                link="/articles/pub"
                bgClass="bg-accent-4"
                buttonClass="bg-accent-3"
                :icon=SectionIllu2
            />
        </div>

        <WebsiteFooter />
    </div>
</template>

<script setup lang="ts">
    import WebsiteFooter from '@/components/WebsiteFooter.vue';
    import TopMenu from '@/components/top-menu/TopMenu.vue';
    import FeedbackBlock from '@/components/home/FeedbackBlock.vue';
    import MobileMenu from '@/components/top-menu/MobileMenu.vue';
    import HomeIllu from '@/icons/HomeIllu.vue';
    import HomeIlluNude from '@/icons/HomeIlluNude.vue';
    import SectionIllu1 from '@/icons/SectionIllu1.vue';
    import SectionIllu2 from '@/icons/SectionIllu2.vue';
    import Feedback1 from '@/icons/Feedback1.vue';
    import Feedback2 from '@/icons/Feedback2.vue';
    import { ref } from 'vue';
    import ArrowRight from '@/icons/ArrowRight.vue';
    import SectionBlock from '@/components/home/SectionBlock.vue';
    
    const sectionIllu1 = ref();

    function scrollToSec1() {
        sectionIllu1.value.scrollIntoView();
    }
</script>

<style scoped>
    @media screen and (min-width: 1024px) { 
        .home-block-height {
            height: calc(100% - 90px);
        }

        .home-box-easter-egg div:nth-child(1) {
            opacity: 1;
        }

        .home-box-easter-egg div:nth-child(1):hover {
            opacity: 0;
        }

        .home-box-easter-egg div:nth-child(2) {
            opacity: 0;
        }

        .home-box-easter-egg div:nth-child(2):hover {
            opacity: 1;
        }
    }
</style>