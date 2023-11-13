<template>
    <div class="w-full lg:h-full">
        <h2 class="pt-8 lg:pt-0 z-0 font-bold text-5xl md:text-6xl ml-5 mr-5 lg:ml-16 lg:mr-16"> Testez vos connaissance: La puberté </h2>

        <p class="text-2xl md:text-3xl mt-10 ml-5 mr-5 lg:ml-16 lg:mr-16">
            Réaliser un quiz sur la puberté pour tester vos connaissances.
        </p>

        <div class="m-auto flex mt-10 ml-5 mr-5 lg:ml-16 lg:mr-16">
            <router-link to="/articles/pub">
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
            question: "Parmi les propositions suivantes, lesquels sont les moyens de contraception les plus sûrs ?",
            answer: [
                "La pilule",
                "Le stérilet",
                "Le retrait",
                "Le préservatif",
            ],
            correct: 3,
            answerText: "Ce sont tous des moyens de contraception mais le retrait et les spermicides sont nettement moins sûrs. Rappel que seul le préservatif protège des IST/MST, mettez en un !",
        },

        {
            type: "multi",
            question: "Si j’ai mes règles, cela signifie quoi ?",
            answer: [
                "Je suis enceinte ",
                "C'est le début d’un cycle menstruelle",
                "Je ne peux plus avoir de rapport.",
                "Je me suis fait mal",
            ],
            correct: 2,
            answerText: "La présence des règles c'est-à-dire de saignements signifie la présence du cycle d’ovulation et donc la possibilité de procréer. Lors de la ménopause pas d’ovulation donc pas de règles.",
        },

        {
            type: "multi",
            question: "Comment savoir si on est prêt.e pour « la première fois » ?",
            answer: [
                "Je me sens en confiance, et j'en ai vraiment envie",
                "Mon.ma partenaire en a vraiment envie",
                "Des copain.es l’ont déjà fait, c’est pas grand chose",
                "Je suis la seule à ne pas l'avoir fait dans mes amis",
            ],
            correct: 1,
            answerText: "On est réellement prêt.e seulement quand on le sent, personne d’autre ne peut le savoir pour vous.",
        },


        {
            type: "multi",
            question: "L’éjaculation précoce est une maladie ?",
            answer: [
                "Vrai",
                "Faux",
                "Je ne sais pas",
                "Les deux",
            ],
            correct: 2,
            answerText: "Cela concerne tout le monde même si les femmes sont les plus concernées.",
        },

    
        {
            type: "multi",
            question: "On peut tomber enceinte pendant les règles. Vrai ou faux ?",
            answer: [
                "Vrai",
                "Faux",
                "Je ne sais pas",
                "Les deux",
            ],
            correct: 1,
            answerText: "Cela concerne tout le monde même si les femmes sont les plus concernées.",
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