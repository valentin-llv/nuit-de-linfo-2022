<template>
    <div class="w-full lg:h-full">
        <h2 class="pt-8 lg:pt-0 z-0 font-bold text-5xl md:text-6xl ml-5 mr-5 lg:ml-16 lg:mr-16"> Testez vos connaissance: Les ISTs </h2>

        <p class="text-2xl md:text-3xl mt-10 ml-5 mr-5 lg:ml-16 lg:mr-16">
            Réaliser un quiz sur les IST (Infections Sexuellement Transmisibles) pour tester vos connaissances.
        </p>

        <div class="m-auto flex mt-10 ml-5 mr-5 lg:ml-16 lg:mr-16">
            <router-link to="/articles/ist">
                <div class="mb-6 rounded-full duration-100 hover:scale-105 p-7 flex flex-row bg-accent-2">
                    <p class="text-2xl md:text-3xl color-100-fix"> Lire l'article </p>
                    <ArrowRight class="m-auto ml-5 h-8 w-8" />
                </div>
            </router-link>
        </div>

        <div class="border-4 border-100 rounded-[20px] lg:rounded-[35px] mt-10 lg:mt-16 p-6 lg:p-8 ml-5 mr-5 lg:w-[970px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 overflow-hidden">
            <div class="relative h-[570px]">
                <div class="absolute h-fit w-full">
                    <transition name="slide">
                        <div v-if=dispayMulti>
                            <div class="flex flex-row">
                                <p class="flex-1 text-center text-3xl md:text-4xl font-medium mr-10">
                                    {{ questions[currentQuestion].question }}
                                </p>

                                <p class="text-2xl md:text-3xl"> {{ currentQuestion + 1 }}/{{ questions.length }} </p>
                            </div>

                            <div class="flex flex-col gap-8 mt-10 w-4/6 m-auto">
                                <RadioButton :class="{ 'bg-accent-2': (selected == 1 && !questionnedSaved), 'bg-red-500': (succes == false && selected == 1), 'bg-green-500': (succes == true && selected == 1) }" @message=childClicked :text=questions[currentQuestion].answer[0] radioIndex=1 />
                                <RadioButton :class="{ 'bg-accent-2': (selected == 2 && !questionnedSaved), 'bg-red-500': (succes == false && selected == 2), 'bg-green-500': (succes == true && selected == 2) }" @message=childClicked :text=questions[currentQuestion].answer[1] radioIndex=2 />
                                <RadioButton :class="{ 'bg-accent-2': (selected == 3 && !questionnedSaved), 'bg-red-500': (succes == false && selected == 3), 'bg-green-500': (succes == true && selected == 3) }" @message=childClicked :text=questions[currentQuestion].answer[2] radioIndex=3 />
                                <RadioButton :class="{ 'bg-accent-2': (selected == 4 && !questionnedSaved), 'bg-red-500': (succes == false && selected == 4), 'bg-green-500': (succes == true && selected == 4) }" @message=childClicked :text=questions[currentQuestion].answer[3] radioIndex=4 />
                            </div>

                            <div class="flex">
                                <div @click=sendAnswer class="pl-20 pr-20 m-auto bg-accent-2 rounded-full duration-100 hover:scale-105 p-7 mt-10">
                                    <p class="text-2xl md:text-3xl color-100-fix"> Valider </p>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="absolute w-full">
                    <transition name="slide">
                        <div v-if=displayAnswer>
                            <p class="text-3xl md:text-4xl font-medium">
                                Explication de la réponse
                            </p>

                            <p class="text-2xl md:text-3xl mt-10">
                                {{ questions[currentQuestion].answerText }}
                            </p>

                            <div class="flex">
                                <div @click=nextQuestion class="m-auto bg-accent-2 rounded-full duration-100 hover:scale-105 p-7 mt-10">
                                    <p class="text-2xl md:text-3xl color-100-fix"> Question suivante </p>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="absolute w-full">
                    <transition name="slide">
                        <div v-if=ended>
                            <p class="text-center text-4xl md:text-5xl font-medium">
                                Résultat
                            </p>

                            <div class="w-full flex justify-center mt-28">
                                <p class="text-3xl md:text-4xl m-auto">
                                    <span class="text-7xl">{{ Math.round(points * 100 / questions.length) }}%</span> de bonne réponse
                                </p>
                            </div>

                            <div v-if="((points * 100 / questions.length) >= 50)" class="w-full flex justify-center mt-28 pl-10 pr-10">
                                <p class="text-3xl md:text-4xl m-auto text-justify">
                                    Bravo, tu es presque incollable ! On n'est jamais trop renseigné.e, continue dans cette voie !
                                </p>
                            </div>

                            <div v-if="((points * 100 / questions.length) < 50)" class="w-full flex justify-center mt-28 pl-10 pr-10">
                                <p class="text-3xl md:text-4xl m-auto text-justify">
                                    Tu as encore à apprendre, la connaissance est la clé de l'épanouissement, n'hésite pas à lire notre article sur le sujet et à te renseigner sans modération.
                                </p>
                            </div>

                            <div class="flex mt-5">
                                <div @click=restart class="m-auto bg-accent-2 rounded-full duration-100 hover:scale-105 p-7 mt-10">
                                    <p class="text-2xl md:text-3xl color-100-fix"> Recommencer </p>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import RadioButton from './RadioButton.vue';
    import ArrowRight from '@/icons/ArrowRight.vue';

    const dispayMulti = ref(true);
    const displayAnswer = ref(false);

    const questionnedSaved = ref(false);
    const succes = ref(false);

    const ended = ref(false);

    const questions = ref([
        {
            type: "multi",
            question: "Parmi les propositions suivantes, laquelle ne transmet pas le VIH ?",
            answer: [
                "Par la salive",
                "Par relation sexuelle",
                "Par transmission génétique",
                "Par voie sanguine",
            ],
            correct: 1,
            answerText: "Le VIH est un virus admissible par le sang, le lait maternel et les sécrétions sexuelles. Une mère enceinte peut le transmettre à son enfant.",
        },


        {
            type: "multi",
            question : "Quelle est le seul moyen de contraception pour éviter une IST ?",
            answer : [
                "Le retrait",
                "La.e partenaire prends la pilule",
                "Le stérilet",
                "Le préservatif",
            ],
            correct: 4,
            answerText: "Le préservatif masculin ou féminin est la seule manière d’empêcher la transmission d’une IST lors d’un rapport.",
        },

        {
            type: "multi",
            question: "Le sida est-il une maladie ?",
            answer: [
                "Vrai",
                "Faux",
                "Je ne sais pas",
                "Les deux",
            ],
            correct: 2,
            answerText: "Le Sida est  un stade de la maladie du VIH (Le dernier) qui attaque le système immunitaire qui l'empêche de fonctionner correctement.",
        },

        {
            type: "multi",
            question: "Lors d’une fellation ou d’un cunnilingus je peux contracter une IST ?",
            answer: [
                "Vrai",
                "Faux",
                "Je ne sais pas",
                "Les deux",
            ],
            correct: 4,
            answerText: "La personne qui reçoit une fellation ou un cunnilingus ne peut pas reçevoir le VIH, mais pour la personne qui l’effectue il y a un risque ( syphilis par exemple ) l’usage d’un préservatif réduit drastiquement les risques de transmissions",
        },

        {
            type: "multi",
            question: "Combien de personnes vivaient avec le VIH ( en 2018 ) ?",
            answer: [
                "Moins de 10 Millions",
                "20 Millions",
                "38 Millions ",
                "plus de 50 Millions",
            ],
            correct: 3,
            answerText: "Le VIH s’est beaucoup propagé dans les années 80 et atteint 38 Millions de séropositifs en 2018. On compterait même 50 000 français qui ne savent pas qu’ils sont séropositifs. Il existe plusieurs traitements et c’est aujourd’hui bien plus facile de vivre avec.",
        },
    ]);

    const currentQuestion = ref(0);
    const points = ref(0);

    function sendAnswer() {
        if(questionnedSaved.value) {
            dispayMulti.value = false;
            displayAnswer.value = true;

            questionnedSaved.value = false;
        } else {
            questionnedSaved.value = true;

            if(selected.value == questions.value[currentQuestion.value].correct) {
                points.value += 1;
                succes.value = true;
            } else succes.value = false;
        }
    }

    function nextQuestion() {
        if(currentQuestion.value == questions.value.length - 1) {
            ended.value = true;
        } else {
            currentQuestion.value += 1;
            dispayMulti.value = true;
        }

        selected.value = 1;
        displayAnswer.value = false; 
    }

    function restart() {
        dispayMulti.value = true;
        displayAnswer.value = false;
        questionnedSaved.value = false;
        succes.value = false;
        ended.value = false;

        selected.value = 1;
        currentQuestion.value = 0;
        points.value = 0;
    }

    const selected = ref(1);
    function childClicked(value: String) {
        selected.value = +value;
    }
</script>

<style scoped>
    .slide-enter-active, .slide-leave-active {
        transition: 1s;
    }

    .slide-leave-from {
        margin-left: 0%;
        width: 100%;
    }

    .slide-leave-to {
        margin-left: -100%;
        width: 100%;
    }

    .slide-enter-from {
        margin-left: 100%;
        width: 100%;
    }

    .slide-enter-to {
        margin-left: 0%;
        width: 100%;
    }
</style>